# Content Log 记录模板

> 每次生成内容后，按此格式追加到 memory/content-log.md

## 单条记录格式

```markdown
### [{序号}] {date} — {platform} — {slug}
- **内容线：** signal | build_log | methodology
- **语言：** en | zh | ja
- **标题：** {内容标题}
- **输入素材：** {素材来源简述}
- **输出文件：** output/{platform}/{date}-{platform}-{slug}.md
- **关联内容：** #{关联序号} （如有跨平台版本）
- **状态：** draft | reviewed | published
- **决策备注：** {为什么选这个角度/这个平台，一句话}
```

## 示例

```markdown
### [001] 2026-02-17 — substack — zvec-skill-memory
- **内容线：** signal
- **语言：** en
- **标题：** zvec changes my Skill platform strategy
- **输入素材：** 2026-02-17 简报 — zvec GitHub trending
- **输出文件：** output/substack/2026-02-17-substack-zvec-skill-memory.md
- **Skill：** cn-to-substack-essay
- **关联内容：** #002
- **状态：** draft
- **决策备注：** 日本客户数据出境敏感度高，本地向量方案是强 signal

### [002] 2026-02-17 — wechat — ai-weekly-w8
- **内容线：** signal
- **语言：** zh
- **标题：** AI 造物周记 W8：本地向量搜索为什么突然重要了
- **输入素材：** 2026-02-17 简报 + zvec signal
- **输出文件：** output/wechat/2026-02-17-wechat-ai-weekly-w8.md
- **关联内容：** #001
- **状态：** draft
- **决策备注：** 公众号版本从日本企业数据合规角度展开，比 Substack 版更深
```
