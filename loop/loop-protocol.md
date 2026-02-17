# Loop Protocol — 自动化循环协议

> Shipyard 的自动化引擎。定义每次会话的标准循环流程。

## 会话启动协议（每次对话开始时执行）

```
1. READ  memory/index.md          → 获取总览和统计
2. READ  memory/weekly-state.md   → 获取本周进度
3. READ  memory/content-log.md    → 获取最近内容记录（避免重复）
4. SCAN  input/                   → 检查新素材
5. REPORT 当前状态给用户           → "本周进度 X/Y，有 N 条新素材待处理"
```

## 内容生成循环（收到素材或生成指令时执行）

```
┌─ INPUT ──────────────────────────────────┐
│ 素材（简报/Build Log/思考/链接/指令）       │
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
│    - 公众号 → 按 platform-rules 直接生成         │
│ 4. 运行质量自检清单                             │
└──────────────┬───────────────────────────┘
               ▼
┌─ OUTPUT ─────────────────────────────────┐
│ 1. 写入 output/{platform}/ 目录                 │
│ 2. 文件名: {date}-{platform}-{slug}.md          │
└──────────────┬───────────────────────────┘
               ▼
┌─ MEMORY UPDATE ──────────────────────────┐
│ 1. APPEND memory/content-log.md   → 追加内容记录 │
│ 2. APPEND memory/decisions.md     → 记录关键决策 │
│ 3. UPDATE memory/weekly-state.md  → 更新周进度   │
│ 4. UPDATE memory/index.md         → 更新统计数字 │
│ 5. 如有新模式 → UPDATE memory/patterns.md       │
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
- 判断素材类型（signal / build_log / thought）
- 追加到 weekly-state.md 的素材队列

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
