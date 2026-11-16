---
year: 2019
style: Dark Mode
slug: dark-mode
aka: [Dark theme, Dark UI, Night mode]
era: "2018–present"
peak: "2019–2020"
depth: basic
lineage: [material-design]
---

# 2019 · Dark Mode

> A second, dark colour scheme for the whole interface that follows the user's system setting. It uses dark grey surfaces (not pure black), lighter surfaces for higher layers, and desaturated accents.

## Snapshot

| | |
|---|---|
| **Feels like** | calm, focused, "pro tool" |
| **Signature move** | the site turns dark by itself when the OS is dark |
| **Best for** | dev tools, media, dashboards, reading at night, anything used for hours |
| **Avoid for** | nothing as a *mode*; as the *only* theme, avoid it for long-form reading and print-like content |

Dark mode stopped being a trend and became a baseline expectation. 2019 is the year it reached every major OS and the web got a standard way to detect it.

## Origin & timeline

- **2018-09**: macOS 10.14 Mojave ships a system-wide Dark Mode.
- **2018-10**: Material Design publishes its dark theme guidance ([Material 2: Dark theme](https://m2.material.io/design/color/dark-theme)).
- **2019-03**: Safari 12.1 ships the `prefers-color-scheme` media query ([web-features explorer](https://web-platform-dx.github.io/web-features-explorer/features/prefers-color-scheme)).
- **2019-07**: Chrome 76 ships `prefers-color-scheme` ([web.dev](https://web.dev/articles/prefers-color-scheme)).
- **2019-09**: iOS 13 and Android 10 ship a system dark mode. Large sites (Twitter, YouTube, then GitHub in Dec 2020) roll out dark themes.
- **2020→**: "Dark mode toggle" becomes a standard header control. Dark-first marketing sites lead to the [2023 Linear look](2023-linear-style.md).

## Textbook rules

From Material's dark theme spec and Apple's HIG:

1. **Use dark grey, not black.** Material's baseline surface is `#121212`. Dark grey shows elevation and cuts the smearing that pure black causes on OLED screens.
2. **Show elevation with lightness, not shadow.** Higher surfaces get a white overlay that grows with elevation (1dp ≈ 5%, 4dp ≈ 9%, 8dp ≈ 12%, 24dp ≈ 16%). Shadows barely read on dark.
3. **Desaturate accents.** Saturated brand colours vibrate on dark. Use lighter tones (Material uses the 200 tone: `#BB86FC` instead of `#6200EE`).
4. **Use opacity steps for text, not new greys.** High emphasis is white at 87%, medium 60%, disabled 38%.
5. **Respect the system setting first**, then offer an override that is remembered.
6. **Re-check contrast in both themes.** Body text needs 4.5:1, UI boundaries 3:1. Material targets 15.8:1 for body text on the base surface.
7. **Don't simply invert.** Images, illustrations, logos and charts need their own dark versions or treatment.

## Tokens

```css
:root {
  color-scheme: light;
  --bg: #ffffff;
  --surface-1: #f5f5f7;
  --text: rgb(0 0 0 / 0.87);
  --text-muted: rgb(0 0 0 / 0.6);
  --border: rgb(0 0 0 / 0.12);
  --accent: #6200ee;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
    --bg: #121212;
    --surface-1: #1e1e1e;   /* ≈ 5% white overlay, 1dp */
    --surface-2: #232323;   /* ≈ 7%, 2dp */
    --surface-3: #2c2c2c;   /* ≈ 11%, 6dp */
    --text: rgb(255 255 255 / 0.87);
    --text-muted: rgb(255 255 255 / 0.6);
    --border: rgb(255 255 255 / 0.12);
    --accent: #bb86fc;      /* desaturated 200 tone */
  }
}
:root[data-theme="dark"] { /* same values as above, for the manual toggle */ }
```

Fonts were not a feature of dark mode. Use the product's normal type, but go one weight lighter for big headings (light text on dark looks heavier) and raise body line-height slightly (1.6).

## Components

**Theme toggle.** Three states (system, light, dark), saved to `localStorage`, and applied before first paint to avoid a flash:

```html
<script>
  try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch {}
</script>
<button class="theme-toggle" aria-label="Theme: system" aria-pressed="false">◐</button>
```

**Elevated card.** Lighter surface plus a hairline border instead of a shadow:

```css
.card { background: var(--surface-1); border: 1px solid var(--border); border-radius: 12px; }
.menu { background: var(--surface-3); }  /* higher = lighter */
```

**Images.** Dim photos slightly and swap illustrations:

```css
@media (prefers-color-scheme: dark) { img:not([src$=".svg"]) { filter: brightness(.9); } }
```
```html
<picture>
  <source srcset="hero-dark.png" media="(prefers-color-scheme: dark)">
  <img src="hero-light.png" alt="">
</picture>
```

## Do / Don't

| Do | Don't |
|---|---|
| `#121212`–`#1c1c1e` surfaces | `#000` background with `#fff` text (halation, glare) |
| Lighter surface = higher layer | Rely on drop shadows for depth |
| Desaturated, lighter accents | Reuse the saturated light-theme brand colour |
| Set `color-scheme` so form controls and scrollbars follow | Leave native inputs bright white |
| Test every chart and illustration in dark | Invert images with `filter: invert(1)` |

## Accessibility

- Some readers (notably people with astigmatism) find light text on dark harder to read for long passages. Always offer light, and never force dark.
- Thin weights lose strokes on dark. Avoid weights under 400 for body text.
- Focus rings tuned for white backgrounds can vanish. Use a token (`--focus`) set per theme, at 3:1 or more against the surface.

## Agent checklist

- [ ] Both themes are defined with tokens. No hard-coded colours in components.
- [ ] Follows `prefers-color-scheme`, has a remembered manual override, and doesn't flash on load.
- [ ] `color-scheme` is set, so native controls match.
- [ ] Base surface is dark grey, elevation goes lighter, accents are desaturated.
- [ ] Text 4.5:1, borders and focus 3:1, checked in *both* themes.
- [ ] Images, logos and charts have dark treatments.

## Sources

- [Material Design 2: Dark theme](https://m2.material.io/design/color/dark-theme): `#121212`, elevation overlays, desaturation, text opacities.
- [web.dev: prefers-color-scheme](https://web.dev/articles/prefers-color-scheme): the media query and implementation patterns.
- [web-features explorer: prefers-color-scheme](https://web-platform-dx.github.io/web-features-explorer/features/prefers-color-scheme): browser ship dates.
- [Apple HIG: Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode): system behaviour and the semantic colour approach.
- [Material 3: tone-based surface colour](https://material.io/blog/tone-based-surface-color-m3): the later replacement for overlay elevation.
