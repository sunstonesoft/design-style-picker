---
year: 2022
style: Neubrutalism
slug: neubrutalism
aka: [Neo-brutalism, New brutalism, Neo-brutal]
era: "2021–2024"
peak: "2022–2023"
depth: basic
lineage: [brutalism, flat-illustration]
---

# 2022 · Neubrutalism

> Friendly brutalism: flat saturated colour blocks, thick black outlines, hard offset shadows with no blur, and chunky type. It looks like a sticker sheet or a zine built in Figma.

## Snapshot

| | |
|---|---|
| **Feels like** | loud, playful, honest, indie, "made by people" |
| **Signature move** | `border: 3px solid #000` plus `box-shadow: 4px 4px 0 #000` |
| **Best for** | creator tools, indie SaaS, portfolios, launches, Gen-Z consumer brands |
| **Avoid for** | banks, healthcare, luxury, enterprise admin UIs |

Unlike [2017 brutalism](2017-brutalism.md), which rejected design, neubrutalism is a *polished* design system that borrows brutalism's rawness: rules, grids and components are all carefully made.

## Origin & timeline

- **2021-11-22**: Gumroad relaunches with a new design for Black Friday. Pink, black outlines and hard shadows make it the most cited starting point ([Gumroad: Behind our new design system](https://gumroad.com/blog/behind-gumroads-new-design-system)).
- **2022**: The look spreads through indie SaaS landing pages, Figma community kits and Dribbble. Tailwind and React "neo-brutalism" component kits appear.
- **2023**: Peak. Big brands adopt pieces of it for campaigns, and it becomes a default "not corporate" look.
- **2025-04**: NN/g publishes [*Neobrutalism*](https://www.nngroup.com/articles/neobrutalism/), defining it and listing its usability risks. The style is mainstream enough to be catalogued.

## Textbook rules

1. **Outline everything.** Cards, buttons, inputs and images get a solid near-black border, 2–4px.
2. **Hard shadows only.** Offset 3–8px, no blur, same colour as the border. They fake a printed, layered depth.
3. **Flat, saturated fills.** A few loud pastels or primaries (yellow, pink, mint, lilac) on a cream or white base. No gradients.
4. **Little or no radius.** 0–8px. Pills are allowed for tags and buttons. Mixing square and round is part of the charm.
5. **Chunky type.** Heavy grotesques or quirky display faces, very large sizes, tight leading. Monospace for meta text.
6. **Visible structure.** Blocky grids, visible dividers, bordered boxes like stickers or labels.
7. **Physical interactions.** On hover the element lifts (shadow grows). On press it "squashes" into its shadow.

## Tokens

```css
:root {
  --ink: #0f0f0f;
  --paper: #fffaf0;
  --yellow: #ffd23f;
  --pink: #ff90e8;     /* the Gumroad-adjacent pink */
  --mint: #3ee09b;
  --lilac: #b8a6ff;
  --border: 3px solid var(--ink);
  --shadow: 4px 4px 0 var(--ink);
  --shadow-lg: 8px 8px 0 var(--ink);
  --radius: 6px;
  --font-display: "Archivo Black", "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", "Inter", sans-serif;
  --font-mono: "Space Mono", "IBM Plex Mono", monospace;
}
```

## Components

```css
.nb-btn {
  background: var(--yellow); color: var(--ink); border: var(--border); border-radius: var(--radius);
  box-shadow: var(--shadow); padding: 12px 20px; font: 700 16px/1 var(--font-body);
  transition: transform .1s, box-shadow .1s;
}
.nb-btn:hover  { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
.nb-btn:active { transform: translate(4px, 4px);   box-shadow: 0 0 0 var(--ink); }

.nb-card  { background: #fff; border: var(--border); border-radius: var(--radius); box-shadow: var(--shadow-lg); padding: 24px; }
.nb-tag   { display: inline-block; background: var(--mint); border: 2px solid var(--ink); border-radius: 999px; padding: 2px 10px; font: 600 13px var(--font-mono); }
.nb-input { border: var(--border); border-radius: var(--radius); padding: 12px 14px; background: #fff; }
.nb-input:focus { outline: none; box-shadow: var(--shadow); background: #fffbe6; }
```

Signature compositions: a giant headline with one highlighted word in a coloured box, a rotated sticker badge ("NEW!" at −6°), a marquee strip of logos, pricing cards with different fill colours, and a tilted screenshot in a bordered frame.

## Do / Don't

| Do | Don't |
|---|---|
| Two or three fill colours plus ink and paper | Rainbow every card a different colour |
| Same ink colour for borders, shadows and text | Mix grey soft shadows with hard ones |
| Large type, plenty of whitespace inside boxes | Cram boxes edge to edge with no air |
| Squash-on-press interaction | Make everything bounce and wiggle at once |

## Accessibility

- Bright-on-bright pairs (yellow on cyan, white on pink) often fail 4.5:1. Keep text ink on light fills ([NN/g](https://www.nngroup.com/articles/neobrutalism/)).
- When everything is outlined and loud, hierarchy collapses. Keep one primary CTA style and make secondary actions quieter (outline only, no shadow).
- Rotated text and stickers should be decorative. Keep the real content horizontal.
- The translate-on-press motion is small, but honour `prefers-reduced-motion` for marquees and wobble animations.

## Agent checklist

- [ ] Borders and shadows use one ink colour, and shadows have zero blur.
- [ ] Palette is at most three accent fills plus ink and paper.
- [ ] Hover lifts and press squashes on every button.
- [ ] Text on every fill passes 4.5:1.
- [ ] One clear primary action per section.
- [ ] Marquees and wobbles stop under `prefers-reduced-motion`.

## Sources

- [NN/g: Neobrutalism](https://www.nngroup.com/articles/neobrutalism/): definition, traits, usability guidance (2025).
- [Gumroad: Behind Gumroad's new design system](https://gumroad.com/blog/behind-gumroads-new-design-system): the 2021 redesign.
- [Gumroad: A new Gumroad launches this Black Friday](https://gumroad.com/blog/p/a-new-gumroad-launches-this-black-friday-get-a-sneak-peek): launch date.
- [Made Good Designs: Neobrutalism in web design](https://madegooddesigns.com/neobrutalism-web-design/): traits and reception.
