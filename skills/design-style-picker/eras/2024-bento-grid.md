---
year: 2024
style: Bento Grid
slug: bento-grid
aka: [Bento box UI, Bento layout]
era: "2022–present"
peak: "2023–2024"
depth: basic
lineage: [linear-style, material-design]
---

# 2024 · Bento Grid

> A modular grid of rounded tiles of different sizes, each holding one idea (a stat, a screenshot, a feature, a quote), packed together like compartments in a Japanese bento box.

## Snapshot

| | |
|---|---|
| **Feels like** | organised, product-y, scannable, Apple keynote |
| **Signature move** | a 4–6 column grid where tiles span 1×1, 2×1, 2×2, all with the same radius and gap |
| **Best for** | feature overviews, product pages, portfolios, link-in-bio pages, dashboards |
| **Avoid for** | long-form reading, step-by-step flows, anything with a strict order |

## Origin & timeline

- **2012**: Windows 8 Metro live tiles are an earlier ancestor of tile layouts ([Web Designer Depot](https://webdesignerdepot.com/what-is-the-bento-ui-trend-and-how-can-you-get-started)).
- **2021–2022**: Apple's keynote "summary slides" and product pages (iPhone 14 Pro, Mac Studio) make the rounded-tile overview a signature ([UX Bootcamp: Web design trend, bento box](https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62), [Visual Movements: Bento](https://visual-movements.pages.dev/movements/bento/)).
- **2022–2023**: bento.me makes bento tiles the link-in-bio format. Dribbble fills with bento feature sections.
- **2024**: The default feature section on SaaS and AI landing pages, usually inside a [Linear-style](2023-linear-style.md) dark page. Tailwind/shadcn templates ship bento blocks.
- **2025–2026**: Still everywhere, and criticised as generic when every tile has the same weight.

## Textbook rules

1. **One idea per tile.** A headline plus one visual or number. If a tile needs a paragraph, it's the wrong layout.
2. **Size = importance.** The hero tile is 2×2 or wider, supporting tiles 1×1 or 2×1. Never make everything the same size.
3. **Consistent rhythm.** The same gap everywhere (12–24px) and the same radius on every tile (16–28px). Use inner radius = outer radius − padding for nested elements.
4. **The grid must close.** Tiles fill a clean rectangle with no ragged holes. Use `grid-template-areas` or `grid-auto-flow: dense`.
5. **Vary the content type.** Mix a screenshot tile, a big-number tile, an icon tile, a quote tile and a small interactive tile.
6. **Tiles may bleed.** Imagery can run off the edge of a tile (clipped by `overflow: hidden`) to suggest more.
7. **Collapse simply.** 6 → 4 → 2 → 1 columns. Re-order for mobile with DOM order, not just visual placement.

## Tokens

```css
:root {
  --bento-gap: 16px;
  --bento-radius: 24px;
  --bento-pad: 24px;
  --tile: #f4f4f6;          /* light theme tile */
  --tile-dark: #141416;     /* dark theme tile */
  --tile-line: rgb(0 0 0 / 0.06);
  --ink: #111;
  --muted: #6e6e73;         /* Apple-ish secondary grey */
  --font: "Inter", "SF Pro Display", system-ui, sans-serif;
}
```

## Components

```html
<section class="bento" aria-label="Features">
  <article class="tile tile--hero">…</article>
  <article class="tile tile--tall">…</article>
  <article class="tile">…</article>
  <article class="tile">…</article>
  <article class="tile tile--wide">…</article>
</section>
```

```css
.bento {
  display: grid; gap: var(--bento-gap); max-width: 1200px; margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  grid-template-areas:
    "hero hero tall a"
    "hero hero tall b"
    "wide wide wide wide";
}
.tile        { background: var(--tile); border: 1px solid var(--tile-line); border-radius: var(--bento-radius);
               padding: var(--bento-pad); overflow: hidden; position: relative; }
.tile--hero  { grid-area: hero; }
.tile--tall  { grid-area: tall; }
.tile--wide  { grid-area: wide; }
.tile:nth-child(3) { grid-area: a; }
.tile:nth-child(4) { grid-area: b; }
.tile h3     { font: 600 20px/1.2 var(--font); letter-spacing: -0.01em; margin: 0 0 6px; }
.tile p      { color: var(--muted); font: 400 15px/1.45 var(--font); margin: 0; }
.tile .stat  { font: 700 64px/1 var(--font); letter-spacing: -0.04em; }
.tile img.bleed { position: absolute; right: -10%; bottom: -10%; width: 80%; border-radius: 12px; }

@media (max-width: 900px) {
  .bento { grid-template-columns: repeat(2, 1fr);
           grid-template-areas: "hero hero" "tall a" "tall b" "wide wide"; }
}
@media (max-width: 560px) {
  .bento { grid-template-columns: 1fr; grid-template-areas: none; }
  .bento > .tile { grid-area: auto; }
}
```

Tile types: **stat** (a huge number plus a label), **screenshot** (UI bleeding off the corner), **icon + line**, **quote** (avatar plus a short testimonial), **mini-interactive** (a toggle or slider that does something), and **gradient spotlight** (an accent-filled tile for the key feature).

## Do / Don't

| Do | Don't |
|---|---|
| One hero tile clearly bigger | 9 identical squares |
| Same radius and gap everywhere | Mixed radii (8px here, 32px there) |
| Short headline plus one visual per tile | Paragraphs crammed into tiles |
| DOM order = reading order | Rely on grid placement to reorder meaning |

## Accessibility

- Screen readers follow DOM order, not grid areas. Write tiles in the order they should be read.
- Small tiles tempt designers into 12px text. Keep body text at 15px or more and contrast at 4.5:1.
- Hover-only tile interactions need keyboard focus equivalents.
- Autoplaying video tiles need pause controls and must respect `prefers-reduced-motion`.

## Agent checklist

- [ ] Hero tile is visibly the largest. Sizes match importance.
- [ ] One gap and one radius token used everywhere. Nested radius = outer − padding.
- [ ] Grid closes into a clean rectangle at every breakpoint.
- [ ] Mixed tile types (stat, screenshot, quote, icon).
- [ ] DOM order matches reading order. Collapses to 1 column cleanly.
- [ ] Text 15px or more, at 4.5:1.

## Sources

- [freeCodeCamp: Bento grids in web design](https://www.freecodecamp.org/news/bento-grids-in-web-design/): CSS grid recipe and breakpoints.
- [Web Designer Depot: What is the bento UI trend](https://webdesignerdepot.com/what-is-the-bento-ui-trend-and-how-can-you-get-started): origin debate, Metro tiles.
- [UX Bootcamp: Web design trend, bento box](https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62): Apple origins.
- [Visual Movements: Bento](https://visual-movements.pages.dev/movements/bento/): traits and lineage.
- [Mockuuups: Best bento grid design examples](https://mockuuups.studio/blog/post/best-bento-grid-design-examples/): how widespread it became.
