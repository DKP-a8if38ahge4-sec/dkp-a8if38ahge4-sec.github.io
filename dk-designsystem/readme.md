# Die Kavallerie Design System

**Die Kavallerie** ("The Cavalry") is a German communications agency based in Germany. Their positioning: *"Als Kommunikationsagentur kreieren wir inspirierende Erlebnisse, die Menschen zusammenführen."* (As a communications agency, we create inspiring experiences that bring people together.)

They work across employer branding, live events, digital campaigns, and brand strategy — producing full-bleed portfolio cases and high-impact visual work.

---

## Sources

- **Codebase:** Local mount at `diekavallerie/` — a WordPress theme built on Timber (Twig templates) + ACF + UIKit + Vite/SCSS
- **Design System reference:** `diekavallerie/DESIGN-SYSTEM.md`
- **No Figma link was provided**

---

## Content Fundamentals

**Language:** German-first. The live site and all CMS content is German. English appears only in developer-facing code (comments, variable names).

**Tone:** Bold, direct, confident. Short punchy sentences. Imperative or declarative statements. No fluff.

**Copy style:**
- Headlines are **ALL CAPS** (enforced by `text-transform: uppercase` on `.dk-headline`)
- Sub-headlines and body copy use sentence case
- No emoji in UI copy
- Minimal punctuation in headlines — dashes and em-dashes over commas
- "Wir" (we/us) voice — agency speaks as a collective
- German compound words used liberally (e.g. "Kommunikationsagentur", "Zukunftsweisend")

**Examples from codebase:**
- Headline: `"INSPIRIERENDE ERLEBNISSE"`
- Sub-headline: `"Als Kommunikationsagentur"`
- CTA: `"Jetzt bewerben"` / `"Mehr erfahren"`
- Section label: `"Cases"`, `"Jobs"`, `"Services"`

---

## Visual Foundations

### Colors
High-contrast, minimal palette. Near-black on light grey with hot red as the sole accent color.

| Token | Hex | Usage |
|---|---|---|
| `--color-red` | `#FF003C` | Brand accent — buttons, bullets, links, highlights. The dominant color signal. |
| `--color-black` | `#1D1D1D` | Near-black. Default text and headings. |
| `--color-grey-light` | `#F2F4F7` | Page background. Buttons and icon toggles fill. |
| `--color-white` | `#FFFFFF` | Surfaces, inverse text on red sections. |
| `--color-yellow` | `#FFFF00` | Secondary accent — used sparingly for highlight moments. |

Sections alternate between `--color-grey-light` background (default) and `--color-red` background (`.dk-background-red`). On red sections, text and arrows flip to white.

### Typography
Three families, all custom/licensed:

**PP Formula Condensed** (`--font-headline`)
- Weight 900 (Black) only
- Always `text-transform: uppercase`
- Used for all headlines (`h1`–`h6` and custom `.dk-headline-*` classes)
- Extremely compressed letterforms — very tall, narrow. Used at dramatic scales (95px–200px for hero headlines)

**Helvetica Now Display** (`--font-base`)
- Weights 400 (regular), 400 italic, 700 (bold), 700 italic
- Body copy, sub-headlines, buttons, UI labels, navigation
- Anti-aliased, 0 letter-spacing

**Manic** (`--font-manic`)
- Decorative handwritten/scribble style
- Used only for accent animations (the "scribble teaser" section underlines and decorations)
- Not for body copy

### Spacing
Four-step scale, responsive — doubles at 1200px breakpoint:

| Token | Mobile | Desktop |
|---|---|---|
| `--space-small` | 25px | 50px |
| `--space-medium` | 35px | 75px |
| `--space-large` | 45px | 90px |
| `--space-xlarge` | 90px | 180px |

Sections use `--space-xlarge` for top/bottom padding. Internal spacing uses `--space-small` to `--space-medium`.

### Backgrounds
- Page background: `--color-grey-light` (#F2F4F7) — a cool, almost neutral off-white
- Section backgrounds toggle between grey-light and red only — no gradients, no textures, no images as section backgrounds
- Heroes use full-bleed video or image fills (100vh)
- Cases/portfolio items are full-viewport-height with full-bleed image or video backgrounds

### Borders & Shape
- Button: pill shape with `border-radius: 59px`
- Cards / containers: `--border-radius-default` (19px), `--border-radius-large` (35px)
- No card shadows — the design uses solid backgrounds rather than elevation
- Form inputs: `border-radius: 15px`, 1px border in white (on dark bg) or black

### Buttons
Pill-shaped, 2px border, always have a right-arrow icon (SVG inline):
- **Red (default):** transparent fill, red border, red text → hover: red fill, white text
- **Black:** transparent fill, black border → hover: black fill, white text
- **White:** for use on red backgrounds — white border → hover: white fill, red text
- **Large:** bigger padding (38px 52px), no arrow icon
- **Mute (circular):** grey-light circle, icon toggle, no text

### Animations & Interactions
- Hover states: fill-on-hover for buttons (background floods in), color flips for text
- Arrow bullets on lists: CSS `::before` pseudo-elements using SVG data URIs
- Accordion: right-arrow circle rotates 90° on open (CSS transform)
- Scribble teaser: SVG stroke animations (draw-on effect) triggered by scroll
- No bounce/spring animations — transitions are flat or eased, no elastic
- Video backgrounds: `autoplay muted loop playsinline`, no controls
- Custom cursor SVGs for interactive zones (drag, play, shuffle)
- UIKit used for sticky header (scrolls to compact), slider nav, accordion

### Links
Default `<a>`: `color: var(--color-text)`, `text-decoration: underline`, hover removes underline. No blue links.

### Iconography (see ICONOGRAPHY section)

### Layout
- Fixed 80px header (`--size-header`) — content scrolls beneath it
- `#content` pulled up by `margin-top: calc(-1 * var(--size-header))` so hero video sits full-bleed behind nav
- Max container widths: 1760px (header/large), 1320px (default), 1068px (small), 700px (xsmall)
- `--container-padding: 24px` on each side
- Grid: UIKit `uk-grid` with `--grid-gutter: 50px`
- Two-column layouts at medium/large breakpoints (960px+)

### Imagery
- Full-bleed portfolio case images/videos are dark, cinematic, editorial
- No decorative illustrations beyond the Manic/scribble SVG accents
- No stock-photo aesthetic — all imagery is campaign/production photography
- Aspect ratios: hero 16:9 desktop / 9:16 mobile; cases 100vh full-bleed

---

## Iconography

**No dedicated icon library or icon font.** All icons are inline SVG data URIs embedded in SCSS mixins (`_mixins.scss` → `@mixin icon-as-background`).

Icon inventory (all rendered as CSS background-images):
- `arrow-right-small-{red|white|black}` — small (17.8px) arrow used in buttons and list bullets
- `arrow-right-{red|white|black}` — larger (40.5px) diagonal arrow, used in case navigation
- `arrow-right-serif-small-black` — serif-style horizontal arrow with curved ends
- `arrow-tab` — same serif arrow, black
- `chevron-down-{red|white|black}` — small chevron for select dropdowns
- `mute-{red|black}` — speaker/mute icon for video audio toggle
- `play` / `pause` — circular badge icons with "PLAY"/"PAUSE" text (PP Formula lettering inside a circle)
- `instagram` / `linkedin` — social icons (white, rounded square outline)

**Usage:** Always via CSS `background-image` on pseudo-elements or empty `<span>` elements. Never `<img>` tags for UI chrome icons.

**Decorative SVG assets** (`assets/icons/`):
- `manic_circle.svg` — circular path for Manic font decoration
- `stroke.svg` — underline stroke for scribble effect
- `filter_mask.svg` — SVG filter for scribble section distortion

No emoji in UI. No unicode characters used as icons.

---

## Components

Source-defined UI primitive families (from `_buttons.scss`, `_headlines.scss`, `_form.scss`):

| Component | File | Description |
|---|---|---|
| `Button` | `components/core/Button.jsx` | Pill button, all variants |
| `Headline` | `components/core/Headline.jsx` | PP Formula headlines + sub-headline |
| `FormField` | `components/forms/FormField.jsx` | Input, select, textarea, checkbox |

### Intentional additions
None — components map 1:1 to what the source SCSS defines as primitives.

---

## UI Kits

| Product | Path | Description |
|---|---|---|
| Marketing Website | `ui_kits/website/index.html` | Agency homepage — header, hero, text section, cases teaser, accordion, footer |

---

## File Index

```
styles.css                  Root stylesheet (imports only)
tokens/
  colors.css                Color custom properties
  typography.css            @font-face + type scale tokens
  spacing.css               Space scale + container sizes
  shapes.css                Border radius tokens
assets/
  fonts/                    Licensed webfonts (PP Formula, Helvetica Now Display, Manic)
  icons/                    Decorative SVG assets
  img/                      Cursor SVGs, peace.png
components/
  core/
    Button.jsx / .d.ts      Pill button, all variants
    Headline.jsx / .d.ts    Headline + sub-headline
  forms/
    FormField.jsx / .d.ts   Form inputs
guidelines/
  (card HTML files)         Foundation specimen cards
ui_kits/
  website/
    index.html              Marketing site UI kit
readme.md                   This file
SKILL.md                    Agent skill invocation instructions
```
