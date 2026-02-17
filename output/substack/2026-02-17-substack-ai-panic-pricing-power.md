---
platform: substack
language: en
content_line: signal
date: 2026-02-17
slug: ai-panic-pricing-power
status: draft
skill: cn-to-substack-essay
---

# The AI Panic Is Really a Pricing Power Test

*A former karaoke company shipped an AI logistics tool. Wall Street lost its mind. Here's what I see as someone actually building AI products.*

---

CBRE down 12%. JLL down 12%. CH Robinson down 15%. All in the same week, all for the same reason: a Chinese tech company — one that used to make karaoke machines — released an AI-powered logistics tool, and suddenly the market decided that entire industries were on borrowed time.

Bloomberg captured the mood perfectly: AI is "both too powerful and too weak." But I think the real framing is different. The market isn't asking "will AI replace me?" It's asking something far more specific: **can I pass the cost of AI onto my customers, or will I absorb it until I die?**

That's pricing power. And right now, the market is doing a brutal binary sort.

## The Food Chain Is Being Repriced

Upstream companies with pricing power — NVIDIA, Vistra, Constellation Energy — are holding steady. They sell the picks and shovels. When AI gets bigger, they charge more. Simple.

Downstream companies without pricing power — Salesforce, UiPath, the entire logistics middleman layer — are getting crushed from both ends. Their costs go up because they need AI. Their revenue gets threatened because AI might replace them. That's not a cycle. It's a structural repricing of the entire industrial food chain.

I've been watching this play out across three geographies simultaneously. In the U.S., it's panic selling. In Japan, corporations are raising prices — testing whether their customers will absorb the AI cost increase. In China, tech giants are throwing billions at AI red envelope campaigns, essentially subsidizing adoption to establish distribution. Three countries, three different strategies, one shared conclusion: **the old equilibrium is gone.**

## What This Means for What I'm Building

I keep coming back to this question when I look at my own products: does this thing help customers cut costs, or does it help them charge more?

Cost-cutting tools become commodities. Every competitor can ship the same efficiency gains. But products that give customers pricing power — that help them see opportunities their competitors can't, or serve markets their competitors won't — those survive the repricing.

Take GBaseGTM, the Japanese enterprise database I'm building. If it just answers "tell me about this company," it's dead. AI search will eat that alive within a year. But if it can surface signals — this company's AI hiring just spiked, that company's procurement patterns suggest expansion — then it gives sales teams an edge their competitors don't have. That's pricing power for the customer, which means pricing power for me.

I'm actively restructuring the product around this distinction.

## Two Signals That Changed My Week

The first is zvec. It gained over a thousand GitHub stars in a single day — an embedded vector search library that runs entirely locally.

My Skill platform has been using cloud-based vector storage. For most users, that's fine. But my Japanese enterprise clients are non-negotiable about data residency. They will not use a product that sends their data overseas. Period. zvec's explosion confirmed something I'd been circling around: **local-first architecture isn't a nice-to-have for the Japan market. It's a hard requirement.**

I'm evaluating the switch this week.

The second signal: Claude Cowork launched on Windows, instantly covering 70% of desktops. For anyone building AI Skills — and I've been deep in this for months — the distribution problem just got a lot simpler. I've been agonizing over how to get Skills in front of more users. The answer, it turns out, is to stop building distribution and start integrating with platforms that already have it.

## The Builder's Takeaway

The noise this week is about panic. Stocks crashing, analysts revising, everyone scrambling to figure out which companies survive the AI wave.

I don't find any of that useful for building products. What I find useful is the underlying question: **does your product give customers the ability to charge more, or does it just help them spend less?**

If you're building in the "spend less" category, you're competing with every other AI tool on the planet. If you're building in the "charge more" category, you might actually have something.

That's what I'm optimizing for this week. Everything else is noise.

---

*If you're building AI products as a non-engineer, I write about the decisions behind shipping — not the code. Subscribe for weekly build logs and signal analysis from the product design side of AI.*

---
<!-- metadata -->
源素材: 2026-02-17 Alan 简报 — AI恐慌交易深层逻辑分析
关联项目: Skill System / GBaseGTM
生成方式: 按 cn-to-substack-essay Skill 规范重写
