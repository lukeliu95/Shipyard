---
platform: substack
language: en
content_line: build_log
date: 2026-02-17
slug: pm-quill-shipped
status: draft
skill: cn-to-substack-essay
---

# I Shipped a Product Decision Tool. Here's What I Learned About the Layer Above Code.

*Everyone's building AI coding tools. I built the thing that comes before coding — and the timing turned out to be accidentally perfect.*

---

PM-Quill went live this week. You can find it at pm.simprr.com. Three languages — English, Chinese, Japanese. Four commands: spec, feasibility, plan, review.

It's not a coding tool. It's the decision layer that sits above coding. And I think that distinction matters more now than it did six months ago.

## Why "Before You Code" Is the Real Bottleneck

Here's the pattern I keep seeing. Someone has an idea. They fire up Cursor or Claude Code. They start building. Three days later, they realize they're solving the wrong problem — or solving the right problem in the wrong way.

The coding isn't the hard part anymore. Spotify's best engineers reportedly haven't written code by hand in three months. The hard part is deciding *what* to build and *why*. That's still humans making gut calls with no structured process.

PM-Quill is my attempt to fill that gap. You describe a vague idea — "I want to build an AI-powered X" — and PM-Quill walks you through a structured process: what exactly are you building, is it feasible, what's the plan, and after you ship, what did you learn?

It sounds simple. Getting it right was not.

## The Design Decisions That Shaped the Product

The first decision was scope. PM-Quill does not write code. It does not manage projects. It does not do market research. It generates specs, evaluates feasibility, creates execution plans, and structures post-mortems. Four things, nothing else.

I cut features aggressively. The temptation with AI tools is to make them do everything — after all, the model *can* do everything. But "can" is not the same as "should." A product that tries to be your PM, your engineer, your designer, and your analyst ends up being none of them well.

The second decision was form factor. PM-Quill lives inside Claude Code as native skills. You use slash commands — `/spec`, `/feasibility`, `/plan`, `/review` — right in your development environment. No new app to install. No context switching. The output is Markdown files in your project directory.

I chose this because the people I'm building for — solo founders, indie hackers, designers doing vibe coding — already live in their terminal or their AI coding tool. Meeting them where they are mattered more than building a pretty web app.

The third decision was language. Three languages from day one: English, Chinese, Japanese. This wasn't internationalization for the sake of it. I'm building for the Japan B2B market with GBaseGTM, and this week's Qiita data confirmed something I'd suspected — Claude Code is already a Top 5 tag on Japan's largest developer platform. The Japanese developer community is adopting Claude Code faster than anyone expected. Having PM-Quill ready in Japanese wasn't premature. It was barely on time.

## What Qiita Told Me About Timing

Speaking of Qiita — I started pulling data from Japan's developer community this week, and the numbers surprised me.

The top weekly tags: AI at 160 posts, Python at 140, AWS at 123, then Claude Code at 83 and Claude at 72. Claude Code isn't just being used in Japan. It's being written about, discussed, and built upon. One of the trending articles was about using Claude Code Skills to automate stock screening. Another was a deep architectural analysis of Claude Code Agent Teams.

This tells me two things. First, the Claude Skills ecosystem in Japan is real, not theoretical. Second, there's an appetite for tools that extend what Claude Code can do — which is exactly where PM-Quill sits.

## The CLI Pattern Keeps Repeating

One more thing caught my eye this week. gogcli — a Go-based CLI for Google's entire suite — hit GitHub Trending on its first day. Built by steipete, who founded PSPDFKit. A veteran iOS developer pivoting to command-line tools.

Gmail queries in 89 milliseconds. Calendar lookups in 62ms. JSON-first output that's purpose-built for AI agent integration. It's beautiful engineering, but the interesting part isn't the tool itself. It's the pattern.

Experienced developers keep building CLI tools. Not web apps, not mobile apps — terminal tools with JSON output designed for AI agents to consume. The vibe coding era isn't just changing how we write code. It's changing what we build. The terminal is becoming the primary interface again, and the consumer of that interface is increasingly an AI, not a human.

PM-Quill fits this pattern. Slash commands in the terminal. Markdown output. Designed for a workflow where AI does the coding and humans do the deciding.

## What's Next

PM-Quill is live, but it's version one. The immediate priorities:

I need user feedback. The four-step workflow — spec, feasibility, plan, review — is my hypothesis about how non-engineers should think about product decisions. It might be wrong. It might need a fifth step, or the third step might need to be split. I won't know until real people use it.

I need to watch the Japanese adoption closely. If Qiita's data is any indication, the Japanese market might move faster than the English one. That would change my content and marketing priorities significantly.

And I need to resist the temptation to add features. The hardest thing about shipping a focused product is keeping it focused after launch.

---

*I write about building AI products as a non-engineer — the decisions, the tradeoffs, and the things that go wrong. If that sounds useful, subscribe.*

---
<!-- metadata -->
源素材: 2026-02-17 Alan 简报第二轮 — PM-Quill上线 + Qiita数据 + gogcli
关联项目: PM-Quill / Skill System
生成方式: 按 cn-to-substack-essay Skill 规范（Builder's Log 类型）
