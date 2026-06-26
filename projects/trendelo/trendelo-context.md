---
source: C:\Users\devst\Downloads\trendelo_context.md
date: 2026-06-26
key_people: none
key_concepts: AI learning hub, field-specific tracks, freemium pricing, Duolingo-style course structure, LinkedIn badges, monthly content updates
---

## What Trendelo Is

[[Trendelo]] is an AI learning platform that teaches students and early-career professionals how AI is changing their specific industry — and what skills they need. Unlike generic AI courses, every track is built around a single field, making content immediately applicable to the user's actual career.

**Core gap it fills:** Most AI education is either too technical (for engineers) or too generic (not relevant to the user's job). Trendelo is the field-specific middle layer.

**Target audience:** Final-year university students, post-graduates, and early-career professionals who feel behind on AI in their field.

---

## Brand

- **Tagline:** "AI is changing your field. We'll show you how."
- **Personality:** Knowledgeable, calm, specific, practical. Not alarmist. Not technical for its own sake.
- **Colors:** Green `#1D9E75` (primary/CTA) · Deep Forest `#085041` (dark surfaces) · Mint Tint `#E1F5EE` (backgrounds) · Signal Blue `#378ADD` (links) · Trend Amber `#BA7517` (alerts/new badges)
- **Logo:** Upward trending line arrow in a rounded square. "trend" in primary text, "elo" in Trendelo Green.

---

## Pricing

**Free — $0**
- Module 1 only (4 lessons) — hard paywall after lesson 4

**Pro — $15/month or $144/year ($12/mo, save 20%)**
- All 6 modules across all tracks
- Monthly "what changed in AI" digest per track
- Shareable [[LinkedIn]] badges on track completion
- Community access + all downloadable resources

Payment via [[Stripe]]. No free trial, no student discount, no team pricing at launch.

---

## Course Structure

Duolingo-style connected journey — users see the full module map from day one with progress bars and locked modules. Content fills in monthly but structure is always visible.

**Lesson types:** Read & reflect · Tool walkthrough · Interactive exercise · Scenario/case study · Quiz · Downloadable resource · Badge/milestone

**Completion:** 80% pass rate on 15-question final assessment to earn badge.

**Badge format:** Shareable LinkedIn credential linking to a public Trendelo verification page (completion date + track version).

---

## The Three Tracks

### Track 1 — [[AI in Marketing]]
- **Audience:** Marketing students, early-career marketers, comms roles
- **Badge:** "AI-Ready Marketer — Trendelo certified"
- **6 modules, 24 lessons, ~4–5 hrs**
- Modules: AI shift overview (free) → Content & copywriting → SEO & content strategy → Paid media & analytics → Ethics & risk → Staying current

### Track 2 — [[AI in Education]]
- **Audience:** Student teachers, K-12 and higher ed teachers, education students
- **Badge:** "AI-Confident Educator — Trendelo certified"
- **6 modules, 25 lessons, ~4–5 hrs**
- Modules: What's changing (free) → Time-saving tools → Academic integrity → Teaching students to use AI → Ethics & equity → The AI-confident educator

### Track 3 — [[AI in Business]]
- **Audience:** MBA students, founders, managers, analysts, consultants
- **Badge:** "AI-Fluent Business Professional — Trendelo certified"
- **6 modules, 25 lessons, ~5–6 hrs**
- Modules: AI business landscape (free) → AI strategy → Workforce & skills → Productivity tools → Governance & risk → Staying ahead

---

## Content Pipeline

1. RSS ingestion from verified sources per track (Feedly/Inoreader)
2. AI drafts summary → student-friendly language → lesson/digest structure
3. Human editorial review before publish
4. Published with source citations + AI-assisted production disclosure

**Monthly cadence:** One "what changed in AI this month" digest per Pro track.

**Annual data refreshes:** McKinsey State of AI (spring) · Stanford AI Index (spring) · BCG AI Radar (Jan) · OECD Digital Education Outlook (Jan)

---

## Technical Decisions

- **Payment:** [[Stripe]] — two products (monthly $15, annual $144)
- **Free tier:** Hard paywall after Module 1, Lesson 4 on each track
- **Annual cancellation:** Access continues until end of paid period
- **Monthly cancellation:** Access stops at end of current billing period
- **Badge verification:** Public Trendelo verification page per badge
- **Status:** Ready for build

---

> "AI is reshaping how marketers work. Here's what's actually changing."
> — example of correct Trendelo brand voice

---

## Why This Is Here

This is the master context doc for the Trendelo build. Reference it for any work on course structure, brand decisions, pricing logic, or track content.
