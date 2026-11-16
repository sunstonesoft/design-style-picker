# Changelog

## Unreleased (0.2.0, "Depth")

- **Four new deep guides**: Neubrutalism, Linear Style, Bento Grid and Liquid Glass, each with sourced recipe tables, layout recipes, performance notes, anti-patterns and computed contrast tables.
- **Shared demo brief**: Kettlefern Coffee Roasters, a fictional roaster every demo builds with the same sections and copy. All ten styles now have a demo (five deep, five basic).
- **Gallery** at `/gallery/`: one business in ten styles, with a side-by-side compare view.
- **Feedback button**: "Not really" under a pick opens a pre-filled industry-fit issue.
- **Picker**: "Why not…?" explains any style outside the top three; shared links carry a model version and say when results were updated since.
- **Data**: JSON Schema for `data/picker.json` (editor validation).
- **CI**: weekly link checker (dead sources open an issue); axe-core accessibility run on every demo in light and dark (`scripts/a11y.mjs`).
- **Fixes**: Linear-style tertiary grey raised to pass AA (the widely copied `#62666d` is 3.45:1); bento switcher selector collision and accent contrast; Liquid Glass accent contrast; the dead Gumroad source now points to an archived copy.

## 0.1.0 (2026-11-16)

First public release.

- **Picker:** 28 industries × 10 styles, with strong / works / avoid ratings and reasons, page-type fit, taste sliders, effect tolerance, base styles vs add-ons (Bento layout, Dark theme), tie handling, and industry defaults where nothing is answered.
- **Website** (GitHub Pages): interactive picker with live style previews, shareable result links, a "copy prompt for your AI agent" button, and a style gallery.
- **Ten style guides**, 2016–2025. 2021 Glassmorphism is written deep, with a sourced recipe table, layout recipes, performance, anti-patterns and a live demo. The other nine are at a basic level.
- **Regression scenarios** (`data/scenarios.json`) plus a check that no single style wins most industries.
- Claude Code plugin manifest, `AGENTS.md` for other agents, `llms.txt`, CI, issue forms.
- Picker model reviewed by GPT-6.1 Sol before release: layouts and themes split from base styles, page type added, "savvy audience" replaced by effect tolerance, several fit ratings corrected.
