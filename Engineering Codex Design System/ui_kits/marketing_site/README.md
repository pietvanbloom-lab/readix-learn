# Marketing Site — UI Kit

The public-facing site for **Readix** (`readix.net`) — the research & analytics platform built in the *Engineering Codex* style. This kit is a click-thru prototype.

**Surfaces covered**
- `/` — Landing (hero, three machines, stats, sample library, trustbar)
- `/methodology` — Long-read methodology page
- `/library` — Sample library (filterable cards)
- `/brief` — Brief builder (interactive multi-step form)
- `/field-notes` — Engineering changelog / blog index

**Components** (in `components/`)
- `Nav.jsx` — sticky top bar with version tag
- `Footer.jsx` — multi-column with motion toggle
- `Hero.jsx` — manifest headline + sample apparatus
- `Eyebrow.jsx` — `● 02 · TITLE` pattern
- `MachineCard.jsx` — service-tier parchment card
- `StatRow.jsx` — Stripe-style stats
- `Trustbar.jsx` — logo lockup
- `ArticleCard.jsx` — Sequoia-style insight card
- `Button.jsx` — primary / secondary CTA
- `BriefBuilder.jsx` — multi-step brief form

**Caveats:** the brand calls for hand-drawn machine illustrations (Da Vinci codex / steampunk apparatus). We do not have these assets — the cards use captioned placeholder frames marked `FIG · MACHINE TBD`.

Open `index.html` to enter the prototype.
