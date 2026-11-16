# Style demos

One runnable page per style, each building the same fictional business from [BRIEF.md](BRIEF.md). The build copies every `examples/<year>-<slug>/index.html` to the website at `/demos/<year>-<slug>/`.

## The demo bar

A demo is done when all of these hold. Every deep era must ship a demo (`npm run check` enforces that).

**Content**
- [ ] Every section in BRIEF.md, in order, with the copy verbatim
- [ ] Only generic components and the fictional brand; no real logos, photos or copied layouts
- [ ] No external images; fonts only from Google Fonts with a fallback stack

**Style fidelity**
- [ ] Tokens defined once in `:root`, taken from the era file's *Tokens* block
- [ ] Every rule in the era file's *Textbook rules* visibly applied
- [ ] The era file's *Agent checklist* passes in full

**Works for everyone**
- [ ] Text contrast 4.5:1, UI boundaries 3:1, checked at the worst point (over gradients, glass, images)
- [ ] Visible keyboard focus on every control; the modal traps focus and closes with Esc (`<dialog>` does both)
- [ ] `prefers-reduced-motion` stops non-essential motion
- [ ] The style's own extra media queries where its era file asks (`prefers-reduced-transparency`, `prefers-contrast`, `forced-colors`, `prefers-color-scheme`)
- [ ] Readable at 320px wide with no horizontal scroll

**Verified**
- [ ] Screenshotted at 1440 and 390 wide (headless Chromium on the rig) and reviewed
- [ ] Linked from the era file and from the style table in the README

## Adding a demo

1. Create `examples/<year>-<slug>/index.html`, a single self-contained file.
2. Build the brief, following the era file.
3. `npm run build && npm run check`.
4. Screenshot it and add the image to your PR.
