# Contributing

Thanks for helping people pick, and build, the right design.

## Ways to help

1. **Fix a recommendation.** You know an industry and the picker gets it wrong? Use the *Industry fit* issue form, or edit `data/picker.json` directly and add a regression brief to `data/scenarios.json`.
2. **Take a style deep.** Every style except 2021 Glassmorphism is at a basic level. See the depth bar below.
3. **Propose a missing style.** Editorial/serif, Swiss minimalism, warm organic, maximalist, claymorphism, Y2K… Open an issue with sources first.
4. **Add a demo** in `skills/design-style-picker/examples/<year>-<slug>/index.html`. The build copies it to the website.
5. **Fix a fact.** Wrong date, a dead link, a better primary source.

## Setup

Node 18+, no install needed.

```bash
npm run build   # after editing data/picker.json or an example
npm run check   # must pass before a PR: guides, generated files, scenarios
```

Demos are also checked with axe-core in CI (`a11y` workflow). To run it locally: `npm i --no-save playwright axe-core && npx playwright install chromium && node scripts/a11y.mjs`.

## The picker data

`data/picker.json` is the single source of truth:

- **styles**: `kind` (`style` competes for the pick; `layout`/`theme` are add-ons), traits on fixed scales (see `scales` in the file), and page-type suitability.
- **industries**: `defaults` (typical page type, feel, tone and edge), plus `strong` and `avoid` maps with a one-line reason each, and a `works` list.
- **scoring**: the weights. Change them only with a scenario showing why.

Rules for changes:

- Every *strong* and *avoid* rating needs a reason a non-designer would understand.
- Add or update a brief in `data/scenarios.json` for any recommendation you change on purpose.
- The check fails if one style wins more than 40% of industries on defaults. That guards against a single style winning everything.
- Never hand-edit generated output: the GENERATED section of `picker.md`, `docs/picker-data.js` or `docs/demos/`.

## Style guides (era files)

- Copy `skills/design-style-picker/eras/_TEMPLATE.md` to `eras/<year>-<slug>.md`, add the style to `data/picker.json`, `SKILL.md` and `timeline.md`.
- Keep every required section, in order: Snapshot, Origin & timeline, Textbook rules, Tokens, Components, Do / Don't, Accessibility, Agent checklist, Sources.

**Basic depth (minimum):** 3+ sources including one primary or defining source; a Tokens block; 2+ generic components; an Accessibility section that names the style's known failure and its fix.

**Deep depth:** 8+ sources; a full lineage timeline; a "recipe in numbers" table saying where each number comes from; *Layout recipes*, *Performance* and *Anti-patterns* sections; a runnable demo that passes the style's own checklist.

## Content rules

- **No copying.** Generic components and fictional brands only. Never reproduce real sites' layouts, copy, logos, illustrations or screenshots.
- **No long quotes.** Summarise and link.
- **Mark uncertainty.** If a date or value can't be checked against a primary source, say so.
- **Free fonts first**, with a free stand-in for any commercial typeface.
- **Accessibility isn't optional.** Every component needs a path to WCAG 2.x AA.

Write rules as instructions to an agent ("Use 1px borders at 6–10% white"), not descriptions ("Borders are often thin"). Prefer numbers over adjectives.

## Social preview

`docs/og.png` (also `.github/social-preview.png`) is rendered from `scripts/og.html` with headless Chrome at 1280×640:

```bash
chrome --headless=new --window-size=1280,640 --screenshot=docs/og.png file://$PWD/scripts/og.html
```
