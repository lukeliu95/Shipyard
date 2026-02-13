// MemoBrain - Background Service Worker
// 负责：存储管理、消息路由、右键菜单

// === 初始化 ===
chrome.runtime.onInstalled.addListener(() => {
  // 初始化存储
  chrome.storage.local.get(['memories', 'settings'], (result) => {
    if (!result.memories) {
      chrome.storage.local.set({ memories: [] })
    }
    if (!result.settings) {
      chrome.storage.local.set({
        settings: {
          autoInject: false,     // MVP 先关闭自动注入，用手动
          maxResults: 5,
          language: 'zh'
        }
      })
    }
  })

  // 右键菜单：选中文字 → 保存为记忆
  chrome.contextMenus.create({
    id: 'save-as-memory',
    title: '保存为记忆 (MemoBrain)',
    contexts: ['selection']
  })
})

// === 右键菜单处理 ===
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'save-as-memory' && info.selectionText) {
    const memory = {
      id: generateId(),
      content: info.selectionText.trim(),
      tags: [],
      source: new URL(tab.url).hostname,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    addMemory(memory)
    // 通知 content script 显示保存成功
    chrome.tabs.sendMessage(tab.id, {
      type: 'MEMORY_SAVED',
      memory
    })
  }
})

// === 消息路由 ===
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'GET_MEMORIES':
      getMemories().then(sendResponse)
      return true

    case 'ADD_MEMORY':
      addMemory(request.memory).then(sendResponse)
      return true

    case 'UPDATE_MEMORY':
      updateMemory(request.id, request.updates).then(sendResponse)
      return true

    case 'DELETE_MEMORY':
      deleteMemory(request.id).then(sendResponse)
      return true

    case 'SEARCH_MEMORIES':
      searchMemories(request.query).then(sendResponse)
      return true

    case 'GET_INJECT_TEXT':
      getInjectText(request.ids).then(sendResponse)
      return true
  }
})

// === 存储操作 ===
async function getMemories() {
  const result = await chrome.storage.local.get(['memories'])
  return result.memories || []
}

async function addMemory(memory) {
  const memories = await getMemories()
  if (!memory.id) memory.id = generateId()
  if (!memory.createdAt) memory.createdAt = Date.now()
  if (!memory.updatedAt) memory.updatedAt = Date.now()
  memories.unshift(memory)
  await chrome.storage.local.set({ memories })
  return memory
}

async function updateMemory(id, updates) {
  const memories = await getMemories()
  const index = memories.findIndex(m => m.id === id)
  if (index === -1) return null
  memories[index] = { ...memories[index], ...updates, updatedAt: Date.now() }
  await chrome.storage.local.set({ memories })
  return memories[index]
}

async function deleteMemory(id) {
  const memories = await getMemories()
  const filtered = memories.filter(m => m.id !== id)
  await chrome.storage.local.set({ memories: filtered })
  return true
}

// === 记忆搜索（关键词匹配） ===
async function searchMemories(query) {
  if (!query || query.trim().length < 2) return []
  const memories = await getMemories()
  const keywords = query.toLowerCase().split(/\s+/).filter(k => k.length >= 2)
  if (keywords.length === 0) return memories.slice(0, 5)

  return memories
    .map(m => {
      const text = (m.content + ' ' + (m.tags || []).join(' ')).toLowerCase()
      const score = keywords.reduce((s, k) => s + (text.includes(k) ? 1 : 0), 0)
      return { ...m, score }
    })
    .filter(m => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
}

// === 生成注入文本 ===
async function getInjectText(ids) {
  const memories = await getMemories()
  let selected
  if (ids && ids.length > 0) {
    selected = memories.filter(m => ids.includes(m.id))
  } else {
    selected = memories.slice(0, 10)
  }
  if (selected.length === 0) return ''

  const lines = selected.map(m => `- ${m.content}`).join('\n')
  return `<context>\n以下是关于我的一些背景信息，请在回答时参考：\n${lines}\n</context>\n\n`
}

// === 工具函数 ===
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}
