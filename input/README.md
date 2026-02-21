# input/ — 素材仓库

这里存放所有投喂给 Shipyard 的原始素材。
素材在这里等待被分析、分类、转化为可发布的内容。

---

## 目录结构

```
input/
├── INDEX.md          ← 素材总索引（LLM 读取入口，人工快速浏览用）
├── README.md         ← 你正在读的这个
├── signals/          ← 外部信号：简报、新闻、市场数据
├── build-logs/       ← 产品迭代记录：我做了什么、怎么决策的
└── thoughts/         ← 产品思考：我的观点 + 内容待办
    ├── think-*.md    ← 观点/洞察（作为内容角度输入）
    └── todo-*.md     ← 内容待办/选题池（等待素材成熟）
```

---

## 三个子目录

### signals/ — 外部信号

**什么放这里：** 简报数据、外部文章、市场动态、产品发布消息
**文件命名：** `{YYYY-MM-DD}-{slug}.md`

素材到这里是为了提炼 Builder 视角的洞察，不是转述新闻。
Shipyard 会先用 `mckinsey-analyst` 深度分析，再判断是否值得写成内容。

```
示例：
2026-02-18-vibe-coding-crisis.md
2026-02-18-claude-web-search-dynamic-filtering.md
```

---

### build-logs/ — 产品迭代记录

**什么放这里：** 本周做了什么、遇到了什么选择、放弃了什么、结果如何
**文件命名：** `{YYYY-MM-DD}-{slug}.md`

这是三条内容线里最有差异化价值的素材。
不需要写完整，关键词 + 决策逻辑就够，Shipyard 会帮你展开。

```
示例格式：
今天重新设计了 PM-Quill 的 /review 步骤。
原因：用户反馈第三步太重，很多人中途放弃。
决策：把 /review 拆成两个子命令，允许只做快速检查。
下一步：看数据，两周后评估完成率变化。
```

---

### thoughts/ — 产品思考

**什么放这里：** 脑子里转的想法，分两种：

#### `think-` — 观点/洞察

对某件事有看法，想日后作为文章的切入角度。
**文件命名：** `{YYYY-MM-DD}-think-{slug}.md`
**触发行为：** Shipyard 将其作为内容角度，结合其他素材生成内容。

```
示例：
2026-02-20-think-ai-tools-cant-replace-taste.md

内容：
工具越来越强，但「知道要做什么」这件事没有变。
Vibe Coding 让更多人能执行，但设计判断力反而更值钱了。
```

#### `todo-` — 内容待办/选题池

想写某篇文章，但现在素材还不够，先记下来等待时机。
**文件命名：** `{YYYY-MM-DD}-todo-{slug}.md`
**触发行为：** 进入选题池。每次会话启动时，Shipyard 会检查哪些 todo 现在可以推进。

```
示例文件格式：

---
type: todo
priority: high
platform: substack, wechat
content_line: methodology
---

想写：非工程师怎么用 Spec-Driven Development

核心论点：
Vibe Coding 解决了「执行」，但没解决「定义问题」。
/spec → /feasibility → /plan → /review 这套流程
是在 Vibe Coding 之上的一层元工作流。

还缺的素材：
- 更多用户用 PM-Quill 失败的案例（说明 spec 不清楚的代价）
- 一个完整的对比：有 spec vs 没有 spec 的 shipping 过程
```

---

## 文件命名规则

| 类型 | 格式 | 示例 |
|------|------|------|
| 信号简报 | `{date}-{slug}.md` | `2026-02-18-weekly-briefing.md` |
| 产品迭代 | `{date}-{slug}.md` | `2026-02-18-pm-quill-review-redesign.md` |
| 观点洞察 | `{date}-think-{slug}.md` | `2026-02-20-think-spec-before-vibe.md` |
| 内容待办 | `{date}-todo-{slug}.md` | `2026-02-20-todo-non-engineer-ai-workflow.md` |

---

## 素材的生命周期

```
投入 input/          →  Shipyard 分析 + 生成内容
                     →  INDEX.md 状态更新为 ✅ done
                     →  素材永久保留（作为历史参考）
```

素材不会被删除。已处理的素材留在原位，INDEX.md 里标记状态即可。

---

## 快速查看

想知道哪些素材还没处理、选题池里有什么 → 看 **INDEX.md**
不需要逐个打开文件。
