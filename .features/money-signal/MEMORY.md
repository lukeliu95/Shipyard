# Money Signal

> 从 GitHub 趋势和 Twitter 动态中提炼最有可能赚钱的机会，通知 Luke
> 更新：2026-02-12

## 当前状态
Loop 机制已搭建。通过 `/signal` 命令触发分析，或通过 `/radar` 执行完整循环。
依赖 github-learning 和 twitter-ai-radar 的扫描数据作为输入。

## 核心文件
- `.claude/commands/signal.md` — 信号分析命令定义
- `.claude/commands/radar.md` — 主循环命令（包含信号分析）
- `.features/money-signal/data/` — 每日信号分析结果（按日期命名）
- `loop/state.md` — 循环状态追踪

## 分析框架（四维评估）
1. **需求真实性** — 是不是真有人要？
2. **竞争格局** — 现在谁在做？做得好不好？
3. **Luke 能力匹配** — 产品设计 + vibe coding + AI 辅助，能做出来吗？
4. **变现路径** — 怎么赚钱？

## 工作流
1. 读取 GitHub 和 Twitter 的扫描数据
2. 交叉分析，寻找跨源共振和未满足需求
3. 用四维框架评估每个潜在机会
4. 结果写入 `data/YYYY-MM-DD.md`
5. 给 Luke 简报

## Gotchas
- 赚钱信号有时效性，发现了要快速通知
- 宁可少报不要多报 — 信号优先于噪音
- Luke 的优势是产品设计 + AI 辅助编码，不是硬核技术，机会要匹配这个能力圈
- 没有上游数据时不要强行分析，告诉 Luke 先跑扫描

## 索引
- decisions/ - 设计决策
- changelog/ - 变更记录
