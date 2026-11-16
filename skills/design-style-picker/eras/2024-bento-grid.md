---
year: 2024
style: Bento Grid
slug: bento-grid
aka: [Bento box UI, Bento layout, Bento section]
era: "2022–present"
peak: "2023–2024"
depth: deep
lineage: [linear-style, material-design]
---

# 2024 · Bento Grid

> A modular grid of rounded tiles of different sizes, each holding one idea (a stat, a screenshot, a feature, a quote), packed together like compartments in a Japanese bento box.

**Bento is a layout, not a full style.** In the picker it's an *add-on* that combines with a base style: light and clean, [Linear-style dark](2023-linear-style.md), [neubrutalist](2022-neubrutalism.md) with outlined tiles, and so on. The demo proves it: one Kettlefern page whose bento sections switch between two base styles: [`../examples/2024-bento-grid/`](../examples/2024-bento-grid/index.html) (append `#dark` for the second base).

---

## Snapshot

| | |
|---|---|
| **Feels like** | organised, product-y, scannable, Apple keynote |
| **Signature move** | a 4–6 column grid where tiles span 1×1, 2×1 or 2×2, all with the same radius and gap, and one hero tile clearly biggest |
| **Best for** | feature overviews, product and category grids, stats, link-in-bio pages, dashboards' summary rows |
| **Avoid for** | long-form reading, step-by-step flows, anything where order carries meaning |
| **Lineage** | Metro Live Tiles (2010) → Apple keynote summary slides and product pages (2021–22) → bento.me link-in-bio (2022–23) → **the default SaaS feature section (2024)** |

### The five ingredients

1. **Tiles of different sizes** on one grid. Size signals importance.
2. **One gap, one radius**, everywhere.
3. **One idea per tile:** a headline plus one visual, number or interaction.
4. **A closed rectangle:** the grid ends flush, with no ragged holes.
5. **Mixed tile types:** stat, screenshot or illustration, quote, icon + line, CTA.

---

## Origin & timeline

| When | What happened | Why it matters |
|---|---|---|
| **2010-10** | Windows Phone 7 ships Live Tiles in the Metro design language. Windows Phone 8 (2012) moves to more columns and three tile sizes ([Windows Central](https://www.windowscentral.com/origin-metro-ui-design-language)). | The first mainstream mixed-size tile grid. Microsoft later abandoned Live Tiles. |
| **2021–2022** | Apple's keynote "summary" slides and product pages present features as rounded tiles of mixed sizes. Sources disagree which page came first (iPad Pro, Mac Studio and iPhone 14 Pro are all cited) ([Web Designer Depot](https://webdesignerdepot.com/what-is-the-bento-ui-trend-and-how-can-you-get-started), [UX Bootcamp](https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62)). | The visual template everyone copies. |
| **2022–2023** | bento.me turns bento tiles into a link-in-bio format. Linktree acquires it in June 2023 ([tech.eu](https://tech.eu/2023/06/06/sequoia-backed-bento-boxed-up-by-linktree)), and the service was announced to close in February 2026 ([AlternativeTo](https://alternativeto.net/news/2025/12/bento-to-shut-down-in-2026-as-linktree-takes-over-and-offers-migration-path)). | Bento becomes a consumer format, not just a keynote slide. |
| **2023–2024** | Dribbble wave. Component libraries ship bento blocks: Magic UI, Aceternity UI, shadcn-based builders ([Magic UI](https://magicui.design/docs/components/bento-grid), [Aceternity](https://ui.aceternity.com/components/bento-grid)). freeCodeCamp publishes a how-to ([freeCodeCamp, 2024](https://www.freecodecamp.org/news/bento-grids-in-web-design/)). | The default feature section on SaaS and AI sites, usually under a [Linear-style](2023-linear-style.md) dark page. |
| **2025–2026** | Still everywhere, and criticised as generic when every tile has the same weight. Hierarchy-first guides appear ([SaaSFrame](https://www.saasframe.io/blog/designing-bento-grids-that-actually-work-a-2026-practical-guide)). Chrome adds `reading-flow` for grid focus order ([Chrome](https://developer.chrome.com/blog/reading-flow)). | Mature pattern; the craft is now in hierarchy and accessibility. |

---

## Textbook rules

### Hierarchy

1. **Size = importance.** One hero tile at 2×2 (or wider), covering roughly 30–40% of the grid. Supporting tiles 1×1 and 2×1.
2. **Never all the same size.** A grid of equal squares is a card grid, not a bento.
3. **Tile count:** 4–9 per bento section. More than that and nothing stands out.

### Rhythm

4. **One gap** for the whole page: 12–16px for dense or dashboard feel, 16–24px for marketing, 24–32px for editorial.
5. **One outer radius** for all tiles (16–28px). Nested elements use **inner radius = outer radius − padding**.
6. **One inner padding** (20–32px), so text aligns across tiles.

### Content

7. **One idea per tile:** a headline of 2–6 words, at most one short sentence, and one visual, number or interaction. A tile that needs a paragraph is in the wrong layout.
8. **Vary tile types:**
   - **Hero:** headline plus a large visual.
   - **Stat:** a huge number plus a label.
   - **Visual:** a screenshot or illustration bleeding off an edge.
   - **Quote:** a testimonial with a name.
   - **Icon + line:** a small feature.
   - **CTA:** a short promise plus a button.
9. **Colour tiles sparingly:** one accent tile, one dark tile, the rest neutral. Coloured tiles mark what matters.

### Structure

10. **The grid closes:** every row is full. Plan with `grid-template-areas` so you can see the rectangle.
11. **Collapse simply:** 4–6 columns → 2 → 1. Re-plan the areas per breakpoint.
12. **DOM order = reading order.** Write tiles in the order they should be read, so the visual placement never contradicts it ([WCAG 1.3.2](https://www.w3.org/TR/WCAG22/#meaningful-sequence), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/CSS_grid_layout_and_accessibility)).

---

## Tokens

### The recipe in numbers

| Token | Range | Default here | Source |
|---|---|---|---|
| Columns (desktop) | 3–6 | 4 | freeCodeCamp (6); BentoCSS guide (4) |
| Gap | 8–12px dense · 16–24px marketing · 24–32px editorial | 16px | [BentoCSS design guide](https://bentocss.netlify.app/design-guide); freeCodeCamp (1.5vw) |
| Tile radius | 12–28px | 24px | Magic UI / Aceternity (`rounded-xl`, 12px) to Apple-style 24–28px |
| Inner padding | 20–32px | 24px | common practice |
| Row height | `minmax(180–220px, auto)` | `minmax(190px, auto)` | Magic UI (`auto-rows-[22rem]`, 352px) is a taller variant |
| Hero tile | 2×2+, ≥ 30–40% of area | 2×2 of 4×3 | BentoCSS ("≥ 40%" rule of thumb) |
| Breakpoints | collapse at ~900 and ~560–768px | 900 / 560 | freeCodeCamp (1000/750); BentoCSS (768) |
| Tiles per section | 4–9 | 6 | freeCodeCamp ("nine or fewer") |

```css
/* tokens.css: 2024 bento add-on. Colours come from the base style */
:root {
  --gap: 16px;
  --radius: 24px;
  --pad: 24px;
  --row: minmax(190px, auto);
  /* from the base style: --bg, --tile, --tile-2, --ink, --muted, --accent, --accent-soft, --dark-tile */
}
```

---

## Components

### The grid

```css
.bento {
  display: grid; gap: var(--gap);
  grid-template-columns: repeat(4, minmax(0, 1fr));   /* minmax(0,1fr) stops long words blowing tracks out */
  grid-auto-rows: var(--row);
  grid-template-areas:
    "roast roast stat  farm"
    "roast roast brew  farm"
    "quote quote quote sub";
}
@media (max-width: 900px) {
  .bento { grid-template-columns: repeat(2, minmax(0, 1fr));
           grid-template-areas: "roast roast" "stat farm" "brew farm" "quote quote" "sub sub"; }
}
@media (max-width: 560px) {
  .bento { grid-template-columns: 1fr; grid-template-areas: none; }
  .bento > * { grid-area: auto; }   /* fall back to DOM order */
}
```

### Tile

```css
.tile { background: var(--tile); border-radius: var(--radius); padding: var(--pad);
        position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
.tile h3 { font-size: 21px; line-height: 1.2; letter-spacing: -.02em; }
.tile p  { color: var(--muted); font-size: 15px; max-width: 42ch; margin: 0; }
.tile .inner { border-radius: calc(var(--radius) - var(--pad)); }   /* concentric corners */
```

### Tile types

```css
.t-stat .stat { font-size: clamp(56px, 7vw, 76px); font-weight: 700; letter-spacing: -.05em; line-height: 1; font-variant-numeric: tabular-nums; }
.t-hero { background: var(--accent-soft); }            /* the one accent tile */
.t-quote { background: var(--dark-tile); color: var(--on-dark); justify-content: center; }
.t-visual img, .t-visual svg { margin-top: auto; }     /* visual anchored to the bottom */
.bleed { position: absolute; right: -10%; bottom: -10%; width: 80%; }   /* screenshot running off the edge */
```

### Product bento (one big, two stacked)

```css
.bento-products { display: grid; gap: var(--gap); grid-template-columns: repeat(4, minmax(0, 1fr));
                  grid-template-areas: "p1 p1 p2 p2" "p1 p1 p3 p3"; }
```

### With other base styles

| Base | Tile treatment |
|---|---|
| Clean light (Apple-like) | `#f2f2f5` tiles on `#fbfbfd`, no borders, one tinted accent tile, one near-black quote tile |
| [Linear style](2023-linear-style.md) | `#111214` tiles, 1px hairline borders, cursor glow, gradient headline in the hero tile |
| [Neubrutalism](2022-neubrutalism.md) | 3px ink outlines, hard shadows, coloured fills per tile, radius 6px, gap ≥ shadow offset |
| [Glassmorphism](2021-glassmorphism.md) | frosted tiles over orbs; keep text tiles near-opaque and limit glass to 2–3 tiles |
| [Material](2016-material-design.md) | 12px radius, elevation-1 shadows, 16dp gap on the 8dp grid |

---

## Layout recipes

### 1. Feature overview (6 tiles, 4 columns)

```
┌───────────┬─────┬─────┐
│  HERO 2×2 │stat │     │
│           ├─────┤ tall│
│           │ icon│ 1×2 │
├───────────┴─────┼─────┤
│ quote 3×1       │ CTA │
└─────────────────┴─────┘
```

### 2. Five tiles (3 columns)

`"a a b" "a a c" "d e e"`: the hero top-left, two stacked, and two at the bottom with a wide one.

### 3. Eight tiles (6 columns)

`"a a a b b c" "a a a d e c" "f f g g h h"`: for a full product tour. Use only if each tile is truly one idea.

### 4. Product / category grid

One 2×2 featured item plus 2×1 rows, in a 4-column grid that collapses to one column on mobile.

### 5. Link-in-bio

A 2-column grid at max 560px wide: avatar and name 2×1, links 1×1, featured video 2×2. The bento.me format.

### 6. Dashboard summary row

The bento as the top summary of a dashboard (KPI tiles of mixed size), above a conventional table. Never as the whole dashboard.

---

## Do / Don't

| Do | Don't |
|---|---|
| One hero tile clearly biggest | 9 identical squares |
| Same radius and gap everywhere; concentric inner radii | 8px here, 32px there |
| Headline + one visual per tile | Paragraphs crammed into tiles |
| Plan with `grid-template-areas`; the grid closes | Ragged last rows and holes |
| DOM order = reading order | `order`, `dense` or areas that reshuffle meaning |
| One accent tile, one dark tile | A different colour for every tile |

---

## Accessibility

- **Reading and focus order.** Screen readers and the Tab key follow DOM order, not grid placement. Visual reordering with `grid-template-areas`, `order` or `grid-auto-flow: dense` must not change meaning ([WCAG 1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG22/#meaningful-sequence), [WCAG 2.4.3 Focus Order](https://www.w3.org/TR/WCAG22/#focus-order), [web.dev: content reordering](https://web.dev/articles/content-reordering)). Write tiles in reading order, and tab through the page at every breakpoint.
- **`dense` packing** is for purely decorative grids only ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/CSS_grid_layout_and_accessibility)). Chrome's `reading-flow` can align focus with visual order, but it isn't cross-browser yet, so don't rely on it ([Chrome](https://developer.chrome.com/blog/reading-flow)).
- **Text size in small tiles.** Keep body text at 15px or more and contrast at 4.5:1, especially on tinted tiles. The demo's tinted tiles carry ink text.
- **Semantics.** Each tile is an `<article>` (or a `<figure>` for a quote) with a heading. Decorative visuals get `aria-hidden="true"`. A calendar or chart tile gets a text label (`aria-label="Roast days: Tuesday and Thursday"`).
- **Interactive tiles.** If a whole tile is clickable, use one real link (stretched with a pseudo-element), not nested links. Give it a visible focus ring.
- **Motion.** Autoplaying video tiles need a pause control. Respect `prefers-reduced-motion`.

---

## Performance

- **Images in tiles:** set `width`/`height` or `aspect-ratio` to avoid layout shift. `loading="lazy"` below the fold, but never on the first row, which is often the LCP ([web.dev](https://web.dev/learn/performance/lazy-load-images-and-iframe-elements)).
- **Video tiles:** poster images, `preload="none"`, autoplay muted only when visible. Pause offscreen.
- **Prefer CSS/SVG visuals** for simple tiles (stats, calendars, maps). They are lighter and theme-aware, as in the demo.
- **`minmax(0, 1fr)`** prevents a long word or wide image from expanding a track and causing horizontal scroll.
- **Container queries** (`@container`) let a tile adapt its own layout to its size, which helps when the same tile appears at 1×1 and 2×1.

---

## Anti-patterns

1. **Equal-weight grid:** all tiles the same size. *Fix:* one hero tile; sizes by importance.
2. **Paragraph tiles:** essays inside boxes. *Fix:* one idea, or move it out of the bento.
3. **Holes:** ragged last rows. *Fix:* draw the areas; the rectangle closes.
4. **Order scramble:** `dense` or areas that read "price, then product name". *Fix:* DOM order first.
5. **Tiny text** in 1×1 tiles at 12px. *Fix:* fewer words, 15px+.
6. **Radius soup:** mismatched radii, inner corners not concentric. *Fix:* one token; inner = outer − padding.
7. **Bento for everything:** pricing, FAQ and footer all as bento. *Fix:* bento for overviews; normal sections elsewhere (the demo keeps plans and newsletter conventional).
8. **Mobile mush:** six tiles collapsing to a single 3,000px column of identical boxes. *Fix:* reorder areas for 2 columns, and drop a decorative tile on mobile if needed.

---

## Agent checklist

**Before you build**
- [ ] The content is an overview (features, products, stats, links), not a sequence.
- [ ] A base style is chosen; bento supplies only the layout.

**Build**
- [ ] One hero tile ≥ 30% of the area; the other sizes reflect importance.
- [ ] One gap, one radius, one padding token; inner radius = outer − padding.
- [ ] 4–9 tiles; each is one idea; mixed tile types.
- [ ] `grid-template-areas` per breakpoint; the grid closes at every width.
- [ ] Tracks use `minmax(0, 1fr)`.

**QA**
- [ ] Tabbing and screen-reader order match the visual order at desktop, tablet and phone widths.
- [ ] Body text ≥ 15px and ≥ 4.5:1 on every tile colour.
- [ ] No horizontal scroll at 320px; images have dimensions; first-row images aren't lazy.
- [ ] Clickable tiles have one link and a visible focus ring.

---

## Sources

**History**
- [Windows Central: origin of the Metro design language](https://www.windowscentral.com/origin-metro-ui-design-language): Live Tiles lineage.
- [Web Designer Depot: what is the bento UI trend](https://webdesignerdepot.com/what-is-the-bento-ui-trend-and-how-can-you-get-started): Apple origins, disputed first page.
- [UX Bootcamp: web design trend, bento box](https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62): Apple keynote origins.
- [tech.eu: Bento acquired by Linktree (2023)](https://tech.eu/2023/06/06/sequoia-backed-bento-boxed-up-by-linktree): the link-in-bio chapter.
- [AlternativeTo: Bento to shut down in 2026](https://alternativeto.net/news/2025/12/bento-to-shut-down-in-2026-as-linktree-takes-over-and-offers-migration-path)

**Practice**
- [freeCodeCamp: bento grids in web design (2024)](https://www.freecodecamp.org/news/bento-grids-in-web-design/): CSS recipe and breakpoints.
- [BentoCSS design guide](https://bentocss.netlify.app/design-guide): gap, column and tile-ratio rules of thumb.
- [Magic UI: bento grid](https://magicui.design/docs/components/bento-grid) and [Aceternity UI: bento grid](https://ui.aceternity.com/components/bento-grid): popular component defaults.
- [SaaSFrame: designing bento grids that actually work (2026)](https://www.saasframe.io/blog/designing-bento-grids-that-actually-work-a-2026-practical-guide): hierarchy-first guidance.

**Accessibility and performance**
- [WCAG 2.2: 1.3.2 Meaningful Sequence, 2.4.3 Focus Order](https://www.w3.org/TR/WCAG22/)
- [MDN: CSS grid layout and accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/CSS_grid_layout_and_accessibility)
- [web.dev: content reordering](https://web.dev/articles/content-reordering)
- [Chrome: reading-flow (2025)](https://developer.chrome.com/blog/reading-flow)
- [web.dev: lazy-loading images and iframes](https://web.dev/learn/performance/lazy-load-images-and-iframe-elements)

*Research notes:* Which Apple page first used the layout is disputed and unconfirmed by Apple. No NN/g or Smashing article specific to bento was found. Component-library defaults vary; the values above are ranges seen across them, not a standard.
