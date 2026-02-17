# 三平台内容规范

## Substack — 英文

**Skill：** `cn-to-substack-essay`（生成时必须调用）

**路线：** Build in Public 长文，面向全球英文读者
**语气：** Native English，参考 Ben Thompson / Paul Graham / Lenny Rachitsky 风格
**格式：**
- 长文 essay（800-2500 words，prose-first）
- 5种文章类型：Analysis / Builder's Log / Contrarian Take / Signal Report / How I Think About X

**内容偏好：**
- 线一（Signal）和线二（Build Log）为主
- 强调 shipping 和决策过程
- 用 earned opinions 展示 builder authority

**发布节奏：** 每周 1-2 篇

**核心规则（详见 Skill）：**
- 不是翻译，是用英文从头重写
- Prose first，不默认用 bullet points
- 禁用 "Let's dive in" / "In this article" / "Without further ado" 等非母语标记
- 句式长短交替，避免均匀中等长度
- 用 callback / conversational pivot 做过渡，不用 "Furthermore" / "Additionally"

---

## 微信公众号 — 中文

**路线：** 方法论沉淀 + 行业洞察
**语气：** 专业但不学术，有温度，讲人话
**格式：**
- 长文（1500-3000 字，配图）
- 方法论系列文

**内容偏好：**
- 线三（Methodology）为主阵地
- 线一做成「产品经理的 AI 周报」系列
- 线二挑有普适性的决策故事

**发布节奏：** 每周 1 篇

**系列化：**
- 「AI 造物周记」— 每周一篇，线一+线二混合
- 「非工程师 AI 产品手册」— 月更，线三方法论

---

## note — 日文

**Skill：** `cn-to-jp-note-writer`（生成时必须调用）

**路线：** 日本 B2B × AI プロダクト開発の実践記録
**语气：** 丁寧だが硬すぎない、実践者の視点
**格式：**
- 記事（1000-2000 字）
- マガジン（系列化）

**内容偏好：**
- 日本市場特有の話題（B2B データ活用、法人番号、日本企業文化×AI）
- 線二の日本市場関連ビルドログ
- 線三の方法論を日本市場向けにローカライズ

**发布节奏：** 每周～隔周 1 篇

**系列化：**
- 「非エンジニアの AI プロダクト開発日誌」
- 「日本 B2B 市場で AI プロダクトを作るということ」

---

## 写法公式

### 线一：Signal → Product Lens
```
信号事实（1-2 句）
→ 我正在做的东西跟这有什么关系？（产品经理视角）
→ 我打算怎么做 / 为什么决定不做（决策过程）
```

**对比：**
- 分析师写法："zvec 日增 1094 星，嵌入式向量搜索是 2026 年基础设施趋势"
- Builder 写法："zvec 爆了。我的 Skill 平台一直用云端向量库，现在认真考虑换本地方案——原因是我的日本企业客户对数据出境极度敏感"

### 线二：Build Log
```
我在做什么（产品/功能，1 句话）
→ 遇到了什么选择（设计决策点）
→ 我选了什么，放弃了什么，为什么
→ 结果 / 下一步
```

### 线三：Methodology
从实战中抽象可复用方法，候选主题：
1. 不写代码怎么做 AI 产品——我的工具链全景
2. Spec-Driven Development：用 /spec → /feasibility → /plan → /review 替代传统 PRD
3. 设计师怎么用 Vibe Coding 做产品原型
4. 不懂 SQL 的 PM 怎么做 500 万企业的数据产品
5. 一个人怎么搭建多 Agent 情报系统（产品设计视角）
6. 面向日本 B2B 市场的 AI 产品设计：文化差异怎么影响产品决策
7. 我怎么用 AI Skill 系统实现「产品能力的模块化」
8. 非工程师的 AI 时代生存指南：从恐惧到 shipping
