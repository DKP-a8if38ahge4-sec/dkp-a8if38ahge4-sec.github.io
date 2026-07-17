---
name: diekavallerie-design
description: Use this skill to generate well-branded interfaces and assets for Die Kavallerie, a German communications agency. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping and production.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick Reference

**Brand:** Die Kavallerie — German communications agency
**Tagline:** "Inspirierende Erlebnisse, die Menschen zusammenführen"
**Language:** German (copy, labels, CTAs)

### Colors
- `#FF003C` — red, the dominant accent (buttons, bullets, highlights)
- `#1D1D1D` — near-black (text, headings)
- `#F2F4F7` — grey-light (page background)
- `#FFFFFF` — white (inverse text on red)
- `#FFFF00` — yellow (secondary accent, rare)

### Fonts (in assets/fonts/)
- **PP Formula Condensed** weight 900 — all headlines, always uppercase
- **Helvetica Now Display** 400/700 — body, UI, buttons
- **Manic** — decorative scribble accents only

### Key rules
- Headlines: PP Formula, weight 900, `text-transform: uppercase`
- Page bg: `#F2F4F7`; accent sections: `#FF003C` (text + arrows flip to white)
- Buttons: pill shape (border-radius 59px), 2px border, arrow icon on default size
- No card shadows — elevation through background color only
- No emoji, no gradients, no decorative illustrations beyond SVG scribbles
- Copy is German, direct, bold. "Wir" voice. Short punchy sentences.
