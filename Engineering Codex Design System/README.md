# Engineering Codex Design System

**Brand:** Readix · `readix.net`
**Project:** B2B Research & Analytics On-Demand Platform
**Style codename:** *Engineering Codex*
**Version:** v.2026.05

A design system for a B2B platform that delivers business-critical research and analytics on demand to enterprise, mid-market scale-ups, and consultancies. The visual language is a synthesis of ten reference sites (Linear, Vercel, Anthropic, Stripe, Pitch, Sequoia, Reuters Graphics, Pudding, Atoll Digital, Brian Lovin) — collapsed into one cohesive system.

The product sells thinking. The interface must look like thinking, not like an ad.

## Three guiding principles

1. **Substance > hype.** Editorial discipline over marketing sheen.
2. **Editorial > marketing.** A publication with a paywall, not a funnel.
3. **Engineered > generated.** Every page signals craft — dimensions, version tags, precise typography, framed charts. Anti-AI-slop *is* the marketing.

## Sources

- `Research and Analytics Platform/brand-style.md` — full v1.0 brand guide (consolidated synthesis from 10 reference sites)
- `Research and Analytics Platform/design.md` — initial style brief v0.1

Both source files are read-only mounts under the `Research and Analytics Platform/` directory.

---

## Index

- `README.md` — this file
- `colors_and_type.css` — CSS variables for color, type, spacing
- `SKILL.md` — Agent Skill manifest for use in Claude Code
- `assets/` — logos, machine illustrations, textures, icons
- `fonts/` — webfonts (or notes on substitutions)
- `preview/` — design system cards (rendered in the Design System tab)
- `ui_kits/` — high-fidelity recreations of the product's surfaces
  - `marketing_site/` — landing, services, sample library, field notes
- `slides/` — sample slides in the Codex style (only if a deck template is provided)

---

## Content fundamentals

**Tone:** calm authority. Fact-forward, no exclamation marks outside of pulled quotes. Anthropic-anchor: precise, unhurried, never breathless. Stripe-anchor: "We help [verb] [concrete number] [actor]." Sequoia-anchor: every insight has an author name, date, and category — no anonymous writing.

**Voice:** active, not passive. "We deliver" — never "Solutions are provided." Numbers are welcome and concrete: *48h. 5+ sources. 8-page brief.*

**Headlines:** maximum 8 words. Italic is for *refinement*, not decoration. Models:
- *"Don't just google. Brief."*
- *"Research engineered, not generated."*
- *"The decision-grade research system."*
- *"Answers worth sleeping on."*

**Microcopy rewrites** (always use these):
- "Sign up" → **Open a brief**
- "Get in touch" → **Talk to an analyst**
- "Learn more" → **Read the method**
- "Submit" → **Send the brief**
- "Pricing" → **How it's priced**
- No "Free trial" — we offer **Sample Briefs**.

**Casing:** sentence case for all body and headlines. UPPERCASE only for mono eyebrows and mono CTAs.

**Pronouns:** "we" for the firm, "you" for the reader. First-person plural is the house voice.

**Emoji:** never. Unicode glyphs (●, →, ┌──→, ↤, ↦) are the only "icons" allowed inline with text.

**Forbidden vocabulary:**
- "AI-powered", "game-changer", "revolutionary", "unlock", "leverage", "transform", "synergy", "empower"
- Three-adjective stacks ("fast, simple, powerful")
- Em dashes — use commas, semicolons, or colons instead

---

## Visual foundations

### Palette
The palette is a **two-mode rhythm**: deep ink-black surfaces alternating with warm parchment cards. Copper is the only accent for CTAs and arrows; ink-blue, cyan, violet are reserved for chart series. **Never two parchment sections in a row** (postcard effect). Target ratio is 60% neutral / 30% parchment warmth / 10% copper.

### Typography
Three families, fixed roles:
- **Display serif** (GT Sectra → Source Serif 4 fallback) for headlines and pull quotes. Italic variant for refrain lines.
- **Body sans** (Inter Variable) for UI, lists, forms.
- **Body prose serif** (Lora) for long-read research excerpts — the Anthropic move.
- **Mono** (Berkeley Mono → JetBrains Mono fallback) for eyebrows, captions, CTA labels, dimension annotations, version tags.

Body text floor is **18px**. Hero scales with `clamp(3.5rem, 8vw, 7rem)`.

### Spacing
8px base. 12-column grid, 1280px container, 720px (~64ch) for prose. Section padding 96px desktop / 64px mobile, 160px on parchment↔ink transitions for drama.

### Backgrounds
- **Ink-black** sections: matte, deep, no gradients. Subtle 1px star/grid pattern allowed.
- **Parchment** sections: SVG noise grain at 4% opacity, soft inner vignette, **torn-paper edges** on cards via SVG mask (rotate three variants).
- **Hatched fills** (45° lines, 1px) for technical diagram backgrounds.
- Full-bleed imagery is rare — when used, it's a hand-drawn machine, sepia on parchment.

### Animation
Sparing and respectful. `prefers-reduced-motion` honored automatically; footer carries an explicit "Motion: On / Off" toggle (Sequoia move).
- **Allowed:** scroll-stacking parchment cards (Atoll), hover-reveal annotations on charts, subtle parallax (max 10px), counter animations on stats (ease-out-cubic), Lenis smooth scroll, page-transition torn-paper sweep.
- **Forbidden:** aurora gradients, button glow pulses, auto-rotating carousels, confetti, glassmorphism blur, particle systems, any 3D blob.

Easing default: `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out-cubic).

### Hover & press states
- **Buttons (primary):** background fills copper, text flips to ink-black, the leading `┌──→` arrow extends 4px right.
- **Buttons (secondary):** mono text gains a copper underline.
- **Links:** copper underline appears underneath, no color shift.
- **Cards:** lift 2px (`translateY(-2px)`) with no shadow change, no scale.
- **Press:** 1px translate down, no color change.

### Borders, corners, shadows
- **Corner radii:** `0px` everywhere. Cards, buttons, inputs are all sharp. The only roundings are full-pill (rare, only for status dots — `border-radius: 50%`).
- **Borders:** 1px hairlines, in `--gray-800` on dark or `--grid-paper` on parchment. Copper borders for active CTAs and accent rules.
- **Shadows:** almost none. The single allowed shadow is a soft drag-shadow under parchment cards: `0 24px 48px -16px rgba(0,0,0,0.45)`. No inner shadows. No glows.
- **Cards** = parchment surface + 1px hairline + drag-shadow + optional torn edge mask. Padding 64px on desktop.

### Transparency & blur
Effectively never. No backdrop-filter, no glassmorphism. The one exception is the parchment vignette (radial-gradient overlay at low opacity).

### Imagery & visualization

**Illustration vibe — locked: Codex × Comic mechanical.** Hand-drawn sepia on parchment in the Da Vinci codex tradition, *blended with comic-book mechanical*. Reference: `explorations/imagery-comic-mechanical.html` (The Press · Mk II, The Engine · Mk II).

Specific rules for every machine illustration:

- **Line weights** — three tiers, all on a parchment ground. Bold ink `2.6px` for primary silhouettes (frame uprights, gear outlines, platens). Standard ink `1.8px` for secondary forms (rivets, pipes, sub-components). Fine ink `0.5–0.9px` for hatching, threads, internal detail. Always `stroke-linecap: round` and `stroke-linejoin: round` — never mitred.
- **Ink palette.** Primary ink `#2A1810`, deep ink `#1A0F08`, fine-detail ink `#5A4530`. Copper accents `#B85F40` for moving parts and arrows; deep copper `#8B3A1F` for emphasis lines; ochre `#FFC47C` reserved for highlights and starburst fills only.
- **Shadow language.** Cross-hatching at `35°` (`patternUnits=userSpaceOnUse`, 3px spacing, 0.6px stroke, 85% opacity) is the default. Cross-hatch grid (4×4) for deeper shadow; dot-stipple for soft shadow. **No solid grey fills, no drop shadows on illustrations.**
- **Comic-mechanical exaggerations** — required, not optional: exposed pistons venting steam (dashed-line puffs), oversized rivets with copper highlight pip, glowing copper cores (radial gradient `#FFC47C → #D97757 → #8B3A1F`), pressure gauges pegged to MAX, action lines radiating from the center of motion, motion swooshes off levers and gears.
- **Comic starbursts** (one per illustration, max). 11–14-point spiked burst, ochre `#FFC47C` fill with 2px ink stroke, italic display-serif label inside (`STAMP!`, `CLANK!`, `BRIEF!`). Rotated −8° to −15°. Treat as the loudest tonal departure — never use two in one frame.
- **Embedded tech logos.** Always rendered as a chip / cartouche, hand-inked in the same line system as the surrounding machine. Pulse rings (dashed copper circles, 2 concentric, 35–55% opacity) optional for "active" sources.
- **Codex apparatus.** Annotations (`PSI · MAX`, `GEAR · 14T`, `RATIO 1.4:1`), copper dimension lines with mono labels, corner cross-marks, and a small `↗ UP` orientation marker in the top-right of every frame. The frame chrome is non-negotiable — it is what makes a comic illustration *Codex* and not a pulp ad.
- **Photography.** If used at all (rare), grainy, monochrome, slightly desaturated. No stock people-with-laptops. Warm-toned never cool.

The two reference mocks are the canonical examples; new machine illustrations are commissioned against them, not against the original Da Vinci sketch language.

**Visualization patterns** — collapsed from 35+ references (Linear, Vercel, Anthropic, Stripe, Pitch, Sequoia, Reuters, Pudding, Atoll, Brian Lovin) into the seven we will commit to. The full pattern dossier lives at `uploads/visualizations-overview.md`.

| # | Pattern | Source | Why we use it |
|---|---|---|---|
| 1 | **Annotation-first charts** (arrows + mono captions in the chart) | Reuters Graphics | Charts must tell stories, not display data |
| 2 | **Square 1:1 article cards** with one unified image treatment | Sequoia, Pudding | Turns lists into a magazine |
| 3 | **Numbered process steps** as full sections (1 — Brief, 2 — Source, …) | Pitch, Linear | Methodology becomes legible |
| 4 | **Stats mosaic** in the hero (numbers as headlines) | Stripe | Earns trust in five seconds |
| 5 | **Single-column long-read**, max ~64ch | Brian Lovin, Anthropic | Maximal reading flow |
| 6 | **Custom editorial hero per section** (no stock) | Atoll, Stripe Customers | Identity comes from originals |
| 7 | **Motion toggle in the footer** | Sequoia | Respect for the reader |

**Start with three.** If we ship only three of the seven, ship these — together they move us from "another SaaS site" to "editorial research platform":
1. Annotation-first charts — becomes the look-defining element of every brief.
2. Square 1:1 article cards — gives the sample library instant editorial weight.
3. Stats mosaic in the hero — trust in five seconds.

**Anti-patterns we are not adopting** (even though they appear in the references): Stripe's animated wave gradient, bento solution grids, aurora hero gradients, particle systems. The brand is strong enough without them.

### Layout rules
- Sticky top nav: 56px tall, `--ink-black`, 1px `--gray-800` bottom rule. Logo + version tag left, mono nav center, copper-arrow CTA right.
- Section openers always carry a mono **eyebrow** (`● 02 · WHY ONE MODEL ISN'T ENOUGH`) and a numbered chapter (`1.0`, `2.0`).
- Footer is multi-column, dense type, no SEO link-farm. Includes "Motion: On / Off" toggle and `v.YYYY.MM` build tag.

---

## Iconography

The Engineering Codex is icon-light by design. Iconography is replaced by:

1. **Mono glyphs** in text: `●`, `→`, `┌──→`, `↤`, `↦`, `·`. These appear inline with mono captions and CTAs.
2. **Hand-drawn machines — Codex × Comic mechanical** (SVG) for the three service tiers and methodology diagrams. See *Imagery & visualization* above for the full spec; canonical examples in `explorations/imagery-comic-mechanical.html`. Three line-weight tiers, cross-hatched shadows, copper-cored glow, ochre starburst, codex frame chrome.
3. **Lucide** is the substitute icon set when a real UI icon is required (form inputs, nav controls, chart toolbars). 1.5px stroke, currentColor, 16/20/24px sizes. Linked from CDN: `https://unpkg.com/lucide-static@latest`.

**Substitution flag:** the source files prescribed custom hand-drawn machine illustrations. We have committed to the **Codex × Comic mechanical** direction (mocks in `explorations/imagery-comic-mechanical.html`, anatomy spec in `preview/brand-illustration-spec.html`). The marketing-site UI kit now uses the locked illustrations across all three service-tier cards: **Press** (Tier 01), **Engine** (Tier 02), and **Atelier** (Tier 03) — see `ui_kits/marketing_site/components/Machines.jsx`. Lucide stands in for any small UI iconography until a real set is delivered.

**No emoji.** Anywhere.

---

## Font substitutions (flagged)

The brand specifies **GT Sectra** (display serif) and **Berkeley Mono** — both commercial, not provided. Substitutions in use:
- **GT Sectra** → **Source Serif 4** (Google Fonts). Closest open-source match for the high-contrast editorial serif.
- **Berkeley Mono** → **JetBrains Mono** (Google Fonts). Acceptable variable mono.
- **Inter Variable**, **Lora** → Google Fonts (correct).

**Action for the user:** if you have GT Sectra and Berkeley Mono licenses, drop the `.woff2` files into `fonts/` and the `@font-face` rules in `colors_and_type.css` will pick them up first.
