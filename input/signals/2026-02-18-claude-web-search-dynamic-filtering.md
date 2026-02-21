---
type: signal
date: 2026-02-18
source: Anthropic Official Blog
url: https://claude.com/blog/improved-web-search-with-dynamic-filtering
status: processing
---

# Anthropic 发布改进版网页搜索：动态过滤提升精准度

## 核心公告（2026-02-17）

Anthropic 发布了增强版 web search 和 web fetch 工具。新版本能够「自动编写并执行代码，在将搜索结果加载到上下文之前进行后处理」，同时提升精准度和 token 效率。

## 关键数据

- **精准度提升：** 平均 +11%（跨多个 benchmark）
- **Token 效率：** 输入 token 减少 24%
- **BrowseComp 测试：**
  - Sonnet 4.6：33.3% → 46.6%（+13.3pp）
  - Opus 4.6：45.3% → 61.6%（+16.3pp）
- **DeepsearchQA 测试：**
  - Sonnet 4.6 F1 Score：52.6% → 59.4%
  - Opus 4.6 F1 Score：69.8% → 77.3%

## 技术实现

Claude 能够在执行过程中**动态过滤搜索结果**，而不是对完整 HTML 文件进行推理。通过代码执行能力，仅保留相关信息，丢弃无关内容。

**API 启用方式：**
```
anthropic-beta: code-execution-web-tools-2026-02-09
```

## 同期 GA 功能

以下功能同步进入 Generally Available 状态：
- Code execution（代码执行）
- Memory（记忆）
- Programmatic tool calling（可编程工具调用）
- Tool search（工具搜索）
- Tool use examples（工具使用示例）

## Builder 关联视角

- 这直接影响 Shipyard 的 web fetch 能力 — 简报系统的 Web Signal 获取质量会提升
- Agent 自己写代码过滤搜索结果 = 工具层的「自主决策权」在扩大
- 24% token 减少 → API 成本下降，多 Agent 系统的经济性改善
- Memory GA → Shipyard 这类记忆系统从 hack 变成官方支持
- 「代码执行 + 网页搜索」组合 → Agent 的信息获取能力出现质变
