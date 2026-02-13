// MemoBrain - Popup 交互逻辑

const DOM = {
  newMemory: document.getElementById('newMemory'),
  newTags: document.getElementById('newTags'),
  addBtn: document.getElementById('addBtn'),
  searchInput: document.getElementById('searchInput'),
  memoryList: document.getElementById('memoryList'),
  memoryCount: document.getElementById('memoryCount'),
  emptyState: document.getElementById('emptyState'),
  injectAllBtn: document.getElementById('injectAllBtn')
}

let allMemories = []

// === 初始化 ===
document.addEventListener('DOMContentLoaded', async () => {
  await loadMemories()
  setupListeners()
})

// === 加载记忆 ===
async function loadMemories() {
  allMemories = await chrome.runtime.sendMessage({ type: 'GET_MEMORIES' })
  renderMemories(allMemories)
}

// === 渲染记忆列表 ===
function renderMemories(memories) {
  DOM.memoryCount.textContent = `${allMemories.length} 条记忆`
  DOM.injectAllBtn.disabled = allMemories.length === 0

  if (memories.length === 0) {
    DOM.emptyState.style.display = 'block'
    // 清除非 emptyState 的元素
    Array.from(DOM.memoryList.children).forEach(child => {
      if (child !== DOM.emptyState) child.remove()
    })
    return
  }

  DOM.emptyState.style.display = 'none'

  // 清空列表（保留 emptyState）
  Array.from(DOM.memoryList.children).forEach(child => {
    if (child !== DOM.emptyState) child.remove()
  })

  memories.forEach(memory => {
    const item = createMemoryElement(memory)
    DOM.memoryList.appendChild(item)
  })
}

// === 创建记忆元素 ===
function createMemoryElement(memory) {
  const div = document.createElement('div')
  div.className = 'memory-item'
  div.dataset.id = memory.id

  const tagsHtml = (memory.tags || [])
    .map(t => `<span class="tag">${escapeHtml(t)}</span>`)
    .join('')

  div.innerHTML = `
    <div class="memory-content">${escapeHtml(memory.content)}</div>
    <div class="memory-meta">
      <div class="memory-tags">${tagsHtml}</div>
      <div class="memory-actions">
        <button class="btn-icon btn-delete" title="删除">🗑</button>
      </div>
    </div>
  `

  // 删除按钮
  div.querySelector('.btn-delete').addEventListener('click', async (e) => {
    e.stopPropagation()
    await chrome.runtime.sendMessage({ type: 'DELETE_MEMORY', id: memory.id })
    await loadMemories()
  })

  return div
}

// === 事件监听 ===
function setupListeners() {
  // 添加记忆
  DOM.addBtn.addEventListener('click', addMemory)
  DOM.newMemory.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      addMemory()
    }
  })

  // 搜索
  DOM.searchInput.addEventListener('input', debounce(handleSearch, 200))

  // 注入全部
  DOM.injectAllBtn.addEventListener('click', handleInjectAll)
}

// === 添加记忆 ===
async function addMemory() {
  const content = DOM.newMemory.value.trim()
  if (!content) return

  const tags = DOM.newTags.value.trim()
    .split(/\s+/)
    .filter(t => t.length > 0)

  const memory = {
    content,
    tags,
    source: 'manual'
  }

  await chrome.runtime.sendMessage({ type: 'ADD_MEMORY', memory })
  DOM.newMemory.value = ''
  DOM.newTags.value = ''
  await loadMemories()
}

// === 搜索 ===
async function handleSearch() {
  const query = DOM.searchInput.value.trim()
  if (!query) {
    renderMemories(allMemories)
    return
  }
  const results = await chrome.runtime.sendMessage({ type: 'SEARCH_MEMORIES', query })
  renderMemories(results)
}

// === 注入全部记忆 ===
async function handleInjectAll() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (!tab) return

  const text = await chrome.runtime.sendMessage({ type: 'GET_INJECT_TEXT' })
  if (!text) return

  try {
    await chrome.tabs.sendMessage(tab.id, {
      type: 'INJECT_TEXT',
      text
    })
    // 关闭 popup
    window.close()
  } catch (err) {
    // 如果 content script 没加载，用 scripting API 注入
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
          const editor = document.querySelector('textarea, [contenteditable="true"]')
          if (!editor) return
          if (editor.tagName === 'TEXTAREA') {
            const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set
            setter.call(editor, text + editor.value)
            editor.dispatchEvent(new Event('input', { bubbles: true }))
          } else {
            editor.focus()
            document.execCommand('insertText', false, text)
          }
        },
        args: [text]
      })
      window.close()
    } catch (e) {
      // 不支持的页面
      DOM.injectAllBtn.textContent = '当前页面不支持注入'
      setTimeout(() => {
        DOM.injectAllBtn.textContent = '注入全部记忆到对话'
      }, 2000)
    }
  }
}

// === 工具函数 ===
function escapeHtml(str) {
  const div = document.createElement('div')
  div.textContent = str
  return div.innerHTML
}

function debounce(fn, ms) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

// === 监听来自 content script 的注入请求 ===
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'INJECT_TEXT') {
    // 转发给 content script
  }
})
