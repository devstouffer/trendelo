---
source: design interview session + Stitch blueprint (stitch_custom_website_blueprint.zip)
date: 2026-06-26
key_people: none
key_concepts: Duolingo-style UI, identity-first onboarding, vertical module map, chunked cards, guided prompt exercises, paywall modal, badge verification page, Quicksand/Nunito Sans typography, hard block shadows, 2px borders
---

## What This Document Is

Design and UX decisions from an interview session, plus a [[Stitch]] design blueprint. Reference alongside [[trendelo-context]] when building.

**Reference assets (Stitch blueprint):**
- `DESIGN.md` — full design system spec
- `screen.png` — reference screenshot of the track selection screen (Step 1 of 3 onboarding)

---

## Design System

### Typography
| Role | Font | Size | Weight |
|---|---|---|---|
| Display / large headings | Quicksand | 48px | 700 |
| Headline LG | Quicksand | 32px | 700 |
| Headline MD | Quicksand | 24px | 600 |
| Body LG | Nunito Sans | 18px | 400 |
| Body MD | Nunito Sans | 16px | 400 |
| Labels / tags | Nunito Sans | 14px | 700, UPPERCASE, 0.05em tracking |
| Button text | Quicksand | 16px | 700 |

### Color Tokens
| Name | Hex | Use |
|---|---|---|
| Primary Green | `#00694c` | CTAs, borders, interactive |
| Success Green | `#1D9E75` | Progress fills, success states |
| Deep Forest | `#085041` | Dark text, nav, block shadows |
| Mint Tint | `#eafef7` | Page background |
| Signal Blue | `#378ADD` | Links, info, input focus |
| Trend Amber | `#BA7517` | New badges, alerts, pro features |
| Surface | `#ffffff` | Card backgrounds |
| On-surface | `#0d1f1b` | Body copy |

**Rule:** No gradients. Flat solid fills only. 2px border in Deep Forest or a darker shade of the fill color.

### Elevation — Hard Block Shadows
No soft/blurred shadows anywhere. Use offset block shadows:
- Cards: `box-shadow: 4px 4px 0px #085041`
- Button press: shadow disappears, element shifts 2px down

### Border Radius
| Element | Radius |
|---|---|
| Standard cards | 16px |
| Modals / large containers | 24px |
| Buttons | 9999px (full pill) |
| Progress bars | 9999px (full pill) |
| Lesson dots | 50% (circle) |
| Input fields | 16px |

### Spacing
- Base unit: 8px
- Container max-width: 1100px (12-column grid desktop)
- Desktop side margins: 40px · gutter: 24px
- Mobile side margins: 16px
- Card padding: 24–32px internal
- Module card stack gap: 16px

### Component Specs

**Primary Button:** Green `#00694c` fill · white text · 2px Deep Forest border · 4px hard block shadow. On press: shadow gone, shifts 2px down.

**Secondary Button:** White fill · green text · 2px green border · no shadow.

**Module Cards:** White fill · 16px radius · 2px border. Current = green border + pulsing shadow. Locked = 50% opacity + grey border + padlock icon top-right.

**Lesson Dots (24px circles):** Done = filled green. Current = pulsing white/green. Future = empty outline.

**Progress Bars:** Deep Forest track · green `#1D9E75` fill with lighter gloss streak · pill caps.

**Quiz Answer Buttons:** Large · 2px bordered · full-width. Correct → green bottom-bar slides up. Incorrect → amber/red bottom-bar + explanation.

**Input Fields:** White · 2px Deep Forest border · 16px radius. Focus → border shifts to Signal Blue.

---

## Visual Design

| Decision | Choice |
|---|---|
| UI aesthetic | Duolingo-style — playful, gamified, bright colors, reward moments, celebration animations |
| Platform priority | Desktop first. Mobile is secondary. |
| Community at MVP | None. Ship the learning product first. |

**What "Duolingo-style" means for Trendelo:**
- Progress feels rewarding — completion animations, satisfying state transitions
- Colors are used expressively: green = success, amber = alert/new, blue = link/info
- Every interaction has a micro-moment of feedback (correct answer flash, lesson completion pulse)
- Cards, badges, and progress dots are the core visual vocabulary

---

## Pricing Clarification

**Pro = all three tracks.** One $15/month (or $144/year) subscription unlocks Marketing, Education, and Business in full.

---

## Onboarding Flow

**Track selection is the very first screen — before email, before password.**

1. User hits "Get started" on marketing site
2. Screen shows three track cards with a one-line description each
3. User picks a track → selection persists through signup
4. Email + password signup (or OAuth)
5. Lands in their chosen track's module map at Module 1, Lesson 1

Free users can only see their chosen track. Pro users can switch between all three from the dashboard.

---

## Module Map

**Vertical card stack with horizontal progress dots.**

- 6 module cards stacked top-to-bottom
- Each card: module number, title, horizontal row of dots (one per lesson)
- Dots fill left-to-right as lessons complete (filled = done, current = pulsing, future = empty)
- Module card shows an overall progress bar beneath the title

**States:**
- **Completed module:** Full progress bar, green checkmark, card slightly muted
- **Current module:** Active border/highlight, first incomplete dot is pulsing
- **Locked — free user (Module 2+):** Greyed out, padlock icon on the card
- **Locked — Pro, not yet reached:** Visible but all dots empty, not yet interactive

---

## Paywall Experience

**Locked module card → padlock icon → clicking opens upgrade modal (not a page redirect).**

1. Free user clicks Module 2 card (padlocked)
2. Modal appears with brief pitch, monthly/annual pricing, and CTA
3. Stripe checkout opens from the modal
4. On completion: modal closes, module unlocks, map animates

The module map is visible in the background — user can see exactly what they're unlocking.

---

## Course Player — All Lesson Formats

### Read & Reflect → Chunked cards
- One idea per card, click/tap to advance
- Each card: short headline + 2–4 sentences + optional image or pull quote
- Final card: a single ungraded "reflect" prompt + "Mark complete"

### Interactive Exercise → Guided prompt sequence
- Step-by-step in-app prompts
- User inputs their own answer before seeing the model answer/example
- Final screen shows completed artifact (toolkit card, campaign brief, lesson plan, etc.)
- User can copy or download as text

### Quiz → One-question-at-a-time (Duolingo-style)
- Single question fills the screen
- Answer → immediate feedback (correct/incorrect + short explanation) → next question
- Final screen: score summary + pass/fail state

### Scenario / Case Study → Card sequence with decision moments
- Story unfolds across cards
- At key moments: a decision prompt (same card mechanic, but branching)
- Outcome revealed and explained after each decision
- Not graded; decision + outcome tracked for reflection

### Tool Walkthrough → Step-by-step cards
- Each card = one step: what to do, why it matters, screenshot or illustration
- External tool opens in new tab; walkthrough stays open as reference

### Final Assessment + Badge
- 15 questions, Duolingo-style one-at-a-time
- 80% pass rate required
- **On pass:** Full-screen celebration animation → badge displayed → one-click LinkedIn share + download → nudge to next track
- **On fail:** Score shown + areas to review → option to retake immediately

---

## Monthly Update (Pro Only)

**Separate 'Updates' tab in the user dashboard.**

- Dashboard has a top-level "Updates" tab
- Scrollable archive of monthly digests per enrolled track
- Each digest card: month/year, track label, 3–6 bullets of what changed, source links
- New digest triggers email teaser (subject: "Your [Month] AI update for [Track] is live")
- Email links directly into the Updates tab

---

## Badge Verification Page (Public)

**Minimal certificate page** at `trendelo.com/verify/[unique-badge-id]`

Contains:
- Trendelo logo + brand colors
- Badge image for that track
- Earner's full name
- Track completed (e.g. "AI in Marketing")
- Completion date
- Track version (e.g. "v1.2 — updated March 2026")
- One line: "This credential was issued by Trendelo and has been verified as authentic."

No marketing copy. No CTAs. Feels like a credential, not a landing page.

---

## Post-Track Completion Flow

1. User passes final assessment
2. Full-screen celebration animation (confetti, badge animates in)
3. Badge displayed: track name, earner name, completion date
4. Two CTAs: "Share to LinkedIn" + "Download badge image"
5. Below: "Start your next track" — shows the other two track cards
