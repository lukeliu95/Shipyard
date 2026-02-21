---
platform: substack
language: en
content_line: signal
date: 2026-02-18
slug: agents-need-a-job-description
status: draft
---

# Agents Don't Need Better Engines. They Need a Job Description.

*GitHub just embedded three AI agents into its platform. The real bottleneck isn't whether agents can work — it's whether anyone can tell them what to do.*

---

Last Monday, GitHub shipped its Agentic Workflows preview. Claude Code, Copilot, and OpenAI Codex — three competing agents, all running inside GitHub Actions, each in its own isolated container. Three engines, one platform, zero differentiation at the execution layer.

I read the announcement and felt something I didn't expect: relief.

Not because GitHub validated agents. Everyone already knew agents were coming. What GitHub validated was something subtler — that agent *engines* are becoming commodities. And if you've been building at the layer above the engine, the layer where you define what agents actually *do*, you just got the best possible news.

I've been building at that layer for a year. Let me explain why I think it matters more than the engines themselves.

## The Three-Stage Rocket

Here's how I see the agent stack evolving, based on what I'm watching in the market and what I'm experiencing as someone who ships agent-based products every week.

**Stage one: "Can it run?"** This is the model capability question. GPT-4, Claude, Gemini — they've all crossed the threshold. Agents can reason, use tools, and complete multi-step tasks. This stage is effectively over. The engines work.

**Stage two: "Can it run reliably?"** This is where Temporal just raised $300 million at a $5 billion valuation. Their revenue grew 380% year-over-year. Think about what that growth rate implies — agents fail *a lot*, and companies are paying serious money for infrastructure that catches them when they do. GitHub's isolated containers serve the same purpose. Stage two is being solved by infrastructure companies with deep pockets.

**Stage three: "What should it run?"** This is the question almost nobody is answering well. And it's the one that matters most.

When I look at antigravity-awesome-skills crossing 11,000 GitHub stars — a curated list of agent skills, essentially a catalog of "things agents can do" — I see the market screaming for stage three solutions. The demand isn't for better models or more reliable execution. The demand is for someone to define the tasks.

## I've Seen This Movie Before

The pattern is familiar if you've watched platform shifts before. AWS commoditized compute. What followed wasn't more compute companies — it was Salesforce, Slack, Notion, and every SaaS product that took cheap compute for granted and competed on what you could *do* with it.

Agent engines are following the same path. GitHub putting three of them side by side on the same platform is the equivalent of AWS making it trivially easy to spin up a server. Once the engine is a commodity, the value migrates upward — to the skill layer, the workflow layer, the "tell the agent what to do" layer.

This is where I've been spending my time. Not because I predicted this exact sequence, but because I'm a product designer, not an engineer. I can't build a better model. I *can* design a better workflow. And it turns out that's exactly what the market needs next.

## What the Doom Loop Tells Us About Demand

There's a parallel story playing out that reinforces this. Bloomberg recently described what they called the "Doom Loop" — investors simultaneously fearing that AI is too powerful (it'll destroy every business model) and too weak (all that capex will be wasted). Three CEOs — Microsoft's Suleyman, Anthropic's Amodei, and Ford's Farley — independently made similar claims about AI replacing white-collar work within 12-18 months.

The conventional read is that this is scary. The builder's read is different.

The Doom Loop creates a very specific kind of demand. Companies don't want fully autonomous agents — that's the "too powerful" fear. They don't want chatbots — that's the "too weak" fear. What they want is something in between: **structured AI workflows they can understand, control, and trust.**

I shipped PM-Quill last week. It's a product decision tool with four steps: /spec, /feasibility, /plan, /review. It's not an autonomous agent that makes decisions for you. It's a structured workflow that helps you make better decisions *with* an agent. Every step is visible. Every output is reviewable. The human stays in the loop — not because the AI can't do more, but because that's what people actually want right now.

The Doom Loop isn't a problem. It's a product requirement.

## Three Countries, One Consensus

Here's what convinced me this isn't hype: the signal is coming from everywhere simultaneously.

In the US, Box CEO Aaron Levie declared 2026 the year of agents. McKinsey put a number on it — $2.9 trillion in potential economic impact. Microsoft ran an "Agent-a-thon" during their AI Power Days.

In China, Tsinghua's AGI-Next summit reached a consensus that the chat paradigm is over. The country now has over 6,000 AI companies with core industry value exceeding 1.2 trillion yuan.

In Japan — and this one hit close to home because I build products for the Japanese market — Nikkei reported that 2026 is the first year agents will contribute meaningfully to corporate profits. SoftBank partnered with Japan's three mega-banks to form a new company developing a trillion-parameter AI model, backed by roughly $20 billion in investment.

When the US, China, and Japan independently arrive at the same conclusion, it's not a bubble. It's a structural shift. And structural shifts reward people who are already building, not people who start building after the shift is obvious.

## The Skill Author as a New Role

One more thing I keep thinking about. If agent engines are commodities and the value is in skills and workflows, then "skill author" becomes a real role — like Shopify theme developer or WordPress plugin author, but higher-value. A well-designed agent skill is essentially a vertical SaaS feature packaged as a reusable module.

The awesome-skills list at 11K stars is early evidence. People are already curating and sharing agent skills the way they used to share code libraries. The difference is that writing a good skill doesn't require deep engineering knowledge. It requires understanding a domain well enough to break a complex task into structured steps an agent can follow.

That's product design. That's what I do.

I'm not writing code when I build PM-Quill's four-step workflow or design skills for my Skill platform. I'm defining the structure of work — what goes in, what comes out, what decisions need human input, what can be automated. It turns out that's exactly the capability gap the market is trying to fill.

## What I'm Doing Next

The venture numbers tell a clear story: Decagon at $4.5 billion for customer service agents, ChipAgents raising $50 million for chip design agents, Thrive Capital loading up a $10 billion fund for more of the same. Money is flooding into vertical agent applications.

But most of that money is chasing the engine layer or the reliability layer. The skill definition layer — where someone actually figures out *what* the agent should do in a specific domain — remains wide open.

So here's my plan. I'm doubling down on the skill layer. PM-Quill is already there — it defines structured decision workflows for product managers. My Skill platform is there — it's a system for creating, testing, and distributing agent skills. GBaseGTM is there — it uses agent workflows to make 5 million Japanese company records actually useful for sales teams.

None of these require me to build a better model. None of them require me to solve reliability at scale. They all require me to understand domains deeply enough to tell agents what to do. And that's a skill — no pun intended — that product designers have been practicing for years.

GitHub just made agent engines a commodity. Temporal just made agent reliability a funded problem. The question that remains — the one worth spending your career on — is: what should these agents actually do?

I have some answers. I'm shipping them every week.

---

*If you're building at the skill layer too, I'd love to hear what you're working on. Reply to this email or find me on Twitter.*
