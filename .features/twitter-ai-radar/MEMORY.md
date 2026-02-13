# Twitter AI Radar

> 追踪美国、中国、日本三国 AI 领域关键人物的 Twitter/X 动态
> 更新：2026-02-12

## 当前状态
Loop 机制已搭建。通过 `/twitter` 命令触发扫描，或通过 `/radar` 执行完整循环。
关注人物列表待建立（在 `loop/state.md` 中维护）。

## 核心文件
- `.claude/commands/twitter.md` — 扫描命令定义
- `.claude/commands/radar.md` — 主循环命令（包含 Twitter 扫描）
- `.features/twitter-ai-radar/data/` — 每日扫描结果（按日期命名）
- `loop/state.md` — 循环状态追踪 + 关注人物列表

## 工作流
1. 触发扫描（`/twitter` 或 `/radar`）
2. WebSearch 搜索 Twitter/X AI 动态 + 关注人物
3. 按国家分类，识别跨国共振信号
4. 结果写入 `data/YYYY-MM-DD.md`
5. 更新 `loop/state.md`

## Gotchas
- Twitter/X 的搜索结果通过 WebSearch 获取，可能不完整
- 中国 AI 牛人很多在微博/知乎而不是 Twitter，需要同时搜索中文源
- 日本 AI 圈子相对小，但有独特视角（特别是应用层面）
- 日文内容需要翻译成中文摘要给 Luke

## 索引
- decisions/ - 设计决策
- changelog/ - 变更记录
