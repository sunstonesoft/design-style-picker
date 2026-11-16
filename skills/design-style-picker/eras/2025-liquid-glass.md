---
year: 2025
style: Liquid Glass
slug: liquid-glass
aka: [Apple Liquid Glass, Glassmorphism 2.0, Refractive glass]
era: "2025–present"
peak: "2025–2026"
depth: deep
lineage: [glassmorphism]
---

# 2025 · Liquid Glass

> Apple's 2025 material: glass that *bends* light instead of only blurring it. It has refraction at the edges, specular highlights, and controls that morph and adapt to what's beneath. It is used for floating controls and navigation over full-bleed content, never for the content itself.

This is a **deep** era. The demo builds the shared Kettlefern brief with glass only on the control layer: [`../examples/2025-liquid-glass/`](../examples/2025-liquid-glass/index.html). It is frosted everywhere and refracts in Chromium.

[2021 glassmorphism](2021-glassmorphism.md) covers the frosted-glass base this builds on. Read it for the backdrop-filter fundamentals.

---

## Snapshot

| | |
|---|---|
| **Feels like** | physical, fluid, premium, Apple |
| **Signature move** | a floating capsule toolbar or tab bar of clear glass, with the photo beneath visibly warped at its rim |
| **Best for** | media, photo-led brands, hardware, luxury, travel: anywhere controls float over rich imagery |
| **Avoid for** | text-heavy pages, data and tables, government and health (legibility), cheap-phone audiences |
| **Lineage** | Aero (2007) → iOS 7 blur (2013) → Fluent Acrylic (2017) → glassmorphism (2021) → visionOS glass (2023) → **Liquid Glass (2025)** |
| **Key difference from 2021 glass** | 2021 put frosted *panels* on everything. Liquid Glass puts *clear, refracting controls* only on the navigation layer. |

### The five ingredients

1. **Full-bleed content underneath:** photography, video or rich illustration. The material needs something to bend.
2. **Glass on the control layer only:** toolbars, tab bars, floating buttons, sheets.
3. **Refraction and specular rims:** the edge distorts the content behind it and catches light (inset highlights).
4. **Capsules and concentric shapes:** pills, and nested radii equal to the parent's radius minus the padding.
5. **Adaptivity:** the tint follows what's behind, controls shrink or merge on scroll, and the material frosts or turns opaque when the user asks.

---

## Origin & timeline

| When | What happened | Why it matters |
|---|---|---|
| **2025-06-09** | Apple announces Liquid Glass at WWDC25 across iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, tvOS 26 and visionOS 26, its biggest redesign since iOS 7 ([TechCrunch](https://techcrunch.com/2025/06/09/apple-redesigns-its-operatings-systems-with-liquid-glass/), [WWDC25 219: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)). | A platform owner makes glass the default again, with rules. |
| **2025-06** | WWDC25 session 356 sets out the shape system (fixed, capsule, concentric) and scroll edge effects ([WWDC25 356](https://developer.apple.com/videos/play/wwdc2025/356/)). | The geometry rules web echoes copy. |
| **2025-07** | iOS 26 beta 3 frosts the glass after legibility complaints. Reports say later betas swung back toward clearer glass ([MacTrast](https://www.mactrast.com/2025/07/the-third-ios-26-beta-makes-liquid-glass-just-a-bit-frostier/amp/)). | Legibility is the style's central tension from day one. |
| **2025-06 → 08** | Web imitations appear: SVG displacement through `backdrop-filter: url()`, specular rims, React libraries ([kube.io](https://kube.io/blog/liquid-glass-css-svg), [liquid-glass-react](https://github.com/rdev/liquid-glass-react)). | The technique the web uses, mostly Chromium-only. |
| **2025-09** | iOS 26 ships; many users turn on Reduce Transparency ([Infinum](https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/)). | Real-world pushback. |
| **2025-10-10** | NN/g: *Liquid Glass is cracked, and usability suffers in iOS 26*. It finds text over busy backgrounds, purposeless motion, crowded tap targets and unpredictable controls ([NN/g](https://www.nngroup.com/articles/liquid-glass/)). | The definitive usability critique. |
| **2025-10/11** | iOS 26.1 adds a Liquid Glass setting with **Clear** and **Tinted** options. Tinted raises opacity and contrast ([MacRumors](https://www.macrumors.com/2025/10/20/ios-26-1-liquid-glass-toggle/)). | Apple itself makes the frosted fallback a user choice. |
| **2026** | Web echoes settle into floating glass nav pills and translucent toolbars over imagery. *(Status tentative.)* | It becomes an accent, as 2021 glass did. |

---

## Textbook rules

From WWDC25 sessions 219 and 356 and Apple's *Adopting Liquid Glass* guidance, translated to the web.

### Where glass goes

1. **Glass is for controls and navigation, never content.** Toolbars, tab bars, floating action buttons, sheets and popovers sit *on* content. Text panels, cards, tables and forms stay on solid surfaces.
2. **No glass on glass.** Inside a glass control, use fills, tints and vibrancy, not another glass layer.
3. **Let content run full-bleed under the controls.** The effect only reads when there is rich content behind it.

### Variants

4. **Regular glass is the default:** adaptive, legible over any background (frosted on the web).
5. **Clear glass only when all three hold:** the control sits over media-rich content, a dimming layer won't hurt that content, and what's on the control is bold and bright (white icons or labels). Never mix regular and clear in one group.
6. **Tint only the primary action.** One coloured control (the CTA); everything else stays neutral glass.

### Shape

7. **Capsules for controls** (radius = half the height). **Concentric for nesting:** inner radius = outer radius − padding, so corners stay parallel.
8. **Big outer radii** on sheets and cards (24–32px), small enough that concentric inner radii stay positive.

### Behaviour

9. **Controls adapt to scroll:** a full toolbar shrinks into a compact capsule, and tab bars collapse when you scroll content. Keep hit targets 44×44px or more while they morph.
10. **Scroll edge effect:** where content meets a pinned control, add a soft fade or blur so text never collides with it. One effect per edge.
11. **Honour the user's settings:** Reduce Transparency → frosted or opaque. Increase Contrast → solid black or white with borders. Reduce Motion → no morphing or elastic effects.

---

## Tokens

### The recipe in numbers

| Token | Value | Notes |
|---|---|---|
| Clear fill | `rgb(255 255 255 / .12–.2)` | only over bold media, with a text shadow |
| Regular (frosted) fill | `rgb(250 248 245 / .65–.8)` light · `rgb(30 26 23 / .65–.75)` dark | the default; dark text |
| Refraction blur | 2–4px | low on purpose: displacement does the work |
| Frost blur | 16–24px | regular variant, and the fallback for refraction |
| Saturation | 1.6–1.8 | keeps colour vivid through the glass |
| Displacement scale | 20–40 | higher warps too much; text behind becomes noise |
| Specular rim | `inset 0 1px 0 rgb(255 255 255 / .6)` + `inset 0 -1px 0 rgb(255 255 255 / .18)` + 1px inner ring at .2 | catches the light on the top edge |
| Shadow | `0 10px 30px rgb(0 0 0 / .18)` | lifts the control off the content |
| Capsule radius | 999px | controls |
| Sheet/card radius | 28–32px | concentric children: `calc(var(--r) - var(--pad))` |
| Hit target | ≥ 44px | including compact states |

*These are web approximations tuned for the demo; Apple doesn't publish CSS values. The material on Apple platforms is a system rendering, not a filter stack.*

```css
/* tokens.css: 2025 Liquid Glass (web approximation) */
:root {
  --lg-fill: rgb(255 255 255 / .16);          /* clear */
  --lg-fill-frost: rgb(250 248 245 / .72);    /* regular */
  --lg-fill-solid: rgb(36 30 26 / .92);       /* fallback / reduced transparency */
  --lg-blur: 3px; --lg-frost-blur: 18px; --lg-sat: 1.7;
  --lg-rim: inset 0 1px 0 rgb(255 255 255 / .65), inset 0 -1px 0 rgb(255 255 255 / .18), inset 0 0 0 1px rgb(255 255 255 / .22);
  --lg-shadow: 0 10px 30px rgb(0 0 0 / .18);
  --radius-card: 28px; --pad: 12px;
  --font: -apple-system, "SF Pro Text", "Inter", system-ui, sans-serif;
}
```

SF Pro is Apple's system font and only loads on Apple devices. Inter is the free fallback with similar metrics.

---

## Components

### The material: solid → frosted → refracting

```css
.glass { background: var(--lg-fill-solid); color: #fff; box-shadow: var(--lg-rim), var(--lg-shadow); }      /* 1. everywhere */
@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background: var(--lg-fill-frost); color: var(--ink);                                              /* 2. frosted */
           -webkit-backdrop-filter: blur(var(--lg-frost-blur)) saturate(var(--lg-sat));
           backdrop-filter: blur(var(--lg-frost-blur)) saturate(var(--lg-sat)); }
  .glass--clear { background: var(--lg-fill); color: #fff; text-shadow: 0 1px 2px rgb(0 0 0 / .45); }
}
@supports (backdrop-filter: url(#lg-refract)) {                                                              /* 3. Chromium */
  .refract { backdrop-filter: url(#lg-refract) blur(var(--lg-blur)) saturate(var(--lg-sat)); }
}
@media (prefers-reduced-transparency: reduce) { .glass, .glass--clear { background: var(--lg-fill-solid); color: #fff; backdrop-filter: none; text-shadow: none; } }
@media (prefers-contrast: more) { .glass, .glass--clear { background: #000; color: #fff; backdrop-filter: none; box-shadow: 0 0 0 2px #fff; } }
```

### The refraction filter

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <filter id="lg-refract" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="11" result="noise"/>
    <feGaussianBlur in="noise" stdDeviation="2.5" result="soft"/>
    <feDisplacementMap in="SourceGraphic" in2="soft" scale="34" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
```

Production implementations replace the turbulence with a generated edge map (strong displacement at the rim, none in the centre), which looks more like a lens ([kube.io](https://kube.io/blog/liquid-glass-css-svg)). Turbulence is the simple version.

### Toolbar capsule that compacts on scroll

```css
.topbar { position: fixed; top: max(12px, env(safe-area-inset-top)); left: 50%; translate: -50% 0;
          width: min(1080px, calc(100% - 24px)); border-radius: 999px; padding: 8px 8px 8px 20px;
          transition: width .35s cubic-bezier(.2,.8,.2,1), padding .35s cubic-bezier(.2,.8,.2,1); }
.topbar.compact { width: min(560px, calc(100% - 24px)); }
.topbar.compact ul { display: none; }
@media (prefers-reduced-motion: reduce) { .topbar { transition: none; } }
```
```js
const bar = document.querySelector(".topbar");
addEventListener("scroll", () => bar.classList.toggle("compact", scrollY > innerHeight * .6), { passive: true });
```

### Floating tab bar (phones)

```css
.tabbar { position: fixed; left: 50%; bottom: max(14px, env(safe-area-inset-bottom)); translate: -50% 0;
          display: flex; gap: 2px; padding: 5px; border-radius: 999px; }
.tabbar a { padding: 10px 14px; min-width: 44px; border-radius: 999px; font-weight: 600; }
.tabbar a[aria-current="page"] { background: rgb(127 127 127 / .2); }   /* a fill inside glass, not glass on glass */
```

Pad the page bottom so the bar never covers the last content (the demo adds 110px to the footer on phones).

### Clear glass button over media

```html
<div class="media">…photo or illustration…
  <button class="btn glass glass--clear refract add" aria-label="Add Morning Fern to cart">＋ Add</button>
</div>
```

The label is bold white with a text shadow: all three of Apple's conditions for clear glass are met (media-rich, dimmable, bold label).

### Sheet

```css
dialog { border: 0; padding: 0; background: transparent; }
dialog .sheet { border-radius: 32px; padding: 28px; }   /* .glass (regular), never clear: sheets carry text */
```

### Concentric product card

```css
.card    { border-radius: var(--radius-card); padding: var(--pad); background: var(--surface); }   /* solid: content layer */
.media   { border-radius: calc(var(--radius-card) - var(--pad)); overflow: hidden; }               /* 28 − 12 = 16px */
```

---

## Layout recipes

### 1. Media-led landing page (the demo)

```
( glass capsule toolbar: logo · links · [tinted CTA] )   ← floats, compacts on scroll
███████████ full-bleed image or illustration ███████████
█  Headline on a scrim (not on glass)                  █
█  [tinted primary]  (clear glass secondary)           █
████████████████████████████████████████████████████████
solid cards: features · products (clear "Add" over each image) · plans
quote · newsletter on a solid card · footer
        ( glass tab bar on phones )
```

### 2. Photo or video gallery

Edge-to-edge media grid, a glass toolbar on top, a glass filter capsule floating at the bottom, and a glass player control bar over the active video.

### 3. Product page (hardware)

A full-bleed product render, a sticky glass "Buy" capsule bottom-right, a spec table on a solid surface, and a colour picker as a glass capsule over the render.

### 4. App shell

Content full-bleed. The sidebar and toolbar are glass, with scroll edge effects where they meet content. Lists, settings and forms stay solid.

---

## Do / Don't

| Do | Don't |
|---|---|
| Glass on toolbars, tab bars, floating buttons, sheets | Glass article cards, text panels, tables |
| Frosted (regular) by default; clear only over bold media | Clear glass with small grey text |
| One tinted control: the primary action | Tint every button |
| Capsules and concentric radii | Sharp glass rectangles; mismatched corners |
| Scrims under headlines on photos | Rely on glass to make text legible |
| Fallback chain: solid → frosted → refraction | Ship refraction-only and leave Safari and Firefox users with odd glass |

---

## Accessibility

The style's central weakness is legibility. NN/g documented text over busy backgrounds, controls that blend into photos, and crowded tap targets in iOS 26 ([NN/g](https://www.nngroup.com/articles/liquid-glass/)). Apple's own answer, the Tinted setting, makes the glass more opaque.

1. **Test over the worst background.** Put each glass control over the brightest, busiest part of its imagery and measure the label: 4.5:1 for text, 3:1 for icons and boundaries. If it fails, frost it (regular variant), darken it, or add a text shadow.
2. **Headlines on photos get scrims, not glass.** In the demo, a top-to-bottom scrim gives white text 4.7–5.7:1 over the mid sky (measured), while the brightest sky sits only behind the frosted nav, which has dark text.
3. **Respect settings:**
   - `prefers-reduced-transparency: reduce` → opaque. Supported in Chromium; treat it as an enhancement ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)).
   - `prefers-contrast: more` → solid black or white with a 2px border.
   - `prefers-reduced-motion` → no morphing toolbars or elastic effects.
   - `forced-colors` → borders on controls.
4. **Stable hit targets:** at least 44×44px in every state. A compacting toolbar must not move under the pointer mid-click, so compact on scroll, not on hover.
5. **Labels stay labels:** NN/g notes that back buttons lost their labels and search moved to unexpected places. Keep text labels on primary navigation, and keep familiar positions.
6. **Fixed controls must not hide content:** pad the page for floating bars, and never cover a focused element (WCAG 2.4.11 Focus Not Obscured).

---

## Performance

- **Refraction is expensive.** An SVG displacement through `backdrop-filter` re-renders what's behind every frame the control or the content moves. Limit refracting elements to 2–3 per screen, and skip refraction on touch devices or low-end hardware (libraries commonly disable it on mobile).
- **Browser support:** `backdrop-filter: url()` works in Chromium. Safari and Firefox support has been unclear or missing (WebKit bug [245510](https://bugs.webkit.org/show_bug.cgi?id=245510)). Design the frosted version as the real experience and refraction as a bonus.
- **Backdrop roots:** an ancestor with `opacity < 1`, `filter`, `mask`, `clip-path`, `mix-blend-mode` or `will-change` on those makes `backdrop-filter` do nothing ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)). Keep glass controls as direct children of plain containers.
- **Don't animate the filter.** Morph width, padding and position (layout is fine for one small element) or `transform`, never `blur()` or the displacement scale.
- **Full-bleed media:** serve properly sized images (`srcset`), and don't lazy-load the hero (it's the LCP). SVG illustrations, like the demo's scene, are tiny and sharp.

---

## Anti-patterns

1. **Glass content:** article cards and forms made of glass. *Fix:* solid content layer; glass only for controls.
2. **Glass on glass:** a glass button inside a glass toolbar. *Fix:* use a fill (`rgb(127 127 127 / .2)`) for the selected item.
3. **Clear glass with small text.** *Fix:* the regular (frosted) variant, or bold white labels with a text shadow.
4. **Tint soup:** every control coloured. *Fix:* tint only the primary action.
5. **Refraction-only builds** that look broken outside Chromium. *Fix:* the three-step fallback chain.
6. **Over-warp:** displacement scales of 60+ that turn the background into noise. *Fix:* 20–40, and stronger at the rim than the centre.
7. **Morphing under the pointer:** controls that shrink on hover or while clicking. *Fix:* morph on scroll, with stable targets.
8. **Plain backgrounds:** Liquid Glass over a flat grey page. *Fix:* rich content, or don't use this style.
9. **Wrong audience:** government, health or text-heavy sites. *Fix:* check `picker.md`; these industries rate it *avoid*.

---

## Agent checklist

**Before you build**
- [ ] The page has rich full-bleed media for the glass to sit on; the audience can handle effects (`picker.md`: effects = rich).
- [ ] List the controls that will be glass. Everything else is solid.

**Build**
- [ ] Three-step material: solid default → frosted in `@supports` → refraction in `@supports (backdrop-filter: url())`.
- [ ] Regular (frosted) by default; clear only over bold media with bold labels.
- [ ] One tinted control (primary action); no glass on glass.
- [ ] Capsules for controls; concentric radii (`outer − padding`) for nesting.
- [ ] Toolbar compacts on scroll; tab bar on phones; page padded so nothing is hidden.
- [ ] Headlines on photos use scrims.

**QA**
- [ ] Each glass label measured over its worst background: text ≥ 4.5:1, icons ≥ 3:1.
- [ ] Reduced transparency, increased contrast, reduced motion and forced colours all handled.
- [ ] Tested in Firefox and Safari (frosted) as well as Chrome (refraction).
- [ ] Hit targets ≥ 44px in every state; no focused element hidden by a floating bar.
- [ ] No more than 2–3 refracting elements on screen at once.

---

## Sources

**Apple**
- [WWDC25 session 219: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/): layers, regular vs clear, tinting, accessibility adaptations.
- [WWDC25 session 356: Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356/): concentric shapes, scroll edge effects, toolbars.
- [Apple: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass): controls vs content guidance.
- [Apple HIG: Materials](https://developer.apple.com/design/human-interface-guidelines/materials): material thickness vs legibility.

**History and critique**
- [TechCrunch: Apple redesigns its operating systems with Liquid Glass](https://techcrunch.com/2025/06/09/apple-redesigns-its-operatings-systems-with-liquid-glass/): announcement.
- [MacTrast: iOS 26 beta 3 makes Liquid Glass frostier](https://www.mactrast.com/2025/07/the-third-ios-26-beta-makes-liquid-glass-just-a-bit-frostier/amp/): the legibility rollback.
- [MacRumors: iOS 26.1 Liquid Glass toggle](https://www.macrumors.com/2025/10/20/ios-26-1-liquid-glass-toggle/): the Clear and Tinted setting.
- [NN/g: Liquid Glass is cracked (2025)](https://www.nngroup.com/articles/liquid-glass/): the usability critique.
- [Infinum: iOS 26 Liquid Glass, sleek, shiny and questionably accessible](https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/)

**Web technique**
- [kube.io: Liquid Glass in the browser, refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg): the reference technique.
- [rdev/liquid-glass-react](https://github.com/rdev/liquid-glass-react): a React implementation with documented browser caveats.
- [LogRocket: liquid glass effects with CSS and SVG](https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/)
- [WebKit bug 245510: backdrop-filter with url()](https://bugs.webkit.org/show_bug.cgi?id=245510): the Safari support question.
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter): syntax, backdrop roots.
- [MDN: prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)

*Research notes:* Apple's HIG and developer docs render with JavaScript and couldn't be machine-read during research. The rules above follow the WWDC25 sessions, which were read. Beta-by-beta changes come from press reports. Safari's support for `backdrop-filter: url()` is unconfirmed, so treat refraction as Chromium-only.
