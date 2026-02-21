# Loop Protocol — 自动化循环协议

> Shipyard 的自动化引擎。定义每次会话的标准循环流程。

## 会话启动协议（每次对话开始时执行）

> 遵循渐进式披露原则：先读索引，按需下钻，不要一次读取所有文件。

```
【Tier 1 — 必读】
1. READ  memory/index.md
   → 获取统计摘要、本周快照、最近5条内容
   → 判断是否需要下钻

【Tier 2 — 按需读取（根据 Tier 1 判断）】
2. IF 有待处理素材或需要查素材状态:
     READ  input/INDEX.md         → 素材全览 + 处理状态
3. IF 需要确认话题覆盖或去重:
     READ  output/INDEX.md        → 产出全览 + 话题覆盖地图
4. IF 需要本周进度细节:
     READ  memory/weekly-state.md → 素材队列、todo 选题池

【汇总 → 向用户报告】
5. REPORT 本周进度 X/Y，有 N 条待处理素材，M 个可推进选题
```

## 内容生成循环（收到素材或生成指令时执行）

```
┌─ INPUT ──────────────────────────────────┐
│ 素材（简报/Build Log/思考/链接/指令）       │
└──────────────┬───────────────────────────┘
               ▼
┌─ ARCHIVE ────────────────────────────────┐
│ 结构化存档到 input/ 对应子目录：                   │
│   - 简报 → input/signals/{date}-{slug}.md        │
│   - Build Log → input/build-logs/{date}-{slug}.md│
│   - 观点/洞察 → input/thoughts/{date}-think-{slug}.md │
│   - 内容待办 → input/thoughts/{date}-todo-{slug}.md   │
│ 存档素材作为未来会话的参考记忆                    │
└──────────────┬───────────────────────────┘
               ▼
┌─ ANALYZE（必经步骤）─────────────────────┐
│ 调用 mckinsey-analyst Skill 进行深度分析：   │
│   - 三层金字塔：表面数据→深层驱动→战略启示   │
│   - 因果链和二阶效应提取                     │
│   - Builder 视角机会判断                     │
│   - 各平台角度建议                           │
│ 分析结果作为内容生成的核心输入               │
└──────────────┬───────────────────────────┘
               ▼
┌─ CLASSIFY ───────────────────────────────┐
│ 1. 判断内容线: signal / build_log / methodology │
│ 2. 判断目标平台: substack / wechat / note        │
│ 3. 参考 memory/patterns.md 匹配最佳写法         │
└──────────────┬───────────────────────────┘
               ▼
┌─ GENERATE ───────────────────────────────┐
│ 1. 读取 context/platform-rules.md 获取平台规范  │
│ 2. 读取 memory/content-log.md 检查近期内容      │
│ 3. 调用对应 Skill 生成内容：                     │
│    - Substack → cn-to-substack-essay            │
│    - note → cn-to-jp-note-writer                │
│    - 公众号 → cn-to-wechat-article              │
│ 4. 运行质量自检清单                             │
└──────────────┬───────────────────────────┘
               ▼
┌─ OUTPUT ─────────────────────────────────┐
│ 1. 写入 output/{platform}/ 目录                 │
│ 2. 文件名: {date}-{platform}-{slug}.md          │
└──────────────┬───────────────────────────┘
               ▼
┌─ MEMORY UPDATE ──────────────────────────┐
│ 1. APPEND memory/content-log.md   → 追加完整生产记录      │
│ 2. UPDATE output/INDEX.md         → 追加新内容行 + 更新话题地图 │
│ 3. UPDATE input/INDEX.md          → 将已使用素材标记为 done │
│ 4. UPDATE memory/index.md         → 更新统计数字 + 最近5条  │
│ 5. UPDATE memory/weekly-state.md  → 更新周进度             │
│ 6. APPEND memory/decisions.md     → 记录关键决策（如有）    │
│ 7. 如有新模式 → UPDATE memory/patterns.md                 │
└──────────────────────────────────────────┘
```

## 周循环（每周一执行）

```
1. ARCHIVE  memory/weekly-state.md → 归档上周状态
2. RESET    memory/weekly-state.md → 初始化新一周
3. REVIEW   上周 content-log 记录 → 总结产出情况
4. IDENTIFY 上周遗留事项 → 写入新周 weekly-state
5. SCAN     input/ 中积压素材 → 更新待处理队列
```

## 月循环（每月初执行）

```
1. REVIEW   本月所有 content-log 记录
2. UPDATE   memory/patterns.md → 提炼新模式
3. CHECK    是否该产出 Methodology 长文
4. PLAN     下月内容重点方向
```

## 素材处理状态机

```
素材状态流转：
  queued → processing → generated → reviewed → published
                ↓
            skipped（决定不做，记录原因到 decisions.md）
```

## 自动化规则

### 素材入队
当 input/ 目录下出现新文件时：
- 自动读取内容
- 按文件名前缀判断素材类型：
  - `signals/` → signal
  - `build-logs/` → build_log
  - `thoughts/think-*` → thought（作为内容角度输入，结合其他素材生成内容）
  - `thoughts/todo-*` → todo（进入选题池，等待素材成熟后推进）
- signal / build_log / thought 追加到 weekly-state.md 的素材队列
- todo 追加到 weekly-state.md 的选题池（单独维护，不算入素材计数）

### 选题池（todo）推进规则
每次会话启动时扫描 `input/thoughts/todo-*`：
- 判断每个 todo 的 priority 和所需素材
- 如果当前已有足够素材可以动笔 → 主动提示用户：「选题『XXX』现在可以推进了」
- 如果素材不足 → 继续等待，不提示

### 内容去重
生成前必须检查 content-log.md：
- 同一信号源不在 7 天内重复使用
- 同一产品决策不在同一平台重复发布
- 同一方法论主题不在 30 天内重复

### 跨平台联动
一条素材可以生成多平台内容，但：
- 不是翻译，是本地化重写
- 在 content-log.md 中用 `related` 字段关联
- 不同平台的角度和深度不同
