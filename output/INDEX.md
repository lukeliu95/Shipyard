# Output Index — 内容产出总索引

> 渐进式披露入口。先读此文件获取全貌，再按需下钻读取具体文件。
> 每次生成新内容后必须更新此文件。

## 读取策略

- **去重检查、判断近期覆盖话题** → 读此文件即可
- **需要参考已有内容的具体写法** → 下钻读取具体文件
- **需要完整生产记录（关联关系、决策备注）** → 读 memory/content-log.md

## 状态说明

| 状态 | 含义 |
|------|------|
| `draft` | 已生成，未发布 |
| `published` | 已发布 |

---

## Substack（英文）

| ID | 日期 | 标题 | 内容线 | 状态 | 文件 |
|----|------|------|--------|------|------|
| #013 | 02-18 | The Vibe Coding Hangover: Why We're Entering the Spec-First Era | signal | published | `substack/2026-02-18-substack-vibe-coding-hangover.md` |
| #009 | 02-18 | 56% of Companies Get Zero Return From AI. That's the Best News I've Heard All Year. | signal | published | `substack/2026-02-18-substack-56-percent-zero-return.md` |
| #007 | 02-18 | Agents Don't Need Better Engines. They Need a Job Description. | signal | published | `substack/2026-02-18-substack-agents-need-a-job-description.md` |
| #004 | 02-17 | I Shipped a Product Decision Tool. Here's What I Learned About the Layer Above Code. | build_log | published | `substack/2026-02-17-substack-pm-quill-shipped.md` |
| #001 | 02-17 | The AI Panic Is Really a Pricing Power Test | signal | published | `substack/2026-02-17-substack-ai-panic-pricing-power.md` |

## 微信公众号（中文）

| ID | 日期 | 标题 | 内容线 | 状态 | 文件 |
|----|------|------|--------|------|------|
| #016 | 02-20 | 我把500万条数据库记录「拆散」了——为什么 AI 读不懂好好的数据库 | build_log | draft | `wechat/2026-02-20-wechat-gbasegtm-agent-architecture.md` |
| #015 | 02-18 | 我的 AI 简报系统，昨天免费升级了 | signal | published | `wechat/2026-02-18-wechat-claude-agent-eyes-upgrade.md` |
| #012 | 02-18 | 从 Vibe Coding 到规范先行：AI 产品开发的第二个周期 | signal | published | `wechat/2026-02-18-wechat-vibe-coding-to-spec.md` |
| #010 | 02-18 | AI 造物周记 W08-2：当 56% 的企业说「AI 没用」，我在想什么 | signal | published | `wechat/2026-02-18-wechat-ai-weekly-w08-2.md` |
| #005 | 02-17 | PM-Quill 上线了：我为什么要做一个"写代码之前"的工具 | build_log | published | `wechat/2026-02-17-wechat-pm-quill-shipped.md` |
| #002 | 02-17 | AI 造物周记 W08：恐慌里藏着产品人的机会 | signal | published | `wechat/2026-02-17-wechat-ai-weekly-w08.md` |

> 注：output/wechat/ 下还有 4 个未编号文件（anthropic-stress-test, chat-is-dead-agent-is-living, china-ai-disenchantment, vibe-coding-hits-the-wall），为早期生成，未纳入 content-log 记录体系。

## note（日文）

| ID | 日期 | 标题 | 内容线 | 状态 | 文件 |
|----|------|------|--------|------|------|
| #014 | 02-18 | 「Vibe Codingの限界」から見える仕様駆動開発の復権 | signal | published | `note/2026-02-18-note-vibe-coding-limits.md` |
| #011 | 02-18 | 「AI二極化元年」に思うこと——使い方を設計できる人が勝つ時代 | signal | published | `note/2026-02-18-note-ai-nikyokuka-workflow-design.md` |
| #008 | 02-18 | 日本の「3兆円AI投資」が、B2Bデータ市場を変える | signal | published | `note/2026-02-18-note-japan-3cho-ai-btob-data.md` |
| #006 | 02-17 | QiitaのClaudeCodeランキングから見えた「日本市場の本気度」 | signal | published | `note/2026-02-17-note-qiita-claude-skills-japan.md` |
| #003 | 02-17 | AI恐慌相場から見える「価格決定力」の話 | signal | published | `note/2026-02-17-note-ai-panic-japan-pricing.md` |

---

## 话题覆盖地图（去重用）

> 生成前快速扫描，避免重复话题。

| 话题 | 已覆盖平台 | 最近日期 |
|------|-----------|---------|
| AI 恐慌 / 定价权 | Substack + 公众号 + note | 02-17 |
| PM-Quill 上线 / 产品决策工具 | Substack + 公众号 + note | 02-17 |
| Agent 基础设施 / Skill 定义层 | Substack + note | 02-18 |
| AI 生产力悖论 / 二极化 | Substack + 公众号 + note | 02-18 |
| Vibe Coding 触壁 / Spec-driven | Substack + 公众号 + note | 02-18 |
| Anthropic web search 升级 | 公众号 | 02-18 |
| 日本3兆円AI投資 | note | 02-18 |

---

<!-- 新内容生成后在对应平台表格追加一行，并更新话题覆盖地图 -->
