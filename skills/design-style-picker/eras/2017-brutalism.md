---
year: 2017
style: Web Brutalism
slug: brutalism
aka: [Brutalist web design, Anti-design]
era: "2014–2019"
peak: "2016–2017"
depth: basic
lineage: []
---

# 2017 · Web Brutalism

> A reaction against polished, templated sites: raw HTML look, system or default fonts, visible structure, harsh contrast, no decoration, and rules broken on purpose.

## Snapshot

| | |
|---|---|
| **Feels like** | raw, honest, confrontational, art-school, early-web |
| **Signature move** | the page looks *unstyled*, but on purpose |
| **Best for** | artists, studios, magazines, portfolios, manifestos, experimental brands |
| **Avoid for** | e-commerce checkout, SaaS apps, anything task-driven |

Brutalism never dominated *usage*. It dominated the *conversation* of 2016–2017 as the counter-trend to Material and Bootstrap sameness, and it is the root of [2022's neubrutalism](2022-neubrutalism.md).

## Origin & timeline

- **2014**: Pascal Deville starts the directory brutalistwebsites.com and names the style after brutalist architecture (raw concrete) ([Smashing Magazine](https://www.smashingmagazine.com/2020/01/split-personality-brutalist-web-development/)).
- **2016-05**: Mainstream press: "the hottest trend in web design is intentionally making sites ugly" ([Neatorama](https://www.neatorama.com/2016/05/13/The-Hottest-Trend-in-Web-Design-Intentionally-Making-Sites-Ugly-Difficult-to-Use/), [Boing Boing](https://boingboing.net/2016/05/31/the-return-to-a-simpler-uglie.html)).
- **2016-08 / 2016-12**: Web Designer Depot's *The rise and rise of the brutalist design trend* and Adobe's interview with Deville ([WDD](https://www.webdesignerdepot.com/2016/08/the-rise-and-rise-of-the-brutalist-design-trend/), [Adobe](https://blog.adobe.com/en/publish/2016/12/01/brutalist-web-designers-eschew-rules-for-ux-best-practices)).
- **2017**: Peak imitation in portfolios and studios. Agencies and brands borrow the look (Balenciaga, Bloomberg Businessweek's experimental layouts).
- **2018**: David Copeland's *brutalist-web.design* restates it as "honest" design: content first, fast, real links ([brutalist-web.design](https://brutalist-web.design/)).
- **2021→**: Softened and commercialised into neubrutalism.

## Textbook rules

There are two schools, and both count as brutalist:

**A. Raw / "honest" (Copeland's guidelines)**
1. Content is readable with no styling, and the page works without JS.
2. Links look like links (underlined, default blue/purple). Buttons look like buttons.
3. Navigation is plain text. Every page is fast and lightweight.
4. Decoration only if it serves the content.

**B. Expressive / anti-design (the Deville directory aesthetic)**
1. Break the grid: overlapping, collision and asymmetry are allowed.
2. Use system or default fonts (Times, Arial, Courier) at extreme sizes, or one aggressive display face.
3. Visible structure: borders, table lines, raw `<hr>`s, outlines.
4. Harsh colour: pure black and white, plus one clashing pure hue (`#0000ff`, `#ff0000`, `#00ff00`).
5. No shadows, no radius, no gradients, no stock photos.

## Tokens

```css
:root {
  --ink: #000;
  --paper: #fff;
  --clash: #0000ff;          /* default-link blue doubles as the accent */
  --font: "Times New Roman", Times, serif;
  --font-mono: "Courier New", Courier, monospace;
  --rule: 2px solid var(--ink);
  --radius: 0;
}
```

Type is extreme: 12–14px mono for meta text, 8–20vw for display, and no middle sizes.

## Components

```html
<header class="b-head">
  <a href="/">STUDIO NAME</a>
  <nav><a href="/work">Work</a> / <a href="/info">Info</a> / <a href="mailto:hi@example.com">Contact</a></nav>
</header>
<main class="b-grid">
  <h1 class="b-display">WE MAKE<br>THINGS.</h1>
  <table class="b-index"><tr><td>2017</td><td><a href="#">Project title</a></td><td>Identity</td></tr></table>
</main>
```

```css
body      { margin: 0; background: var(--paper); color: var(--ink); font: 16px/1.3 var(--font); }
a         { color: var(--clash); text-decoration: underline; }
a:visited { color: #551a8b; }
.b-head   { display: flex; justify-content: space-between; border-bottom: var(--rule); padding: 8px; font-family: var(--font-mono); }
.b-display{ font: 400 14vw/0.85 var(--font); margin: 0; letter-spacing: -0.04em; }
.b-index  { width: 100%; border-collapse: collapse; font-family: var(--font-mono); }
.b-index td { border: 1px solid var(--ink); padding: 4px 8px; }
button    { all: revert; }   /* native buttons are a feature */
```

Signature compositions: a full-viewport headline, a marquee, raw image grids with no gutters, an index table of projects, a cursor-following image preview, and a hard colour flash on hover.

## Do / Don't

| Do | Don't |
|---|---|
| Strong type hierarchy, even if the fonts are default | Make the page actually unusable |
| Keep native link and button behaviour | Disguise links as plain text |
| Use *one* deliberate rule-break per view | Break every convention at once |
| Ship tiny, fast pages | Mistake heavy JS chaos for brutalism |

## Accessibility

- Anti-design often removes focus outlines and link cues. Brutalism A is naturally accessible, and B needs care.
- Clashing pairs such as pure blue on black (2.4:1) fail. Check every pair.
- Overlapping text and huge display type break at 200% zoom. Test reflow at 320px.
- A 2022 usability study found brutalist visuals slowed task completion. Keep tasks (contact, buy) conventional.

## Agent checklist

- [ ] It's clear which school (raw/honest or expressive) the page follows.
- [ ] No radius, shadows or gradients. Default or system fonts, or one display face.
- [ ] Links are underlined, focus is visible, native controls are kept.
- [ ] Contrast passes even with clashing colours.
- [ ] Rule-breaking is in the layout and type, not in the interaction model.
- [ ] Page weight is small. Works without JS.

## Sources

- [brutalistwebsites.com](https://brutalistwebsites.com/): the defining directory (Pascal Deville, 2014).
- [Smashing Magazine: The split personality of brutalist web development](https://www.smashingmagazine.com/2020/01/split-personality-brutalist-web-development/): history and the two schools.
- [Adobe Blog: Brutalist web designers eschew rules](https://blog.adobe.com/en/publish/2016/12/01/brutalist-web-designers-eschew-rules-for-ux-best-practices): Deville interview.
- [Web Designer Depot: The rise and rise of the brutalist design trend](https://www.webdesignerdepot.com/2016/08/the-rise-and-rise-of-the-brutalist-design-trend/)
- [brutalist-web.design (David Copeland)](https://brutalist-web.design/): the "honest" guidelines.
- [NN/g: Neobrutalism](https://www.nngroup.com/articles/neobrutalism/): how it evolved.
