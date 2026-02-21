# output/ — 内容成品库

所有由 Shipyard 生成的可发布内容都在这里。
按平台分目录存放，每个文件都是一篇独立的平台原生内容。

---

## 目录结构

```
output/
├── INDEX.md       ← 产出总索引 + 话题覆盖地图（LLM 读取入口）
├── README.md      ← 你正在读的这个
├── substack/      ← 英文长文（800-2500 words）
├── wechat/        ← 公众号文章（1500-3000 字）
└── note/          ← 日语文章（1000-2000 字）
```

---

## 三个平台目录

### substack/ — 英文

**受众：** 全球英文读者，Builder / PM / 设计师背景
**风格：** Ben Thompson / Paul Graham 风格，Prose-first，不用 bullet points 凑字
**Skill：** `cn-to-substack-essay`（必须调用，不裸写）

### wechat/ — 中文

**受众：** 中文读者，关注 AI 产品化的 PM / 设计师 / 创始人
**风格：** 专业但讲人话，有温度，不学术
**Skill：** `cn-to-wechat-article`（必须调用，不裸写）

### note/ — 日文

**受众：** 日本 B2B 市场从业者，关注 AI 产品化落地
**风格：** 丁寧だが硬すぎない，日本市場視点必须
**Skill：** `cn-to-jp-note-writer`（必须调用，不裸写）

---

## 文件命名规则

```
{YYYY-MM-DD}-{platform}-{slug}.md

示例：
2026-02-18-substack-vibe-coding-hangover.md
2026-02-18-wechat-claude-agent-eyes-upgrade.md
2026-02-18-note-japan-3cho-ai-btob-data.md
```

---

## 每个文件的结构

```yaml
---
platform: substack | wechat | note
language: en | zh | ja
content_line: signal | build_log | methodology
date: YYYY-MM-DD
slug: short-description
status: draft | published
---

（正文内容）
```

---

## 重要规则

**不是翻译** — 三个平台的内容从同一素材出发，但角度、深度、结构完全不同。
Substack 讲全球 Builder 视角，公众号讲方法论沉淀，note 讲日本市场具体意义。

**文件不删除** — 已发布的文件永久保留，发布后将 frontmatter 的 `status` 改为 `published`。

**一素材多产出** — 同一条 input 素材可以生成三个平台的内容，
通过 `memory/content-log.md` 的 `关联内容` 字段追踪关联关系。

---

## 快速查看

想知道发了什么、哪些话题覆盖过 → 看 **INDEX.md**
想看某篇文章的完整生产记录（输入素材、决策备注）→ 看 **memory/content-log.md**
