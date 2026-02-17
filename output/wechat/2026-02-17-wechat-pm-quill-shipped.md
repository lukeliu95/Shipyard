---
platform: wechat
language: zh
content_line: build_log
date: 2026-02-17
slug: pm-quill-shipped
status: draft
---

# PM-Quill 上线了：我为什么要做一个"写代码之前"的工具

这周 PM-Quill 正式上线了（pm.simprr.com），支持中英日三语。

这不是一个编码工具。它是编码之前的那一步——帮你想清楚做什么。

## 为什么"想清楚"比"写代码"更难

我看到太多这样的故事了：有个想法，打开 Cursor，开始写，写了三天发现方向不对。

Spotify 最好的开发者已经三个月没手写代码了。编码这件事正在被 AI 吃掉。但"做什么"和"为什么做"——这个决策层，还是人在拍脑袋。

PM-Quill 就是来补这个洞的。四步工作流：

- `/spec` — 把模糊想法变成结构化的产品规格
- `/feasibility` — 评估可行性、工作量、风险
- `/plan` — 拆解成可执行的任务列表
- `/review` — 回顾项目，提炼经验

## 三个关键设计决策

**决策一：只做四件事。** PM-Quill 不写代码（那是 Cursor 的事），不管项目（那是 Linear 的事），不做设计（那是 Figma 的事）。AI 工具最容易犯的错就是什么都能做所以什么都做——但"能做"不等于"该做"。

**决策二：活在终端里。** PM-Quill 以 Claude Code 原生 Skills 的形式存在。斜杠命令调用，Markdown 文件输出，直接在项目目录里。不需要装新 App，不需要切换上下文。因为我的目标用户——独立创业者、设计师、vibe coder——他们已经住在终端和 AI 编码工具里了。

**决策三：第一天就支持三语。** 英文、中文、日文。这不是为了好看。这周我首次拉取了 Qiita（日本最大开发者社区）的数据，发现一件事：ClaudeCode 已经是 Qiita 周热门标签 Top 5。日本开发者社区对 Claude Code 的采纳速度超出预期。PM-Quill 的日语支持不是超前，是刚刚好赶上。

## Qiita 告诉我的事

Qiita 周热门标签排名：AI(160) > Python(140) > AWS(123) > ClaudeCode(83) > Claude(72)。

热门文章里有人在用 Claude Code Skills 做股票自动筛选，有人在拆解 Claude Code Agent Teams 的架构设计。

这说明两件事：Claude Skills 生态在日本不是概念，已经有人在上面建真东西了。做 Skills 生态的延伸工具——比如 PM-Quill——时机是对的。

## CLI 工具爆发的趋势

还有一个有趣的信号：gogcli——用 Go 写的 Google 全家桶 CLI 工具，首日上 GitHub Trending。作者 steipete 是 PSPDFKit 创始人，从 iOS 大佬转向做命令行工具。

Gmail 查询 89ms，日历 62ms，JSON 优先输出天然适配 AI Agent 集成。

这个模式在反复出现：有经验的开发者不再做 Web App，而是做终端工具，输出格式是给 AI 读的 JSON。PM-Quill 也是这个模式——斜杠命令、Markdown 输出、为"AI 写代码、人做决策"的工作流而设计。

## 接下来做什么

PM-Quill 上线了，但这只是 v1。接下来：

1. 收集用户反馈——四步工作流是我的假设，可能需要调整
2. 重点观察日本市场的采纳情况——如果 Qiita 数据趋势持续，日本可能是比英文市场更快的增长点
3. 克制加功能的冲动——聚焦产品最难的部分不是上线，是上线后保持聚焦

---
<!-- metadata -->
源素材: 2026-02-17 Alan 简报第二轮 — PM-Quill上线 + Qiita数据 + gogcli
关联项目: PM-Quill
