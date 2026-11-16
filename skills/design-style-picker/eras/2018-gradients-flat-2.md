---
year: 2018
style: Vibrant Gradients & Flat 2.0
slug: gradients-flat-2
aka: [Semi-flat, Flat 2.0, "Stripe-style", Corporate Memphis (illustration sub-style), Isometric]
era: "2016–2020"
peak: "2018"
depth: basic
lineage: [material-design, flat-design]
---

# 2018 · Vibrant Gradients & Flat 2.0

> Flat design that got its depth back: big saturated two-tone gradients, soft coloured shadows, slanted section edges, and flat vector illustration (isometric scenes or long-limbed "Corporate Memphis" people) on every SaaS landing page.

## Snapshot

| | |
|---|---|
| **Feels like** | optimistic, tech-startup, friendly, "growth" |
| **Signature move** | a diagonal purple-to-pink (or blue-to-teal) gradient hero with a floating device mockup and a flat illustration |
| **Best for** | SaaS marketing, fintech, onboarding, app-store pages |
| **Avoid for** | serious editorial, luxury, anything that must not look like 2018 |

## Origin & timeline

- **2013**: iOS 7 makes flat design mainstream, and its bright gradient icons plant the seed.
- **2016-05**: Instagram's new gradient logo makes colour gradients legitimate again. Spotify's duotone campaigns run 2015–2017.
- **2017**: Facebook commissions Buck to make the "Alegria" illustration system: flat, faceless, long-limbed people ([Buck: Facebook Alegria](https://buck.co/work/facebook-alegria)). The style later gets the nickname *Corporate Memphis*.
- **2017–2018**: Stripe's angled gradient sections and "Stripe-style" landing pages get copied everywhere. Design-trend roundups for 2018 lead with gradients ([Creative Bloq](https://www.creativebloq.com/features/6-digital-trends-we-loved-in-2018-and-3-we-did-not), [MarketingProfs](https://www.marketingprofs.com/articles/2018/33355/the-four-most-compelling-design-trends-for-2018)). Isometric illustration rides the same wave ([Behance mid-year review 2018](https://www.behance.net/gallery/69259573/Midyear-Review-2018-Design-Trends)).
- **2020–2021**: Backlash against Corporate Memphis as soulless ([Marketplace](https://www.marketplace.org/story/2021/04/15/a-primer-on-corporate-memphis-big-techs-favorite-design-trend), [AIGA Eye on Design](https://eyeondesign.aiga.org/what-the-think-pieces-about-corporate-memphis-tell-us-about-the-state-of-illustration/)). Gradients survive as mesh gradients under [glassmorphism](2021-glassmorphism.md).

## Textbook rules

1. **Two-stop, high-saturation gradients** at an angle (120–135°). Use neighbouring hues (purple→pink, blue→cyan, orange→pink), never complementary ones (muddy middles).
2. **Coloured shadows.** Tint the shadow with the element's own hue (`rgb(98 0 234 / .3)`) and offset it downward. Soft, large blur.
3. **Semi-flat.** Flat shapes and icons, but allow subtle gradients, shadows and layering. Roughly 4–8px radius.
4. **Slanted section dividers** (`clip-path` or skewed backgrounds) to break the box-on-box rhythm.
5. **Flat vector illustration** carries the story: isometric product scenes or Corporate Memphis people with no facial detail, oversized limbs and a limited palette that matches the brand gradient.
6. **Geometric sans type** (Circular, Gilroy, Montserrat, Poppins, Sofia Pro), bold headlines, and lots of white space below the hero.
7. **Device mockups** floating at a tilt over the gradient.

## Tokens

```css
:root {
  --grad-hero: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);   /* purple → blue */
  --grad-warm: linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%);   /* coral → pink */
  --grad-cool: linear-gradient(135deg, #00c6fb 0%, #005bea 100%);   /* cyan → blue */
  --ink: #1b1f3b;
  --muted: #6b7194;
  --surface: #ffffff;
  --bg: #f6f8fd;
  --radius: 8px;
  --shadow-color: 0 12px 30px -8px rgb(37 117 252 / 0.45);
  --shadow-soft: 0 10px 40px rgb(27 31 59 / 0.08);
  --font: "Poppins", "Montserrat", system-ui, sans-serif;
}
```

## Components

```css
.hero {
  background: var(--grad-hero); color: #fff; padding: 120px 24px 180px;
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);   /* the slanted bottom edge */
}
.btn-grad {
  background: var(--grad-warm); color: #fff; border: 0; border-radius: 999px;
  padding: 14px 28px; font: 600 16px var(--font); box-shadow: 0 10px 24px -6px rgb(255 106 136 / .55);
  transition: transform .2s ease, box-shadow .2s ease;
}
.btn-grad:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -6px rgb(255 106 136 / .6); }
.feature-card { background: var(--surface); border-radius: var(--radius); box-shadow: var(--shadow-soft); padding: 32px; }
.feature-card .icon { width: 56px; height: 56px; border-radius: 16px; background: var(--grad-cool);
                      box-shadow: var(--shadow-color); display: grid; place-items: center; color: #fff; }
.gradient-text { background: var(--grad-hero); -webkit-background-clip: text; background-clip: text; color: transparent; }
```

Signature layout: a gradient hero with the headline on the left and a tilted mockup on the right, a logo strip, three feature cards with gradient icon tiles, an alternating illustration and text rows, a pricing table with the middle plan raised and gradient-filled, and a gradient footer CTA.

Illustration: draw your own or use openly licensed sets (unDraw, Open Peeps, Humaaans). Recolour them to the brand palette. Never trace a brand's commissioned characters.

## Do / Don't

| Do | Don't |
|---|---|
| Neighbouring-hue gradients | Red→green or other complementary pairs |
| Shadows tinted with the element's colour | Grey shadows under bright colour |
| One illustration style across the site | Mix isometric, 3D and flat people |
| Gradient as a hero or accent | Gradients on every surface and on body text |

## Accessibility

- White text on the *light end* of a gradient often fails. Check contrast at the lightest stop, or add a dark scrim.
- Gradient text (`background-clip: text`) can disappear in forced-colours mode. Add `@media (forced-colors: active) { .gradient-text { color: CanvasText; background: none; } }`.
- Illustrations are decorative: `alt=""` unless they carry meaning.

## Agent checklist

- [ ] Gradients are two-stop, neighbouring hues, at an angle.
- [ ] Shadows under coloured elements are tinted.
- [ ] One illustration style, recoloured to the palette, original or openly licensed.
- [ ] Text contrast checked at the lightest gradient stop.
- [ ] Slanted dividers don't clip content at narrow widths.

## Sources

- [Buck: Facebook Alegria](https://buck.co/work/facebook-alegria): the 2017 illustration system behind "Corporate Memphis".
- [Creative Bloq: digital trends of 2018](https://www.creativebloq.com/features/6-digital-trends-we-loved-in-2018-and-3-we-did-not): gradients' return.
- [MarketingProfs: the four most compelling design trends for 2018](https://www.marketingprofs.com/articles/2018/33355/the-four-most-compelling-design-trends-for-2018)
- [Behance: Midyear Review 2018 design trends](https://www.behance.net/gallery/69259573/Midyear-Review-2018-Design-Trends): isometric and gradients.
- [Marketplace: A primer on Corporate Memphis](https://www.marketplace.org/story/2021/04/15/a-primer-on-corporate-memphis-big-techs-favorite-design-trend): naming and criticism.
- [AIGA Eye on Design: the think pieces about Corporate Memphis](https://eyeondesign.aiga.org/what-the-think-pieces-about-corporate-memphis-tell-us-about-the-state-of-illustration/)
