---
year: 2020
style: Neumorphism
slug: neumorphism
aka: [Soft UI, Neo-skeuomorphism]
era: "2019–2021"
peak: "2020"
depth: basic
lineage: [material-design, skeuomorphism]
---

# 2020 · Neumorphism

> Elements look extruded from, or pressed into, a single soft surface. There is one background colour everywhere, and every shape is drawn only by a pair of shadows: dark on one side, light on the other.

## Snapshot

| | |
|---|---|
| **Feels like** | soft, tactile, moulded plastic, calm |
| **Signature move** | two shadows, dark bottom-right and light top-left, on an element the same colour as its background |
| **Best for** | small showcase widgets, smart-home or music-player concepts, decorative panels |
| **Avoid for** | forms, dense apps, anything where users must tell buttons from cards. That is most real products |

It was mostly a Dribbble style. It was famous in concepts and rare in shipped products, because its core rule (low contrast) fights usability.

## Origin & timeline

- **2019-late**: Alexander Plyuto posts the "Skeuomorph Mobile Banking" concept on Dribbble, and it becomes one of the most liked shots of the season ([Built In](https://builtin.com/articles/neumorphism)).
- **2019-12**: Michał Malewicz's essay *Neumorphism in user interfaces* (UX Collective) names and popularises the style. The name "neumorphism" (new + skeuomorphism) is usually credited to a Dribbble commenter, Jason Kelley.
- **2020**: Generators such as neumorphism.io appear. UI kits flood marketplaces, and the style is everywhere on Dribbble.
- **2020–2021**: Accessibility critiques pile up ([Axess Lab](https://axesslab.com/neumorphism/), [UX Collective](https://uxdesign.cc/the-challenge-of-digital-accessibility-in-user-interfaces-the-example-of-neumorphism-ac9815ae3b86)). Malewicz himself shifts focus to [glassmorphism](2021-glassmorphism.md). The playful offshoot claymorphism follows in late 2021 ([Smashing](https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/)).

## Textbook rules

1. **One surface colour.** Elements and their container share the same background. A mid-light grey or tinted grey works, never pure white (the light shadow needs room to be lighter).
2. **Two shadows from one light source.** The light comes from the top-left, so there is a dark shadow bottom-right and a light highlight top-left, with equal offset and blur.
3. **Raised vs pressed.** Raised elements use outer shadows. Pressed or active states flip to `inset`. That flip is the main interaction cue.
4. **Big, soft radii** (12–24px) and generous padding. Corners should look moulded, not cut.
5. **Use colour sparingly.** One accent, saved for state (active toggle, progress fill), so it reads against the monochrome surface.
6. **Keep it shallow.** Small offsets (4–10px) on small parts, bigger only on hero panels.

## Tokens

```css
:root {
  --surface: #e0e5ec;
  --shadow-dark: rgb(163 177 198 / 0.6);
  --shadow-light: rgb(255 255 255 / 0.5);
  --text: #31344b;           /* darker than usual: the surface is mid-grey */
  --accent: #6c63ff;
  --radius: 20px;
  --raise: 9px 9px 16px var(--shadow-dark), -9px -9px 16px var(--shadow-light);
  --raise-sm: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light);
  --press: inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light);
  --font: "Poppins", "Nunito", system-ui, sans-serif;  /* rounded geometric sans was typical */
}
```

Dark variant: retune the palette, don't invert it. For example the surface `#2b2e33`, a dark shadow `rgb(0 0 0 / .45)` and a light shadow `rgb(255 255 255 / .05)`.

## Components

```css
.neu-card   { background: var(--surface); border-radius: var(--radius); box-shadow: var(--raise); padding: 24px; }
.neu-button { background: var(--surface); border: 0; border-radius: 14px; box-shadow: var(--raise-sm);
              padding: 12px 22px; color: var(--text); font: 600 15px/1 var(--font); }
.neu-button:active, .neu-button[aria-pressed="true"] { box-shadow: var(--press); color: var(--accent); }
.neu-input  { background: var(--surface); border: 0; border-radius: 12px; box-shadow: var(--press); padding: 12px 16px; }
.neu-toggle { width: 56px; height: 30px; border-radius: 999px; box-shadow: var(--press); position: relative; }
.neu-toggle::after { content: ""; position: absolute; inset: 4px auto 4px 4px; width: 22px; border-radius: 50%;
                     background: var(--surface); box-shadow: var(--raise-sm); transition: transform .2s ease; }
.neu-toggle[aria-checked="true"]::after { transform: translateX(26px); background: var(--accent); }
```

Signature compositions: the circular knob or dial, music-player controls, a smart-home tile grid, a calculator keypad.

## Do / Don't

| Do | Don't |
|---|---|
| Add a 1px border or a tinted fill to anything clickable | Let shadows be the *only* sign of a button |
| Keep text dark and high-contrast | Use grey-on-grey labels |
| Use the accent colour for state | Make the whole UI monochrome, with state shown only by shadows |
| Use it for decorative surfaces next to normal controls | Build a whole form or app in it |

## Accessibility

- **The core problem:** the edge between an element and the background is about 1.2–1.9:1, while WCAG 1.4.11 asks 3:1 for UI component boundaries. Low-vision users can't find the buttons.
- Fixes: a visible border (`1px solid rgb(0 0 0 / .12)`) on interactive elements, an accent fill for primary actions, an obvious `:focus-visible` ring, and support for `prefers-contrast: more` that swaps shadows for borders.
- Pressed and unpressed states that differ only by shadow direction are invisible to many users. Add a colour or icon change too.

## Agent checklist

- [ ] One surface colour, with two shadows from a top-left light.
- [ ] Every interactive element has a non-shadow cue (border, fill or icon) at 3:1 or more.
- [ ] Text is 4.5:1 or more on the surface.
- [ ] Pressed state uses inset *plus* a colour change.
- [ ] `prefers-contrast: more` falls back to bordered flat controls.
- [ ] Used on showcase surfaces, not for every form control.

## Sources

- [Built In: What is neumorphism](https://builtin.com/articles/neumorphism): origin (Plyuto, the naming), core traits.
- [Axess Lab: Neumorphism, the accessible and inclusive way](https://axesslab.com/neumorphism/): contrast problems and fixes.
- [UX Collective: the challenge of digital accessibility, the example of neumorphism](https://uxdesign.cc/the-challenge-of-digital-accessibility-in-user-interfaces-the-example-of-neumorphism-ac9815ae3b86)
- [SetProduct: Neumorphism design guide](https://setproduct.com/blog/neumorphism-design-guide): late-2019 arrival, 2020 peak.
- [Smashing Magazine: Claymorphism](https://www.smashingmagazine.com/2022/03/claymorphism-css-ui-design-trend/): the successor offshoot.
- [WCAG 2.1 SC 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html): the 3:1 rule it usually breaks.
