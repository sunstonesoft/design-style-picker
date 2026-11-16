---
year: 2022
style: Neubrutalism
slug: neubrutalism
aka: [Neo-brutalism, Neobrutalism, New brutalism, Neo-brutal]
era: "2021–2024"
peak: "2022–2023"
depth: deep
lineage: [brutalism, gradients-flat-2]
---

# 2022 · Neubrutalism

> Friendly brutalism: flat saturated colour blocks, thick near-black outlines, hard offset shadows with zero blur, and chunky type. It looks like a sticker sheet or a zine built in Figma, and it is designed and orderly underneath.

This is a **deep** era: history, a sourced recipe in numbers, tokens, components, layout recipes, accessibility with exact contrast figures, performance, anti-patterns and a QA routine. A working demo builds the shared Kettlefern brief in this style: [`../examples/2022-neubrutalism/`](../examples/2022-neubrutalism/index.html).

---

## Snapshot

| | |
|---|---|
| **Feels like** | loud, playful, honest, indie, "made by people" |
| **Signature move** | `border: 3px solid #0f0f0f` plus `box-shadow: 4px 4px 0 #0f0f0f`, on a flat saturated fill |
| **Best for** | creator tools, indie SaaS, restaurants and food brands, events, kids, portfolios, launches |
| **Avoid for** | finance, healthcare, government, luxury, dense enterprise admin |
| **Lineage** | architectural *nybrutalism* (1950) → web brutalism (2014) → **neubrutalism (2021–22)** → softer "post-neo-brutalism" and refreshed brand systems (2024) |
| **Opposite of** | [2021 glassmorphism](2021-glassmorphism.md) and [2023 Linear style](2023-linear-style.md): no blur, no glow, no gradients, every edge visible |

### The five ingredients

1. **Outlines:** a solid near-black border on every container and control.
2. **Hard shadows:** a single-colour offset shadow with **zero blur**, the same colour as the outline.
3. **Flat loud fills:** two or three saturated pastels or primaries on a cream or white base. No gradients.
4. **Chunky type:** a heavy display face for headings, a neutral grotesque for body text, often monospace for small meta text.
5. **Physical interaction:** the element lifts on hover and squashes into its shadow on press.

Unlike [2017 brutalism](2017-brutalism.md), which rejected design, neubrutalism is a **polished system** that borrows brutalism's rawness. Grids, spacing and states are all deliberate.

---

## Origin & timeline

| When | What happened | Why it matters |
|---|---|---|
| **1950** | Swedish architect Hans Asplund coins *nybrutalism* ("new brutalism") for a house in Uppsala. Reyner Banham's 1955 essay *The New Brutalism* spreads the term ([New Criterion](https://newcriterion.com/article/the-new-new-brutalism/)). | The name's root: raw materials shown honestly. |
| **2014** | Web brutalism: brutalistwebsites.com collects raw, anti-design sites ([2017 era](2017-brutalism.md)). | Rawness becomes a web aesthetic, but a hard-to-use one. |
| **2019–2021** | 1990s graphic-design revival: zines, stickers, Memphis shapes, early-Windows bevel nostalgia, monospace ([SVGator](https://www.svgator.com/blog/what-is-neubrutalism/)). | The colourful, playful half of the style. |
| **2021** | **Gumroad rebuilds its design system.** It started the year with 140 CSS files (30,000+ lines), rebuilt in SCSS with Figma as the source of truth, and relaunched with pink, black outlines and hard shadows. The launch was announced for Black Friday 2021 ([Gumroad: Behind our new design system](https://gumroad.com/blog/behind-gumroads-new-design-system), [Gumroad launch post](https://gumroad.com/blog/p/a-new-gumroad-launches-this-black-friday-get-a-sneak-peek)). | The poster child every later article cites. |
| **2022-03** | Michał Malewicz (Hype4) publishes *Neubrutalism is taking over the web* and popularises the name, as he did for neumorphism and glassmorphism ([Hype4](https://hype4.academy/articles/design/neubrutalism-is-taking-over-web)). Who first used the word is not documented. | The term spreads on Dribbble and in Figma Community. |
| **2022–2023** | **Peak.** Figma Community kits, Tailwind and shadcn component sets, indie SaaS and creator landing pages. Trend roundups list it for 2022 and 2023 ([Bejamas](https://bejamas.com/blog/neubrutalism-web-design-trend), [Made Good Designs](https://madegooddesigns.com/neobrutalism-web-design/)). | Becomes the default "not corporate" look. |
| **2023–2024** | Open-source kits mature: neobrutalism.dev (shadcn-based) and others ([neobrutalism.dev](https://neobrutalism.dev/docs/installation)). | The style is copy-paste available, which also speeds its saturation. |
| **2024** | Saturation critique ("it only differentiates while it's rare"). Talk of a softer "post-neo-brutalism" ([Glasswings](https://glasswings.com.au/blog/2024-05/17-183642.html)). Figma's September 2024 brand refresh drops the heavy outlines of its earlier look ([Design Compass](https://designcompass.org/en/2024/09/20/figma-visual-identity-refresh/)). | It shifts from a trend to a tool you choose on purpose. |
| **2025-04** | NN/g publishes [*Neobrutalism: Definition and Best Practices*](https://www.nngroup.com/articles/neobrutalism/) (Hayat Sheikh). | Catalogued, with usability rules. |

---

## Textbook rules

Merged from NN/g's best practices, the Gumroad system, Malewicz's essay and the open-source kits, written as instructions.

### Structure

1. **Outline every container and control** with one ink colour, 2–4px. Use 3px as the default, 2px on small chips and dense UI, and 4px for one hero element at most.
2. **Hard shadows only.** Offset down-right 3–8px, **0 blur**, the same ink as the border. Use one shadow scale: small 4px for controls, large 8px for cards and featured blocks.
3. **Little or no radius.** 0–8px on boxes, pills (`999px`) allowed for tags and badges. Pick one box radius and keep it everywhere.
4. **Visible structure.** Sections can be boxed, divided by full-width rules, or set on full-bleed colour bands with an outline top and bottom.

### Colour

5. **Ink + paper + two or three fills.** Ink near-black (`#0f0f0f`–`#000`), paper cream or off-white (`#fffaf0`, `#f4f4f0`), then two or three saturated fills. NN/g recommends limiting the palette to 2–3 colours.
6. **Text is ink.** Black or near-black text on every fill. White text fails on every pastel (see Accessibility).
7. **No gradients, no blur, no transparency** on surfaces. Flatness is the point.
8. **Fills mark meaning.** Use the brightest fill (usually yellow) for the primary action and featured items, and distinct fills to separate categories. Don't colour things randomly.

### Type

9. **Heavy display face for headings** (Archivo Black, Syne 800, Space Grotesk 700, Lexend Mega). Very large (headings about twice body size or more, per NN/g) with tight leading.
10. **Neutral body face** (Space Grotesk 400, Inter, Public Sans, Roboto). NN/g advises a neutral body font so the loud parts stay readable.
11. **Monospace for meta text:** prices units, kickers, tags, footnotes (Space Mono, IBM Plex Mono).

### Interaction

12. **Physical press.** Hover: `translate(-2px, -2px)` with a bigger shadow. Active: `translate(4px, 4px)` with no shadow, so the button lands in its shadow. 100–150ms.
13. **One primary style.** The primary button is filled and shadowed. Secondary is outline-only with no shadow (it gains one on hover). NN/g warns that loud everywhere means hierarchy nowhere.
14. **Focus is louder than hover.** A 3px ink outline offset 3px, plus a fill ring, on every control.

### Spacing and decoration

15. **Generous inner padding:** 24–32px in cards (NN/g). Boxes need air inside to keep the loudness readable.
16. **Decorate with intent:** one rotated sticker, one highlighted word, one marquee per page. Each is a signature, so don't repeat it in every section.

---

## Tokens

### The recipe in numbers

| Token | Textbook range | Default here | Source |
|---|---|---|---|
| Border width | 2–4px | 3px | Neubrutalism Definitive Guide (3px default); neobrutalism.dev v3 (2px); NN/g ("thick lines") |
| Border colour | `#000` / near-black | `#0f0f0f` | NN/g; Gumroad token extraction |
| Shadow | `3–12px` offset, 0 blur | `4px 4px 0` · `8px 8px 0` | Gumroad extraction (`4px 4px 0 #000`); Definitive Guide (3/5/8/12 tiers) |
| Radius | 0–12px, pills for tags | 6px | Definitive Guide (0); Gumroad extraction (8px buttons, 12px cards) |
| Background | cream / off-white | `#fffaf0` | Gumroad extraction `#f4f4f0`; Definitive Guide `#FFFDF5` |
| Fills | 2–3 saturated colours | yellow, pink, mint (+ lilac, cyan) | Gumroad extraction: pink `#ff90e8`, yellow `#ffc900`; Definitive Guide: `#FFD23F`, `#FF6B6B` |
| Hover | `translate(-2px,-2px)`, shadow +2–3px | same | Definitive Guide |
| Active | `translate(3–4px,3–4px)`, no shadow | `translate(4px,4px)` | Definitive Guide |
| Transition | 100–150ms | 120ms | Definitive Guide |
| Card padding | 24–32px | 24px | NN/g |

*The Gumroad values come from a third-party extraction of its site, not from Gumroad documentation. The Definitive Guide is a third-party guide. Both are used here as common practice, not as a spec.*

```css
/* tokens.css: 2022 neubrutalism */
:root {
  --ink: #0f0f0f;
  --paper: #fffaf0;
  --white: #ffffff;
  --yellow: #ffd23f;   /* primary action, featured */
  --pink: #ff90e8;     /* the Gumroad-adjacent pink */
  --mint: #3ee09b;
  --lilac: #b8a6ff;
  --cyan: #a6faff;
  --bw: 3px;
  --border: var(--bw) solid var(--ink);
  --border-thin: 2px solid var(--ink);
  --shadow: 4px 4px 0 var(--ink);
  --shadow-lg: 8px 8px 0 var(--ink);
  --radius: 6px;
  --font-display: "Archivo Black", "Arial Black", Impact, sans-serif;
  --font-body: "Space Grotesk", "Segoe UI", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, "Courier New", monospace;
  --ease: cubic-bezier(.2, .9, .3, 1.2);   /* tiny overshoot = springy press */
  --dur: 120ms;
}
```

Free fonts: Archivo Black, Space Grotesk, Space Mono, Syne, Lexend Mega, Public Sans (Google Fonts). Gumroad itself uses ABC Favorit, a commercial face; Space Grotesk is the closest free stand-in.

Dark variant (rarely used, but possible): swap ink and paper (`--paper: #111`, `--ink: #fffaf0`), keep fills as they are, and keep **text on fills dark**, so cards on a dark page still carry ink text.

---

## Components

All taken from the [demo](../examples/2022-neubrutalism/index.html).

### Button (primary and secondary)

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px; min-height: 48px; padding: 0 22px; white-space: nowrap;
  background: var(--yellow); color: var(--ink); border: var(--border); border-radius: var(--radius);
  box-shadow: var(--shadow); font: 700 16px var(--font-body); text-decoration: none; cursor: pointer;
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.btn:hover  { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
.btn:active { transform: translate(4px, 4px);   box-shadow: 0 0 0 var(--ink); }
.btn--secondary { background: var(--white); box-shadow: none; }   /* quieter: outline only */
.btn--secondary:hover { box-shadow: var(--shadow); }
:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; box-shadow: 0 0 0 6px var(--yellow); }
```

### Card

```css
.card { background: var(--white); border: var(--border); border-radius: var(--radius); box-shadow: var(--shadow-lg); padding: 24px; }
.card.f1 { background: var(--yellow); } .card.f2 { background: var(--mint); } .card.f3 { background: var(--lilac); }
```

### Highlighted word

```html
<h1>Coffee roasted on <span class="hl">Tuesday</span>, in your cup by Friday.</h1>
```
```css
.hl { background: var(--yellow); border: var(--border); box-shadow: var(--shadow); padding: 0 .12em;
      display: inline-block; transform: rotate(-1.5deg); }
```

### Sticker badge

```css
.sticker { width: 112px; height: 112px; border-radius: 50%; background: var(--yellow); border: var(--border);
           box-shadow: var(--shadow); display: grid; place-items: center; text-align: center;
           font: 400 17px/1 var(--font-display); transform: rotate(-12deg); }
```

Mark it `aria-hidden="true"` if the words repeat elsewhere. Rotated text is decoration, never the only place information lives.

### Tag / pill

```css
.tag { display: inline-block; border: var(--border-thin); border-radius: 999px; padding: 2px 10px;
       background: var(--mint); font: 700 12px var(--font-mono); }
```

### Input

```css
input { min-height: 52px; padding: 0 16px; border: var(--border); border-radius: var(--radius);
        background: var(--white); font: 500 17px var(--font-body); color: var(--ink); }
input:focus-visible { outline: none; box-shadow: var(--shadow); background: #fffbe6; }   /* border width never changes */
```

### Marquee strip

```html
<div class="marquee" aria-hidden="true"><div class="track"><span>ROASTED TUESDAY ✦ SHIPPED FRIDAY ✦</span>…repeat…</div></div>
```
```css
.marquee { background: var(--ink); color: var(--yellow); border-bottom: var(--border); overflow: hidden; white-space: nowrap;
           font: 700 15px var(--font-mono); letter-spacing: .06em; }
.marquee .track { display: inline-flex; gap: 32px; padding: 10px 0; }
@media (prefers-reduced-motion: no-preference) { .marquee .track { animation: slide 28s linear infinite; } }
@keyframes slide { to { transform: translateX(-50%); } }
```

The content is duplicated so the loop is seamless, so hide it from screen readers and keep the real message elsewhere.

### Featured pricing card

```css
.plan--featured { background: var(--yellow); transform: translateY(-14px); position: relative; }
.plan--featured .badge { position: absolute; top: -18px; right: 18px; background: var(--pink); border: var(--border);
  border-radius: 999px; padding: 4px 14px; font: 700 13px var(--font-mono); transform: rotate(4deg); box-shadow: var(--shadow); }
.plan--featured .btn { background: var(--ink); color: var(--yellow); }   /* inverted CTA stands out on yellow */
```

### Modal

```css
dialog { border: var(--border); border-radius: var(--radius); box-shadow: var(--shadow-lg); padding: 32px; background: var(--white); }
dialog::backdrop { background: rgb(15 15 15 / .55); }
```

---

## Layout recipes

### 1. Landing page (the default composition)

```
┌ nav: wordmark ··· links ··· [yellow CTA] ─────── 3px rule ┐
│ ███ marquee strip: ink band, yellow mono text ███          │
│                                                            │
│  BIG HEADLINE with one       ┌──────────┐ (sticker)        │
│  [highlighted] word          │ product  │ rotated 3°       │
│  body · [primary] [secondary]│ object   │                  │
│                              └──────────┘                  │
│ ┌yellow┐ ┌mint──┐ ┌lilac─┐   three feature cards, 28px gap │
│ ═════ full-bleed cyan band: product cards (white) ═════    │
│ plans: middle one yellow, lifted 14px, sticker badge       │
│ giant quote card · newsletter card · ink footer            │
└────────────────────────────────────────────────────────────┘
```

- Alternate **paper sections** and **full-bleed colour bands** with outlined top and bottom edges.
- Section padding 64–96px. Card grids gap 24–32px (the gap has to fit the 8px shadows).
- Collapse three columns to one under about 860px. Remove the featured card's lift on mobile.

### 2. Product / pricing grid

White cards on a colour band, each with a coloured "art" well (an outlined box with a fill) above the text. Price in the display face, unit in mono, CTA bottom-right.

### 3. Creator / link-in-bio page

Single column, max 560px wide. Avatar in an outlined circle, name in the display face, then stacked full-width outline buttons in alternating fills, one highlighted. Pairs well with the [bento add-on](2024-bento-grid.md) for a tile version.

### 4. Docs or app UI (restrained neubrutalism)

Use 2px borders and the small shadow only, no rotation and no marquee, and one fill (yellow) for primary actions and the active nav item. The style survives in apps only when toned down.

### 5. Event page

A poster hero: huge stacked type, date in a rotated sticker, schedule as a table of outlined rows with mono times, sponsors in a marquee.

---

## Do / Don't

| Do | Don't |
|---|---|
| Two or three fills plus ink and paper | Paint every card a different colour |
| Same ink for borders, shadows and text | Mix soft grey shadows with hard ones |
| 24–32px padding inside boxes | Cram outlined boxes edge to edge |
| One primary button style; secondary outline-only | Shadowed, filled buttons everywhere |
| Squash-on-press with `transform` | Animate `box-shadow` or border width |
| One sticker, one highlighted word, one marquee | Rotate half the page |
| Dark text on every fill | White text on pastels |

---

## Accessibility

### Contrast, computed (WCAG 2.x, against ink `#0f0f0f` and white)

| Fill | Ink text | White text |
|---|---|---|
| Pink `#ff90e8` | **9.5 : 1** ✓ | 2.0 : 1 ✗ |
| Yellow `#ffd23f` | **13.3 : 1** ✓ | 1.4 : 1 ✗ |
| Mint `#3ee09b` | **11.3 : 1** ✓ | 1.7 : 1 ✗ |
| Lilac `#b8a6ff` | **9.1 : 1** ✓ | 2.1 : 1 ✗ |
| Cyan `#a6faff` | **16.2 : 1** ✓ | 1.2 : 1 ✗ |
| Coral `#ff6b6b` | **6.9 : 1** ✓ | 2.8 : 1 ✗ |
| Blue `#4d7cff` | **5.2 : 1** ✓ | 3.7 : 1 ✗ |
| Paper `#fffaf0` | **18.4 : 1** ✓ | n/a |

Fill-on-fill pairs: yellow on cyan **1.2 : 1**, pink on yellow **1.4 : 1**, blue on yellow **2.6 : 1**. All fail as text. Two adjacent fills also barely separate as shapes, which is why the ink outline must stay (it gives ≥ 9 : 1 boundaries).

**Rules that follow:**
1. **Ink text on every fill.** Never white text on pastels, and never coloured text on a fill.
2. **Pink or mint as a text colour on paper fails.** Use fills as backgrounds, not as text colours.
3. **Keep the outline.** It provides the 3 : 1 non-text contrast ([WCAG 1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)) that the fills alone don't.
4. **Hierarchy:** when everything is loud, nothing stands out. Keep one primary action style per section (NN/g).
5. **Focus beats hover:** a 3px ink outline with a 3px offset, plus a fill ring, on every focusable element. Test it on every fill.
6. **State without colour alone:** pressed buttons move, the active nav gets an outline, and links stay underlined.
7. **Motion:** marquees, wobbles and parallax stop under `prefers-reduced-motion`. The press translate is tiny and can stay, or be removed.
8. **Rotated text** is decorative. The same information must exist in straight text. Rotation hurts readability for people with dyslexia and low vision.
9. **Forced colours:** borders become `CanvasText` and shadows disappear. Make sure boxes still read with borders only.

---

## Performance

Neubrutalism is one of the cheapest styles to render: no blur, no backdrop filters, no gradients, no images required.

- **Hard shadows are cheap; animating them isn't.** Keep shadow transitions short (≤150ms) or move the element with `transform` and leave the shadow static. For many animated cards, put the shadow on a pseudo-element and animate only `transform`.
- **Never change border width on hover or focus.** It shifts layout (CLS). Change the shadow, background or outline instead.
- **Watch `overflow: hidden`.** Offset shadows and rotated stickers get clipped by parents. Leave room in gaps (≥ shadow offset) and don't clip card containers.
- **Fonts are the main cost.** Display faces like Archivo Black are single-weight. Load only the weights you use, with `display=swap` and a metric-similar fallback (Arial Black, Impact).
- **Marquee:** animate `transform` only, duplicate the content once, pause when offscreen if the page has several.

---

## Anti-patterns

1. **Rainbow soup:** five or more fills on one screen. *Fix:* two or three, with meaning.
2. **White text on pastel:** the most common failure (1.2–2.8 : 1). *Fix:* ink text.
3. **Soft shadows sneaking in:** a blurred grey shadow next to hard ones breaks the style. *Fix:* zero blur, ink colour, one scale.
4. **Everything shadowed:** buttons, cards, inputs, tags and images all lifted, so nothing is primary. *Fix:* shadows on cards and the primary button; secondary actions flat.
5. **Rotation overload:** stickers, cards and headings all tilted. *Fix:* one or two rotated decorations per page.
6. **Cramped boxes:** thick borders with 8px padding feel suffocating. *Fix:* 24–32px inside.
7. **Border-width hover jumps:** 3px → 4px on hover shakes the layout. *Fix:* fixed border and moving shadow.
8. **Clipped shadows:** cards in an `overflow: hidden` slider lose their shadows. *Fix:* pad the scroller or use `overflow: clip` with a margin.
9. **Brutalism confusion:** removing focus rings, link underlines and conventions "for rawness". That's 2017 anti-design. *Fix:* neubrutalism keeps every convention and decorates around it.
10. **Wrong industry:** neubrutalist banking, clinics or luxury reads as careless. *Fix:* check the [picker](../picker.md) first.

---

## Agent checklist

**Before you build**
- [ ] The industry and tone fit (playful, indie, food, creators, events); see `picker.md`.
- [ ] Palette chosen: ink + paper + 2–3 fills, each with a job.

**Build**
- [ ] Tokens from this file. Borders, shadows and text all use the one ink colour.
- [ ] Every container and control is outlined; shadows have 0 blur and come from one scale.
- [ ] Display face for headings (≈2× body or more), neutral body face, mono for meta.
- [ ] One primary button style (filled + shadow); secondary is outline-only.
- [ ] Hover lifts, press squashes, using `transform`; border widths never change.
- [ ] 24–32px padding in cards; grid gaps ≥ the shadow offset.
- [ ] At most one sticker, one highlighted word, one marquee per page.

**QA**
- [ ] Ink text on every fill; no white or coloured text on pastels (see the contrast table).
- [ ] Visible 3px focus ring on every control, on every fill colour.
- [ ] Marquee and decorative motion stop under `prefers-reduced-motion`.
- [ ] Nothing clipped: shadows and stickers intact at 1440, 390 and 320px wide.
- [ ] Forced-colours mode still shows box edges.

---

## Sources

**Definition and guidelines**
- [NN/g: Neobrutalism, definition and best practices (Hayat Sheikh, 2025)](https://www.nngroup.com/articles/neobrutalism/): definition, traits, palette limits, padding, hierarchy and contrast advice.
- [Michał Malewicz (Hype4): Neubrutalism is taking over the web (2022)](https://hype4.academy/articles/design/neubrutalism-is-taking-over-web): the essay that popularised the name.

**History**
- [Gumroad: Behind Gumroad's new design system](https://gumroad.com/blog/behind-gumroads-new-design-system): the 2021 rebuild.
- [Gumroad: A new Gumroad launches this Black Friday](https://gumroad.com/blog/p/a-new-gumroad-launches-this-black-friday-get-a-sneak-peek): launch timing.
- [New Criterion: The new new brutalism](https://newcriterion.com/article/the-new-new-brutalism/): architectural *nybrutalism* origin.
- [SVGator: What is neubrutalism](https://www.svgator.com/blog/what-is-neubrutalism/): 90s graphic-design roots and traits.
- [Design Compass: Figma's 2024 visual identity refresh](https://designcompass.org/en/2024/09/20/figma-visual-identity-refresh/): a mainstream adopter moving on.
- [Glasswings: Post-neo-brutalism](https://glasswings.com.au/blog/2024-05/17-183642.html): what came after.

**Practice and critique**
- [Bejamas: Neubrutalism web design trend](https://bejamas.com/blog/neubrutalism-web-design-trend): examples and critique.
- [Made Good Designs: Neobrutalism in web design](https://madegooddesigns.com/neobrutalism-web-design/): fit, misfit industries, saturation.
- [HubSpot: Neo brutalism guide](https://blog.hubspot.com/website/neo-brutalism): mainstream overview with critics.
- [neobrutalism.dev (shadcn-based kit)](https://neobrutalism.dev/docs/installation): open-source component defaults.
- [Neubrutalism: The Definitive Guide (third-party)](https://neubrutalism.com): token tiers for borders, shadows and press states.
- [Gumroad design tokens, third-party extraction](https://www.webdesignhot.com/design.md/gumroad/): observed colours, shadows, radii (not official).

**Accessibility**
- [WCAG 2.1 SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WCAG 2.1 SC 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

*Research notes:* Who first used the word "neubrutalism" isn't documented anywhere we could find. Malewicz popularised it, but no source shows him coining it. Adopters other than Gumroad and Figma's earlier identity are left out because no primary evidence was found. Contrast ratios were computed from the hex values with the WCAG 2.x relative-luminance formula.
