# Decisions — 内容决策记录

> 记录每次内容生产中的关键决策：为什么选这个角度、为什么放弃某个方向、为什么调整语气。
> 用于避免重复犯错，积累内容判断力。

## 格式说明

```markdown
### YYYY-MM-DD — 决策简述
- **场景：** 什么情况下做的决策
- **选择：** 选了什么
- **放弃：** 放弃了什么
- **原因：** 为什么
```

---

## 记录

<!-- 新记录追加在此行下方 -->

### 2026-02-17 — 首条素材的三平台角度分配
- **场景：** 简报素材包含多个 signal（恐慌交易、定价权、zvec、Claude Cowork、日本企业涨价），需决定三平台各取什么角度
- **选择：** Substack 长文聚焦定价权 + Skill决策（builder观点深度输出），公众号做完整周记（定价权→产品定位→行动项），note 切日本企业涨价+数据本地化
- **放弃：** 没有把投资侧分析（错杀标的、Microsoft AI Power Days）作为主线——那是分析师的活
- **原因：** Builder 视角要求从"我在做什么"出发，投资信号只能当佐料不能当主菜。三平台不是翻译而是本地化：英文圈 Substack 长文深度输出，中文圈要方法论深度，日文圈要日本市场具体性

### 2026-02-17 — 第二轮素材：PM-Quill 上线 + Qiita + gogcli 的角度分配
- **场景：** 同日第二批素材，包含 Build Log（PM-Quill 上线）+ Signal（Qiita 数据、gogcli、Apple+Gemini、SaaSpocalypse 加剧）
- **选择：** 三平台统一以 PM-Quill 上线为主线（Build Log），Qiita 数据和 gogcli 做佐料。Substack 用 Builder's Log 类型做完整 shipping story，公众号聚焦三个设计决策，note 以 Qiita 本土数据为切入点
- **放弃：** Apple+Gemini 和 SaaSpocalypse 加剧没有做主线——前者跟 Alan 产品无直接关系，后者第一轮已覆盖定价权角度（7天去重）。DeepSeek V4 未发布也跳过（无实际产品决策可连接）
- **原因：** PM-Quill 上线是本周最强 Build Log 素材，builder 叙事的最高级别就是"我 shipped 了"。Qiita 数据在 note 版本里价值最高（日本读者最关心本土数据），在 Substack 和公众号里降级为验证论据

### 2026-02-18 — 第三轮素材：Agent 基础设施化信号的平台和角度分配
- **场景：** 新一轮简报，包含 GitHub Agentic Workflows、三国 Agent 共振、日本 3 兆円投资、SaaSpocalypse 扩展、NVDA 财报、Anthropic vs 五角大楼等多个信号。用户要求只做 Substack + note 两个平台。
- **选择：** Substack 聚焦"Agent 价值上移到 Skill 定义层"（GitHub + Temporal + awesome-skills 做外部验证，PM-Quill/Skill 系统做 Builder 连接）。note 聚焦"日本 3 兆円投资 = B2B データ市場に予算がつく時代"（GBaseGTM 的机会窗口 + 数据主权）。
- **放弃：** ① NVDA 财报——跟 Builder 产品决策无关 ② Anthropic vs 五角大楼——降级为背景佐料 ③ SaaSpocalypse 作为独立主线——2/17 #001 已从定价权角度覆盖（7天去重），本次仅作为 Doom Loop 需求论据 ④ 公众号本轮未生成——用户未要求
- **新流程：** 首次在内容生成前调用 mckinsey-analyst Skill 做深度战略分析（三层金字塔），产出的因果链和二阶效应直接指导了内容角度选择，效果显著提升了洞察深度
- **原因：** 两个平台做了明确分工——Substack 面向全球 Builder 读者讲"Agent 栈的结构性变化"，note 面向日本 B2B 读者讲"本土投资浪潮下的数据机会"。避免了角度重叠，也避免了与 2/17 内容重复

### 2026-02-18 — 第四轮素材：AI 生产力悖论 + 二极化的三平台角度分配
- **场景：** 同日第二批简报（午后+深夜版），包含 AI 生产力悖论（56% 零回报）、JBpress 二极化、Agent 平台爆发（Gartner 800%）、SoftBank 250 万 Agent、Nature AGI 宣称等。需要与当天已生成的 #007（Skill 层）#008（日本投资）做角度区分。
- **选择：** 三平台统一以"56% 零回报 × 二极化"为主线。Substack 做 Contrarian Take（"零回报是好消息"），公众号做 AI 造物周记 W08-2（个人体感 vs CEO 调查），note 以 JBpress「二極化」为起点（日本本土视角）。
- **放弃：** ① Nature AGI 宣称——跟 Builder 产品决策无直接连接 ② Agent 记忆层分化（zvec/MCP）——技术层面有价值但本轮素材的"二极化"更有内容力度，记忆层留给后续 ③ Apple 可穿戴——与 Luke 产品无关 ④ OpenAI $1000 亿融资——纯资本面
- **新发现：** cn-to-wechat-article Skill 首次投入使用，效果符合预期。三平台 Skill 链路完整闭合（mckinsey-analyst → cn-to-substack-essay / cn-to-wechat-article / cn-to-jp-note-writer）
- **原因：** "56% 零回报"是本轮最强的新数据点，且直接验证 Luke 的核心价值主张（会用的人 vs 不会用的人）。三平台各找到了不同的叙事入口——Substack 用 Solow 悖论做历史锚点，公众号用个人体感做情感锚点，note 用 JBpress 做本土锚点——但都指向同一个结论：工作流设计能力是 AI 时代最稀缺的
