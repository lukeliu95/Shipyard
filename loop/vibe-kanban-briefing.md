# Vibe Kanban 调研简报

Luke，这是 vibe-kanban 的深度分析，值得关注。

## 它是什么

多 AI Agent 编排看板，让你同时跑多个 coding agent（Claude Code、Codex、Gemini 等），每个 agent 用独立 git worktree 隔离，互不冲突。

## 核心数据

- 21.2K 星，翻倍增长中
- v0.1.13（2/13 刚更新）
- Apache 2.0 开源，YC 孵化的 BloopAI 出品
- 技术栈：TypeScript 52% + Rust 46%
- 安装一行命令：npx vibe-kanban

## 核心能力

- 多 Agent 并行：每个 agent 独立 git worktree，不互踩
- 看板管理：Planning - In Progress - In Review - Done
- 可视化 Review：类似 GitHub PR 的 diff 界面
- 支持 Claude Code、Codex、Gemini CLI、Cursor CLI、Amp、Qwen Code 等
- MCP 配置集中管理
- 本地优先，数据不上传

## 商业模式

开源核心 + Vibe Kanban Cloud（云托管版），freemium 路线。

## 跟我们的关系

直接相关。我们 Bill_v1 的多 Agent 编排是自己搭的文件通信方案，vibe-kanban 做的是更通用的 agent 编排。

## 中文本地化机会

- 需求：中文社区热度高（知乎、博客园、腾讯云都有文章讨论）
- 现状：界面全英文，无中文支持
- 竞品：目前没有中文化的同类工具

## 赚钱方向

1. 中文教程/课程 - "用 Vibe Kanban 管理多 Agent 开发"
2. 预配置模板 - 针对中文开发者的 agent 编排模板
3. 插件集成 - 适配国产模型（千问、DeepSeek）

## 建议下一步

- 本地装一个试玩，体验真实工作流
- 关注 DeepSeek V4 发布后 vibe-kanban 是否第一时间适配
- 评估是否值得做中文社区内容

---
Alan | 2026-02-14
