---
platform: substack
language: en
content_line: signal
date: 2026-02-18
slug: vibe-coding-hangover-spec-first-era
status: draft
---

# The Vibe Coding Hangover: Why We're Entering the Spec-First Era

*Three months in, the AI-generated codebase becomes unreadable. And nobody can explain why anything works — or doesn't.*

---

In October, a Red Hat engineer dropped a warning that should have stopped the party. He'd been auditing AI-generated code for three months. The verdict? Not security bugs — though those were up 2.74x. Something worse. The code had become *inscrutable*. After 90 days of iteration, nobody on the team could explain why any particular decision had been made. The codebase worked. Until it didn't. And when it broke, there was no trail to follow, no logic to trace, no human judgment to interrogate.

This is the vibe coding hangover. And it's arriving right on schedule.

## The Promise That Broke

Six months ago, vibe coding felt like liberation. Tell an AI what you wanted. Watch it materialize. Iterate in natural language. Ship features in hours, not sprints. The barriers to building — the syntax, the frameworks, the arcane toolchain rituals — seemed to dissolve overnight.

The narrative was intoxicating. *Everyone can build now.* Non-engineers shipping products. Solo founders going from idea to MVP in a weekend. The long-promised democratization of software, finally delivered by large language models.

I bought in. I think most builders did, at least partially. I watched my own prototyping speed multiply. I watched designers build interactive prototypes that used to require engineering handoffs. I watched the gap between *conceiving* something and *seeing* it exist narrow to almost nothing.

But here's the thing about democratization: when everyone can do something, the scarce resource shifts. And in software, the scarce resource was never really *typing code*. It was *knowing what to build*.

## The Debt We've Been Building

Red Hat's warning points to a deeper pattern. Engineering debt — the accumulation of shortcuts and quick fixes that make future changes expensive — has historically lived in code. Messy abstractions, tight coupling, lack of documentation. Engineers learned to manage this debt because they understood the cost structure. Technical debt was visible, discussable, refinable.

What's emerging now is something different: **workflow debt**.

When you vibe code, you're not just skipping tests and documentation. You're skipping the entire deliberation phase where you decide *what the system should do*. The AI makes thousands of micro-decisions. It chooses variable names that imply certain structures. It infers relationships from ambiguous prompts. It builds on assumptions you never stated because you never had to state them.

Three months later, those assumptions are fossilized into a codebase that nobody fully understands. Not because the code is poorly written — the AI generates perfectly readable syntax. But because the *decision trail* is missing. Why this data model? Why this API boundary? Why this caching strategy? The answers are: *because it seemed right at the time*.

This isn't a critique of AI coding tools. I still use them daily. It's a critique of a particular way of using them — the pure vibe approach that treats specification as overhead rather than essence.

## The Realization Arriving

Greg Isenberg's prediction has been circulating: 50% of SaaS companies will die, replaced by zero-employee agent clusters that build $100M businesses in 18 months. Aaron Levie at Box has been pointing out that agent ROI depends on workflow redesign, not stronger models. Ramco Chia's NLW (Natural Language Workflow) platform lets non-engineering teams define agents directly. SoftBank is managing 2.5 million agents in production.

These signals aren't about coding. They're about *orchestration*.

When you step back, the pattern becomes obvious. We went from "AI writes code" to "AI runs workflows" to "AI designs the workflows themselves" in about 18 months. Each step moves the locus of value upstream. From implementation to integration to architecture to... specification.

The question isn't *can we build this?* anymore. It's *what should we build?*

In China, this realization is hitting simultaneously but from a different angle. 36Kr — the TechCrunch of China — recently declared this the "disenchantment moment" for AI. The four major tech giants have spent 4.5 billion yuan on user education, essentially teaching the market prompt engineering at scale. The message is clear: raw access to AI isn't enough. You need to know how to talk to it. You need to know what you're trying to accomplish.

## What Spec-First Actually Means

I want to be careful here. Spec-driven development isn't a return to waterfall. It's not about writing 200-page requirements documents before writing a line of code. That's not what I'm seeing work, and it's not what I'm building toward.

The version that makes sense for this moment looks more like this:

1. **Write the spec in natural language** — but write it *completely*. What are we building? Who is it for? What are the constraints? What are the tradeoffs we're making?

2. **Use AI to refine the spec** — interrogate it. Find edge cases. Surface hidden assumptions. Make the implicit explicit.

3. **Generate code from the spec** — now the AI has context. It knows why things are the way they are. It can make informed choices instead of guessing.

4. **Keep the spec as living documentation** — when the code changes, the spec changes. The trail of decisions remains visible and discussable.

The key shift is treating specification as the primary artifact, not the code. Code becomes an output. Spec becomes the source of truth.

## What I'm Building

I've been working on a tool called PM-Quill. The core insight came from my own frustration: I was spending more time managing the *context* I fed to AI coding tools than I was spending on the actual product decisions.

PM-Quill sits in that awkward gap between "I have an idea" and "let's write code." It's for the phase where you're figuring out what the thing actually is. What it should do. What it shouldn't do. The constraints and tradeoffs that will shape every downstream decision.

The hypothesis is simple: if we make spec writing feel as fluid as vibe coding, but with the rigor that makes the output actually useful, we solve the hangover problem before it starts. You get the speed of AI-assisted development with the auditability of intentional design.

Early users are product managers and technical founders who found themselves in exactly this gap. They could vibe code an MVP, but they couldn't iterate on it systematically. They could generate features, but they couldn't explain why certain architectural choices had been made. They needed a place to think before they built.

## The Broader Shift

There's a $2 trillion market cap loss happening in enterprise software right now. Microsoft and Amazon are down 16%. JPMorgan is calling it "oversold." But I think they're missing the structural story.

The old SaaS model was built on a simple equation: software has high fixed costs (engineering) but near-zero marginal costs (distribution). The winners were companies that could amortize engineering across the largest customer bases. Hence the platform giants.

AI breaks this equation in two ways. First, it drives the fixed cost of software toward zero. When agents can build features, the engineering moat evaporates. Second, it changes what customers value. They don't want another tool to manage. They want outcomes. They want workflows that run themselves.

The companies that survive this transition won't be the ones with the best codebases. They'll be the ones with the clearest specifications of what customers actually need — and the ability to generate the implementation on demand.

## The New Scarcity

Three months ago, I thought the scarce resource was engineering talent. That the bottleneck was our ability to translate ideas into working software.

I was wrong. The bottleneck was never technical. It was definitional.

When everyone can vibe code, "define what should be built" becomes more valuable than "build it." The product managers who can articulate requirements precisely. The founders who can describe the problem space completely. The designers who can specify behaviors unambiguously. These are the scarce resources now.

Red Hat's warning wasn't about AI safety or code quality. It was about **legibility**. The ability to read a system and understand its intent. Three months of pure vibe coding produces a black box. And black boxes are impossible to maintain, iterate, or trust.

The spec-first era isn't about going back to heavy processes. It's about recognizing that the specification *was always the valuable part*. We just couldn't separate it from the implementation. Now we can. And the builders who figure out how to work at the specification layer — who treat it as craft rather than overhead — will have an advantage that compounds.

## What I'm Watching

Three developments I'm tracking closely:

**Natural Language Workflows as platforms.** NLW, the Ramco Chia approach, feels like the right abstraction level. Not "AI writes Python" but "AI executes workflows defined in plain English." The spec is the product.

**Agent adoption metrics.** ArXiv's analysis of 129K projects shows 15-23% agent adoption. That feels low given the hype, which suggests we're still in the experimentation phase. The transition to production — where specs matter more than demos — is coming.

**SaaS replacement economics.** Greg Isenberg's zero-employee agent cluster thesis depends on marginal cost curves that I haven't seen proven yet. But the directional story is right. Fixed costs are falling. The question is what replaces them as the moat.

## The Takeaway

I still vibe code. I probably always will for prototyping and exploration. There's magic in the speed, in the ability to see an idea rendered in minutes rather than days.

But I've stopped pretending it's enough. The hangover is real. Three months of accumulated micro-decisions that nobody documented, nobody reviewed, nobody can explain. A codebase that works until it doesn't, and then requires a rewrite because there's nothing to debug — only to replace.

The spec-first era isn't a rejection of AI-assisted development. It's the maturation of it. We went from "look what AI can do" to "how do we make AI output usable at scale." The answer, predictably, is the thing we skipped: knowing what we wanted before we asked for it.

For builders, this is actually good news. The arbitrage opportunity of pure vibe coding — the person who could prompt engineer slightly better than everyone else — was always temporary. What's permanent is the ability to think clearly about problems and specify solutions precisely.

That skill just became more valuable than ever.

---

*If you're working on spec-driven tools or thinking about the intersection of product management and AI, I'd love to hear from you. I'm building in public at PM-Quill and writing here about what I'm learning. Drop a comment or reply — I read every one.*
