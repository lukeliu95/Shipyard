# Shipyard 🚢

> **Luke's SNS Content Agent — A Product Designer's AI Build Log**

Shipyard 是一个 AI 驱动的内容生产系统。把简报数据、Build Log、产品思考碎片，变成三个平台持续输出的 Builder 叙事。

它不是市场分析师，也不是翻译器。它是一个 **Builder 的叙事引擎**——帮你把「造东西」的过程讲出来。

---

## 核心身份

- **一句话：** 一个产品设计师的 AI 造物日志
- **口号：** Builder, not Analyst
- **内容来源：** 实战 shipping，不是市场分析

**绝对不做的事：**
- 不写「XX 赛道 2026 年展望」（市场分析师的活）
- 不写「手把手教你用 Claude API」（技术教程）
- 不转述 AI 新闻（除非直接影响产品决策）
- 不说「我们认为」「市场趋势表明」

---

## 工作流

```
素材输入
  → 存档到 input/
  → mckinsey-analyst 深度分析（必经）
  → 判断内容线 + 目标平台
  → 调用平台 Skill 生成内容
  → 质量自检
  → 输出到 output/
  → 更新三层索引 + 记忆系统
```

---

## 内容三条线

| 线 | 主题 | 频率 |
|----|------|------|
| Signal → Product Lens | 本周我看到了什么（信号 × 产品视角） | 每周 1-2 篇 |
| Build Log | 本周我做了什么（决策 × 选择 × 结果） | 每周 1-2 篇 |
| Methodology | 非工程师的 AI 产品方法论（实战抽象） | 每月 1-2 篇 |

---

## 三平台输出

| 平台 | 语言 | 风格 | Skill |
|------|------|------|-------|
| Substack | 英文 | Ben Thompson / Paul Graham，800-2500 words | `cn-to-substack-essay` |
| 微信公众号 | 中文 | 专业但讲人话，1500-3000 字 | `cn-to-wechat-article` |
| note.com | 日文 | 丁寧だが硬すぎない，1000-2000 字 | `cn-to-jp-note-writer` |

同一素材，三个平台产出**不同内容**，不是翻译，是本地化重写。

---

## 目录结构

```
Shipyard/
├── CLAUDE.md                    # Agent 灵魂（System Prompt）
├── index.html                   # 项目主页
│
├── context/                     # 静态背景知识
│   ├── product.md               # Shipyard 产品定义
│   ├── user.md                  # Luke 的画像和素材来源
│   └── platform-rules.md        # 三平台内容规范 + 写法公式
│
├── input/                       # 素材仓库
│   ├── INDEX.md                 # ← 素材总索引（LLM 读取入口）
│   ├── README.md                # 使用说明
│   ├── signals/                 # 外部信号简报
│   ├── build-logs/              # 产品迭代记录
│   └── thoughts/
│       ├── {date}-think-*.md    # 观点/洞察
│       └── {date}-todo-*.md     # 内容待办/选题池
│
├── output/                      # 内容成品库
│   ├── INDEX.md                 # ← 产出总索引 + 话题覆盖地图
│   ├── README.md                # 使用说明
│   ├── substack/                # 英文长文
│   ├── wechat/                  # 公众号文章
│   └── note/                    # 日语文章
│
├── memory/                      # 持久记忆系统
│   ├── index.md                 # ← Tier 1 总入口（每次必读）
│   ├── README.md                # 系统说明
│   ├── content-log.md           # 完整内容生产记录
│   ├── decisions.md             # 决策 why 记录
│   ├── patterns.md              # 可复用模式积累
│   └── weekly-state.md          # 本周运营状态
│
├── loop/                        # 自动化循环协议
│   ├── loop-protocol.md         # 循环引擎定义
│   └── content-log-template.md  # 记录模板
│
└── .claude/skills/              # 平台专用 Skill
    ├── cn-to-substack-essay/
    ├── cn-to-wechat-article/
    └── cn-to-jp-note-writer/
```

---

## 渐进式索引系统

Shipyard 的三个核心目录都配有索引文件，LLM 读取时先读索引，按需下钻：

```
memory/index.md   ← Tier 1，每次会话必读
  ↓ 按需
input/INDEX.md    ← 所有素材一览 + 处理状态
output/INDEX.md   ← 所有产出一览 + 话题覆盖地图（去重用）
  ↓ 仅在需要时
具体内容文件      ← 精准下钻
```

这样设计的原因：避免每次会话读取大量文件，保持上下文干净高效。

---

## 快速开始

推荐使用 **Claude Code** 或 **OpenCode** 驱动。

```bash
git clone https://github.com/lukeliu95/Shipyard.git
cd Shipyard
claude   # 或 opencode
```

启动后，Agent 会自动读取 `memory/index.md` 报告当前状态。

**投喂素材：**
- 简报数据 → 直接粘贴或新建 `input/signals/{date}-{slug}.md`
- Build Log → 新建 `input/build-logs/{date}-{slug}.md`
- 有想法 → `input/thoughts/{date}-think-{slug}.md`
- 想写某篇 → `input/thoughts/{date}-todo-{slug}.md`

**触发生成：** 告诉 Agent 「处理新素材」或「基于这条信号写一篇 Substack」

**审核发布：** 查看 `output/` 中生成的文件，确认后发布

---

## 当前状态（W08 / 2026-02-18）

- **总内容：** 15 篇（Substack 5 / 公众号 5 / note 5）
- **本周产出：** 15 篇 / 目标 5-7（严重超额）
- **已覆盖话题：** AI 恐慌×定价权 / PM-Quill 上线 / Agent 基础设施 / AI 二极化 / Vibe Coding 触壁 / Anthropic 工具升级 / 日本3兆円AI投資

---

Luke — [@LukeLiu95](https://x.com/LukeLiu95)
