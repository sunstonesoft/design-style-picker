---
year: 2023
style: Linear Style (dark SaaS)
slug: linear-style
aka: [Linear design, "The Linear effect", Dark SaaS, Vercel-style]
era: "2021–2025"
peak: "2023–2024"
depth: basic
lineage: [dark-mode, glassmorphism]
---

# 2023 · Linear Style

> The dark developer-tool marketing look: a near-black canvas, one soft coloured glow behind the hero, hairline borders, Inter in tight tracking, gradient-to-transparent headline text, and product screenshots floating in the dark.

## Snapshot

| | |
|---|---|
| **Feels like** | precise, premium, fast, engineered, quiet confidence |
| **Signature move** | a radial "light leak" glow from the top of a near-black hero, plus 1px `rgba(255,255,255,.08)` borders |
| **Best for** | dev tools, AI products, B2B SaaS, infrastructure |
| **Avoid for** | consumer brands that need warmth, kids, food, anything not "software" |

Named after Linear (the issue tracker), whose site and app defined it. Vercel, Raycast, Resend and a wave of AI startups made it the default look of 2023 SaaS.

## Origin & timeline

- **2019–2021**: Linear launches. Its dark, minimal app and marketing site win designer attention. It builds on [2019 dark mode](2019-dark-mode.md) and the glows of [2021 glassmorphism](2021-glassmorphism.md).
- **2022–2023**: Copied across SaaS landing pages. Designer Daryl Ginn's "Linear effect" tutorials spread the recipe ([UX Bootcamp: The rise of Linear style design](https://bootcamp.uxdesign.cc/the-rise-of-linear-style-design-origins-trends-and-techniques-4fd96aab7646)).
- **2024–2025**: Saturation. LogRocket: "almost every SaaS website looks the same" ([LogRocket: Linear design](https://blog.logrocket.com/ux-design/linear-design/)).
- Linear itself keeps evolving it ([Linear: How we redesigned the Linear UI](https://linear.app/now/how-we-redesigned-the-linear-ui)).

## Textbook rules

1. **Near-black, never pure black.** Use `#08090a`–`#111113` with a brand hue at 1–10% lightness (LogRocket's advice). Surfaces step up only a little (`#141518`, `#1a1b1f`).
2. **Monochrome first, then one accent.** Greys do the work. A single hue (indigo, violet or teal) appears in glows, focus rings and the main CTA.
3. **Light as decoration.** A large blurred radial gradient behind the hero, faint grid or noise textures, and a glowing border that follows the cursor on cards.
4. **Hairlines everywhere.** 1px borders at 6–10% white. Separation comes from borders, not shadows.
5. **Inter (or a similar neo-grotesque).** Big headlines with tight tracking (−0.02 to −0.04em), weight 500–600. A gradient from white to 60% white on headline text. Small grey body text (`#8a8f98`).
6. **Linear (sequential) layout.** One column, top-to-bottom story, centred hero, then feature sections that alternate a screenshot with a short paragraph. Few CTAs.
7. **The product is the hero image.** Real UI screenshots, often tilted in 3D or masked to fade at the bottom.
8. **Fast, subtle motion.** Fade and rise on scroll (8–16px, 400–600ms, ease-out). Nothing bouncy.

## Tokens

```css
:root {
  --bg: #08090a;
  --surface: #111214;
  --surface-2: #17181b;
  --text: #f7f8f8;
  --text-2: #8a8f98;
  --line: rgb(255 255 255 / 0.08);
  --line-strong: rgb(255 255 255 / 0.14);
  --accent: #5e6ad2;           /* indigo */
  --glow: radial-gradient(60% 50% at 50% 0%, rgb(94 106 210 / 0.28), transparent 70%);
  --radius: 12px;
  --font: "Inter", system-ui, sans-serif;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Components

```css
.hero { background: var(--glow), var(--bg); padding: 160px 24px 96px; text-align: center; }
.hero h1 {
  font: 600 clamp(40px, 7vw, 80px)/1.05 var(--font); letter-spacing: -0.04em; margin: 0 auto; max-width: 14ch;
  background: linear-gradient(180deg, #fff 30%, rgb(255 255 255 / .55));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.pill { display: inline-flex; gap: 8px; padding: 4px 12px; border: 1px solid var(--line-strong);
        border-radius: 999px; color: var(--text-2); font: 500 13px var(--font); background: rgb(255 255 255 / .03); }
.btn-primary { background: var(--text); color: var(--bg); border-radius: 8px; padding: 10px 16px; font: 500 14px var(--font); }
.btn-ghost   { border: 1px solid var(--line-strong); color: var(--text); border-radius: 8px; padding: 10px 16px; }
.card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 24px;
        position: relative; overflow: hidden; }
/* cursor-following border glow: set --x/--y from JS on pointermove */
.card::before { content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: radial-gradient(300px circle at var(--x, 50%) var(--y, 0%), rgb(255 255 255 / .08), transparent 40%); }
.screenshot { border: 1px solid var(--line); border-radius: 16px;
  mask-image: linear-gradient(to bottom, #000 60%, transparent); transform: perspective(1200px) rotateX(12deg); }
```

Signature layout: a top announcement pill ("New: X →"), a centred gradient headline, two CTAs (light filled plus ghost), a tilted product screenshot fading into black, a logo row in 40% grey, a feature grid with hairline cards (often a bento, see [2024](2024-bento-grid.md)), and a closing CTA.

## Do / Don't

| Do | Don't |
|---|---|
| One glow, one accent | Rainbow glows in every section |
| Real product UI as imagery | Stock 3D blobs standing in for the product |
| Offer a light theme too | Ship dark-only with 50%-grey body text |
| Keep secondary text at 4.5:1 or more | Use `#555` on `#000` for "subtle" copy |

## Accessibility

- The "quiet grey" body text often lands at 3–4:1. `#8a8f98` on `#08090a` is about 6:1, so keep it there or lighter.
- Gradient-clipped headlines need a solid fallback in forced-colours mode.
- Many of these sites have no light mode. Provide one (see [2019 dark mode](2019-dark-mode.md)).
- Cursor glows and scroll reveals must not hide content when JS or motion is off.

## Agent checklist

- [ ] Background is near-black (#08–#11), with one brand-tinted glow.
- [ ] Borders are 1px white at 6–14%. No heavy shadows.
- [ ] Inter or similar, tight tracking on headlines, gradient headline with a solid fallback.
- [ ] Real product screenshots, masked or tilted.
- [ ] Muted text is 4.5:1 or more. A light theme exists or is planned.
- [ ] Motion is subtle ease-out, and off under reduced motion.

## Sources

- [LogRocket: Linear design, the SaaS design trend](https://blog.logrocket.com/ux-design/linear-design/): definition, rules, saturation critique.
- [UX Bootcamp: The rise of Linear style design](https://bootcamp.uxdesign.cc/the-rise-of-linear-style-design-origins-trends-and-techniques-4fd96aab7646): origins and techniques.
- [Linear: How we redesigned the Linear UI](https://linear.app/now/how-we-redesigned-the-linear-ui): the source product's own thinking.
- [SaaSUI: SaaS UI design trends](https://saasui.design/blog/7-saas-ui-design-trends-2026): later evolution.
