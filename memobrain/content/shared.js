// MemoBrain - 共享 Content Script
// 负责：DOM 检测、注入按钮、注入记忆文本

const MEMOBRAIN = {
  injected: false,
  platform: null,
  buttonEl: null,
  toastEl: null
}

// === 平台配置 ===
const PLATFORM_CONFIG = {
  claude: {
    hostname: 'claude.ai',
    editorSelectors: [
      'div[contenteditable="true"]',
      'p[data-placeholder]',
      'fieldset .ProseMirror'
    ],
    anchorSelectors: [
      'button[aria-label*="Send"]',
      'button[aria-label*="发送"]',
      'fieldset'
    ],
    inputType: 'contenteditable'
  },
  chatgpt: {
    hostname: 'chatgpt.com',
    editorSelectors: [
      '#prompt-textarea',
      'textarea',
      'div[contenteditable="true"]'
    ],
    anchorSelectors: [
      'button[data-testid="send-button"]',
      'button[aria-label*="Send"]',
      'form'
    ],
    inputType: 'mixed' // 可能是 textarea 也可能是 contenteditable
  }
}

// === 找到输入框 ===
function findEditor() {
  const config = PLATFORM_CONFIG[MEMOBRAIN.platform]
  if (!config) return null
  for (const selector of config.editorSelectors) {
    const el = document.querySelector(selector)
    if (el) return el
  }
  return null
}

// === 找到锚点（按钮插入位置） ===
function findAnchor() {
  const config = PLATFORM_CONFIG[MEMOBRAIN.platform]
  if (!config) return null
  for (const selector of config.anchorSelectors) {
    const el = document.querySelector(selector)
    if (el) return el
  }
  return null
}

// === 注入文本到输入框 ===
function injectTextToEditor(text) {
  const editor = findEditor()
  if (!editor) {
    showToast('找不到输入框', 'error')
    return false
  }

  if (editor.tagName === 'TEXTAREA') {
    // Textarea：hack 原生 setter 触发 React 事件
    const nativeSetter = Object.getOwnPropertyDescriptor(
      HTMLTextAreaElement.prototype, 'value'
    ).set
    const currentValue = editor.value
    nativeSetter.call(editor, text + currentValue)
    editor.dispatchEvent(new Event('input', { bubbles: true }))
    editor.focus()
    return true
  }

  if (editor.contentEditable === 'true' || editor.isContentEditable) {
    // ContentEditable：插入文本节点
    editor.focus()
    // 移动光标到开头
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(editor)
    range.collapse(true) // 折叠到开头
    selection.removeAllRanges()
    selection.addRange(range)
    // 插入文本
    document.execCommand('insertText', false, text)
    return true
  }

  showToast('不支持的输入框类型', 'error')
  return false
}

// === 注入 MemoBrain 按钮 ===
function injectButton() {
  if (MEMOBRAIN.buttonEl && document.contains(MEMOBRAIN.buttonEl)) return

  const btn = document.createElement('button')
  btn.id = 'memobrain-inject-btn'
  btn.innerHTML = '🧠'
  btn.title = 'MemoBrain: 注入记忆'

  // 内联样式，避免 CSS 加载顺序问题
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '100px',
    right: '24px',
    width: '44px',
    height: '44px',
    border: 'none',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '100000',
    boxShadow: '0 2px 12px rgba(99, 102, 241, 0.4)',
    transition: 'all 0.2s ease'
  })

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1)'
    btn.style.boxShadow = '0 4px 16px rgba(99, 102, 241, 0.6)'
  })
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)'
    btn.style.boxShadow = '0 2px 12px rgba(99, 102, 241, 0.4)'
  })

  btn.addEventListener('click', handleInjectClick)

  document.body.appendChild(btn)

  MEMOBRAIN.buttonEl = btn
  MEMOBRAIN.injected = true
}

// === 点击注入按钮 ===
async function handleInjectClick(e) {
  e.preventDefault()
  e.stopPropagation()

  try {
    const response = await chrome.runtime.sendMessage({ type: 'GET_INJECT_TEXT' })
    if (!response || response.length === 0) {
      showToast('还没有记忆，先在 popup 中添加', 'info')
      return
    }
    const success = injectTextToEditor(response)
    if (success) {
      showToast('记忆已注入 ✓', 'success')
    }
  } catch (err) {
    showToast('注入失败：' + err.message, 'error')
  }
}

// === Toast 提示 ===
function showToast(message, type = 'info') {
  // 移除旧的
  if (MEMOBRAIN.toastEl) {
    MEMOBRAIN.toastEl.remove()
  }

  const toast = document.createElement('div')
  toast.className = `memobrain-toast memobrain-toast-${type}`
  toast.textContent = message
  document.body.appendChild(toast)
  MEMOBRAIN.toastEl = toast

  // 动画显示
  requestAnimationFrame(() => {
    toast.classList.add('memobrain-toast-show')
  })

  // 3 秒后消失
  setTimeout(() => {
    toast.classList.remove('memobrain-toast-show')
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

// === 监听来自 background / popup 的消息 ===
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'MEMORY_SAVED') {
    showToast(`已保存: "${request.memory.content.slice(0, 20)}..."`, 'success')
  }
  if (request.type === 'INJECT_TEXT') {
    const success = injectTextToEditor(request.text)
    if (success) {
      showToast('记忆已注入 ✓', 'success')
    }
  }
})

// === 使用 MutationObserver 等待输入框出现 ===
function waitForEditor() {
  const observer = new MutationObserver(() => {
    const editor = findEditor()
    if (editor && !MEMOBRAIN.injected) {
      injectButton()
    }
    // 如果按钮被平台重渲染移除了，重新注入
    if (MEMOBRAIN.injected && MEMOBRAIN.buttonEl && !document.contains(MEMOBRAIN.buttonEl)) {
      MEMOBRAIN.injected = false
      injectButton()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })

  // 也立即尝试一次
  const editor = findEditor()
  if (editor) injectButton()
}
