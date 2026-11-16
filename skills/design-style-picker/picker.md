# Picking a style

This is how an agent turns "I'm building X and I like Y" into **one base style, a runner-up, and optional add-ons**. The [website](https://sunstonesoft.github.io/design-style-picker/) runs the same logic on the same data (`data/picker.json`, scored by `docs/picker-core.js`). Regression briefs in `data/scenarios.json` keep both honest.

## Base styles vs add-ons

Eight of the ten entries are **base styles**: whole visual directions that compete for the pick. Two are **add-ons** that combine with whichever base style wins:

- **Bento Grid** (`layout`): an arrangement for feature, product or stats sections.
- **Dark Mode** (`theme`): a colour scheme. Any base style can get a dark variant.

Never recommend an add-on *instead of* a style. Say "Linear Style, with a bento features section and a dark default", not "Bento Grid".

## 1. Ask (or infer) the answers

Ask only what you can't infer from the request or the codebase. "A calm site for my dental clinic" already answers industry, page type and feel. Ask at most **three** questions in one message. Anything still unanswered takes the **industry's defaults** (listed per industry below), and anything the industry doesn't set stays *unknown* and costs nothing. Unknown isn't a middle value.

| # | Question | Answers | If unanswered |
|---|---|---|---|
| 1 | **What are you building?** | One of the industries below. Map anything else to the closest one | always needed |
| 2 | **What kind of site is it?** | marketing / landing · web app or tool · content (docs, articles, courses) · online store | industry default |
| 3 | **How should it feel?** | 1 calm & quiet → 5 bold & loud | industry default |
| 4 | **What tone?** | 1 serious & formal → 5 playful & fun | industry default |
| 5 | **How daring?** | 1 safe & familiar → 5 edgy & memorable | industry default |
| 6 | **Light or dark?** | light · dark · either | either |
| 7 | **Era preference** | current (looks like now) · any · retro (on purpose) | any |
| 8 | **How much visual effect can users and devices handle?** | simple (broad audience, older phones) · rich | simple |

Accessibility is never optional. Question 8 is about effect tolerance (transparency, blur, motion, GPU cost), not about who deserves accessible design. Every build applies the era file's accessibility fixes either way.

## 2. Score every entry

Start from **industry fit**, add **page fit**, then subtract for mismatches:

| Factor | Points |
|---|---|
| Industry fit | ★ strong **+12** · ✓ works **+4** · · neutral **0** · ✕ avoid **−20** |
| Page fit | great (2) **+4** · usable (1) **0** · poor (0) **−10** |
| Feel (energy) | **−3** per point of difference (skip if unknown) |
| Tone | **−3** per point of difference (skip if unknown) |
| Daring (edge) | **−2** per point of difference (skip if unknown) |
| Light/dark | **−5** if the user picked light or dark and the entry is native only to the other |
| Era preference | current: **+2 × (freshness − 3)** · retro: **+2 × (3 − freshness)** · any: 0 |
| Content density | **−5** per point the page type needs more than the entry handles (marketing 1, store 2, app/content 3) |
| Accessibility risk | **−1** per risk point above 1, plus **−2** more per point when effects = simple |

Rules:
- An entry rated ✕ avoid for the industry is never recommended, whatever its score.
- The **pick** is the highest-scoring *base style*. If the runner-up scored the same, present both as **equally good** and let the user choose.
- **Add-ons:** suggest Bento and/or Dark Mode when the industry rates them strong or works, the page type isn't a poor fit, and (for Dark Mode) the user didn't ask for light.

## 3. Recommend

Reply with:

1. **The pick.** Base style and year, plus one sentence on why it fits *their* industry and taste.
2. **Add-ons**, if any: one line each on where they apply ("bento for the features section").
3. **The runner-up**, in one line, and when they'd prefer it.
4. **What to watch.** The pick's main accessibility or performance risk from its era file, and that you'll handle it.

Then build with the pick's era file (`SKILL.md`, step 3 onward). Don't list every score unless asked.

### Example

> *"Landing page for a neighbourhood bakery, warm and fun, mostly photos."*
> Industry: Restaurants, cafés & food brands → marketing, feel 4, tone 4 (from the request), edge 3 (industry default), either, any, simple.
> **Pick: Neubrutalism (2022).** Playful colour blocks and chunky type give a local bakery personality and stand out from template sites.
> **Add-on: Bento Grid** for the menu, hours, location and reviews section.
> **Runner-up: Vibrant Gradients & Flat 2.0 (2018)**, if you'd rather it feel softer and more cheerful than loud.
> **Watch:** bright fills can fail text contrast, so text stays dark ink on light fills.

## 4. When nothing fits well

If the top score is still negative, if no base style is rated strong for the industry, or if the user wants something none of the entries covers (classic editorial serif, Swiss minimalism, warm organic or illustrated, maximalist art direction), say so plainly. Pick the closest style as a base and tell them which parts you're adapting. Don't force a bad fit. These gaps are on the project roadmap.

<!-- BEGIN GENERATED: npm run build -->

## Industry fit matrix

★ strong fit · ✓ works · · neutral · ✕ avoid. Column headers are the era year; the names are in the table below it.

| Industry | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| B2B SaaS | ✓ | ✕ | · | ✓ | ✕ | ✓ | · | ★ | ★ | ✓ |
| Developer tools & AI products | · | ✓ | ✕ | ★ | ✕ | ✓ | · | ★ | ✓ | ✓ |
| Fintech, banking & payments | ✓ | ✕ | ✓ | ✓ | ✕ | ✓ | · | ★ | ★ | ✓ |
| E-commerce & retail | ★ | · | ✓ | ✓ | ✕ | ✕ | ✓ | · | ★ | ✓ |
| Restaurants, cafés & food brands | · | ✓ | ✓ | ✓ | ✕ | · | ★ | ✕ | ★ | ✓ |
| Healthcare & medical | ★ | ✕ | ✓ | ✓ | ✕ | ✕ | · | · | ★ | ✕ |
| Law, accounting & consulting | ✓ | · | ✕ | ✓ | ✕ | · | ✕ | ★ | ★ | · |
| Real estate & property | ✓ | ✕ | · | ✓ | ✕ | ✓ | · | · | ★ | ✓ |
| Creative agencies, studios & portfolios | ✕ | ★ | · | ✓ | · | ✓ | ★ | ✓ | ✓ | ✓ |
| Creators, coaches & personal brands | ✕ | ✓ | ✓ | · | · | ✓ | ★ | · | ★ | ✓ |
| Education & e-learning | ★ | · | ✓ | ✓ | ✕ | ✕ | ✓ | · | ✓ | ✕ |
| Nonprofits & community organisations | ✓ | ✓ | ✓ | · | ✕ | ✕ | ★ | ✓ | ★ | · |
| Gaming, esports & entertainment | ✕ | ✓ | · | ★ | ✕ | ★ | ✓ | ✓ | ✓ | ✓ |
| Music, film & media | ✕ | ✓ | · | ✓ | ✕ | ★ | ✓ | · | ✓ | ★ |
| Luxury, fashion & beauty | ✕ | ✓ | ✕ | ✓ | · | ✓ | ✕ | ✓ | · | ✓ |
| Local trades & home services | ★ | ✕ | ✓ | ✓ | ✕ | ✕ | ✓ | · | ★ | ✕ |
| Crypto & web3 | ✓ | · | ✓ | ✓ | · | ★ | ✓ | ★ | ✓ | ✓ |
| Kids & family products | ✓ | ✕ | ★ | · | · | ✕ | ★ | ✕ | ✓ | · |
| Hardware & smart devices | · | ✕ | · | ✓ | ✓ | ✓ | · | ✓ | ✓ | ★ |
| Events, conferences & festivals | ✓ | ✓ | ★ | ✓ | ✕ | ✓ | ★ | · | ✓ | · |
| Manufacturing & industrial B2B | ★ | · | · | ✓ | · | ✕ | ✕ | ✓ | ★ | ✕ |
| Wellness, spa & mindfulness | ✕ | ✕ | ✓ | ✓ | ✓ | ✓ | ✕ | ✕ | ✓ | ✓ |
| Dashboards & internal tools | ★ | ✕ | · | ★ | ✕ | ✕ | · | ✓ | ✓ | ✕ |
| Travel, hotels & hospitality | ✓ | ✕ | ✓ | ✓ | ✕ | ✓ | · | · | ★ | ✓ |
| News, magazines & publishing | ✓ | ✓ | ✕ | ★ | ✕ | ✕ | · | · | ✓ | ✕ |
| Government & public services | ★ | ✕ | · | ✓ | ✕ | ✕ | ✕ | · | ✓ | ✕ |
| Research, science & universities | ★ | ✓ | · | ✓ | ✕ | ✕ | · | ✓ | ✓ | · |
| Logistics, transport & delivery | ★ | · | · | ✓ | ✕ | ✕ | ✕ | ★ | ✓ | · |

## Style traits

| Year | Style | Kind | Feel | Tone | Edge | Fresh | Density | A11y risk | Native mode | Marketing | App | Content | Store |
|---|---|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 2016 | [Material Design](eras/2016-material-design.md) | style | 3 | 2 | 1 | 1 | 3 | 1 | light | 1 | 2 | 2 | 2 |
| 2017 | [Web Brutalism](eras/2017-brutalism.md) | style | 5 | 3 | 5 | 2 | 2 | 2 | light | 2 | 0 | 2 | 0 |
| 2018 | [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md) | style | 4 | 4 | 2 | 1 | 2 | 2 | light | 2 | 1 | 1 | 1 |
| 2019 | [Dark Mode](eras/2019-dark-mode.md) | theme | 2 | 2 | 1 | 4 | 3 | 1 | dark | 1 | 2 | 2 | 1 |
| 2020 | [Neumorphism](eras/2020-neumorphism.md) | style | 1 | 2 | 4 | 1 | 1 | 3 | light | 1 | 0 | 0 | 0 |
| 2021 | [Glassmorphism](eras/2021-glassmorphism.md) | style | 3 | 3 | 3 | 2 | 1 | 3 | both | 2 | 0 | 0 | 0 |
| 2022 | [Neubrutalism](eras/2022-neubrutalism.md) | style | 5 | 5 | 4 | 3 | 2 | 2 | light | 2 | 1 | 1 | 2 |
| 2023 | [Linear Style (dark SaaS)](eras/2023-linear-style.md) | style | 2 | 1 | 2 | 4 | 2 | 2 | dark | 2 | 2 | 1 | 0 |
| 2024 | [Bento Grid](eras/2024-bento-grid.md) | layout | 3 | 3 | 2 | 5 | 2 | 1 | both | 2 | 1 | 0 | 2 |
| 2025 | [Liquid Glass](eras/2025-liquid-glass.md) | style | 3 | 2 | 3 | 5 | 1 | 3 | both | 2 | 1 | 0 | 1 |

Scales: feel 1 calm → 5 bold · tone 1 serious → 5 playful · edge 1 safe → 5 edgy · fresh 1 dated → 5 current · density 1 showcase → 3 content-heavy · a11y risk 1 low → 3 high · page columns 0 poor, 1 usable, 2 great. *Kind:* `style` competes for the main pick; `layout` and `theme` are add-ons combined with it.

## Recommendations by industry

### B2B SaaS

*Defaults:* marketing site · feel 2 · tone 2 · edge 2

**Best fits**
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Signals a fast, precise product; screenshots do the selling
- [Bento Grid](eras/2024-bento-grid.md): Turns a long feature list into one scannable overview

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Glassmorphism](eras/2021-glassmorphism.md), [Material Design](eras/2016-material-design.md), [Liquid Glass](eras/2025-liquid-glass.md)

**Avoid**
- [Web Brutalism](eras/2017-brutalism.md): Buyers need trust and clarity, not provocation
- [Neumorphism](eras/2020-neumorphism.md): Low-contrast controls in a product people evaluate on usability

*Pick with these defaults:* **Linear Style (dark SaaS)** + Bento Grid + Dark Mode

### Developer tools & AI products

*Defaults:* marketing site · feel 2 · tone 2 · edge 2

**Best fits**
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): The house style of modern dev tools; reads as 'built by engineers'
- [Dark Mode](eras/2019-dark-mode.md): Developers live in dark editors; dark docs feel native

**Also works:** [Bento Grid](eras/2024-bento-grid.md), [Glassmorphism](eras/2021-glassmorphism.md), [Liquid Glass](eras/2025-liquid-glass.md), [Web Brutalism](eras/2017-brutalism.md)

**Avoid**
- [Neumorphism](eras/2020-neumorphism.md): Soft and vague where developers expect precision
- [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md): Reads like a 2018 growth-marketing page

*Pick with these defaults:* **Linear Style (dark SaaS)** + Dark Mode + Bento Grid

### Fintech, banking & payments

*Defaults:* marketing site · feel 2 · tone 2 · edge 1

**Best fits**
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Precise, restrained product look that signals competence with money
- [Bento Grid](eras/2024-bento-grid.md): Balances, stats and features fit naturally into tiles

**Also works:** [Glassmorphism](eras/2021-glassmorphism.md), [Dark Mode](eras/2019-dark-mode.md), [Material Design](eras/2016-material-design.md), [Liquid Glass](eras/2025-liquid-glass.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md)

**Avoid**
- [Web Brutalism](eras/2017-brutalism.md): Raw anti-design undermines trust with money
- [Neumorphism](eras/2020-neumorphism.md): Unclear buttons are dangerous in payment flows

*Pick with these defaults:* **Linear Style (dark SaaS)** + Bento Grid + Dark Mode

### E-commerce & retail

*Defaults:* store site · feel 3 · tone 3 · edge 2

**Best fits**
- [Bento Grid](eras/2024-bento-grid.md): Category and product tiles of varied size sell visually
- [Material Design](eras/2016-material-design.md): Proven patterns for dense catalogs, filters and checkout

**Also works:** [Neubrutalism](eras/2022-neubrutalism.md), [Liquid Glass](eras/2025-liquid-glass.md), [Dark Mode](eras/2019-dark-mode.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md)

**Avoid**
- [Neumorphism](eras/2020-neumorphism.md): Product photos need contrast, not grey-on-grey
- [Glassmorphism](eras/2021-glassmorphism.md): Text over busy product imagery loses legibility

*Pick with these defaults:* **Material Design** + Bento Grid + Dark Mode

### Restaurants, cafés & food brands

*Defaults:* marketing site · feel 4 · tone 4 · edge 3

**Best fits**
- [Neubrutalism](eras/2022-neubrutalism.md): Playful, indie, appetising colour blocks with personality
- [Bento Grid](eras/2024-bento-grid.md): Menu highlights, hours, location and reviews as neat tiles

**Also works:** [Web Brutalism](eras/2017-brutalism.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Liquid Glass](eras/2025-liquid-glass.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Cold developer aesthetic kills appetite
- [Neumorphism](eras/2020-neumorphism.md): Washed-out grey makes food look bland

*Pick with these defaults:* **Neubrutalism** + Bento Grid + Dark Mode

### Healthcare & medical

*Defaults:* marketing site · feel 2 · tone 2 · edge 1

**Best fits**
- [Material Design](eras/2016-material-design.md): Clear, accessible, familiar patterns for anxious users of all ages
- [Bento Grid](eras/2024-bento-grid.md): Services, locations and booking as calm, scannable tiles

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Legibility risk for older and low-vision patients
- [Neumorphism](eras/2020-neumorphism.md): Fails contrast where accessibility is non-negotiable
- [Web Brutalism](eras/2017-brutalism.md): Feels careless where care is the product
- [Liquid Glass](eras/2025-liquid-glass.md): Transparency harms readability for the users who need it most

*Pick with these defaults:* **Material Design** + Bento Grid + Dark Mode

### Law, accounting & consulting

*Defaults:* marketing site · feel 2 · tone 1 · edge 1

**Best fits**
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Restrained, premium look for high-end consultancies
- [Bento Grid](eras/2024-bento-grid.md): Practice areas and credentials in an orderly overview

**Also works:** [Material Design](eras/2016-material-design.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Neubrutalism](eras/2022-neubrutalism.md): Too playful for serious advice
- [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md): Reads cheap and dated for premium services
- [Neumorphism](eras/2020-neumorphism.md): Vague UI erodes the sense of rigour

*Pick with these defaults:* **Linear Style (dark SaaS)** + Bento Grid + Dark Mode

### Real estate & property

*Defaults:* marketing site · feel 2 · tone 2 · edge 1

**Best fits**
- [Bento Grid](eras/2024-bento-grid.md): Listing highlights (beds, price, map) as tiles

**Also works:** [Liquid Glass](eras/2025-liquid-glass.md), [Glassmorphism](eras/2021-glassmorphism.md), [Material Design](eras/2016-material-design.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Web Brutalism](eras/2017-brutalism.md): Buyers want polish and trust
- [Neumorphism](eras/2020-neumorphism.md): Hides the photos that sell the property

*Pick with these defaults:* **Material Design** + Bento Grid + Dark Mode

### Creative agencies, studios & portfolios

*Defaults:* marketing site · feel 4 · tone 3 · edge 4

**Best fits**
- [Web Brutalism](eras/2017-brutalism.md): The portfolio genre's signature: confident, opinionated, memorable
- [Neubrutalism](eras/2022-neubrutalism.md): Shows personality and craft while staying usable

**Also works:** [Bento Grid](eras/2024-bento-grid.md), [Glassmorphism](eras/2021-glassmorphism.md), [Linear Style (dark SaaS)](eras/2023-linear-style.md), [Liquid Glass](eras/2025-liquid-glass.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Material Design](eras/2016-material-design.md): Looks like a template; a portfolio must not

*Pick with these defaults:* **Web Brutalism** + Bento Grid + Dark Mode

### Creators, coaches & personal brands

*Defaults:* marketing site · feel 4 · tone 4 · edge 3

**Best fits**
- [Neubrutalism](eras/2022-neubrutalism.md): Approachable and loud; stands out in a feed
- [Bento Grid](eras/2024-bento-grid.md): The link-in-bio format people already know

**Also works:** [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Glassmorphism](eras/2021-glassmorphism.md), [Web Brutalism](eras/2017-brutalism.md), [Liquid Glass](eras/2025-liquid-glass.md)

**Avoid**
- [Material Design](eras/2016-material-design.md): Generic app look hides the personality you're selling

*Pick with these defaults:* **Neubrutalism** + Bento Grid

### Education & e-learning

*Defaults:* content site · feel 3 · tone 3 · edge 2

**Best fits**
- [Material Design](eras/2016-material-design.md): Handles dense lessons, forms and dashboards accessibly

**Also works:** [Neubrutalism](eras/2022-neubrutalism.md), [Bento Grid](eras/2024-bento-grid.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Long text on glass is tiring
- [Neumorphism](eras/2020-neumorphism.md): Learners need obvious controls
- [Liquid Glass](eras/2025-liquid-glass.md): Transparency fights reading

*Pick with these defaults:* **Material Design** + Dark Mode

### Nonprofits & community organisations

*Defaults:* marketing site · feel 4 · tone 4 · edge 3

**Best fits**
- [Neubrutalism](eras/2022-neubrutalism.md): Grassroots, human, energetic without looking corporate
- [Bento Grid](eras/2024-bento-grid.md): Impact numbers, stories and donate CTA as clear tiles

**Also works:** [Material Design](eras/2016-material-design.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Web Brutalism](eras/2017-brutalism.md), [Linear Style (dark SaaS)](eras/2023-linear-style.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Style over substance for donors
- [Neumorphism](eras/2020-neumorphism.md): Low contrast excludes part of your audience

*Pick with these defaults:* **Neubrutalism** + Bento Grid

### Gaming, esports & entertainment

*Defaults:* marketing site · feel 4 · tone 4 · edge 3

**Best fits**
- [Glassmorphism](eras/2021-glassmorphism.md): Glass HUD-like panels over vivid key art
- [Dark Mode](eras/2019-dark-mode.md): Gamers expect dark; art and trailers pop on it

**Also works:** [Linear Style (dark SaaS)](eras/2023-linear-style.md), [Liquid Glass](eras/2025-liquid-glass.md), [Neubrutalism](eras/2022-neubrutalism.md), [Web Brutalism](eras/2017-brutalism.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Material Design](eras/2016-material-design.md): Feels like a utility app, not a world
- [Neumorphism](eras/2020-neumorphism.md): Too soft and quiet for the genre

*Pick with these defaults:* **Glassmorphism** + Bento Grid + Dark Mode

### Music, film & media

*Defaults:* marketing site · feel 4 · tone 3 · edge 3

**Best fits**
- [Glassmorphism](eras/2021-glassmorphism.md): Player widgets and overlays over cover art: the style's home turf
- [Liquid Glass](eras/2025-liquid-glass.md): Floating controls over full-bleed video and artwork

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Web Brutalism](eras/2017-brutalism.md), [Bento Grid](eras/2024-bento-grid.md), [Neubrutalism](eras/2022-neubrutalism.md)

**Avoid**
- [Material Design](eras/2016-material-design.md): Utility look flattens artistic identity
- [Neumorphism](eras/2020-neumorphism.md): Muted grey drowns the artwork

*Pick with these defaults:* **Glassmorphism** + Bento Grid + Dark Mode

### Luxury, fashion & beauty

*Defaults:* marketing site · feel 2 · tone 1 · edge 3

**Best fits:** none of the ten styles is a clear fit yet (see *When nothing fits well*).

**Also works:** [Liquid Glass](eras/2025-liquid-glass.md), [Web Brutalism](eras/2017-brutalism.md), [Glassmorphism](eras/2021-glassmorphism.md), [Dark Mode](eras/2019-dark-mode.md), [Linear Style (dark SaaS)](eras/2023-linear-style.md)

**Avoid**
- [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md): Startup-cheerful, not exclusive
- [Neubrutalism](eras/2022-neubrutalism.md): Cartoonish for luxury
- [Material Design](eras/2016-material-design.md): Mass-market app look

*Pick with these defaults:* **Linear Style (dark SaaS)** + Dark Mode

### Local trades & home services

*Defaults:* marketing site · feel 3 · tone 2 · edge 1

**Best fits**
- [Material Design](eras/2016-material-design.md): Fast, clear, phone-friendly: call, quote, book
- [Bento Grid](eras/2024-bento-grid.md): Services, areas, reviews and contact at a glance

**Also works:** [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Neubrutalism](eras/2022-neubrutalism.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Style gets in the way of 'call now'
- [Liquid Glass](eras/2025-liquid-glass.md): Heavy effects on cheap phones and older visitors
- [Web Brutalism](eras/2017-brutalism.md): Looks unfinished to customers judging trust
- [Neumorphism](eras/2020-neumorphism.md): Unclear buttons lose leads

*Pick with these defaults:* **Material Design** + Bento Grid + Dark Mode

### Crypto & web3

*Defaults:* marketing site · feel 3 · tone 2 · edge 3

**Best fits**
- [Glassmorphism](eras/2021-glassmorphism.md): The sector's visual signature since 2021: glass over neon
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Serious, technical dark look for infrastructure projects

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Liquid Glass](eras/2025-liquid-glass.md), [Neubrutalism](eras/2022-neubrutalism.md), [Bento Grid](eras/2024-bento-grid.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Material Design](eras/2016-material-design.md)

*Pick with these defaults:* **Glassmorphism** + Bento Grid + Dark Mode

### Kids & family products

*Defaults:* marketing site · feel 4 · tone 5 · edge 2

**Best fits**
- [Neubrutalism](eras/2022-neubrutalism.md): Bright, chunky, toy-like, and clear for parents
- [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md): Cheerful colour and friendly illustration

**Also works:** [Material Design](eras/2016-material-design.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Dark and corporate
- [Web Brutalism](eras/2017-brutalism.md): Confusing and harsh
- [Glassmorphism](eras/2021-glassmorphism.md): Low contrast for parents skimming on phones

*Pick with these defaults:* **Vibrant Gradients & Flat 2.0** + Bento Grid

### Hardware & smart devices

*Defaults:* marketing site · feel 3 · tone 2 · edge 2

**Best fits**
- [Liquid Glass](eras/2025-liquid-glass.md): Premium product-shot pages with floating controls

**Also works:** [Neumorphism](eras/2020-neumorphism.md), [Glassmorphism](eras/2021-glassmorphism.md), [Bento Grid](eras/2024-bento-grid.md), [Dark Mode](eras/2019-dark-mode.md), [Linear Style (dark SaaS)](eras/2023-linear-style.md)

**Avoid**
- [Web Brutalism](eras/2017-brutalism.md): Undercuts perceived build quality

*Pick with these defaults:* **Liquid Glass** + Bento Grid + Dark Mode

### Events, conferences & festivals

*Defaults:* marketing site · feel 4 · tone 4 · edge 3

**Best fits**
- [Neubrutalism](eras/2022-neubrutalism.md): Poster-like energy, schedules in bold blocks
- [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md): Vivid, celebratory, works on banners and tickets

**Also works:** [Web Brutalism](eras/2017-brutalism.md), [Glassmorphism](eras/2021-glassmorphism.md), [Bento Grid](eras/2024-bento-grid.md), [Dark Mode](eras/2019-dark-mode.md), [Material Design](eras/2016-material-design.md)

**Avoid**
- [Neumorphism](eras/2020-neumorphism.md): Too quiet for an event

*Pick with these defaults:* **Vibrant Gradients & Flat 2.0** + Bento Grid + Dark Mode

### Manufacturing & industrial B2B

*Defaults:* marketing site · feel 2 · tone 1 · edge 1

**Best fits**
- [Material Design](eras/2016-material-design.md): Spec-heavy pages, catalogs and quote forms stay clear
- [Bento Grid](eras/2024-bento-grid.md): Capabilities, certifications and stats as tiles

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Linear Style (dark SaaS)](eras/2023-linear-style.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Decoration over specs buyers came for
- [Liquid Glass](eras/2025-liquid-glass.md): Effects without purpose for procurement teams
- [Neubrutalism](eras/2022-neubrutalism.md): Too playful for industrial trust

*Pick with these defaults:* **Material Design** + Bento Grid + Dark Mode

### Wellness, spa & mindfulness

*Defaults:* marketing site · feel 2 · tone 2 · edge 2

**Best fits:** none of the ten styles is a clear fit yet (see *When nothing fits well*).

**Also works:** [Glassmorphism](eras/2021-glassmorphism.md), [Liquid Glass](eras/2025-liquid-glass.md), [Neumorphism](eras/2020-neumorphism.md), [Bento Grid](eras/2024-bento-grid.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Material Design](eras/2016-material-design.md): Clinical app look, not restorative
- [Web Brutalism](eras/2017-brutalism.md): Harsh where calm is the promise
- [Neubrutalism](eras/2022-neubrutalism.md): Loud where quiet sells
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Tech-cold, not restorative

*Pick with these defaults:* **Liquid Glass** + Bento Grid + Dark Mode

### Dashboards & internal tools

*Defaults:* app site · feel 2 · tone 1 · edge 1

**Best fits**
- [Material Design](eras/2016-material-design.md): Complete component system for dense, data-heavy UIs
- [Dark Mode](eras/2019-dark-mode.md): Long sessions, charts and tables on calm dark surfaces

**Also works:** [Linear Style (dark SaaS)](eras/2023-linear-style.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Data on glass dissolves
- [Liquid Glass](eras/2025-liquid-glass.md): Transparency fights tables and charts
- [Neumorphism](eras/2020-neumorphism.md): Unclear controls slow daily work
- [Web Brutalism](eras/2017-brutalism.md): Daily tools need conventions

*Pick with these defaults:* **Material Design** + Dark Mode + Bento Grid

### Travel, hotels & hospitality

*Defaults:* marketing site · feel 3 · tone 3 · edge 2

**Best fits**
- [Bento Grid](eras/2024-bento-grid.md): Rooms, amenities, location and reviews as photo tiles

**Also works:** [Liquid Glass](eras/2025-liquid-glass.md), [Glassmorphism](eras/2021-glassmorphism.md), [Material Design](eras/2016-material-design.md), [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md), [Dark Mode](eras/2019-dark-mode.md)

**Avoid**
- [Web Brutalism](eras/2017-brutalism.md): Guests book on trust and comfort
- [Neumorphism](eras/2020-neumorphism.md): Greys out the photography that sells the stay

*Pick with these defaults:* **Glassmorphism** + Bento Grid + Dark Mode

### News, magazines & publishing

*Defaults:* content site · feel 2 · tone 2 · edge 2

**Best fits**
- [Dark Mode](eras/2019-dark-mode.md): Readers expect a comfortable night-reading option

**Also works:** [Material Design](eras/2016-material-design.md), [Web Brutalism](eras/2017-brutalism.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Long-form text on glass is tiring
- [Liquid Glass](eras/2025-liquid-glass.md): Transparency fights reading
- [Neumorphism](eras/2020-neumorphism.md): Low contrast for text-first pages
- [Vibrant Gradients & Flat 2.0](eras/2018-gradients-flat-2.md): Reads like a startup, not a publication

*Pick with these defaults:* **Material Design** + Dark Mode

### Government & public services

*Defaults:* content site · feel 2 · tone 1 · edge 1

**Best fits**
- [Material Design](eras/2016-material-design.md): Conventional, accessible components everyone already knows

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Accessibility is a legal duty here
- [Liquid Glass](eras/2025-liquid-glass.md): Accessibility is a legal duty here
- [Neumorphism](eras/2020-neumorphism.md): Fails contrast rules public sites must meet
- [Web Brutalism](eras/2017-brutalism.md): Citizens need clarity, not provocation
- [Neubrutalism](eras/2022-neubrutalism.md): Too playful for official services

*Pick with these defaults:* **Material Design** + Dark Mode

### Research, science & universities

*Defaults:* content site · feel 2 · tone 1 · edge 2

**Best fits**
- [Material Design](eras/2016-material-design.md): Handles papers, data and dense navigation clearly

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Linear Style (dark SaaS)](eras/2023-linear-style.md), [Web Brutalism](eras/2017-brutalism.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Decoration over dense information
- [Neumorphism](eras/2020-neumorphism.md): Low contrast for reading-heavy pages

*Pick with these defaults:* **Material Design** + Dark Mode

### Logistics, transport & delivery

*Defaults:* app site · feel 2 · tone 1 · edge 1

**Best fits**
- [Material Design](eras/2016-material-design.md): Tracking, forms and status lists in proven patterns
- [Linear Style (dark SaaS)](eras/2023-linear-style.md): Precise, modern look for logistics software

**Also works:** [Dark Mode](eras/2019-dark-mode.md), [Bento Grid](eras/2024-bento-grid.md)

**Avoid**
- [Glassmorphism](eras/2021-glassmorphism.md): Operational screens need solid contrast
- [Neumorphism](eras/2020-neumorphism.md): Unclear controls slow operations
- [Neubrutalism](eras/2022-neubrutalism.md): Too playful for operations

*Pick with these defaults:* **Material Design** + Dark Mode + Bento Grid

<!-- END GENERATED -->
