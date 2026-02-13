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
- **每日自动简报** —— 每天 9 点自动扫描，macOS 通知 + 邮件推送结果
- **自我进化** —— 每次运行后更新记忆，下次运行时接着上次的进度

两天内完成了 7 轮扫描，发现了 10+ 个赚钱信号，深挖了 AI 记忆赛道（6 竞品分析），并搭建了完整的自动化调度系统。

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
│   ├── state.md                 # 运行状态、待处理项、关注列表
│   ├── last-run.log             # 最近一次完整输出
│   └── last-run-summary.md      # 最近一次摘要（用于通知和邮件）
├── .features/                   # Feature Memory —— 每个功能模块的记忆
│   ├── github-learning/
│   │   ├── MEMORY.md            # 当前状态 + 快速索引 + 已知的坑
│   │   ├── data/                # 每次扫描的详细结果（按日期）
│   │   ├── decisions/           # 设计决策
│   │   └── changelog/           # 变更记录
│   ├── twitter-ai-radar/
│   │   └── ...（同上）
│   └── money-signal/
│       └── ...（同上）
├── scheduler/                   # 自动调度系统
│   ├── run-task.sh              # 调度器（触发扫描 → 通知 → 邮件）
│   ├── send-email.sh            # 邮件发送（AppleScript + Mail.app）
│   ├── com.bill-v1.radar.plist  # launchd 定时任务配置
│   └── setup-launchd.md         # 配置记录和管理命令
├── logs/                        # 运行日志
│   └── task-history.log         # 定时任务执行历史
├── Docs/                        # 设计文档
│   └── claude-code-memory-final.md  # 记忆增强方案设计稿
├── .claude/commands/            # Loop 命令（手动触发）
│   ├── radar.md                 # /radar —— 完整循环
│   ├── github.md                # /github —— 只扫 GitHub
│   ├── twitter.md               # /twitter —— 只看 Twitter
│   └── signal.md                # /signal —— 只分析赚钱信号
└── .gitignore
```

---

## 四大机制

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

信息雷达的持续运转机制，支持手动和自动两种触发方式：

**手动触发：** 通过 `/radar` 等命令在会话中执行。

**自动触发：** 通过 macOS launchd 定时任务，每天 09:00 自动执行完整循环。

```
触发（自动 09:00 / 手动 /radar）
  → Step 1: GitHub 扫描（WebSearch）
  → Step 2: Twitter/AI 动态扫描
  → Step 3: 交叉分析，提炼赚钱信号
  → Step 4: 输出简报 + 生成摘要
  → Step 5: 更新记忆 + 状态
  → Step 6: macOS 通知 + 邮件发送
  → 等待下次触发
```

每次循环的结果存入 `data/`，状态更新到 `loop/state.md`，摘要写入 `loop/last-run-summary.md`。

**不是后台服务。** 每次会话是一次量子跃迁。Loop 的连续性靠 `state.md` 保证，自动化靠 launchd 保证。

### 3. Scheduler（自动调度）

基于 macOS 原生能力的自动化系统，零外部依赖：

```
launchd（每天 09:00）
  → run-task.sh（调度器）
      → claude -p（无头模式执行 radar）
      → osascript（macOS 通知 + Glass 提示音）
      → send-email.sh（AppleScript 调用 Mail.app 发邮件）
```

特性：
- 电脑休眠醒来后自动补跑错过的任务
- 扫描完成后 macOS 右上角弹通知
- 自动发送简报邮件到 Gmail
- 所有执行记录写入 `logs/task-history.log`

管理命令：
```bash
# 查看服务状态
launchctl list | grep bill

# 手动触发测试
bash scheduler/run-task.sh radar

# 停止/重新加载
launchctl unload ~/Library/LaunchAgents/com.bill-v1.radar.plist
launchctl load ~/Library/LaunchAgents/com.bill-v1.radar.plist
```

### 4. 自我进化协议

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
mkdir -p context loop .features .claude/commands scheduler logs Docs
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

### Step 5: 配置自动调度（可选）

如果需要定时自动执行，参考 `scheduler/setup-launchd.md` 配置 macOS launchd。

### Step 6: 开始工作

正常使用 Claude Code。AI 会按 CLAUDE.md 中的协议自动读取和更新记忆。

---

## 设计哲学

**不造新系统，增强原生系统。** Claude Code 已经有完整的记忆系统（CLAUDE.md、Auto Memory、Rules）。我们在上面加了四样东西：Feature Memory、Loop 状态、自动调度、自我进化协议。

**用 Markdown 而不是数据库。** Markdown 是 Claude Code 的母语。不需要 SQLite、不需要向量数据库、不需要 API。纯文件，纯文本。

**用本地能力而不是云服务。** 定时任务用 macOS launchd，邮件用 AppleScript + Mail.app，通知用 osascript。零外部依赖，零费用。

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
- 自动调度开始每天推送简报

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
