---
year: 2016
style: Material Design
slug: material-design
aka: [Material, Material 1, "Quantum Paper"]
era: "2014–2018"
peak: "2015–2016"
depth: basic
lineage: [flat-design]
---

# 2016 · Material Design

> Flat design given physics. The UI is sheets of "paper" at set elevations casting realistic shadows, with bold primary colours, Roboto, an 8dp grid and meaningful motion (ink ripples, cards that expand into pages).

## Snapshot

| | |
|---|---|
| **Feels like** | clean, systematic, Google, Android |
| **Signature move** | layered shadows by elevation, a floating action button, and a ripple on tap |
| **Best for** | apps and dashboards that want a proven, documented system |
| **Avoid for** | brand-led marketing sites (everything ends up looking like Google) |

Google announced it in 2014. **2016 is its peak on the web**: Materialize, Material-UI (now MUI), Angular Material and Polymer put it on thousands of non-Google sites, and the "card + FAB + hamburger drawer" layout was everywhere.

## Origin & timeline

- **2014-06-25**: Google announces Material Design at I/O ([Engadget](https://www.engadget.com/2014-06-25-googles-new-design-language-is-called-material-design.html)).
- **2014**: Material-UI (React) and Materialize (CSS, from a Carnegie Mellon team) start ([MUI about](https://mui.com/about/), [Materialize](https://materializecss.com/about.html)).
- **2015–2016**: Web adoption peaks. Angular Material 1.0 (Dec 2015) and Material Design Lite (2015) let any site look like Android.
- **2018**: Material Design 2 / Material Theming lets brands move away from the stock look ([Wikipedia](https://en.wikipedia.org/wiki/Material_Design)).
- **2021**: Material You (M3) brings dynamic colour from the wallpaper, big radii and tonal surfaces.
- **2025**: Material 3 Expressive.

Also in 2016: [web brutalism](2017-brutalism.md) was the noisy counter-trend in the press.

## Textbook rules

From the original 2014 spec (m1.material.io):

1. **Material is the metaphor.** Surfaces are sheets 1dp thick that sit at an elevation (z). Shadows come from elevation, never from decoration.
2. **Fixed elevation levels.** Card resting 2dp, raised 8dp. App bar 4dp. FAB resting 6dp, pressed 12dp. Navigation drawer 16dp. Dialog 24dp.
3. **Bold, graphic, intentional.** One primary colour (the 500 tone), a darker 700 for the status bar, and one accent (A200) used sparingly for the FAB, switches and highlights.
4. **8dp grid.** Spacing in multiples of 8 (4 for small type). Keylines at 16dp and 72dp on mobile. Touch targets 48×48dp minimum.
5. **Roboto and a fixed type scale.** Display 112/56/45/34, Headline 24, Title 20 Medium, Subheading 16, Body 14, Caption 12, Button 14 Medium in ALL CAPS.
6. **Motion has meaning.** Use the standard curve `cubic-bezier(0.4, 0, 0.2, 1)`. Simple transitions about 300ms, entering 225ms, leaving 195ms. Avoid anything over 400ms. The element the user touched transforms into the next screen.
7. **Feedback is a ripple** that radiates from the touch point.

## Tokens

```css
:root {
  --primary: #3f51b5;        /* Indigo 500 */
  --primary-dark: #303f9f;   /* Indigo 700 */
  --accent: #ff4081;         /* Pink A200 */
  --surface: #ffffff;
  --background: #fafafa;
  --text: rgb(0 0 0 / 0.87);
  --text-2: rgb(0 0 0 / 0.54);
  --divider: rgb(0 0 0 / 0.12);
  --radius: 2px;             /* M1: 2dp corners on cards and buttons */
  --font: "Roboto", system-ui, sans-serif;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  /* MDC shadows: umbra .2 / penumbra .14 / ambient .12 */
  --e1: 0 2px 1px -1px rgb(0 0 0/.2), 0 1px 1px 0 rgb(0 0 0/.14), 0 1px 3px 0 rgb(0 0 0/.12);
  --e2: 0 3px 1px -2px rgb(0 0 0/.2), 0 2px 2px 0 rgb(0 0 0/.14), 0 1px 5px 0 rgb(0 0 0/.12);
  --e4: 0 2px 4px -1px rgb(0 0 0/.2), 0 4px 5px 0 rgb(0 0 0/.14), 0 1px 10px 0 rgb(0 0 0/.12);
  --e6: 0 3px 5px -1px rgb(0 0 0/.2), 0 6px 10px 0 rgb(0 0 0/.14), 0 1px 18px 0 rgb(0 0 0/.12);
  --e8: 0 5px 5px -3px rgb(0 0 0/.2), 0 8px 10px 1px rgb(0 0 0/.14), 0 3px 14px 2px rgb(0 0 0/.12);
  --e24: 0 11px 15px -7px rgb(0 0 0/.2), 0 24px 38px 3px rgb(0 0 0/.14), 0 9px 46px 8px rgb(0 0 0/.12);
}
```

## Components

```css
.md-appbar  { height: 64px; background: var(--primary); color: #fff; box-shadow: var(--e4);
              display: flex; align-items: center; padding: 0 16px; font: 500 20px var(--font); }
.md-card    { background: var(--surface); border-radius: var(--radius); box-shadow: var(--e2);
              transition: box-shadow 280ms var(--ease); }
.md-card:hover { box-shadow: var(--e8); }
.md-btn     { height: 36px; min-width: 88px; padding: 0 16px; border: 0; border-radius: var(--radius);
              background: var(--primary); color: #fff; box-shadow: var(--e2);
              font: 500 14px var(--font); text-transform: uppercase; letter-spacing: .5px;
              position: relative; overflow: hidden; }
.md-btn--flat { background: none; color: var(--primary); box-shadow: none; }
.md-fab     { width: 56px; height: 56px; border-radius: 50%; border: 0; background: var(--accent);
              color: #fff; box-shadow: var(--e6); position: fixed; right: 24px; bottom: 24px; }
.md-fab:active { box-shadow: var(--e24); }
/* floating-label text field: underline only, label moves up on focus */
.md-field input { border: 0; border-bottom: 1px solid rgb(0 0 0/.42); padding: 20px 0 6px; font-size: 16px; }
.md-field input:focus { border-bottom: 2px solid var(--primary); outline: none; }
```

Ripple: on `pointerdown`, add a circle span at the pointer position that scales from 0 to 2.5 times the element's size with fading opacity over about 450ms.

Signature layouts: a hamburger navigation drawer, a card grid in 8dp multiples, a hero "app bar that collapses on scroll", and a FAB bottom-right.

## Do / Don't

| Do | Don't |
|---|---|
| One primary and one accent from the palette | Use five palette hues on one screen |
| Shadow = elevation, from the fixed levels | Make up shadows or put them on flat text |
| One FAB per screen, for the main action | FABs for minor or destructive actions |
| Motion that shows where things come from | Bounce and spin for decoration |

## Accessibility

- White text on light 500 tones (Yellow, Amber, Lime, Light Green, Cyan) fails 4.5:1. Use dark text on those, or the 700+ tones.
- Underline-only text fields and grey placeholder labels have weak affordance. Keep labels visible and the underline at 3:1.
- All-caps buttons are harder to read in long labels. Keep them short.
- Hamburger drawers hide navigation on desktop ([NN/g on hidden navigation](https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/)). Show top-level links when there is room.
- Respect `prefers-reduced-motion` for ripples and shared-element transitions.

## Agent checklist

- [ ] Every shadow is one of the elevation levels and matches the component's role.
- [ ] Palette is one primary (500/700) and one accent.
- [ ] Spacing is on the 8dp grid, and touch targets are 48px or more.
- [ ] Roboto with the M1 type scale. Buttons are uppercase and Medium weight.
- [ ] Standard easing at 195–300ms. Ripple feedback on press.
- [ ] Contrast checked for every text-on-colour pair.

## Sources

- [Material Design 1: Color](https://m1.material.io/style/color.html): the 500/700/A200 palette system.
- [Material Design 1: Duration & easing](https://m1.material.io/motion/duration-easing.html): curves and durations.
- [Material Design 1: Responsive UI](https://m1.material.io/layout/responsive-ui.html): breakpoints, columns, gutters.
- [MDC Web elevation theme (source)](https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_elevation-theme.scss): exact shadow values.
- [Engadget: Google's new design language is called Material Design](https://www.engadget.com/2014-06-25-googles-new-design-language-is-called-material-design.html): launch.
- [Wikipedia: Material Design](https://en.wikipedia.org/wiki/Material_Design): version history.
- [NN/g: Flat design](https://www.nngroup.com/articles/flat-design/): the affordance critique Material answered.
