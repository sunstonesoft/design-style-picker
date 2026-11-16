---
year: 2023
style: Linear Style (dark SaaS)
slug: linear-style
aka: [Linear design, "The Linear effect", Linear look, Dark SaaS, Vercel-style]
era: "2021–2025"
peak: "2023–2024"
depth: deep
lineage: [dark-mode, glassmorphism]
---

# 2023 · Linear Style

> The dark developer-tool marketing look: a near-black canvas, one soft coloured glow behind the hero, 1px translucent hairlines, Inter with tight tracking, headlines fading from white to grey, and the real product UI floating in the dark.

This is a **deep** era. The demo builds the shared Kettlefern brief in this style, with a light-theme toggle: [`../examples/2023-linear-style/`](../examples/2023-linear-style/index.html).

---

## Snapshot

| | |
|---|---|
| **Feels like** | precise, premium, fast, engineered, quiet confidence |
| **Signature move** | a radial "light leak" from the top of a near-black hero, plus 1px `rgba(255,255,255,.08)` borders |
| **Best for** | dev tools, AI products, B2B SaaS, infrastructure, fintech, premium consultancies |
| **Avoid for** | food, kids, warm consumer brands, anything not about a product people operate |
| **Lineage** | [Dark Mode (2019)](2019-dark-mode.md) + the glows of [Glassmorphism (2021)](2021-glassmorphism.md) → **Linear style (2023)** → often paired with [Bento (2024)](2024-bento-grid.md) |

### The six ingredients

1. **Near-black canvas** (`#08090a`–`#111214`), never pure black.
2. **One coloured glow:** a large blurred radial gradient behind the hero, in the brand's single accent.
3. **Hairlines:** 1px borders at 5–14% white. Separation comes from lines, not shadows.
4. **Inter at negative tracking:** big headlines around −0.02 to −0.045em, weight 500–600, with a white→grey gradient fill.
5. **The product as the hero image:** real UI (or a faithful drawing of it) tilted in 3D and faded out at the bottom.
6. **Restraint:** monochrome greys do the work. The accent appears in the glow, focus rings, one badge and one CTA.

---

## Origin & timeline

| When | What happened | Why it matters |
|---|---|---|
| **2019-04** | Karri Saarinen announces Linear, born from a tool he built at Airbnb to declutter Jira ([Saarinen: Starting Linear](https://karrisaarinen.com/posts/starting-linear-app/)). | The product's own focus on speed and polish becomes the brand. |
| **2020-12** | Linear ships dark and light themes in the app ([Linear changelog: Themes](https://linear.app/changelog/2020-12-04-themes)). | Dark is the identity; light exists from early on. |
| **2021–2022** | The dark marketing site, glowing gradients and product-first hero spread among dev-tool startups. | A recognisable "built by engineers" look forms. |
| **2023-01** | *The Linear effect* (Rectangle) names the pattern: dark backgrounds, blurred gradients, glowing animated accents, and the question "is everything looking the same?" ([Rectangle](https://rectangle.substack.com/p/the-linear-effect)). | Earliest dated use of the name found. |
| **2023–2024** | **Peak.** Dev-tool and AI sites copy it widely. Lists of look-alikes name Resend, Raycast, Supabase, Vercel, Clerk, Railway, AuthKit and others ([Frontend Horse: The Linear look](https://frontend.horse/articles/the-linear-look/), [Built With Bricks](https://builtwithbricks.io/site-of-the-week-5/)). | It becomes the default SaaS template. |
| **2024-03** | Linear redesigns its own UI: themes generated from three inputs (base, accent, contrast) in LCH instead of 98 variables, less blue chrome, Inter Display for headings, and higher-contrast default themes ([Linear: How we redesigned the Linear UI](https://linear.app/now/how-we-redesigned-the-linear-ui), [changelog](https://linear.app/changelog/2024-03-20-new-linear-ui)). | The source moves toward more contrast and less colour, even as copies add more glow. |
| **2025-06** | LogRocket: "almost every SaaS website looks the same", and many clones ship no light mode ([LogRocket: Linear design](https://blog.logrocket.com/ux-design/linear-design/)). | Saturation critique goes mainstream. |
| **2025–2026** | The gradient blob becomes shorthand for generic, AI-generated design ([Built In](https://builtin.com/articles/ai-design-slop-era)). | Use it with intent, or it reads as a template. |

---

## Textbook rules

### Colour

1. **Near-black, not black.** Page `#08090a`, panels `#0f1011`–`#111214`, raised `#17181b`–`#191a1b`. Lightness steps of 2–4% are enough.
2. **Greys in four roles:** primary text `#f7f8f8`, secondary `#d0d6e0`, muted `#8a8f98`, and quaternary at no less than 4.5:1. (Linear's extracted `#62666d` is only 3.45:1 on `#08090a`, so use `#7a7f88` or lighter for text.)
3. **One accent.** Take it from the brand (Linear: indigo `#5e6ad2`; the demo: roasted amber `#e8a25c`). It appears in the glow, focus ring, badges and at most one coloured CTA.
4. **Glow at low alpha.** 15–30% accent in a radial gradient fading to transparent by 70%. Add a second, cooler glow at about 10% if needed, never a third.

### Lines and surfaces

5. **Hairlines:** `1px solid rgba(255,255,255,.05–.08)` for cards and dividers, `.14` for inputs, ghost buttons and pills.
6. **No drop shadows for separation.** At most one big soft shadow under the hero product shot.
7. **Radius:** 6–8px for buttons and inputs, 12px for cards, 14–16px for the product frame, 999px for pills.

### Type

8. **Inter** (or Inter Display for big sizes). Weights 400 body, 500 UI, 600 headings. Linear itself uses 510 and 590 with the variable font.
9. **Tight headings:** −0.022em at mid sizes, down to −0.045em on a 64–80px hero. Leading 1.0–1.1.
10. **Gradient headline:** white to 55–65% white, top to bottom, with a solid fallback for forced colours.
11. **Mono for meta text:** kickers, IDs, versions (Berkeley Mono, JetBrains Mono, IBM Plex Mono).

### Layout and imagery

12. **Linear (sequential) layout:** centred hero, then one idea per section going down the page, few CTAs (LogRocket).
13. **Hero recipe:** announcement pill → headline (max ~15ch) → one-line subline → two CTAs (light filled + ghost) → product shot.
14. **The product shot is real UI**, tilted with `rotateX(8–14deg)` and faded with `mask-image`. No stock photos or abstract 3D.
15. **Social proof** in muted greys: a logo row at about 40% opacity, or a numbers row when there are no logos.

### Motion

16. **Short and eased-out:** colour and border changes 100–160ms, reveals 400–700ms with a strong ease-out (`cubic-bezier(.16,1,.3,1)`). Fade-and-rise 8–16px. Nothing bounces.
17. **Content is visible without motion.** Scroll reveals start visible when JS is off or motion is reduced.

---

## Tokens

### The recipe in numbers

| Token | Value | Source |
|---|---|---|
| Page background | `#08090a` | design-token extractions of linear.app ([hagicode](https://design.hagicode.com/designs/linear.app/DESIGN.md), [designmd](https://designmd.cc/benchmarks/linear)) |
| Panels | `#0f1011` · `#191a1b` · `#28282c` | same |
| Hairline | `rgba(255,255,255,.05)` subtle · `.08` standard | same |
| Text greys | `#f7f8f8` · `#d0d6e0` · `#8a8f98` · `#62666d` | same (all extractions agree) |
| Accent | `#5e6ad2` (indigo) | same |
| Radius | 4–6px controls · 8–12px cards · pills | same (sources differ on cards) |
| Heading tracking | ≈ −0.022em | extraction (64px at −1.408px) |
| Motion | 100 / 160 / 400ms, ease-out | [designlang](https://www.designlang.app/gallery/linear-app) (measured) |
| Theme generation | base + accent + contrast in LCH | [Linear redesign post](https://linear.app/now/how-we-redesigned-the-linear-ui) |

*Extractions are third-party readings of the live site, not Linear's source code. Treat them as close approximations.*

```css
/* tokens.css: 2023 Linear style. Dark native, light variant */
:root {
  color-scheme: dark;
  --bg: #08090a; --surface: #111214; --surface-2: #17181b; --surface-3: #1e1f23;
  --text: #f7f8f8; --text-2: #8a8f98; --text-3: #7a7f88;      /* text-3 kept ≥ 4.5:1 */
  --line: rgb(255 255 255 / .08); --line-strong: rgb(255 255 255 / .14);
  --accent: #5e6ad2;                                            /* swap for the brand's one accent */
  --glow: rgb(94 106 210 / .25);
  --head-from: #fff; --head-to: rgb(255 255 255 / .55);
  --radius: 12px;
  --font: "Inter", system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
  --ease-out: cubic-bezier(.16, 1, .3, 1);
}
:root[data-theme="light"] {           /* repeat under prefers-color-scheme: light, see Accessibility */
  color-scheme: light;
  --bg: #fbfbfa; --surface: #fff; --surface-2: #f4f4f2; --surface-3: #ececea;
  --text: #0b0c0e; --text-2: #5c606a; --text-3: #686c74;
  --line: rgb(0 0 0 / .08); --line-strong: rgb(0 0 0 / .14);
  --head-from: #0b0c0e; --head-to: rgb(11 12 14 / .62);
}
```

---

## Components

### Hero glow and grid

```css
.hero { position: relative; isolation: isolate; overflow: hidden; text-align: center; }
.hero::before { content: ""; position: absolute; inset: -20% -10% auto; height: 640px; z-index: -1;
  background: radial-gradient(50% 50% at 50% 0%, var(--glow), transparent 70%); }
.hero::after { content: ""; position: absolute; inset: 0; z-index: -1; opacity: .5;   /* faint grid, masked to the glow */
  background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 64px 64px; mask-image: radial-gradient(60% 50% at 50% 0%, #000, transparent 75%); }
```

The glow is a static gradient: it costs nothing per frame. Never animate `filter: blur()` on it (see Performance).

### Gradient headline

```css
.grad { background: linear-gradient(180deg, var(--head-from) 30%, var(--head-to));
        -webkit-background-clip: text; background-clip: text; color: transparent; }
@media (forced-colors: active) { .grad { color: CanvasText; background: none; } }
```

### Announcement pill

```html
<a class="pill" href="/changelog"><b>New</b> Ash &amp; Ember is back for winter →</a>
```
```css
.pill { display: inline-flex; gap: 8px; align-items: center; padding: 4px 12px 4px 6px; border: 1px solid var(--line-strong);
        border-radius: 999px; color: var(--text-2); font-size: 13px; }
.pill b { background: var(--accent); color: var(--accent-ink); border-radius: 999px; padding: 2px 8px; font-size: 11px; }
```

### Buttons

```css
.btn-primary { background: var(--text); color: var(--bg); border-radius: 8px; padding: 0 16px; min-height: 40px; }  /* inverted, not accent */
.btn-ghost   { border: 1px solid var(--line-strong); color: var(--text); border-radius: 8px; padding: 0 16px; min-height: 40px; }
.btn-ghost:hover { background: var(--surface-2); }
```

### Tilted product shot

```css
.shot { perspective: 1400px; }
.app  { border: 1px solid var(--line-strong); border-radius: 14px; background: var(--surface);
        transform: rotateX(14deg); transform-origin: 50% 0;
        mask-image: linear-gradient(#000 55%, transparent); }
@media (prefers-reduced-motion: no-preference) { .app { transition: transform .9s var(--ease-out); } .shot:hover .app { transform: rotateX(4deg); } }
```

`overflow: hidden` on an ancestor with `transform-style: preserve-3d` flattens the 3D. Keep the perspective on a plain parent.

### Card with cursor glow

```css
.card { position: relative; overflow: hidden; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; }
.card::before { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .3s;
  background: radial-gradient(320px circle at var(--x, 50%) var(--y, 0%), color-mix(in srgb, var(--accent) 14%, transparent), transparent 45%); }
.card:hover::before { opacity: 1; }
```
```js
if (matchMedia("(pointer: fine)").matches)
  document.querySelectorAll(".card").forEach((c) => c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--x", `${e.clientX - r.left}px`); c.style.setProperty("--y", `${e.clientY - r.top}px`);
  }));
```

### Scroll reveal that fails safe

```css
@media (prefers-reduced-motion: no-preference) {
  .js .reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s var(--ease-out), transform .7s var(--ease-out); }
  .js .reveal.in { opacity: 1; transform: none; }
}
```

Add the `js` class from script, so without JS (or with reduced motion) everything is simply visible.

### Theme toggle

Follow the system by default, remember an explicit choice, and apply it before first paint. See [Dark Mode](2019-dark-mode.md) for the pattern. The demo has a working one.

---

## Layout recipes

### 1. Landing page (canonical)

```
nav: logo ··· links ··· [theme] [Shop]          (sticky, 80% bg + blur, hairline bottom)
            ( New · announcement → )
         Big gradient headline, ≤15ch
       one-line subline in text-2
        [Primary light] [Ghost]
   ┌──────── tilted product shot, fading out ────────┐
   ├──── numbers row or 40%-grey logo row ───────────┤
   kicker (mono, accent) + section title (gradient)
   3 hairline cards with cursor glow   (or a bento: see 2024)
   pricing: featured plan = accent-tinted top + accent border
   one big centred quote · newsletter card · hairline footer
```

- Container 1080–1200px. Sections 96–128px apart. Card gaps 12–16px (hairline grids sit tight).
- Centre the hero; left-align section headings below it.

### 2. Changelog / docs

Single 680px column, date in mono on the left, entries separated by hairlines, screenshots in 12px-radius frames with a hairline.

### 3. App shell

Sidebar `--surface`, content `--bg`, hairline between them, list rows 36–40px with mono IDs and status dots. This is the style's origin, the app itself.

### 4. Light variant

Same structure, with `#fbfbfa` canvas, hairlines at 8% black, the glow at 25–30% (it needs more strength on light), and headline gradient from ink to 62% ink.

---

## Do / Don't

| Do | Don't |
|---|---|
| One glow, one accent, taken from the brand | Rainbow glows in every section |
| Real product UI as imagery | Abstract 3D blobs standing in for the product |
| Muted text at ≥ 4.5:1 (`#7a7f88`+ on `#08090a`) | `#555`/`#62666d` "subtle" copy on black |
| Ship a light theme and follow the system | Dark-only marketing for a broad audience |
| Static gradients; animate opacity/transform | Animated `filter: blur()` glows and beams everywhere |
| Inverted (light) primary button | Five accent-coloured buttons |

---

## Accessibility

**Contrast on `#08090a` (computed, WCAG 2.x):**

| Grey | Ratio | Body text? |
|---|---|---|
| `#f7f8f8` | 18.9 : 1 | ✓ |
| `#8a8f98` | 6.13 : 1 | ✓ |
| `#7a7f88` | 4.95 : 1 | ✓ (minimum for small text) |
| `#62666d` | 3.45 : 1 | ✗ (large text only) |
| white at 50% | 5.33 : 1 | ✓ |
| white at 40% | 3.74 : 1 | ✗ |

Rule of thumb: opacity greys below about 50% white fail for body text.

- **Offer light.** Dark text-on-light suits long reading and many people with astigmatism, for whom light text on dark can halate ([BOIA](https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone)). Follow `prefers-color-scheme` and remember a toggle.
- **Gradient text** needs a solid fallback in forced-colours mode, and enough contrast at the faded end. Check the bottom of the gradient (55% white is about 5.9:1).
- **Focus rings** in the accent at 3:1+ against both the canvas and the card. The amber in the demo is 9.3:1 on `#08090a`.
- **Motion:** hover-tilt, cursor glows and reveals honour `prefers-reduced-motion`. Animation from interaction must be stoppable ([WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)). Looping beams need a pause control.
- **Decorative product shots** get `aria-hidden="true"` when they only illustrate. Give them real alt text when they explain a feature.

---

## Performance

- **Static glow is free; animated blur is not.** Animating `filter: blur()` is "very slow" and scales with element size ([Chrome: animated blur](https://developer.chrome.com/blog/animated-blur)). Cross-fade pre-blurred layers with `opacity` if the glow must move.
- **Paint budget:** anything but `transform` and `opacity` repaints ([web.dev: paint complexity](https://web.dev/simplify-paint-complexity-and-reduce-paint-areas/)). Cursor glows repaint one card, so keep them on hover only and on fine pointers only.
- **Sticky blurred nav:** one `backdrop-filter` element is fine. Watch for backdrop roots (ancestors with `opacity < 1`, `filter`, `mask`) that silently disable it ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)).
- **Masks on large animated elements** force offscreen compositing. Fade the product shot once; don't animate the mask.
- **Grain textures:** use a small tiled SVG noise, not a full-screen PNG.
- **Fonts:** Inter variable is one file. Subset to the scripts you use and preload it.

---

## Anti-patterns

1. **Template clone:** glow + gradient headline + bento + beams with no product in sight. *Fix:* lead with the real UI and one idea.
2. **Grey fog:** muted text at 3:1. *Fix:* the contrast table.
3. **Glow inflation:** three or more glows, one per section. *Fix:* one hero glow; sections stay flat.
4. **Accent everywhere:** accent text, borders and buttons. *Fix:* the accent marks one thing per view.
5. **Pure black `#000`** with pure white text: harsh, halates. *Fix:* `#08090a` and `#f7f8f8`.
6. **Dark-only for a consumer audience.** *Fix:* light variant plus system preference.
7. **Fake screenshots** (stock "dashboards" unrelated to the product). *Fix:* the real product, or a faithful drawing of it.
8. **Invisible-until-JS content:** reveals that start at `opacity: 0` without a JS guard. *Fix:* the fail-safe reveal above.
9. **Wrong audience:** a bakery or kids' brand in dev-tool black. *Fix:* check `picker.md`.

---

## Agent checklist

**Before you build**
- [ ] It's a product people operate (dev tool, SaaS, AI, fintech) or a premium service; see `picker.md`.
- [ ] One accent chosen from the brand.

**Build**
- [ ] Near-black canvas, 2–4% surface steps, 1px hairlines at 5–14%.
- [ ] One hero glow at ≤30% alpha; no glows elsewhere.
- [ ] Inter (or similar) with negative heading tracking; gradient headline with forced-colours fallback.
- [ ] Hero: pill → headline → subline → light primary + ghost → product shot (tilted, masked).
- [ ] Light theme exists, follows the system, and the toggle is remembered.
- [ ] Reveals and hover effects are fail-safe and honour reduced motion.

**QA**
- [ ] Every text grey ≥ 4.5:1 on its surface, in both themes (incl. the faded end of gradient text).
- [ ] Focus ring visible on canvas, cards and inputs.
- [ ] No animated `filter: blur()`; at most one `backdrop-filter` element.
- [ ] Looks deliberate at 390px: the product shot scales, and the nav collapses cleanly.

---

## Sources

**Origin**
- [Karri Saarinen: Starting Linear (2019)](https://karrisaarinen.com/posts/starting-linear-app/): founding story.
- [Linear changelog: Themes (2020)](https://linear.app/changelog/2020-12-04-themes): dark and light themes in the app.
- [Linear: How we redesigned the Linear UI (2024)](https://linear.app/now/how-we-redesigned-the-linear-ui): LCH theme generation, Inter Display, contrast.
- [Linear changelog: the new Linear UI (2024)](https://linear.app/changelog/2024-03-20-new-linear-ui): higher-contrast default themes.
- [Linear docs: account preferences](https://linear.app/docs/account-preferences): light/dark/system options.

**Naming and spread**
- [Rectangle: The Linear effect (2023)](https://rectangle.substack.com/p/the-linear-effect): earliest dated use of the name.
- [Frontend Horse: The Linear look](https://frontend.horse/articles/the-linear-look/): adopters and techniques.
- [Built With Bricks: site of the week #5 (2024)](https://builtwithbricks.io/site-of-the-week-5/): look-alike heroes side by side.
- [LogRocket: Linear design (2025)](https://blog.logrocket.com/ux-design/linear-design/): traits and the saturation critique.
- [Built In: the AI design slop era](https://builtin.com/articles/ai-design-slop-era): gradient blobs as a generic signature.

**Values**
- [hagicode: linear.app design tokens](https://design.hagicode.com/designs/linear.app/DESIGN.md): third-party token extraction.
- [designmd: Linear benchmark](https://designmd.cc/benchmarks/linear): third-party extraction.
- [designlang: linear.app](https://www.designlang.app/gallery/linear-app): measured motion values.

**Performance and accessibility**
- [Chrome: animated blur](https://developer.chrome.com/blog/animated-blur)
- [web.dev: simplify paint complexity](https://web.dev/simplify-paint-complexity-and-reduce-paint-areas/)
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [BOIA: dark mode and readability](https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone)
- [WCAG 2.2 SC 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)

*Research notes:* The design values come from third-party extractions of linear.app, not from Linear's source. Who coined "the Linear effect" isn't confirmed beyond the Rectangle post. The look-alike lists are observations by those sites, not statements by the companies.
