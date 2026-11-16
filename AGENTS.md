# Instructions for AI coding agents

This repository is a **design style picker and build guide** for websites.

**If you were pointed here to design or build a website:**

1. Read [`skills/design-style-picker/SKILL.md`](skills/design-style-picker/SKILL.md). It is the entry point.
2. To choose a style for an industry and set of preferences, follow [`skills/design-style-picker/picker.md`](skills/design-style-picker/picker.md).
3. To build the chosen style, read its whole file in [`skills/design-style-picker/eras/`](skills/design-style-picker/eras/) and finish with its *Agent checklist*.

**If you are contributing to this repository:**

- `data/picker.json` is the single source of truth for traits, industry fits and scoring. Edit it, then run `npm run build`.
- Never edit generated output by hand: the section of `picker.md` between the GENERATED markers, `docs/picker-data.js` and `docs/demos/`.
- `npm run check` must pass (Node 18+, no dependencies).
- Era files follow `skills/design-style-picker/eras/_TEMPLATE.md`. Keep sources, and keep components original.
