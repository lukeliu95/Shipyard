# Claude Code 记忆增强方案（精简版）

> 原则：不造新系统，增强原生系统。让 Claude Code 在工作中自然地越来越懂你。

---

## 设计哲学

Claude Code 已经有完整的记忆系统：

```
~/.claude/CLAUDE.md          → 你的个人偏好（跨项目）
./CLAUDE.md                  → 项目指令
~/.claude/projects/*/memory/ → Auto Memory（Claude 自己写的笔记）
.claude/rules/               → 场景化规则
```

我们不替换它，只做两件事：

1. **写好 CLAUDE.md**——把「你是谁」说清楚
2. **加上 .features/**——让每个功能模块有自己的记忆，随项目推进自然生长

就这些。没有 episodes.jsonl，没有 weekly review，没有 skill-index。
Claude Code 自己的 Auto Memory 会处理日常积累。

---

## 你只需要创建这些

```
项目根目录/
├── CLAUDE.md                    # 你写的：身份 + 工作方式 + feature memory 规则
├── .features/                   # Claude 维护的：每个功能的记忆
│   └── [feature-name]/
│       ├── MEMORY.md            # 当前状态、核心文件、已知的坑
│       ├── decisions/           # 重要的「为什么」
│       └── changelog/           # 做了什么改动
└── context/                     # 你写的：不常变的背景信息（按需引用）
    ├── me.md                    # 你是谁
    └── product.md               # 产品是什么
```

就这三样东西。其余交给 Claude Code 原生系统。

---

## CLAUDE.md 模板

直接用，改几个关键信息就行：

```markdown
# 关于我

@context/me.md
@context/product.md

# 工作方式

- 中文沟通，技术术语可用英文/日文
- 先做最小可用版本，再迭代
- 决策要有依据，不要猜

# Feature Memory

我用 .features/ 目录为每个功能模块维护记忆。

开始工作时：
- 判断涉及哪个 feature
- 如果 .features/[name]/ 存在，先读 MEMORY.md
- 如果不存在，问我要不要建一个

完成工作后，如果发生了以下任何一项，更新对应的 feature 记忆：
- 做了设计决策（为什么选 A 不选 B）→ decisions/
- 重要的代码变更 → changelog/
- 发现了坑或注意事项 → MEMORY.md 的 Gotchas
- 更新前简要告知我

不记录：代码自己能说明的事、纯格式化改动、我说不用记的。
```

大概 30 行。精简、明确、不啰嗦。

---

## context/me.md 示例

```markdown
# SImprr

产品经理 + 设计师，做 GBaseGTM。
中文母语，日文和英文流利。

专注领域：
- B2B 销售智能工具
- 日本市场 GTM
- AI 驱动的企业搜索（500万+ 日本企业）

偏好：
- 讨论时用中文，代码注释用英文
- 喜欢数据驱动，给我看数字不要给我讲道理
- 不喜欢过度设计，先跑起来再优化
```

---

## Feature Memory 如何自然生长

不需要你刻意维护。工作流是这样的：

```
你：「帮我优化企业搜索的召回率」

Claude Code：
  1. 看到「企业搜索」→ 检查 .features/enterprise-search/
  2. 读 MEMORY.md → 知道当前召回率 78%、用的混合检索、有哪些坑
  3. 基于记忆开始工作（不会重复问你「现在用什么方案」）
  4. 工作完成后 →「我把召回率优化方案的决策记录到了 decisions/，
     changelog 也更新了，你看一下？」

下次你再说「继续优化搜索」→ Claude Code 已经知道上次做到哪了。
```

**关键：Feature Memory 不是你维护的文档，是 Claude Code 的工作笔记。**

你只需要在 CLAUDE.md 里告诉它「我有这个习惯」，
它就会在每次工作中自然地读取和更新。

---

## 一个 Feature 的 MEMORY.md 长什么样

```markdown
# Enterprise Search

> 企业自然语言搜索功能
> 更新：2026-02-12

## 当前状态
混合检索（关键词 + 语义），召回率 78%，目标 85%。

## 核心文件
- src/search/ - 搜索引擎
- tests/search/eval-cases.json - 100 条评估用例

## Gotchas
- 「株式会社」前置/后置不统一，搜索前要标准化
- 中文 query 分词会误切日语汉字
- 每次改搜索逻辑必须跑 eval

## 索引
- decisions/ - 设计决策
- changelog/ - 变更记录
```

50 行以内。Claude Code 每次工作前花 2 秒读完，
就像人类工程师「打开笔记看看上次做到哪了」。

---

## 随项目推进，Claude Code 对你的理解会这样变化

### 第一周
- CLAUDE.md 告诉它你是谁
- context/ 告诉它产品是什么
- .features/ 还是空的

### 第一个月
- .features/ 里有了 3-5 个 feature 的记忆
- 每个 feature 有几条 decisions 和 gotchas
- Claude Code 开始能说「根据上次的决策，我建议...」

### 三个月后
- Feature Memory 积累了丰富的决策历史
- Claude Code 能说「这个问题我们 1 月已经讨论过，当时选了 A 方案因为...」
- Gotchas 列表成了新人入职指南

### 六个月后
- Claude Code 对你的产品理解可能比新加入的人类同事还深
- 它知道每个技术选择背后的权衡
- 它知道哪些坑踩过、哪些路线尝试过又放弃了

**这就是「通过项目推进越来越清晰地理解用户」。**
不靠复杂的系统设计，靠在工作中自然积累。

---

## 快速开始

发给 Claude Code：

```
请帮我初始化 feature memory 系统：

1. 创建 context/me.md 和 context/product.md（我来填内容）
2. 创建 .features/ 目录
3. 在 CLAUDE.md 中加入 feature memory 的工作规则

然后问我：我目前最活跃的 3 个功能模块是什么？
帮我为它们创建初始的 MEMORY.md。
```

5 分钟搞定。然后正常工作，让记忆自然生长。
