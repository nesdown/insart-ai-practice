# INSART AI Practice — Project Context Handoff

> **Purpose of this document:** Full context for continuing work on the INSART AI Practice landing page. Pass this to Claude Code or any AI assistant alongside the HTML file — it will have everything it needs to keep improving the page without losing strategic intent.
>
> **Last updated:** April 30, 2026
> **Owner:** Bohdan Hlushko (Head of Growth, INSART)
> **Project status:** First version of landing page built. Iterating.

---

## 1. The Background

### Who I am

Bohdan Hlushko — Head of Growth at INSART. Multi-disciplinary background (product, design, programming). Driving this initiative.

### What INSART is

A fintech engineering organization, founded 1993, exclusively focused on financial technology since 2005. ~80 engineers across Ukraine, Poland, Romania, Uruguay. US-incorporated (Boca Raton, FL). Long-term partners include Franklin Templeton, iCapital, Accel KKR portfolio companies, Bonterra. Main site: insart.com.

The main insart.com site is built around fintech founders — fundraising matchmaking, demo days, $10K MVPs, Top 30 Startups program. Strong founder positioning, but actively repels enterprise/industrial buyers.

### What we tried first (insart-enterprise)

A spin-off site aimed at enterprise fintech buyers (insart-enterprise.vercel.app). Better tone — "outcomes over activity," "honest scoping," "no process theater." But still fintech-centric. Strategic instinct was right but it kept us in the same red ocean.

### The strategic shift this project represents

We're not going broader in fintech. We're going **sideways into industrial AI** — selling AI integration services to conservative traditional businesses (factories, metallurgy, agriculture, logistics). This is a different sales motion, different buyer, different language, different page.

**Why this is different from outsourcing:** We're not selling engineering hours. We're selling AI transformation outcomes. The lead artifact is a custom 4-page proposal showing where AI will pay for itself in their operation. Closer to McKinsey-style consulting than dev shop.

**The closing motion (do not surface on the page):** I personally fly out and close on-site. This is our differentiating weapon — kept off the public page intentionally so it lands as a surprise during the close, not as a feature.

---

## 2. Strategic Decisions — Already Made

These are locked. Don't relitigate them unless I explicitly reopen.

### Audience

- **Primary decision-makers:** Mixed — CEO, COO, CFO of mid-size industrial businesses
- **Approach:** Single page, layered messaging. Hero hits CEO emotion (competitive edge / FOMO). Body hits COO (operational pain relief). Proof hits CFO (numbers, payback).

### Positioning

- **Generalist** for traditional industries — not a single vertical
- **Method as the specialty:** "We make AI work for businesses that have been told it's not for them"
- **The hook:** "AI for businesses where AI was never supposed to work"

### Brand architecture

- **INSART AI Practice** — fully under parent brand
- Borrows INSART's credibility (20+ years, 150+ projects, Franklin Templeton logos) without rebuilding from scratch
- Page lives at insart.com/ai or ai.insart.com (decision pending)

### Conversion mechanic

- **Primary CTA:** Request a custom 4-page AI proposal (free, 5 business days)
- **Form fields (locked):** website, industry, company size, name, role, email, optional "what prompted this"
- **Microcopy promise:** "No sales calls until you've read the proposal"
- **Lead magnet supporting CTA:** Sample proposal (whitelabeled placeholder, not a real redacted one)

### Pricing

- **No pricing on the page.** Reveal in proposal.

### Internal tool (proposal generator)

- **Do not mention publicly.** Buyers should believe the proposal is hand-crafted by humans (which it is, in terms of judgment — AI assists production, not the thinking).

### On-site closing approach

- **Do not mention publicly.** This is the closing weapon, kept silent.

### Tone rules

- No hype words. No "revolutionize," "unleash," "transform"
- No tech stack name-drops on the page (no "powered by Claude / GPT / LangChain") — exception: inside the third case study card where naming LangChain/FastAPI/Anthropic Claude serves credibility, not marketing
- No team photos (parent INSART hosts those)
- No press logos (TechCrunch, Forbes, etc.) — don't have them, audience doesn't trust them
- No live chat widget — wrong tone for this audience
- No blog / resources section — no content yet, empty section is worse than none
- No pricing range, no "starts at"

### Design direction (committed)

- **Editorial / consulting hybrid** — think *The Economist* + BCG + serious industrial trade journal
- **Type:** Fraunces (display serif) + Geist (sans body) + Geist Mono (small caps / labels)
- **Color:** Ink black `#0F0F0E`, warm paper off-white `#F4F1EA`, oxblood accent `#8B2E1F` used sparingly
- **Section numbering:** §01, §02, §03 (signals printed report)
- **Roman lowercase italics** for process steps (i, ii, iii, iv)
- **Drop cap** on first paragraph of "honest framing" section
- **Subtle paper grain** as fixed SVG noise overlay
- **Italic accents in headlines** (e.g., "AI for businesses where AI was *never supposed* to work")

**Hard NO on:** robot hands, neural networks, glowing AI chips, hooded coders, generic Inter typography, purple gradients on white, anything that looks like a 2024 AI startup template, parallax, video, heavy animation.

---

## 3. Page Structure (As Built)

The HTML file (`insart-ai-practice.html`) implements this structure:

| § | Section | Purpose | Notes |
|---|---------|---------|-------|
| — | Masthead | Brand + journal positioning | Reads like a publication nameplate ("Vol. I · Industrial AI · 2026") |
| — | Hero | Hook + form-preview aside | Asymmetric grid, "Specimen — Issue 01" card on the right |
| §01 | The reality | Honest framing — "most AI implementations fail" | Drop cap, editorial body. Disqualification signal. |
| §02 | The deliverable | What's in the 4-page proposal | 2x2 chapter grid (Position / Opportunity / Economics / Plan) |
| §03 | The method | 4-step process | Roman numerals, hairline grid |
| §04 | The evidence | 3 case study cards | Field Operations, Sales Intelligence, Reporting. Logo strip below. |
| §05 | The standard | Why INSART AI Practice | 4 reason blocks, accent underlines |
| §06 | The request | Form (inverted dark section) | Underline-only inputs, no boxes |
| §07 | The questions | FAQ accordion | 7 questions addressing real objections |
| — | Final CTA | "If you've read this far..." | Calm confidence close |
| — | Colophon | Footer in editorial style | "Set in Fraunces & Geist" |

---

## 4. Case Studies — Source Material & Repositioning

The case studies on the page are repositioned versions of real INSART work. The originals live on insart.com but are fintech-flavored. We deliberately stripped fintech language and reframed for industrial recognition.

### Card 1 — Field Operations (Hero card)
- **Source:** insart.com/case-study-ai-driven-mobile-app-field-operations/
- **Repositioning:** Removed fintech advisor context, foregrounded the field-worker AI assistant story. This was originally about wealth management field reps but reads cleanly as logistics/maintenance/agri field workers.
- **Open item:** Card is currently directional (no single hero metric). If a real number exists (hours saved per worker, error reduction %, training time cut), drop it in.

### Card 2 — Sales Intelligence
- **Source:** insart.com/case-study-predictable-sales-pipeline-ai-signals/
- **Repositioning:** Already mostly industry-neutral. Kept the real numbers (38% reply rate, 5 clients signed, 37% deal value lift).

### Card 3 — Reporting
- **Source:** insart.com/ai-assisted-report-generation-langchain-fastapi-anthropic-claude/
- **Repositioning:** Kept the LangChain/FastAPI/Claude names because they serve credibility in this card specifically. Otherwise stripped fintech reporting context.

### Cases deliberately NOT used
- AI credit scoring (too fintech-locked)
- AI-KYC platform (too fintech-locked)
- Customer 360 data platform (industry-agnostic but redundant with Card 3)

---

## 5. Open Items — What Still Needs Doing

In priority order:

### Critical before launch

1. **Whitelabeled sample proposal PDF**
   - The page has two links pointing to `#` for "See a sample proposal" / "Download a sample proposal"
   - Need a polished generic 4-page sample (not a redacted real one — too messy)
   - Suggestion: Build it for a fictional "ACME Industrial" or similar, designed in the same editorial aesthetic as the landing page (continuity matters)

2. **Form backend wiring**
   - Currently form just hides itself and shows success state (demo only)
   - Search HTML for `// TODO: POST` — replace with real endpoint
   - Minimum: POST to a Slack channel + CRM in real-time so I can move on hot leads within hours
   - UTM-aware (capture source/medium/campaign)
   - Event tracking: form-start, form-abandon, form-submit, sample-proposal-download

3. **Domain decision**
   - Options: ai.insart.com / insart.com/ai / standalone domain
   - Affects footer references, canonical URLs, internal linking from main insart.com

4. **Real logos in credibility strip**
   - Currently text wordmarks (Franklin Templeton, Accel KKR, iCapital, Bonterra)
   - Replace with actual SVG logos (already in insart-enterprise repo)

5. **Card 1 hero metric**
   - See section 4 above. A real number for field operations would 10x this card's impact.

### Important but not blocking

6. **Open Graph / social preview metadata**
   - Add `<meta property="og:image">`, og:title, og:description for link sharing
   - Twitter card meta tags

7. **Real industrial photography (optional)**
   - Page is currently typography-driven (no imagery in hero or body)
   - If we add photos, MUST be muted, real industrial scenes (factory floor, control room, grain silo, refinery)
   - Hard rule: no stock "AI" imagery

8. **Sample form-submission email template**
   - When a lead comes in, what does the auto-reply look like?
   - Should match the editorial aesthetic of the page

9. **Lead qualification scoring**
   - Form field 7 ("what prompted you to look into AI?") is the qualifying signal
   - Reactive (competitor pressure) vs Proactive (margin) vs Political (board asking) — affects how I approach the discovery call

### Future / nice-to-have

10. **A/B test the hero headline**
    - Current: "AI for businesses where AI was never supposed to work"
    - Alternates worth testing: "Most AI vendors don't understand your business. We start with yours." / "Your competitors are quietly testing AI. Here's where it would actually pay off."

11. **Case study deepening**
    - Currently 3 cards. As we deliver more industrial AI work, add 1-2 more. But keep the 3-card grid — more than that dilutes.

12. **Industry-specific landing pages**
    - Long-term: /ai/metallurgy, /ai/manufacturing, /ai/agriculture
    - Same skeleton, vertical-specific case studies and language
    - Only worth doing once we have 2+ wins per vertical

---

## 6. Working Style Notes for Continuing AI Assistant

If you're an AI assistant picking this up, here's how to work with me effectively:

- **Don't ask clarifying questions reflexively.** Use what's in this document. Only ask if something is genuinely missing.
- **Don't use em dashes** in writing for me. Use parentheses, commas, or colons instead.
- **Avoid emoji overuse.** Sparingly is fine, repeated is annoying.
- **Match editorial tone.** Don't drift into SaaS marketing language. The whole project is a deliberate rejection of that aesthetic.
- **Push back when I'm wrong.** I want honest engagement, not agreement. Tell me when an instinct is off.
- **Don't reframe my requests to make them more palatable.** If I ask for something direct, give me something direct.

When making changes to the HTML:
- Preserve the section numbering pattern (§01, §02, §03)
- Preserve Roman lowercase italics for process steps
- Preserve italic accents in headlines (the *italic word* pattern is doing aesthetic work)
- Preserve the "Specimen — Issue 01" card concept in the hero (this is a signature element)
- Preserve the inverted dark-section form (this is the conversion-critical zone)
- Color tokens are CSS variables in `:root` — change them centrally, not per-element

---

## 7. The Files

This handoff comes with three files:

1. **`insart-ai-practice.html`** — The actual landing page. Single file, no build step, no dependencies. Open in browser.
2. **`insart-ai-practice-landing-page-brief.md`** — The original strategic brief that informed the HTML. Use this if you need to understand WHY a section exists.
3. **`insart-ai-practice-context-handoff.md`** — This file. Read first.

---

## 8. Quick Reference — Voice & Vocabulary

**Words/phrases that belong on this page:**
- "Honest scoping"
- "ROI before technology"
- "12 months or less"
- "Pays for itself"
- "Production systems"
- "Engineering organization, not an AI consultancy"
- "Method, not a vendor"
- "Real numbers"

**Words/phrases that DO NOT belong:**
- "Revolutionize," "unleash," "transform" (any verb that sounds like a 2018 keynote)
- "Cutting-edge," "state-of-the-art," "next-generation"
- "Synergy," "leverage" (as a verb), "ecosystem" (as fluff)
- "AI-powered" (says nothing)
- "Solutions" (when "systems" or "products" works)
- "Empower" (always)
- "Journey" (no journeys)
- "Game-changer" (no)

**Tone in one sentence:** *Calm confidence from a serious operator who has built things that have to work for 20+ years and is now offering to look honestly at your business.*

---

## End of context

If something here is ambiguous, the HTML file is the source of truth for what's currently built. The strategic brief is the source of truth for why. I'm the source of truth for what changes next.
