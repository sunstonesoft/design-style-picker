---
year: 2021
style: Glassmorphism
slug: glassmorphism
aka: [Frosted glass UI, Glass UI, Acrylic (Microsoft), Vibrancy/Materials (Apple)]
era: "2020–2023"
peak: "2021"
depth: deep
lineage: [gradients-flat-2, neumorphism]
---

# 2021 · Glassmorphism

> Translucent, frosted panels float above a vivid, colourful background. Each panel blurs what's behind it, keeps a hint of its colour, and catches the light on a thin bright edge. Depth comes from layers of glass, not from shadows or textures.

This is the **deep** era of the skill. It covers the history, the recipe in numbers (with the source of each number), a full token set, components, page layouts, accessibility, performance, anti-patterns and a QA routine. A working demo lives in [`../examples/2021-glassmorphism/`](../examples/2021-glassmorphism/index.html).

---

## Snapshot

| | |
|---|---|
| **Feels like** | light, airy, modern, premium, "macOS Big Sur" |
| **Signature move** | `backdrop-filter: blur()` on a semi-transparent white panel with a 1px bright border, over colourful gradient blobs |
| **Best for** | hero sections, floating cards, overlays, widgets, login/sign-up, music and media players, fintech "card" visuals, dashboards with few, large widgets |
| **Avoid for** | dense data tables, long reading, forms with many fields, any surface where text sits over unpredictable imagery |
| **Lineage** | Windows Vista Aero (2007) → iOS 7 blur (2013) → Fluent Acrylic (2017) → macOS Big Sur (2020) → **glassmorphism (2021)** → [Linear-style glows (2023)](2023-linear-style.md) → [Liquid Glass (2025)](2025-liquid-glass.md) |
| **Came after** | [Neumorphism (2020)](2020-neumorphism.md), whose failure at contrast pushed designers toward a depth style with colour |

### The four ingredients

Every textbook glassmorphism design has all four. If one is missing, it isn't the style.

1. **Translucency.** The panel's fill is partly see-through: white (or dark) at about 10–40% opacity.
2. **Background blur.** What's behind the panel is blurred, so it reads as frosted glass, not a tinted window.
3. **A vivid, multi-layered background.** Colourful gradient orbs, mesh gradients or a photo. Glass over plain grey is invisible.
4. **A light edge.** A thin, semi-transparent white border or highlight that sells the "edge of a glass sheet".

---

## Origin & timeline

| When | What happened | Why it matters |
|---|---|---|
| **2006–2007** | Windows Vista ships **Aero Glass**: blurred, translucent window frames composited by the Desktop Window Manager. | First mass-market blurred glass UI. Later remembered as heavy and slow ([ITPro Today on DWM](https://www.itprotoday.com/it-infrastructure/what-is-the-desktop-windows-manager-dwm-)). |
| **2013-06** | **iOS 7** replaces skeuomorphism with flat design *plus* translucent, blurred layers (Control Center, Notification Center). | Frosted glass becomes "modern", not "glossy". |
| **2017** | Microsoft's **Fluent Design System** introduces **Acrylic**: background blur, exclusion blend, colour tint and a noise texture ([Microsoft Learn: Acrylic](https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic)). | The first documented, layered glass *material* spec, with rules about when it's allowed. |
| **2019-07** | Chrome 76 ships unprefixed **`backdrop-filter`**. Safari has had it prefixed since 2015 ([web.dev: backdrop-filter](https://web.dev/articles/backdrop-filter), [caniuse](https://caniuse.com/css-backdrop-filter)). | Glass becomes practical on the web for most users. |
| **2020-06 / 2020-11** | **macOS Big Sur** is announced at WWDC and ships 12 Nov 2020, with translucent sidebars, menu bar and widgets ([TechCrunch](https://techcrunch.com/2020/11/12/macos-big-sur-is-now-available/)). | The trigger. Designers copy Big Sur's look onto web and app concepts. |
| **Late 2020** | Michał Malewicz (Hype4) publishes *Glassmorphism in user interfaces* on UX Collective and **names the style**, after doing the same for neumorphism a year earlier ([UX Collective](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9), [Hype4 Academy](https://hype4.academy/articles/design/glassmorphism-in-user-interfaces)). | The name and the four ingredients spread across Dribbble. |
| **2021** | **The peak.** Dribbble's most popular shots are glass credit cards, glass dashboards and glass music players. Generators (glassmorphism.com / Hype4, css.glass) and tutorials appear: [CSS-Tricks](https://css-tricks.com/icon-glassmorphism-effect-in-css/), [freeCodeCamp](https://www.freecodecamp.org/news/glassmorphism-design-effect-with-html-css/). Windows 11 announces **Mica** (opaque, wallpaper-tinted) for long-lived surfaces and keeps Acrylic for transient ones. Apple adds SwiftUI `Material` (`.ultraThinMaterial` … `.ultraThickMaterial`). | The style is on every concept. OS vendors draw the line between glass for *transient* surfaces and solid for content. |
| **2021-late** | **Claymorphism** appears as a playful offshoot (inflated 3D shapes, inner shadows) ([Smashing Magazine](https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/)). | Marks the "-morphism" fatigue. |
| **2022-07** | Firefox 103 enables `backdrop-filter` by default. | Glass finally works in every major browser. |
| **2022–2023** | The trend cools as a whole-page style. It lives on in sticky headers, modals and the soft glows of [Linear-style dark SaaS](2023-linear-style.md). | Glass becomes an *accent*, not a theme. |
| **2024-06** | NN/g publishes [*Glassmorphism: Definition and Best Practices*](https://www.nngroup.com/articles/glassmorphism/). In 2024 `backdrop-filter` becomes Baseline ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)). | The style is documented with usability rules. |
| **2025-06** | Apple's **Liquid Glass** brings glass back as an OS-wide material, with refraction. | See [2025](2025-liquid-glass.md). |

---

## Textbook rules

These come from Malewicz's naming article, NN/g's best practices, Microsoft's Acrylic rules and Apple's materials guidance, merged and written as instructions for an agent.

### Composition

1. **Background first.** Design the colourful layer before any glass: 2–4 large blurred gradient orbs, a mesh gradient, or a vivid photo. Glass shows only what it is placed over.
2. **Keep the background simple *behind text*.** Busy detail under a text-bearing panel ruins legibility. Put the strong colour *around* panels, and calmer areas or more blur *behind* them (NN/g).
3. **Few panels, each with a job.** Glass marks elevation and focus. Use 1–3 glass surfaces per view, not 12.
4. **Hierarchy by layers.** Background → large glass container → (optionally) a smaller, more opaque glass element inside. Each level up is slightly more opaque and has a brighter edge. Two glass levels at most.
5. **Glass on transient or floating surfaces.** Microsoft and Apple both use glass for menus, flyouts, sidebars, overlays and widgets, and solid surfaces for primary content. Follow that.

### The panel

6. **Fill**: white at 10–25% opacity on colourful light backgrounds, up to 40–70% when it holds body text. Dark glass is black or navy at 20–50%.
7. **Blur**: 10–20px for cards, 20–30px for big overlays or over busy backgrounds. More blur = more legibility. Under about 6px, glass reads as a dirty window.
8. **Saturation** (optional, later refinement): `saturate(120–180%)` keeps the blurred colour lively. It wasn't in early-2021 tutorials but is standard in Apple-like recipes.
9. **Edge**: `1px solid rgba(255,255,255,.18–.35)`. Optionally a gradient stroke that is brighter top-left and fades bottom-right, as if lit from above.
10. **Radius**: generous and consistent, 16–24px for cards and 12px for small controls. Nested radius = outer radius − padding.
11. **Shadow**: soft, wide, low opacity (`0 8px 32px rgba(0,0,0,.10–.25)`), or none. The blur and the border do the depth work, and the shadow only lifts the panel off the background.
12. **Optional grain**: a 2–5% noise overlay (as in Fluent Acrylic) removes gradient banding and makes it feel physical.

### Type, colour, imagery

13. **Text is solid, not translucent.** Use pure white (on dark or vivid glass) or a deep ink (`#0f172a`-ish, on light glass). Never 50%-opacity text on 20%-opacity glass.
14. **Clean geometric or neo-grotesque sans**: Inter, Poppins, Manrope, SF Pro, Montserrat. Weights 400 for body, 600–700 for headings. Medium sizes, because glass is not a dense-text surface.
15. **Palette**: two or three saturated hues for the orbs (pink/purple/blue, teal/blue/violet, or orange/pink/purple) plus white. UI accents reuse an orb colour.
16. **Icons**: simple line or filled icons in white or ink. Often sit on a small, more opaque glass tile.
17. **Motion**: slow drifting orbs (20–40s loops), gentle hover lift or tilt on cards (≤8°), and opacity and transform transitions of 200–300ms. **Never animate the blur radius.**

---

## Tokens

The recipe in numbers, with where each number comes from:

| Property | Textbook range | Typical default | Source |
|---|---|---|---|
| Fill (light glass) | `rgba(255,255,255,.10–.45)` | `.15` | Hype4 generator default 0.15; CSS-Tricks 0.25; LogRocket 0.45 |
| Fill (holding body text) | `.45–.70` | `.55` | freeCodeCamp 2021 uses 0.7 |
| Blur | 5–30px | 20px | Hype4 default 20px; tutorials 5–15px |
| Saturate | 100–180% | 160% | later Apple-style recipes; not in early 2021 tutorials |
| Border | `1px rgba(255,255,255,.18–.35)` | `.30` | Hype4 default 0.3; LogRocket 0.25 |
| Radius | 8–24px | 20px | Hype4 default 20px |
| Shadow | `0 8px 32px rgba(0,0,0,.1)` → `rgba(31,38,135,.37)` | `0 8px 32px rgb(0 0 0 / .12)` | Hype4 default; the indigo-tinted one is widely copied |
| Grain | 2–5% noise | 3% | Fluent Acrylic noise layer |

```css
/* tokens.css: 2021 glassmorphism */
:root {
  /* background orbs */
  --orb-1: #c2337f;          /* deep pink: the 2021 Dribbble #ff6ec4 fails with white text on top */
  --orb-2: #5b54d6;          /* violet */
  --orb-3: #1f9e8f;          /* teal (optional third) */
  --bg-base: #1a1036;        /* deep indigo base under the orbs */

  /* glass, light variant (the default on vivid backgrounds) */
  --glass-fill: rgb(255 255 255 / 0.15);
  --glass-fill-strong: rgb(255 255 255 / 0.28);   /* nested, or holds text */
  --glass-fill-solid: rgb(44 30 96 / 0.94);       /* fallback / reduced transparency: deep tint keeps white text readable */
  --glass-blur: 20px;
  --glass-saturate: 160%;
  --glass-border: 1px solid rgb(255 255 255 / 0.30);
  --glass-highlight: inset 0 1px 0 rgb(255 255 255 / 0.45);
  --glass-shadow: 0 8px 32px rgb(0 0 0 / 0.12);
  --glass-radius: 20px;
  --glass-radius-sm: 12px;

  /* text on glass */
  --on-glass: #ffffff;
  --on-glass-muted: rgb(255 255 255 / 0.82);      /* never below ~.75 on glass */
  --ink: #0f172a;                                  /* for light, frosted variants */

  /* accent reuses an orb hue */
  --accent: #ff6ec4;
  --focus: #ffffff;

  /* type */
  --font: "Poppins", "Inter", system-ui, sans-serif;
  --fs-display: clamp(40px, 6vw, 72px);
  --fs-h2: clamp(28px, 3.5vw, 40px);
  --fs-body: 16px;
  --fs-small: 14px;

  /* spacing & motion */
  --space: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 240ms;
}

/* dark glass variant: for light/photographic backgrounds or dark UIs */
[data-glass="dark"] {
  --glass-fill: rgb(17 25 40 / 0.45);
  --glass-fill-strong: rgb(17 25 40 / 0.6);
  --glass-fill-solid: rgb(17 25 40 / 0.95);
  --glass-border: 1px solid rgb(255 255 255 / 0.12);
  --glass-highlight: inset 0 1px 0 rgb(255 255 255 / 0.10);
}
```

Font choice: Poppins carried the 2021 Dribbble glass look. Inter and Manrope are the more neutral alternatives. All three are free on Google Fonts.

---

## Components

All components use the same base `.glass` class, written so that **the fallback is the default and the blur is an enhancement**.

### Base glass surface

```css
.glass {
  position: relative;
  background: var(--glass-fill-solid);           /* 1. safe default: works everywhere */
  border: var(--glass-border);
  border-radius: var(--glass-radius);
  box-shadow: var(--glass-highlight), var(--glass-shadow);
  color: var(--on-glass);                        /* text colour is the same in every mode */
}
@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass {                                         /* 2. real glass when supported */
    background: var(--glass-fill);
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  }
}
@media (prefers-reduced-transparency: reduce) {   /* 3. user asked for less see-through */
  .glass { background: var(--glass-fill-solid); backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-contrast: more) {
  .glass { background: #140c33; backdrop-filter: none; -webkit-backdrop-filter: none; border: 2px solid #fff; }
}
```

The fallback is a deep tint of the background, not white. Text colour then never changes between modes, so a missing feature can't leave white text on a white panel. If you build the *ink-on-light* variant (frosted white glass over pale backgrounds), flip it the other way: a near-white fallback with ink text, and test both.

### Gradient edge (lit-from-top-left stroke)

```css
.glass--edge { border: 0; }
.glass--edge::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px; pointer-events: none;
  background: linear-gradient(135deg, rgb(255 255 255 / .6), rgb(255 255 255 / .05) 40%, rgb(255 255 255 / .2));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
```

### Grain overlay (anti-banding, Acrylic-style noise)

```css
.glass--grain::after {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: .04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

### Background orbs (the vivid layer)

```html
<div class="orbs" aria-hidden="true"><span></span><span></span><span></span></div>
```
```css
.orbs { position: fixed; inset: 0; z-index: -1; overflow: hidden; background: var(--bg-base); }
.orbs span { position: absolute; border-radius: 50%; filter: blur(60px); opacity: .85; }
.orbs span:nth-child(1) { width: 46vmax; height: 46vmax; background: var(--orb-1); top: -12vmax; left: -10vmax; }
.orbs span:nth-child(2) { width: 40vmax; height: 40vmax; background: var(--orb-2); bottom: -14vmax; right: -8vmax; }
.orbs span:nth-child(3) { width: 24vmax; height: 24vmax; background: var(--orb-3); top: 40%; left: 55%; opacity: .5; }
@media (prefers-reduced-motion: no-preference) {
  .orbs span { animation: drift 30s ease-in-out infinite alternate; }
  .orbs span:nth-child(2) { animation-duration: 38s; }
}
@keyframes drift { to { transform: translate(6vmax, 4vmax) scale(1.08); } }
```

The orbs are blurred once with `filter` (cheap, static) and only move with `transform`. Never animate `backdrop-filter`.

### Glass navigation bar

```html
<header class="glass nav"><a class="logo" href="/">Lumen</a>
  <nav aria-label="Main"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>
  <a class="btn btn--primary" href="#start">Get started</a></header>
```
```css
.nav { position: sticky; top: 16px; margin: 16px auto; max-width: 1120px; z-index: 10;
       display: flex; align-items: center; justify-content: space-between; gap: 24px;
       padding: 12px 16px 12px 24px; border-radius: 999px; }
.nav a { color: inherit; text-decoration: none; font: 500 15px var(--font); }
.nav nav { display: flex; gap: 28px; }
```

### Buttons

```css
.btn { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 22px;
       border-radius: 999px; font: 600 15px var(--font); cursor: pointer; text-decoration: none;
       transition: transform var(--dur) var(--ease), background var(--dur) var(--ease); }
.btn--primary { background: #fff; color: #1a1036; border: 0; }              /* solid: the main CTA must not be glass */
.btn--glass   { background: rgb(255 255 255 / .14); color: #fff; border: 1px solid rgb(255 255 255 / .35); }
.btn:hover    { transform: translateY(-1px); }
.btn--glass:hover { background: rgb(255 255 255 / .24); }
.btn:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }
```

### Feature card (nested glass)

```html
<article class="glass glass--edge card">
  <div class="card__icon glass-chip" aria-hidden="true">◎</div>
  <h3>Instant sync</h3><p>Changes land on every device in under a second.</p>
</article>
```
```css
.card { padding: 28px; display: grid; gap: 12px; transition: transform var(--dur) var(--ease); }
.card:hover { transform: translateY(-4px); }
.card h3 { margin: 0; font: 600 20px/1.25 var(--font); }
.card p  { margin: 0; color: var(--on-glass-muted); font: 400 var(--fs-body)/1.55 var(--font); }
.glass-chip { width: 48px; height: 48px; display: grid; place-items: center; border-radius: var(--glass-radius-sm);
              background: var(--glass-fill-strong); border: 1px solid rgb(255 255 255 / .4); font-size: 22px; }
```

### Glass "credit card" (the most-copied 2021 shot, generic version)

```html
<div class="glass glass--edge glass--grain paycard" role="img" aria-label="Example card ending 4242">
  <div class="paycard__chip"></div><span class="paycard__brand">LUMEN</span>
  <span class="paycard__num">•••• •••• •••• 4242</span>
  <span class="paycard__name">A. SAMPLE</span><span class="paycard__exp">09/29</span>
</div>
```
```css
.paycard { width: min(360px, 100%); aspect-ratio: 1.586; padding: 24px; display: grid;
           grid-template: "chip brand" auto "num num" 1fr "name exp" auto / 1fr auto;
           font: 500 15px var(--font); letter-spacing: .08em; }
.paycard__chip { grid-area: chip; width: 44px; height: 32px; border-radius: 6px;
                 background: linear-gradient(135deg, #f5e6a8, #c9a74a); }
.paycard__brand { grid-area: brand; font-weight: 700; }
.paycard__num  { grid-area: num; align-self: center; font-size: 20px; }
.paycard__name { grid-area: name; } .paycard__exp { grid-area: exp; }
```

### Login form on glass

```css
.auth { width: min(400px, 100%); padding: 36px; display: grid; gap: 16px; }
.field { display: grid; gap: 6px; }
.field label { font: 500 14px var(--font); }
.field input { min-height: 48px; padding: 0 16px; border-radius: var(--glass-radius-sm); font: 400 16px var(--font);
               color: #fff; background: rgb(255 255 255 / .12); border: 1px solid rgb(255 255 255 / .45); }
.field input::placeholder { color: rgb(255 255 255 / .7); }
.field input:focus-visible { outline: 2px solid #fff; outline-offset: 2px; background: rgb(255 255 255 / .2); }
```

Inputs have a **visible border at 3:1 or more**. Glass on glass isn't enough to show where a field is.

### Modal / dialog

```css
dialog.glass { padding: 32px; width: min(520px, calc(100% - 32px)); }
dialog::backdrop { background: rgb(10 6 30 / .45); backdrop-filter: blur(6px); }
```

A modal is the most legitimate use of glass: a transient surface over content the user should still sense.

### Pricing cards

The middle plan gets `--glass-fill-strong`, a brighter gradient edge and a solid primary button. The others get the base glass and glass buttons. Prices sit in 40–48px weight 700 white text, never in translucent text.

### Dashboard widget

Large KPI number plus label plus a sparkline. One widget per grid cell with 20–24px gaps. **Charts and tables go on the strong or near-opaque variant**, because thin lines dissolve over blur.

---

## Layout recipes

### 1. Hero with floating glass card (the 2021 landing page)

```
┌──────────────────────── orbs background (fixed) ────────────────────────┐
│ ( glass pill nav ············································ [CTA] )   │
│                                                                          │
│   Big white headline,                    ┌──────────────┐                │
│   2 lines, Poppins 700                   │  glass card  │  ← tilted 4–6° │
│   Sub-copy 18px, 82% white               │  (product    │     floating   │
│   [Solid CTA]  [Glass CTA]               │   widget)    │                │
│                                          └──────────────┘                │
└──────────────────────────────────────────────────────────────────────────┘
```

A two-column grid that collapses to one column under 900px. The visual goes below the copy.

### 2. Feature grid

Three or six glass cards in `repeat(auto-fit, minmax(260px, 1fr))` with a 24px gap, centred, max-width 1120px. Orbs sit *behind the gaps*, so each card has a clear area of colour.

### 3. Centred auth screen

The full-viewport orb background, a single glass form centred, logo above, a small text link below. The most forgiving layout: one panel and one job.

### 4. Dashboard

A glass sidebar (fixed, 260px) plus a glass top bar, and the content area made of **near-opaque** cards. The chrome is glass and the data is solid, as Apple and Microsoft do it.

### 5. Media / music player widget

A square album art, a glass control bar overlapping its bottom 30%, round glass buttons at 44px or more, and a progress bar on a solid track.

Page rhythm: one glass layer per section. Section padding 96–128px. Let the background *show* between panels.

---

## Do / Don't

| Do | Don't |
|---|---|
| Design the colourful background first | Put glass on a flat grey or white page |
| 1–3 glass surfaces per view | Make every element glass |
| Solid white or ink text on glass | Translucent text on translucent glass |
| Stronger blur and fill behind text | Leave text over a busy photo with 5px blur |
| Solid primary CTA | A glass-on-glass primary button nobody can find |
| Opaque fallback first, blur in `@supports` | Assume `backdrop-filter` works everywhere and everything ends up see-through |
| Animate transforms and opacity | Animate `backdrop-filter` or blur radius |
| Charts and tables on near-opaque cards | Thin chart lines on 15% glass |

---

## Accessibility

**Contrast is the core risk.** Text on glass is measured against the *blurred background behind it*, which changes as the page scrolls or the orbs drift.

1. **Test the worst case.** Check contrast where the panel sits over the *lightest* part of the background (for white text) or the darkest (for ink text). Target 4.5:1 for body and 3:1 for large text and UI boundaries ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), [1.4.11](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)).
2. **Raise the floor, not the hope.** If white text fails, increase fill opacity, darken the panel (dark variant), increase blur, or add a soft text shadow (`0 1px 2px rgb(0 0 0 / .25)`). Don't just pick a lighter orb.
3. **Respect user settings.**
   - `prefers-reduced-transparency: reduce` → opaque panels. It's an enhancement: supported in Chromium (119+), with patchy support elsewhere ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)).
   - `prefers-contrast: more` → opaque panels plus solid borders.
   - `forced-colors: active` → glass disappears. Make sure borders use `CanvasText` and nothing relies on the fill.
   - `prefers-reduced-motion: reduce` → stop the orb drift and card tilt.
4. **Visible boundaries for controls.** Inputs, buttons and toggles need an edge of 3:1 or more against what's around them. The faint glass border is decoration, not a boundary.
5. **Focus rings**: solid white or ink, 2px, offset. Test them on glass *and* on the background.
6. **Don't hide information in the background.** Orbs are decorative (`aria-hidden="true"`). Nothing meaningful lives behind glass.

---

## Performance

`backdrop-filter` makes the browser re-render and blur whatever is behind the element, every frame that changes.

- **Limit the number of glass elements on screen.** 3–5 simultaneous blurred surfaces is a common rule of thumb for mid-range phones ([OpenReplay](https://blog.openreplay.com/creating-blurred-backgrounds-css-backdrop-filter/)).
- **Keep blurred areas small.** A full-screen blurred overlay costs far more than a card. Larger blur radius also costs more.
- **Never animate the blur.** Animate `opacity` or `transform` of the glass element instead. Blur animations are the most cited GPU spike ([Mozilla bug 1769944](https://bugzilla.mozilla.org/show_bug.cgi?id=1769944)).
- **Static background blur**: blur the orbs with `filter: blur()` once and move them with `transform`. Don't recompute big blurs every frame.
- **Watch for backdrop roots**: an ancestor with `opacity < 1`, `filter`, `mask`, `clip-path`, `mix-blend-mode` or `will-change` on those makes the backdrop blur do nothing ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)). Keep glass elements' ancestors plain.
- **Mobile**: consider a smaller `--glass-blur` (10–12px) under `(pointer: coarse)`, or the opaque variant on low-end devices. Microsoft's Acrylic turns solid on battery saver, and you can do the same with a body class.
- **Sticky glass headers over long scrolling pages** are the most common jank. Test scroll on a real phone.

---

## Anti-patterns

1. **"Glass on nothing."** Panels over a flat background read as grey boxes. *Fix:* add orbs or a vivid image behind.
2. **Glass soup.** Every card, button, input and badge is glass, so there is no hierarchy. *Fix:* glass for containers, solid for primary actions, strong fill for nested items.
3. **Ghost text.** 60%-white text on 15% glass over a pastel orb. *Fix:* solid text and a stronger fill.
4. **Over-thin blur.** 2–4px blur looks like a smudged window and text competes with background shapes. *Fix:* 12px or more.
5. **Bright-on-bright.** White glass over a pale yellow or pink orb with white text. *Fix:* deeper orb colours, or the dark glass variant.
6. **Stacked glass more than two levels deep.** Contrast and meaning collapse. *Fix:* two levels at most.
7. **Data on glass.** Tables and line charts on thin glass. *Fix:* near-opaque surfaces for data.
8. **Animated blur / heavy sticky blur.** *Fix:* see Performance.
9. **No fallback.** Firefox before 103, reduced-transparency users and forced-colours users get unreadable see-through panels. *Fix:* opaque by default, glass in `@supports`.
10. **Copied Dribbble numbers.** The famous `rgba(31,38,135,.37)` shadow or 0.15 fill used everywhere, regardless of background. *Fix:* tune fill and blur against *your* background and text.

---

## Agent checklist

**Before you build**
- [ ] The product fits: a few large surfaces, not dense data or long reading.
- [ ] You have a background concept: orb colours or an image, and where the calm zones are.

**Build**
- [ ] All four ingredients present: translucency, backdrop blur, vivid background, light edge.
- [ ] One `.glass` base with tokens. The opaque fallback is the default, blur sits inside `@supports`.
- [ ] 1–3 glass surfaces per view, at most 2 nested levels. Primary CTA is solid.
- [ ] Text is solid white or ink. Muted text is ≥ 75% white.
- [ ] Inputs and buttons have 3:1 boundaries. Focus rings are visible on glass.
- [ ] Data, tables and long text are on strong or near-opaque surfaces.
- [ ] Orbs are blurred once and moved with transforms. No animated `backdrop-filter`.

**QA**
- [ ] Contrast measured at the worst point of the background under each text panel.
- [ ] Tested with `prefers-reduced-transparency`, `prefers-contrast: more`, `forced-colors` and `prefers-reduced-motion`.
- [ ] Tested in a browser without `backdrop-filter`. The page stays readable.
- [ ] Scrolled on a mid-range phone: no jank from sticky glass.
- [ ] At 320px width, panels stack, and orbs don't push text over the busiest areas.

---

## Sources

**Naming and history**
- [Michał Malewicz: Glassmorphism in user interfaces (UX Collective)](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9): the article that named the style.
- [Hype4 Academy: Glassmorphism in user interfaces](https://hype4.academy/articles/design/glassmorphism-in-user-interfaces): the author's own copy and follow-ups.
- [TechCrunch: macOS Big Sur is now available (2020-11-12)](https://techcrunch.com/2020/11/12/macos-big-sur-is-now-available/): the trigger release.
- [ITPro Today: What is the Desktop Window Manager](https://www.itprotoday.com/it-infrastructure/what-is-the-desktop-windows-manager-dwm-): Aero Glass lineage.
- [Smashing Magazine: Claymorphism](https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/): the offshoot and -morphism context.

**Guidelines**
- [NN/g: Glassmorphism, definition and best practices (2024)](https://www.nngroup.com/articles/glassmorphism/): contrast, blur, background and sparing-use rules.
- [Microsoft Learn: Acrylic material](https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic): layer recipe (blur, tint, noise), when to use it, fallback to solid.
- [Microsoft Learn: System backdrops (Mica/Acrylic)](https://learn.microsoft.com/en-us/windows/apps/develop/ui/system-backdrops): transient vs long-lived surfaces.
- [Apple HIG: Materials](https://developer.apple.com/design/human-interface-guidelines/materials): material thickness vs legibility.
- [NN/g: Liquid Glass is cracked (2025)](https://www.nngroup.com/articles/liquid-glass/): what goes wrong when glass covers content.

**Implementation**
- [web.dev: backdrop-filter](https://web.dev/articles/backdrop-filter): the property, fallbacks.
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter): syntax, Baseline status, backdrop root.
- [caniuse: CSS backdrop-filter](https://caniuse.com/css-backdrop-filter): support history.
- [MDN: prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)
- [Hype4 glassmorphism generator](https://hype4.academy/tools/glassmorphism-generator): default values (0.15 fill, 20px blur, 0.3 border, 20px radius).
- [CSS-Tricks: Icon glassmorphism effect in CSS](https://css-tricks.com/icon-glassmorphism-effect-in-css/)
- [freeCodeCamp: Glassmorphism design effect with HTML and CSS](https://www.freecodecamp.org/news/glassmorphism-design-effect-with-html-css/)
- [LogRocket: Implement glassmorphism with CSS](https://blog.logrocket.com/implement-glassmorphism-css/)
- [dev.to: Glassmorphism for Firefox](https://dev.to/masakudamatsu/glassmorphism-for-firefox-3285): the `@supports` fallback pattern.
- [OpenReplay: blurred backgrounds with backdrop-filter](https://blog.openreplay.com/creating-blurred-backgrounds-css-backdrop-filter/): performance rules of thumb.

**Accessibility**
- [WCAG 2.1 SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WCAG 2.1 SC 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

*Research notes:* The Malewicz article's exact publication date (late 2020) and the Apple HIG page text weren't machine-readable when this was researched. Values marked as tutorial defaults come from the tutorials linked above, not from an official spec, because none exists for the web.
