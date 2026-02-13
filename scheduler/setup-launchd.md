# launchd 定时任务配置记录

> 操作时间：2026-02-13 20:47（初始），22:05（目录重构）
> 操作人：Alan

## 背景

之前用 cron 配置定时任务，但执行失败。原因有两个：
1. cron 环境带 `CLAUDECODE` 变量，claude 误判为嵌套会话拒绝启动
2. macOS 上 cron 不够可靠（休眠不补跑、权限限制等）

## 方案：改用 launchd

macOS 原生任务调度器，优势：
- 电脑休眠醒来后自动补跑错过的任务
- 更好的环境变量控制
- 更好的日志管理

## 目录结构

```
scheduler/                  ← 定时任务系统（脚本 + 配置）
  run-task.sh              ← 调度器脚本
  setup-launchd.md         ← 本文件，配置记录
  com.bill-v1.radar.plist  ← plist 备份

logs/                       ← 纯日志
  task-history.log         ← 执行历史
  launchd-stdout.log       ← launchd stdout
  launchd-stderr.log       ← launchd stderr

loop/
  last-run.log             ← radar 最近一次完整输出
  last-run-summary.md      ← radar 一句话摘要（用于通知）
```

## 管理命令

```bash
# 查看服务状态
launchctl list | grep bill

# 停止服务
launchctl unload ~/Library/LaunchAgents/com.bill-v1.radar.plist

# 重新加载（修改 plist 后）
launchctl unload ~/Library/LaunchAgents/com.bill-v1.radar.plist
launchctl load ~/Library/LaunchAgents/com.bill-v1.radar.plist

# 手动触发测试
bash scheduler/run-task.sh radar
```

## 测试结果

- 2026-02-13 20:47 → 20:53：成功（约 6 分钟）
- 2026-02-13 21:53 → 21:57：成功（约 4.5 分钟，含通知 + 摘要生成）
