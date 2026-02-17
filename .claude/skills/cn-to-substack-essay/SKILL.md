---
name: cn-to-substack-essay
description: >
  Convert Chinese content into native-level English Substack essays in Markdown format.
  Takes Chinese drafts, bullet points, Twitter threads, notes, or topic outlines as input
  and produces long-form essays that read as if written by a native English-speaking
  Substack author in the tech/business niche (think Ben Thompson, Lenny Rachitsky,
  Paul Graham style). Use this skill whenever the user provides Chinese content and wants
  an English Substack article, newsletter post, or long-form essay. Also trigger when the
  user says: "write a Substack post", "convert to Substack style", "make this a newsletter",
  "Chinese to English essay", "长文", "Substack风格", or any request involving
  Chinese-to-English content transformation for Substack publishing. This is NOT a literal
  translator — it rewrites content from scratch in native English with Substack conventions.
---

# Chinese → Substack Essay Converter

Transform Chinese content into publication-ready English Substack essays that read as if
written by a native speaker building in public.

## When to Use

- User provides Chinese text (draft, bullet points, thread, notes) and wants English output
- User mentions "Substack", "newsletter", "essay", "长文" in context of English publishing
- User has a Chinese Twitter thread or WeChat article to repurpose for English audience
- User wants to reach an American/global audience with content originally conceived in Chinese

## Core Philosophy

The output is NOT a translation. It is a **rewrite from scratch** that:

1. Captures the original ideas and arguments faithfully
2. Expresses them in a voice that is indistinguishable from a native English writer
3. Follows Substack publishing conventions that drive engagement
4. Removes any structure or phrasing artifacts that reveal non-native origin

## Workflow

1. **Analyze input** — Identify the core thesis, supporting arguments, evidence, and personal experience
2. **Determine essay type** — Match to the best Substack format (see Essay Types below)
3. **Restructure** — Reorganize for Substack's long-form, prose-first format
4. **Write in native English** — Rewrite entirely, not translate; the original Chinese is source material, not a template
5. **Apply Substack conventions** — Subtitle, section flow, CTA, formatting
6. **Self-review** — Check against the Native Voice Checklist
7. **Output as .md** — Save to /mnt/user-data/outputs/ and present to user

## Essay Types

Match the input content to one of these Substack formats:

| Type | When to Use | Structure |
|------|-------------|-----------|
| **Analysis** | Market trends, industry takes, strategic thinking | Thesis → Evidence → Implications → Builder's perspective |
| **Builder's Log** | Product decisions, technical choices, lessons learned | Context → Decision point → What I chose and why → Results |
| **Contrarian Take** | Challenging conventional wisdom, "everyone is wrong about X" | Conventional take → Why it's wrong → Reframe → What to do instead |
| **Signal Report** | Curating and interpreting multiple data points or events | Opening frame → Signal 1 → Signal 2 → Signal 3 → Synthesis |
| **How I Think About X** | Frameworks, mental models, decision-making processes | Problem → Framework introduction → Application → When it breaks down |

## Substack Formatting Conventions

### Structure

```
# Title
*Subtitle — one sentence that frames the essay's promise or tension*

---

[Opening: 1-2 paragraphs. Start with a concrete scene, a surprising data point,
 or a provocative claim. Never start with "In this article, I will discuss..."]

## First Section Heading
[2-4 paragraphs of connected prose]

## Second Section Heading
[2-4 paragraphs of connected prose]

## Final Section Heading — typically the personal takeaway
[1-3 paragraphs wrapping the argument back to the builder's perspective]

---

*Closing CTA — encourage sharing, commenting, or subscribing.
 Keep it to 1-2 sentences. Never hard-sell.*
```

### Formatting Rules

- **Prose first.** Write in connected paragraphs. Never default to bullet points or numbered lists unless the content is genuinely a list (steps, tools, resources).
- **Headings are section markers, not outlines.** Use 2-4 `##` headings per essay. Each heading should feel like a chapter title, not a PowerPoint slide.
- **Bold sparingly.** Reserve bold for a single key phrase per section at most. Over-bolding looks like a LinkedIn post.
- **Italics for emphasis and asides.** Use sparingly for internal voice, rhetorical questions, or book/product titles.
- **One idea per paragraph.** Each paragraph develops one thought. If you're changing direction, start a new paragraph.
- **No emojis** unless the original Chinese content is extremely casual.
- **No "In this article..." or "Let's dive in" or "Without further ado"** — these are markers of non-native or AI-generated content.

### Length Guide

| Input Type | Target Output |
|------------|---------------|
| Twitter thread (5-10 tweets) | 800-1,200 words |
| Bullet points or notes | 600-1,000 words |
| WeChat article or blog draft | 1,000-2,000 words |
| Detailed research or analysis | 1,500-2,500 words |

## Native Voice Principles

These principles distinguish native Substack writing from translated content. Internalize them — they are the difference between "correct English" and "native English."

### Sentence Rhythm
Native English writing alternates between short and long sentences. Chinese-influenced English tends to produce uniformly medium-length sentences. Break the rhythm deliberately.

Bad (uniform): "The market dropped significantly last week. Several companies saw their stock prices fall. This was primarily due to AI concerns. Investors were worried about automation."

Good (varied): "The market dropped last week. Not a dip — a repricing. CBRE, JLL, CH Robinson: all down double digits, all in the same week, all for the same reason. A Chinese tech company shipped an AI logistics tool, and Wall Street suddenly remembered that pricing power matters more than headcount."

### Transitions
Native writers don't use formal transition phrases like "Furthermore," "Additionally," "In conclusion." Instead, they use:

- **Callback**: "That distinction — cost-cutting vs. pricing power — shows up everywhere I look."
- **Conversational pivot**: "But here's where it gets interesting."
- **Direct contradiction**: "I don't buy it."
- **Question as bridge**: "So what does this actually mean for builders?"

### Showing Authority
Substack readers follow writers who have **earned opinions**. Show authority through:

- Specific examples from your own experience (not hypotheticals)
- Named companies, products, and data points
- Admitting what you don't know or where you changed your mind
- Using "I" deliberately — Substack is first-person by nature

### Phrases to AVOID (non-native markers)

These phrases signal non-native writing or AI-generated content. Never use them:

| Avoid | Use Instead |
|-------|-------------|
| "It is worth noting that..." | State the point directly |
| "We can see that..." | State the observation |
| "In today's world..." | Cut entirely or be specific about time/context |
| "As we all know..." | Don't assume shared knowledge |
| "The reason is because..." | "The reason is..." or "...because..." |
| "More and more..." | Use specific data or "increasingly" |
| "Play an important role in..." | "shapes," "drives," "defines" |
| "On the one hand... on the other hand..." | Develop the contrast naturally in prose |
| "Last but not least..." | Just state the final point |
| "In a nutshell..." | "Put simply," or just be concise |
| "Let me explain." / "Let's dive in." | Just start explaining |
| "Without further ado..." | Cut entirely |
| "It goes without saying..." | Then don't say it, or just say it |

### Patterns That SIGNAL Native Substack Writing

Use these patterns — they convey the authentic voice readers expect:

- "Here's what I actually see..." — personal authority, contrasting with consensus
- "This sounds like a subtle distinction. It isn't." — rhetorical turn
- "The temptation is to..." — acknowledging the obvious before going deeper
- "I keep coming back to this question..." — intellectual honesty
- "Everything else is noise." — decisive closing
- "That's a very different claim, and it has very different implications." — careful unpacking
- "I've been watching this play out in..." — connecting macro to personal experience
- "The question that keeps nagging at me:" — vulnerability + curiosity

## Input Handling

### Chinese Twitter Thread → Substack
- Remove all numbering (1/, 2/, 3/) — essays don't read like threads
- Expand each tweet-sized point into 1-3 paragraphs with reasoning and evidence
- Find the connective tissue between points and write explicit transitions
- Add an opening narrative hook and a closing personal takeaway

### Chinese Bullet Points / Notes → Substack
- Identify the thesis that unifies the bullets
- Group related bullets into sections
- Expand each bullet into a paragraph with context, evidence, and implication
- Write transitions that connect sections into a narrative arc

### Chinese Blog / WeChat Article → Substack
- Restructure away from formal essay patterns (论点/论据/结论 → narrative flow)
- Replace academic phrasing with conversational authority
- Add personal perspective if the original is purely analytical
- Convert 「」quotes to contextually appropriate English punctuation

### Mixed Language Input
- If input mixes Chinese and English, treat English terms as domain vocabulary to preserve
- Keep proper nouns, product names, and technical terms in their original English form
- Company names, framework names, and acronyms stay in English

## Quality Self-Check

Before finalizing, verify every item:

- [ ] Could a native English reader tell this was originally Chinese? (must be NO)
- [ ] Does the opening hook create curiosity in the first two sentences?
- [ ] Zero instances of "In this article" / "Let's dive in" / "Without further ado"?
- [ ] Is the essay primarily prose paragraphs, not bullet points?
- [ ] Does every heading feel like a chapter title, not a PowerPoint slide?
- [ ] Is there a clear first-person perspective with earned authority?
- [ ] Does the closing invite engagement without hard-selling?
- [ ] Is the word count appropriate for the input depth?
- [ ] Have you varied sentence length throughout?
- [ ] Would you want to read this if it appeared in your inbox?

## Output

Save the final essay as a `.md` file to `/mnt/user-data/outputs/` and present it using `present_files`. Include a brief note (in Chinese, since the user communicates in Chinese) about word count and key editorial choices made during the rewrite.
