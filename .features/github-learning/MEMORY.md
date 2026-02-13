# GitHub Learning

> 学习 GitHub 高星项目的能力：发现、分析、提炼可用知识
> 更新：2026-02-12

## 当前状态
Loop 机制已搭建。通过 `/github` 命令触发扫描，或通过 `/radar` 执行完整循环。

## 核心文件
- `.claude/commands/github.md` — 扫描命令定义
- `.claude/commands/radar.md` — 主循环命令（包含 GitHub 扫描）
- `.features/github-learning/data/` — 每日扫描结果（按日期命名）
- `loop/state.md` — 循环状态追踪

## 工作流
1. 触发扫描（`/github` 或 `/radar`）
2. WebSearch 搜索 GitHub trending + 关注领域
3. 过滤和分析项目
4. 结果写入 `data/YYYY-MM-DD.md`
5. 更新 `loop/state.md`

## Gotchas
- Luke 不是工程师，分析项目时要用简单语言，重点讲「它做了什么」和「为什么好」
- 关注的领域：AI 产品、vibe coding 工具、赚钱相关的开源项目
- 高星不等于有价值，要结合 Luke 的兴趣过滤
- WebSearch 的结果质量不稳定，可能需要换关键词多搜几次

## 索引
- decisions/ - 设计决策
- changelog/ - 变更记录
