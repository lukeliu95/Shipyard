#!/bin/bash
# Bill_v1 定时任务执行器
# 由 launchd 每天 9:00 触发，执行 radar 循环
# 如果电脑休眠错过了，醒来后会自动补跑

PROJECT_DIR="/Users/lukeliu/Desktop/Claude/Bill_v1"
LOG_FILE="$PROJECT_DIR/logs/task-history.log"
LAST_RUN_LOG="$PROJECT_DIR/loop/last-run.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
TASK_NAME="${1:-radar}"

# 关键：清除 CLAUDECODE 变量，避免嵌套会话检测
unset CLAUDECODE

# 确保 PATH 包含 claude 命令
export PATH="/Users/lukeliu/.local/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# macOS 通知函数
notify() {
  local title="$1"
  local message="$2"
  osascript -e "display notification \"$message\" with title \"$title\" sound name \"Glass\""
}

# 写入任务开始日志
echo "========================================" >> "$LOG_FILE"
echo "[$TIMESTAMP] 任务开始: $TASK_NAME" >> "$LOG_FILE"
echo "触发方式: launchd 定时任务" >> "$LOG_FILE"

# 进入项目目录
cd "$PROJECT_DIR"

# 清空上次运行日志
> "$LAST_RUN_LOG"

# 执行 radar 循环
claude -p "执行 radar 循环：先读 loop/state.md，然后按 .claude/commands/radar.md 的流程跑一次完整扫描。最后用一句话总结今天最值得关注的发现，写入 loop/last-run-summary.md" \
  --allowedTools 'WebSearch,WebFetch,Read,Write,Edit,Glob,Grep' \
  >> "$LAST_RUN_LOG" 2>&1
EXIT_CODE=$?

# 写入任务结束日志 + 发通知
END_TIME=$(date '+%Y-%m-%d %H:%M:%S')
if [ $EXIT_CODE -eq 0 ]; then
    echo "[$END_TIME] 任务完成: $TASK_NAME (成功)" >> "$LOG_FILE"
    # 读取摘要发通知
    SUMMARY_FILE="$PROJECT_DIR/loop/last-run-summary.md"
    if [ -f "$SUMMARY_FILE" ]; then
        SUMMARY=$(head -c 200 "$SUMMARY_FILE")
    else
        SUMMARY="扫描完成，查看 loop/last-run.log 了解详情"
    fi
    notify "Alan 雷达扫描完成" "$SUMMARY"
    # 发送邮件简报
    bash "$PROJECT_DIR/scheduler/send-email.sh" "$SUMMARY_FILE" >> "$LOG_FILE" 2>&1
else
    echo "[$END_TIME] 任务完成: $TASK_NAME (失败, exit code: $EXIT_CODE)" >> "$LOG_FILE"
    notify "Alan 雷达扫描失败" "exit code: $EXIT_CODE，查看 logs/task-history.log"
fi
echo "========================================" >> "$LOG_FILE"
