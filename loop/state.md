# Loop 状态

> Alan 的循环运行状态追踪
> 每次运行后自动更新

## 上次运行

- 时间：2026-02-14 afternoon
- 类型：多 Agent 完整循环（/radar）
- 状态：完成

## 运行历史

<!-- 最近 10 次运行记录，旧的自动清理 -->

| 时间 | 类型 | GitHub 发现 | Twitter 发现 | 信号数 | 备注 |
|------|------|------------|-------------|--------|------|
| 2026-02-14 下午 | radar（多 Agent） | 10 个项目 | 14 条动态 | 6 个信号（3 强） | 重大：Agent 编排赛道爆发 + 中国四大模型同周发布 + vibe-kanban 翻倍 |
| 2026-02-13 深夜 | radar | 6 个项目 | 8 条动态 | 5 个信号 | 重大：Anthropic 报告定义 Agentic Engineering + OpenAI 指控 DeepSeek + 豆包春晚 |
| 2026-02-13 晚 | radar | 8 个项目 | 6 条动态 | 5 个信号 | 重大：shannon 爆发 + SaaS 大屠杀蔓延 + 豆包日活破亿 |
| 2026-02-13 | radar | 5 个项目 | 6 条动态 | 4 个信号 | Cowork 插件生态 + Generative UI 爆发 |
| 2026-02-12 晚 | radar | 6 个项目 | 8+ 条动态 | 4 个信号 | OpenClaw 安全危机 + Vibe Coding Spec |
| 2026-02-12 | radar | 8 个项目 | 10+ 条动态 | 4 个信号 | 首次运行 |
| 2026-02-12 | deep-dive | AI 记忆赛道 | 6 个竞品 | 3 个机会 | 深挖 AI 记忆方向 |

## 待处理

- [x] 深入研究 claude-mem 的实现方式 → 已完成
- [ ] 体验 shannon（AI 安全审计工具），评估 ClawGuard 产品方向 **← 最高优先**
- [ ] 体验 Claude Cowork，研究插件 API 和中文用户痛点 **← 高优先**
- [ ] 试玩 Tambo SDK，做 Generative UI 最小 demo
- [ ] 体验 openclaw，找普通用户痛点
- [ ] 研究 Personal_AI_Infrastructure 的架构
- [ ] 关注 Emergent 的产品动态
- [ ] 如果 Luke 决定做 AI 记忆产品：调研 Mem0 开源 API 的可用性
- [ ] 如果 Luke 决定做 AI 记忆产品：分析中文 AI 用户的记忆需求场景
- [ ] 调研现有 AI agent 安全工具的竞争格局（shannon vs Fenz 等）
- [ ] 研究 ClawHub 恶意 Skills 的攻击方式，评估 MVP 可行性
- [ ] 设计 vibe coding spec 模板格式的原型 → 方向进化为 "agentic engineering"
- [ ] 观察春节后中国 AI 应用用户反馈（豆包日活数据、千问生态效果）
- [ ] 关注 DeepSeek V4 发布动态（传闻 2月中旬）**← 紧迫**
- [x] 写 "从 Vibe Coding 到 Agentic Engineering" 中文指南 → 已完成并发表
- [ ] 跟踪 OpenAI vs DeepSeek 蒸馏指控后续（可能影响开源政策）
- [ ] 关注 Anthropic 多 Agent API 开放动向
- [ ] 春节后评估中国 AI 应用用户留存（豆包春晚效果、千问免单转化）
- [ ] 试用 vibe-kanban，评估多 Agent 编排工具的中文本地化机会 **← 新 · 强信号**
- [ ] 调研中文开发者社区对多 Agent 编排的讨论热度 **← 新**
- [ ] 关注 Chrome DevTools MCP，评估集成到 Bill_v1 的可行性 **← 新**

## 关注列表

### GitHub 关注领域
- AI 产品 / AI agents
- vibe coding → **agentic engineering**（名称进化）
- 赚钱相关的开源项目
- 开发者工具
- AI 记忆/上下文管理
- 个人 AI 助手
- **AI agent 安全**（升级为重点领域）
- Vibe coding 治理/spec 工具
- Generative UI
- Claude Cowork 插件生态
- **Skills/Plugins 标准化**
- **多 Agent 编排**（新增重点领域）
- **MCP 生态扩展**（新增）

### GitHub 持续追踪项目
- openclaw — 个人 AI 助手标杆（注意：安全危机中）
- claude-mem — AI 记忆插件（27K 星，现象级）
- Personal_AI_Infrastructure — AI 基础设施框架（7.9K，增长加速）
- UI-TARS-desktop — 字节跳动桌面 agent
- NevaMind-AI/memU — 主动智能记忆框架
- koala73/worldmonitor — 全球情报仪表盘
- trick77/vibe-coding-enterprise-2026 — Vibe coding 治理指南
- tambo-ai/tambo — Generative UI SDK for React
- CopilotKit/generative-ui — Agent + UI 生成示例
- **KeygraphHQ/shannon** — AI 安全审计工具（21K 星，爆发级）
- **github/gh-aw** — GitHub 官方 Agentic Workflows
- **openai/skills** — Codex 技能目录
- **tobi/qmd** — 本地知识搜索引擎
- **badlogic/pi-mono** — 全栈 Agent 工具包
- **ChromeDevTools/chrome-devtools-mcp** — Chrome 官方 MCP server（24.6K 星）（新增）
- **BloopAI/vibe-kanban** — 多 Agent 编排看板（21.2K 星，翻倍增长）（新增）
- **SynkraAI/aios-core** — Agentic Agile 多 Agent 协作（339 星，早期）（新增）
- **THUDM/slime** — 清华智谱 RL 训练框架（4K 星）（新增）

### Twitter 关注人物

#### 美国
- Anthropic 团队动态（Claude 更新）
- 前 GitHub CEO（Emergent 创始人）
- danielmiessler（Personal AI Infrastructure）
- Greg Isenberg（SaaS + agent 趋势预测）
- Fenz AI / @fenzlabs（AI agent 安全审计）
- **Andrej Karpathy**（agentic engineering 概念推动者）

#### 中国
- 阿里通义千问团队（千问 App + 原生 Agent + Qwen 3.5 即将发布）
- 百度千帆团队（文心助手 vs 微信）
- 快手可灵 AI 团队
- 字节豆包团队（日活破亿，豆包 2.0 今日发布）
- **智谱团队**（GLM-5 发布，股价暴涨 28.68%）
- **DeepSeek 团队**（V4 即将发布）

#### 日本
- 日经新闻 AI 专栏（待建立具体人物）
- Fanuc + NVIDIA 物理 AI 合作
- **软银机器人**（Pepper+ AI agent）（新增）
<!-- 需要专门调研日本 AI 圈人物 -->
