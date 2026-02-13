# 决策：MemoBrain MVP 技术方案

日期：2026-02-12
状态：已验证

## 背景
AI 记忆赛道确认有钱（Mem0 $24M），中文市场空白。决定做一个中文优先的 AI 记忆 Chrome 扩展。

## 关键决策

### 1. 按钮定位：固定悬浮 > 内联注入
- **选了什么：** 右下角固定悬浮按钮（position: fixed）
- **为什么：** Claude 的输入框容器有 overflow: hidden，内联注入的按钮会被裁剪不可见
- **教训：** 各平台的 CSS 布局各不相同，固定位置最可靠

### 2. 样式方案：内联样式 > CSS 文件
- **选了什么：** 按钮用 JS 内联样式，不依赖外部 CSS
- **为什么：** Chrome 扩展的 CSS 注入有时序问题，内联样式保证立即生效

### 3. 输入框注入：双策略
- textarea → hack 原生 setter + dispatchEvent
- contenteditable → execCommand('insertText')
- Claude 用的是 ProseMirror (contenteditable)

### 4. 存储：纯本地
- chrome.storage.local，无后端
- MVP 够用，后续再考虑云同步

## 已验证
- ✅ 按钮在 Claude 页面正常显示
- ✅ 记忆添加和存储正常
- ✅ 记忆注入到 Claude 输入框正常
