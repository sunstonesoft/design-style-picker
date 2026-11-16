---
year: 2025
style: Liquid Glass
slug: liquid-glass
aka: [Apple Liquid Glass, Glassmorphism 2.0]
era: "2025–present"
peak: "2025–2026"
depth: basic
lineage: [glassmorphism]
---

# 2025 · Liquid Glass

> Apple's 2025 material: glass that *bends* light instead of only blurring it. It has refraction at the edges, specular highlights that move, and controls that morph fluidly. It is used for floating controls and navigation over full-bleed content.

## Snapshot

| | |
|---|---|
| **Feels like** | physical, fluid, premium, Apple |
| **Signature move** | a floating pill-shaped nav or toolbar of clear glass, with the content beneath visibly warped at its rim |
| **Best for** | floating toolbars, tab bars, media controls, overlays on photo or video-heavy pages |
| **Avoid for** | the content layer itself (text panels, forms, tables); Apple says so too |

It's [2021 glassmorphism](2021-glassmorphism.md) taken further. That page explains the frosted-glass base this style builds on.

## Origin & timeline

- **2025-06-09**: Apple announces Liquid Glass at WWDC as the new design language across iOS 26, iPadOS 26, macOS 26 Tahoe, watchOS, tvOS and visionOS. It is the biggest Apple redesign since iOS 7 ([TechCrunch](https://techcrunch.com/2025/06/09/apple-redesigns-its-operatings-systems-with-liquid-glass/), [WWDC25: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)).
- **2025-06 → 09**: Betas draw legibility complaints, and Apple increases frosting between betas. CodePen and Dribbble fill with web imitations using SVG displacement filters ([LogRocket: liquid glass with CSS and SVG](https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/)).
- **2025-09**: iOS 26 ships, and many users turn on Reduce Transparency ([Infinum](https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/)).
- **2026**: Web echoes: floating glass nav pills and translucent toolbars over full-bleed imagery. *(Status for 2026 is tentative.)*

## Textbook rules

From Apple's HIG (Materials) and *Adopting Liquid Glass*:

1. **Glass is for the control layer, not content.** Navigation, toolbars, tab bars and floating buttons sit *on* content. Content itself stays on solid or standard materials.
2. **Use it sparingly.** Don't stack glass on glass, and don't make every card glass.
3. **Let content go full-bleed underneath.** The effect only reads when there is rich content behind it to bend.
4. **Shapes are concentric and capsule-like.** Pill buttons, rounded rectangles whose radius matches their container's.
5. **Pick the material for its purpose.** Thicker or more frosted for small text, clearer for large icons over media.
6. **It adapts.** Tint follows what's behind it, and controls shrink or merge as you scroll (e.g. the tab bar collapses).
7. **Honour Reduce Transparency and Increase Contrast.** The system swaps to frosted or opaque. The web should too.

## Tokens

```css
:root {
  --lg-fill: rgb(255 255 255 / 0.12);
  --lg-fill-frost: rgb(255 255 255 / 0.55);     /* fallback and small text */
  --lg-blur: 2px;                               /* low blur: refraction does the work */
  --lg-saturate: 1.6;
  --lg-rim: inset 0 1px 0 rgb(255 255 255 / 0.55), inset 0 -1px 0 rgb(255 255 255 / 0.15);
  --lg-shadow: 0 8px 24px rgb(0 0 0 / 0.18);
  --lg-radius: 999px;
  --font: -apple-system, "SF Pro Text", "Inter", system-ui, sans-serif;
}
```

## Components

**Refracting glass pill (Chromium; frosted fallback elsewhere):**

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="lg-refract" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise"/>
    <feGaussianBlur in="noise" stdDeviation="2" result="soft"/>
    <feDisplacementMap in="SourceGraphic" in2="soft" scale="40" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
<nav class="lg-pill"><a href="#">Home</a><a href="#">Browse</a><a href="#">Search</a></nav>
```

```css
.lg-pill {
  position: fixed; left: 50%; bottom: 24px; translate: -50% 0;
  display: flex; gap: 4px; padding: 6px; border-radius: var(--lg-radius);
  background: var(--lg-fill-frost);                          /* safe default */
  box-shadow: var(--lg-rim), var(--lg-shadow);
}
@supports (backdrop-filter: blur(1px)) {
  .lg-pill { background: var(--lg-fill);
             backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturate)); }
}
/* Chromium accepts url() filters inside backdrop-filter: true refraction */
@supports (backdrop-filter: url(#lg-refract)) {
  .lg-pill { backdrop-filter: url(#lg-refract) blur(var(--lg-blur)) saturate(var(--lg-saturate)); }
}
.lg-pill a { padding: 10px 18px; border-radius: inherit; color: #fff; font: 600 15px var(--font);
             text-decoration: none; text-shadow: 0 1px 2px rgb(0 0 0 / .35); }
.lg-pill a[aria-current="page"] { background: rgb(255 255 255 / .22); }

@media (prefers-reduced-transparency: reduce) {
  .lg-pill { backdrop-filter: none; background: rgb(30 30 32 / .92); }
}
@media (prefers-contrast: more) {
  .lg-pill { backdrop-filter: none; background: #111; box-shadow: 0 0 0 2px #fff; }
}
```

Notes: `backdrop-filter` does nothing if an ancestor creates a *backdrop root* (`opacity < 1`, `filter`, `mix-blend-mode`, `will-change` on those). Keep glass elements out of such ancestors. SVG `url()` filters inside `backdrop-filter` are Chromium-only, so design the frosted fallback first.

Signature compositions: a bottom floating tab-bar pill over a full-bleed photo feed, a glass media-control capsule over video, a top toolbar that shrinks into a capsule on scroll, and a glass "sheet" sliding over content.

## Do / Don't

| Do | Don't |
|---|---|
| Glass on floating controls over rich content | Glass text panels and article cards |
| Capsules and concentric radii | Sharp-cornered glass |
| A frosted or opaque fallback for everything | Ship the refraction-only look |
| One glass layer | Glass on glass on glass |

## Accessibility

- The main criticism of the style: text on clear glass over busy content is often unreadable ([Apple Developer Forums thread](https://developer.apple.com/forums/thread/811219), [Infinum](https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/)). Add a text shadow or a more frosted fill under labels, and test over your worst-case image.
- Support `prefers-reduced-transparency` (not supported everywhere, so treat it as an enhancement) *and* `prefers-contrast: more`.
- Morphing and shrinking controls must keep stable hit targets of 44×44px or more, and must not move under the pointer.
- Respect `prefers-reduced-motion` for morph and specular animations.

## Agent checklist

- [ ] Glass used only for floating controls and navigation. Content sits on solid surfaces.
- [ ] Frosted fallback first, refraction as a Chromium enhancement.
- [ ] No ancestor creates a backdrop root.
- [ ] Labels readable over the busiest possible background (scrim or text shadow).
- [ ] Reduced transparency, increased contrast and reduced motion are all handled.
- [ ] Capsule shapes with concentric radii. Hit targets 44px or more.

## Sources

- [Apple HIG: Materials](https://developer.apple.com/design/human-interface-guidelines/materials): Liquid Glass vs standard materials, usage rules.
- [Apple Developer: Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass): controls vs content guidance.
- [WWDC25 session 219: Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)
- [TechCrunch: Apple redesigns its operating systems with Liquid Glass](https://techcrunch.com/2025/06/09/apple-redesigns-its-operatings-systems-with-liquid-glass/): announcement.
- [LogRocket: How to create liquid glass effects with CSS and SVG](https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/): displacement-filter technique and browser limits.
- [Infinum: iOS 26 Liquid Glass, sleek, shiny and questionably accessible](https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/): accessibility critique.
- [MDN: prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency): support status.
