---
name: design-style-picker
description: Pick the right website design style for a business's industry and the owner's taste, then build it. Covers 10 proven styles from 2016–2025 (Material Design, brutalism, gradients/Flat 2.0, dark mode, neumorphism, glassmorphism, neubrutalism, Linear-style dark SaaS, bento grids, Apple Liquid Glass), with sourced rules, design tokens, components and checklists. Use when the user asks what design or look their site should have ("what style fits my bakery/clinic/SaaS?"), starts a new website or landing page without a clear visual direction, names one of these styles or a year ("make it glassmorphic", "2018 startup look", "neubrutalist", "bento features section"), or wants a page audited against a style.
---

# Design style picker

This skill does two jobs:

1. **Pick.** It matches a product's industry and the owner's preferences to one of ten proven web design styles. The ranking logic is in [picker.md](picker.md).
2. **Build.** It gives you each style's textbook rules, tokens, components and a checklist, one file per style, in [eras/](eras/).

## The ten styles

Each is filed under the year it defined. [timeline.md](timeline.md) has the history.

| Year | Style | Signature | File |
|---|---|---|---|
| 2016 | Material Design | Paper layers, elevation shadows, bold primary colour | [eras/2016-material-design.md](eras/2016-material-design.md) |
| 2017 | Web Brutalism | Raw HTML look, default fonts, rules broken on purpose | [eras/2017-brutalism.md](eras/2017-brutalism.md) |
| 2018 | Vibrant Gradients & Flat 2.0 | Angled two-tone gradients, flat illustration | [eras/2018-gradients-flat-2.md](eras/2018-gradients-flat-2.md) |
| 2019 | Dark Mode | Dark grey surfaces, lighter = higher, follows the OS | [eras/2019-dark-mode.md](eras/2019-dark-mode.md) |
| 2020 | Neumorphism | One surface, two soft shadows, moulded plastic | [eras/2020-neumorphism.md](eras/2020-neumorphism.md) |
| 2021 | **Glassmorphism** (deep guide + demo) | Frosted panels over vivid orbs | [eras/2021-glassmorphism.md](eras/2021-glassmorphism.md) |
| 2022 | **Neubrutalism** (deep guide + demo) | Thick outlines, hard offset shadows, loud fills | [eras/2022-neubrutalism.md](eras/2022-neubrutalism.md) |
| 2023 | **Linear Style (dark SaaS)** (deep guide + demo) | Near-black, one glow, hairlines, Inter | [eras/2023-linear-style.md](eras/2023-linear-style.md) |
| 2024 | **Bento Grid** (deep guide + demo) | Rounded tiles of varied size, one idea each | [eras/2024-bento-grid.md](eras/2024-bento-grid.md) |
| 2025 | Liquid Glass | Refracting glass controls over full-bleed content | [eras/2025-liquid-glass.md](eras/2025-liquid-glass.md) |

## Workflow

### 1. Decide whether you need to pick

- **The user named a style or year** ("make it glassmorphic", "like 2022"): skip to step 3. Match aliases in each era file's `aka:` frontmatter ("soft UI" → neumorphism, "frosted glass" → glassmorphism, "neo-brutal" → neubrutalism).
- **The user described a product but no style**, or asked "what should it look like": go to step 2.
- **Existing site with an established look:** don't impose a new style unless asked. Audit against the closest era instead (see the end of this file).

### 2. Pick (read [picker.md](picker.md))

1. Work out the **industry** and as many of the seven preferences as the request already tells you (feel, tone, daring, light/dark, era preference, content density, audience).
2. Ask about the rest only if it would change the answer: at most three short questions in one message. Otherwise use the industry's defaults.
3. Score with the table in picker.md, or run the same logic: `node -e` with `docs/picker-core.js` and `data/picker.json` if the repo is available.
4. Recommend **one** style plus a runner-up, with one sentence of reasoning each and the main risk to watch. Then build. Don't make the user choose from ten.

### 3. Read the whole era file before writing code

| Section | What you take from it |
|---|---|
| Snapshot | The feel, the signature move, best-for and avoid-for |
| Textbook rules | **The rules you must follow** |
| Tokens | Start `:root` from these, then tune them to the brand |
| Components | Generic building blocks to adapt |
| Do / Don't | Quick self-review |
| Accessibility | The style's known failure modes and their fixes |
| Agent checklist | **Verify every box before you hand over** |

Deep eras add *Layout recipes*, *Performance* and *Anti-patterns*, and a runnable demo in `examples/`.

### 4. Choose modernised or period-accurate

- **Modernised (the default for real products):** keep the signature move and textbook rules, and apply every fix in the Accessibility section.
- **Period-accurate (retro or homage, "make it look like 2017"):** reproduce the quirks too (Material 1's ALL-CAPS buttons, brutalism's default Times), but still keep contrast and focus states.

### 5. Build, then verify

- Every colour, radius, shadow and font goes through CSS custom properties from the Tokens block.
- Respect `prefers-reduced-motion`, plus whatever the era file adds (`prefers-color-scheme`, `prefers-reduced-transparency`, `prefers-contrast`, `forced-colors`).
- Go through the era's **Agent checklist**. Check contrast at the worst point (text over gradients, glass or photos) and test at 320px width.

## Mixing styles

Pick one **base** style (tokens, type, layout) and borrow at most one signature move from another.

- Works: Linear style + bento (a dark bento feature grid) · dark mode + any style · one glass header or modal on a Linear-style page · bento layout under neubrutalism (outlined tiles).
- Fights: neumorphism + glassmorphism (two depth systems) · neubrutalism + Liquid Glass (hard shadows vs refraction) · brutalism + Material (one rejects the system the other *is*).

## Rules for every style

- **Original work only.** Use generic components and the user's own brand. Never copy a real site's layout, copy, logo, illustrations or screenshots. Example sites in the era files are named for context, not imitation.
- **Free fonts first.** Use Google Fonts or system stacks. The era files name free stand-ins.
- **Imagery:** your own, CSS or SVG, or openly licensed. Never trace a brand's commissioned characters.
- **Be honest about history.** When explaining a style, use the dates and sources in its era file.

## Auditing a page against a style

1. Identify the style the page is going for (or ask).
2. Go through that era's Textbook rules, Do / Don't and Agent checklist. For each failure, quote the rule and give the fix.
3. Report the issues in order: accessibility first, then fidelity to the signature move, then polish. If the style itself is a poor fit for the industry ([picker.md](picker.md)), say so once.
