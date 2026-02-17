# Shipyard — 产品定义

## 一句话

AI 驱动的 SNS 内容生产系统。帮一个 Builder 把造东西的过程变成三平台持续输出。

## 定位

Alan 的内容工厂。输入是素材（简报、Build Log、思考碎片），输出是可发布的平台内容。

**差异化：** 市场上工程师讲 AI 技术，分析师讲 AI 趋势，唯独缺少「产品设计师讲怎么用 AI 把东西做出来」。

## 核心功能

### 1. 素材 → 内容线判断

输入：任意素材（简报数据、Build Log、思考碎片、外部链接）
输出：判断属于哪条内容线

| 输入类型 | 示例 |
|---------|------|
| 简报数据 | Alan 简报 .txt / 一级市场情报 .txt |
| Build Log 素材 | "今天把 PM-Quill 的 /review 步骤重新设计了，因为..." |
| 产品思考碎片 | "想到一个问题：Skill 应不应该跨 Claude 和 OpenAI？" |
| 外部刺激 | 一篇文章链接、一条推文截图、一个 GitHub 项目 |
| 方法论草稿 | "我想写一篇关于非工程师怎么用 Vibe Coding 的" |
| 指令 | "这周出一条英文推文 + 一篇公众号" |

### 2. 内容线 → 平台适配

同一素材根据目标平台生成不同内容：
- **Twitter/X**：英文，Build in Public 风格，单条或 Thread
- **微信公众号**：中文，方法论沉淀 + 行业洞察，1500-3000 字
- **note**：日文，日本 B2B × AI 实践记录，1000-2000 字

### 3. 质量自检 → 输出

每篇内容经过质量检查清单后输出为标准 md 文件。

## 素材池（可写的内容）

- PM-Quill 的迭代决策（四步工作流的设计逻辑、用户反馈、功能取舍）
- GBaseGTM 的产品设计（500 万日本企业数据库的交互设计、自然语言搜索的 UX）
- Skill 系统的搭建过程（怎么设计一个 AI Skill、测试框架怎么想的）
- 简报系统本身（多 Agent 架构的产品设计思路）
- Claude Code 使用中的产品思考（Vibe Coding 的产品化潜力、非工程师的工作流变化）

## 不做什么

- 不做市场分析报告
- 不做技术教程
- 不做新闻搬运
- 不做翻译（三平台是本地化，不是翻译）

## 产品形态

**当前：Claude Code Agent**
- 以 CLAUDE.md + context 的形式存在
- Alan 投喂素材，Agent 产出平台内容
- 输出 Markdown 文件到 output/ 目录

## 关联项目

- **PM-Quill** — 产品决策工具（/spec → /feasibility → /plan → /review）
- **GBaseGTM** — 500 万日本企业数据库产品
- **Skill 系统** — AI Skill 的模块化平台
- **简报系统** — 多 Agent 情报收集系统（GitHub Scout / Twitter Radar / Signal Analyzer）
