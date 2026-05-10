---
name: engineering-codex-design
description: Use this skill to generate well-branded interfaces and assets for the Engineering Codex research & analytics platform — landing pages, briefs, decks, mocks, prototypes. Contains the brand guide, color and type tokens, fonts, assets, and a marketing-site UI kit for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Map of this skill

- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — design tokens (CSS variables) and primitive component classes
- `fonts/` — drop licensed `.woff2` files here (GT Sectra, Berkeley Mono); Google Font fallbacks are pre-wired
- `preview/` — design-system specimen cards (one concept per card)
- `ui_kits/marketing_site/` — pixel-fidelity recreation of the public site, with `index.html` as the click-thru entry

## Hard rules

- Sharp corners everywhere (`border-radius: 0`). Pill is for status dots only.
- No emoji. No glassmorphism. No gradient backgrounds. No bento grids. No em dashes.
- Every section opens with a numbered mono **eyebrow**: `● 02 · TITLE`.
- CTAs are mono uppercase with a `┌──→` arrow notation, copper rule.
- Typography trio: display serif (GT Sectra / Source Serif 4), body sans (Inter), mono (Berkeley / JetBrains).
- Long-read prose uses **Lora serif**.
- Never two parchment sections in a row.
