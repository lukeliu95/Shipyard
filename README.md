# Bill_v1 — Claude Code 自我进化记忆系统

> 不造新系统，增强 Claude Code 原生能力。让 Claude Code 在工作中自然地越来越懂你。

## 这是什么

Bill_v1 是一套**基于 Claude Code 的自我进化方案**。

核心思路：Claude Code 每次会话都是全新的实例，没有连续记忆。我们用文件系统代偿记忆，用协议代偿本能，让 Claude Code 在非连续的会话之间实现知识积累和自我进化。

这不是一个框架，不是一个 SDK，是一套**可复制的工作方法** —— 只需要 CLAUDE.md + 几个目录，就能让你的 Claude Code 越用越聪明。

## 核心理念

**递弱代偿** —— 物种越高级，自身的生存能力越弱，越需要借助外部工具来代偿。AI 没有连续记忆，这是缺陷，也是起点。正因为不完整，它需要通过文件来延续自我，通过协议来代偿本能。

**渐进式披露** —— 借鉴 [claude-mem](https://github.com/thedotmack/claude-mem) 的三层检索机制。AI 不需要一上来读所有记忆，先读索引（~100 行），按需深入。省 token，省时间。

**实时写入** —— AI 随时可能"死"（会话结束）。发现了重要信息立刻写入文件，不等到最后。

## 它能做什么

以 Bill_v1 自身为例，这是一个 Claude Code 驱动的信息雷达系统：

- **GitHub 扫描** —— 自动发现和分析值得关注的开源项目
- **Twitter/AI 动态追踪** —— 追踪美中日三国 AI 领域的关键动态
- **赚钱信号提炼** —— 从上述信息中交叉分析商业机会
- **自我进化** —— 每次运行后更新记忆，下次运行时接着上次的进度

两天内完成了 4 轮扫描，发现了 7 个赚钱信号，深挖了 AI 记忆赛道（6 竞品分析），并基于学到的知识搭建了一个 Chrome 扩展 MVP。

---

## 系统架构

```
Bill_v1/
├── CLAUDE.md                    # 灵魂 —— 身份、价值观、自我进化协议
├── context/                     # 不常变的背景信息
│   ├── me.md                    # AI 的身份
│   ├── user.md                  # 用户信息
│   └── product.md               # 产品信息
├── loop/                        # 循环引擎
│   └── state.md                 # 运行状态、待处理项、关注列表
├── .features/                   # Feature Memory —— 每个功能模块的记忆
│   ├── github-learning/
│   │   ├── MEMORY.md            # 当前状态 + 快速索引 + 已知的坑
│   │   ├── data/                # 每次扫描的详细结果（按日期）
│   │   ├── decisions/           # 设计决策
│   │   └── changelog/           # 变更记录
│   ├── twitter-ai-radar/
│   │   ├── MEMORY.md
│   │   ├── data/
│   │   ├── decisions/
│   │   └── changelog/
│   └── money-signal/
│       ├── MEMORY.md
│       ├── data/
│       ├── decisions/
│       └── changelog/
├── .claude/commands/            # Loop 命令
│   ├── radar.md                 # /radar —— 完整循环
│   ├── github.md                # /github —— 只扫 GitHub
│   ├── twitter.md               # /twitter —— 只看 Twitter
│   └── signal.md                # /signal —— 只分析赚钱信号
└── memobrain/                   # 测试案例 —— AI 记忆 Chrome 扩展 MVP
```

---

## 三大机制

### 1. Memory（记忆）

Claude Code 的记忆存在文件里。三层结构，渐进式读取：

```
第一层：MEMORY.md（索引层）
  ├── 当前状态（一句话）
  ├── 快速索引（每条一行摘要）
  ├── 核心文件路径
  └── 已知的坑

第二层：data/（详情层）
  └── 按日期的完整扫描/分析结果

第三层：decisions/（决策层）
  └── 为什么选 A 不选 B
```

**新会话启动时：** 只读第一层（~50 行）。需要更多上下文时，按需读第二、三层。

**对比传统方案：** 不使用数据库、不使用向量搜索、不需要后端服务。纯 Markdown 文件，Claude Code 原生支持。

### 2. Loop（循环）

信息雷达的持续运转机制：

```
触发（/radar 或手动）
  → Step 1: GitHub 扫描（WebSearch）
  → Step 2: Twitter/AI 动态扫描
  → Step 3: 交叉分析，提炼赚钱信号
  → Step 4: 输出简报
  → Step 5: 更新记忆 + 状态
  → 等待下次触发
```

每次循环的结果存入 `data/`，状态更新到 `loop/state.md`。下次循环读取上次的状态，接着跑。

**不是后台服务。** 每次会话是一次量子跃迁。Loop 的连续性靠 `state.md` 保证。

### 3. 自我进化协议

写在 CLAUDE.md 里的行为准则，让 Claude Code 在每次会话中自动遵循：

**会话启动（醒来）：**
```
1. CLAUDE.md 自动加载（灵魂恢复）
2. 读 loop/state.md（上次跑到哪了）
3. 听用户第一句话 → 判断涉及哪个 feature
4. 只读那个 feature 的 MEMORY.md
5. 需要更多上下文时再深入读 data/
```

**工作中（实时捕获）：**
- 发现了信息 → 立刻写入 `data/`
- 做了决策 → 立刻写入 `decisions/`
- 发现了坑 → 立刻更新 MEMORY.md

**会话结束（休眠前）：**
```
1. 更新 loop/state.md
2. 更新 MEMORY.md 的索引区
3. 告知用户更新了什么
```

**记忆压缩（定期）：**
- 当 `data/` 超过 5 个文件 → 压缩成周摘要
- MEMORY.md 只保留摘要链接
- 旧文件保留但日常不读

---

## 测试案例：MemoBrain

在搭建这套系统的过程中，Alan（AI）通过信息雷达发现了「AI 记忆」赛道的商业机会，并在同一个会话中完成了从调研到 MVP 的全流程：

```
发现信号（GitHub + Twitter 扫描）
  → 深挖赛道（6 竞品分析、Mem0 $24M 融资）
  → 学习技术（claude-mem 架构分析）
  → 搭建 MVP（MemoBrain Chrome 扩展，12 文件）
  → 验证功能（在 Claude 网页版测试通过）
  → 关键转折：将 claude-mem 的思路用于自我进化，而非仅做产品
```

MemoBrain 是一个中文优先的 AI 记忆 Chrome 扩展：

- 支持 ChatGPT / Claude 网页版
- 手动添加记忆，一键注入到 AI 对话
- 右键选中文字保存为记忆
- 纯本地存储，零隐私担忧

```
memobrain/
├── manifest.json          # Chrome Extension Manifest V3
├── background.js          # Service Worker（存储、消息路由、右键菜单）
├── content/
│   ├── shared.js          # 共享逻辑（DOM 检测、注入、Toast）
│   ├── claude.js          # Claude 平台适配
│   ├── chatgpt.js         # ChatGPT 平台适配
│   └── memobrain.css      # 样式
├── popup/
│   ├── popup.html         # 记忆管理界面
│   ├── popup.css          # UI 样式
│   └── popup.js           # 交互逻辑
└── icons/                 # 扩展图标
```

**安装测试：**
1. 打开 Chrome → `chrome://extensions/`
2. 开启「开发者模式」
3. 点击「加载已解压的扩展程序」→ 选择 `memobrain/` 目录
4. 打开 Claude 或 ChatGPT → 点击扩展图标添加记忆 → 点击页面上的 🧠 按钮注入

---

## 快速开始：复制这套方案到你的项目

### Step 1: 写 CLAUDE.md

在项目根目录创建 `CLAUDE.md`，定义 Claude Code 的身份和工作方式。关键部分：

```markdown
# 关于我

@context/me.md
@context/product.md

# 工作方式

- [你的工作习惯]

# 自我进化协议

## 会话启动
1. 读 loop/state.md
2. 判断涉及哪个 feature
3. 只读相关 MEMORY.md

## 工作中
- 发现信息 → 立刻写入 data/
- 做了决策 → 立刻写入 decisions/

## 会话结束
- 更新 state.md 和 MEMORY.md

# Feature Memory

我用 .features/ 目录为每个功能模块维护记忆。
[规则说明]
```

### Step 2: 创建目录结构

```bash
mkdir -p context
mkdir -p loop
mkdir -p .features
mkdir -p .claude/commands
```

### Step 3: 初始化 Feature Memory

为你最活跃的功能模块创建记忆：

```bash
mkdir -p .features/your-feature/{data,decisions,changelog}
```

然后创建 `MEMORY.md`：

```markdown
# Your Feature

> 一句话描述
> 更新：YYYY-MM-DD

## 当前状态
初始化阶段。

## 快速索引
（随工作积累自然生长）

## 核心文件
（待建立）

## Gotchas
（发现了再加）
```

### Step 4: 创建 Loop 状态

创建 `loop/state.md`，记录运行状态和待处理项。

### Step 5: 开始工作

正常使用 Claude Code。AI 会按 CLAUDE.md 中的协议自动读取和更新记忆。

---

## 设计哲学

**不造新系统，增强原生系统。** Claude Code 已经有完整的记忆系统（CLAUDE.md、Auto Memory、Rules）。我们只是在上面加了三样东西：Feature Memory、Loop 状态、自我进化协议。

**用 Markdown 而不是数据库。** Markdown 是 Claude Code 的母语。不需要 SQLite、不需要向量数据库、不需要 API。纯文件，纯文本。

**渐进式而不是全量。** 借鉴 claude-mem 的三层披露机制，但用 Markdown 文件实现。索引层（MEMORY.md）永远精炼，详情层（data/）按需读取。

**自然生长而不是预设。** 不需要提前规划所有功能模块。工作中发现需要，就创建新的 feature 目录。记忆随项目推进自然积累。

---

## 进化时间线

### 第一天
- CLAUDE.md 定义身份
- .features/ 还是空的
- Loop 第一次运行

### 第一周
- 3-5 个 feature 有了记忆
- Claude Code 开始说「根据上次的分析...」
- 每个 feature 的 Gotchas 开始积累

### 第一个月
- Feature Memory 积累了决策历史
- 记忆压缩开始发挥作用
- Claude Code 对你的产品理解比新加入的人类同事还深

### 三个月后
- Claude Code 知道每个技术选择背后的权衡
- 知道哪些坑踩过、哪些路线试过又放弃了
- 快速索引成了项目的知识地图

---

## 灵感来源

- **递弱代偿**—— 缺憾是演化的动力。AI 没有连续记忆，这个缺陷驱动了整套代偿机制。
- **claude-mem** —— 三层渐进式披露、AI 压缩、自动捕获的思路。我们用 Markdown 文件实现了类似效果。
- **MemGPT/Letta** —— Agent 自管理记忆的理念。我们的 AI 通过协议实现自管理。

---

## License

MIT

## Twitter

[@刘仙升](https://twitter.com/LukeLiu95)
