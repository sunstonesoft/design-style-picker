# Roadmap

Where Design Style Picker goes from v0.1. The goal stays the same: **anyone, with or without design training, picks the right style for their business, and their AI agent builds it well.**

Everything here is open for discussion. Comment on the linked milestone or open an issue. ✅ = shipped, ◐ = partly shipped. Sizes are rough: **S** about a day, **M** a few days, **L** one to two weeks, **XL** a multi-week project.

---

## North-star outcomes

| Outcome | How we'll know |
|---|---|
| Recommendations people trust | ≥ 80% "this fits" on the website's feedback button. Calibration set agreement ≥ 75% with a designer panel |
| Agents build each style *correctly* | Every style has a demo and an automated audit. Agent-built pages pass the style's checklist ≥ 90% of the time in evals |
| Broad coverage | 25+ styles, 50+ industries, every industry with at least one *strong* base style |
| A living project | 20+ outside contributors, monthly releases, issues answered within a week |
| Discoverable | Top results for "website design style for <industry>" searches; listed in the main agent-skill directories |

---

## Phases at a glance

| Phase | Theme | Headline deliverables |
|---|---|---|
| **v0.2 · Depth** (next) | Make every existing style buildable to a high standard | Deep guides + demos for the 4 most-requested styles; same-brief gallery; feedback button; launch |
| **v0.3 · Coverage** | Fill the obvious holes | 8 new styles (editorial, Swiss, organic, claymorphism, Y2K…), catalogue beyond one-per-year, sub-industries |
| **v0.4 · Tooling** | From Markdown to tools | Token packages (CSS, Tailwind, shadcn, DTCG), CLI, MCP server, automated style audit |
| **v0.5 · Trust** | Prove the picks are right | Calibration dataset, designer panel, agent build evals, confidence scores |
| **v1.0 · Platform** | The default reference for "which style?" | Per-style and per-industry pages, style detector, Figma/VS Code integrations, annual data report |
| **Beyond** | Moonshots | Data-backed design history from HTTP Archive, style transfer, brand-aware picking |

---

## 1. Content depth: every style buildable to a high standard

Today only 2021 Glassmorphism is deep. The rest give an agent enough to start, not to excel.

| # | Item | Size | Phase |
|---|---|---|---|
| 1.1 ◐ | **Deep guides, in priority order** (Neubrutalism, Linear, Bento, Liquid Glass done) (most picked and most requested first): Neubrutalism → Linear Style → Bento Grid → Liquid Glass → Dark Mode → Material Design → Gradients & Flat 2.0 → Brutalism → Neumorphism | L each | v0.2–v0.4 |
| 1.2 ✅ | **A live demo per style**, at the same bar as the glassmorphism demo: nav, hero, cards, form, pricing, modal, plus mobile | M each | with 1.1 |
| 1.3 ✅ | **Same-brief gallery:** one fictional business (e.g. a coffee roaster) built in all ten styles, side by side, so people see the difference instantly. Also great launch imagery | L | v0.2 |
| 1.4 ✅ | **"Recipe in numbers" tables** for every style, saying where each value comes from (as glassmorphism has) | S each | with 1.1 |
| 1.5 | **Page-type recipes** per style: marketing, app shell, docs/content, store. A style's rules for a dashboard differ from its landing page | M each | v0.3 |
| 1.6 | **Dark *and* light variants** documented for every base style, since Dark Mode is now an add-on | S each | v0.3 |
| 1.7 | **Motion specs** per style: durations, easing, what moves and what never moves, reduced-motion fallbacks | S each | v0.3 |
| 1.8 | **Imagery and illustration direction** per style: photo treatment, illustration style, icon sets (open-licence picks) | S each | v0.3 |
| 1.9 | **Copywriting tone** per style: headline length, voice, CTA wording (neubrutalism shouts, Linear understates) | S each | v0.4 |
| 1.10 | **"Common agent failures" section** per style, built from real eval runs (see 5.4): what models get wrong and how to prevent it | S each | v0.5 |

---

## 2. Coverage: styles and industries we're missing

### 2a. New styles

The picker already admits gaps: luxury and wellness have no strong base style. Candidates, roughly by demand:

| Style | Why it matters | Size |
|---|---|---|
| **Editorial / classic serif** | Luxury, law, publishing, wellness: currently unserved | L |
| **Swiss / International minimalism** | Timeless, accessible, design-literate brands | L |
| **Warm organic & illustrated** | Wellness, food, kids, sustainability, "human" brands | L |
| **Claymorphism** | The 2021–22 neumorphism offshoot, popular for apps and kids | M |
| **Y2K / Frutiger Aero revival** | Gen-Z consumer, music, fashion | M |
| **Aurora / mesh gradients** | The AI-startup look of 2023–25 | M |
| **Maximalism / dopamine design** | Bold consumer brands, events | M |
| **Tactile / "anti-AI" handmade** | The 2026 counter-trend candidate | M |
| **3D & WebGL immersive** | Product launches, agencies, hardware | L |
| **Kinetic typography** | Agencies, events, music | M |
| **Retro terminal / mono** | Dev tools, indie hackers | S |
| **Skeuomorphism (2007–13)** and **Flat Design (2013–15)** | Completes the history before 2016; retro requests | M each |
| **Scandinavian / soft minimal** | Furniture, interiors, wellness | M |
| **Corporate Memphis** as its own entry | Currently folded into 2018 | S |
| **2026 era** | Once one style clearly dominates (see the timeline's watch list) | L |

### 2b. Data model changes needed first

| # | Item | Size |
|---|---|---|
| 2.1 | **Separate "era" from "catalogue".** Keep one *defining* style per year for the history view, but allow any number of catalogue styles per year. The validator's one-per-year rule must go (flagged in the Sol review) | M |
| 2.2 | **More `kind`s:** `style`, `layout` (bento, split-screen, single-column story), `theme` (dark, high-contrast), `effect` (glass, grain, glow), so picks compose cleanly: *base + layout + theme + accent effect* | M |
| 2.3 | **Trait ranges instead of points.** Neubrutalism can be "energy 4–5", Bento "2–4", so variants don't get unfairly penalised | M |
| 2.4 ✅ | **JSON Schema** for `picker.json` and the era frontmatter, validated in CI and usable by editors | S |
| 2.5 | **Style variants** (e.g. Brutalism: *raw-honest* vs *expressive*; Material: *M1 period* vs *modernised*) with separate traits | M |

### 2c. Industries

| # | Item | Size |
|---|---|---|
| 2.6 ✅ | **Split broad industries:** gaming → cozy/indie vs competitive/esports; fintech → consumer banking vs trading vs infrastructure; healthcare → clinic vs medtech vs pharma; e-commerce → fashion vs grocery vs marketplace | M |
| 2.7 ◐ | **Add industries:** (fitness, beauty salons, pets, photography, open source, cybersecurity done) architecture & interiors, automotive, beauty salons, sports & fitness, pets, legal tech, insurance, HR & recruiting, agriculture, energy & climate, religious organisations, weddings, photography, construction, cybersecurity, AI agents & LLM tools, open-source projects, personal portfolios for developers | M |
| 2.8 | **Regional and cultural notes:** colour meaning, density preferences (e.g. denser layouts common in East Asian markets), RTL support per style | L |
| 2.9 | **Audience modifiers:** seniors, children, B2B buyers, enterprise procurement, developers. These shift weights rather than acting as industries | M |

---

## 3. Picker intelligence

| # | Item | Size | Phase |
|---|---|---|---|
| 3.1 ✅ | **"Was this right?" feedback** on the website, opening a pre-filled GitHub issue with the brief and result. No tracking, no backend | S | v0.2 |
| 3.2 | **Hard constraints vs preferences.** "Must be light", "must work on old Android phones" as filters, not weights | M | v0.3 |
| 3.3 | **"Which matters most?"** Let users mark one answer as most important and weight it double | S | v0.3 |
| 3.4 | **Brand-aware picking.** Input existing brand colours, fonts and logo style, then flag styles that clash and adapt tokens to the brand | L | v0.4 |
| 3.5 ✅ | **Explain "why not X"** for any style, not just the top three | S | v0.3 |
| 3.6 | **Confidence and abstain.** Show "clear winner", "close call" or "no great fit, here's the nearest", with the reasons | M | v0.5 |
| 3.7 | **Composition output:** a full recipe (base style + layout + theme + effect + type pairing + palette starter), not just a name | M | v0.4 |
| 3.8 | **Conversational mode for agents:** a short question script that adapts (skips what's known from the repo: existing CSS, `tailwind.config`, brand assets) | M | v0.3 |
| 3.9 | **Codebase sniffing:** detect the current style of an existing project and recommend *evolution*, not replacement | L | v0.5 |
| 3.10 ✅ | **Versioned scoring.** Encode the model version in shared links so old links keep their result after weights change | S | v0.3 |
| 3.11 | **Learned weights:** fit weights to the calibration set (5.1) instead of hand-tuning, while keeping them readable | L | v1.0 |

---

## 4. Tooling: from Markdown to things agents can execute

| # | Item | Size | Phase |
|---|---|---|---|
| 4.1 | **Token packages per style:** CSS custom properties, a Tailwind v4 theme, a shadcn/ui theme, and W3C DTCG `tokens.json` (usable in Figma via Tokens Studio) | L | v0.4 |
| 4.2 | **Component kits per style:** plain HTML/CSS first, then React (shadcn-compatible), then Vue and Svelte. Button, card, nav, form, modal, pricing, hero | XL | v0.4–v1.0 |
| 4.3 | **CLI:** `npx design-style-picker pick` (interactive), `… apply <style>` (writes tokens into a project), `… audit <url\|path>` | L | v0.4 |
| 4.4 | **MCP server:** `pick_style(brief)`, `get_style_guide(id, section)`, `get_tokens(id, format)`, `audit_page(url, style)`, so any MCP-capable agent can use it without cloning the repo | M | v0.4 |
| 4.5 | **Automated style audit:** Playwright + axe-core + style-signature checks (e.g. glass: count of backdrop-filter layers, text contrast at the worst background point; neubrutalism: zero-blur shadows match the border colour) producing a scored report | XL | v0.5 |
| 4.6 | **Starter templates:** one-command landing-page starters per style (Astro / Next.js), built from the component kits | L | v1.0 |
| 4.7 | **Package registries:** publish tokens to npm; list the plugin in the Claude Code marketplaces, skills.sh, Tessl, vibeindex, and the Cursor rule directories | M | v0.4 |
| 4.8 | **Editor integrations:** a VS Code extension (pick and insert tokens, run the audit) and a Figma plugin (apply style tokens to a frame, export DTCG) | XL | Beyond |

---

## 5. Trust: proving the recommendations and guides are right

| # | Item | Size | Phase |
|---|---|---|---|
| 5.1 | **Calibration dataset:** 150+ realistic briefs (industry, page, taste, constraints) with the style a panel of designers would pick. Published as data, used in CI | L | v0.5 |
| 5.2 | **Designer panel:** 5–10 volunteer designers vote on briefs and review deep guides. Credited in the README | M (ongoing) | v0.5 |
| 5.3 | **Source audit:** every era file's dates and values traced to a primary source or an archived snapshot (Wayback links). Fix every "unverified" note | L | v0.3 |
| 5.4 | **Agent build evals:** the same brief and style handed to several agents (Claude, GPT, Gemini), with output scored by the automated audit (4.5) and human review. Publish a results table per style | XL | v0.5 |
| 5.5 | **Skill evals with `claude plugin eval`:** does the skill trigger on the right prompts, and does it ask at most three questions | M | v0.4 |
| 5.6 ✅ | **Accessibility CI for demos:** axe-core on every demo page, failing on violations. Contrast checks in light, dark, reduced-transparency and forced-colours modes | M | v0.3 |
| 5.7 | **Visual regression for demos and site** (Playwright screenshots on the rig) | M | v0.3 |
| 5.8 ✅ | **Link checker** in CI for all sources (archived fallbacks for dead links) | S | v0.2 |
| 5.9 | **Peer review rule:** changes to industry ratings need a reason plus a scenario; changes to weights need a calibration run | S | v0.3 |

---

## 6. Website: from picker to destination

| # | Item | Size | Phase |
|---|---|---|---|
| 6.1 | **Per-style pages** generated from the era files: history, rules, live demo, tokens with copy buttons, "great for / avoid for", agent prompt | L | v0.3 |
| 6.2 | **Per-industry pages:** "Best website design styles for dental clinics" with the picks, reasons, avoid list and a pre-filled picker. Real advice, not keyword pages | L | v0.3 |
| 6.3 | **Compare view:** any two styles side by side, using the same brief, traits and trade-offs | M | v0.4 |
| 6.4 | **Token playground:** tweak a style's tokens live (colours, radius, blur) and export CSS, Tailwind or DTCG | L | v0.4 |
| 6.5 | **Interactive timeline** 2007 → today, with the lineage graph and the style each grew out of | M | v0.4 |
| 6.6 | **Per-result share images:** pre-rendered OG images for every industry × top-pick, so shared links show the pick | M | v0.3 |
| 6.7 | **Site dark mode and i18n**, starting with the languages contributors offer (Spanish, Portuguese, German, Ukrainian, Japanese) | L | v1.0 |
| 6.8 | **"Show and tell" gallery** of real sites built with the picker (opt-in, moderated) | M | v0.4 |
| 6.9 | **Privacy-respecting usage stats** (no cookies; aggregate counts only), or none at all. Decide in a public discussion | S | v0.3 |

---

## 7. Community and growth

| # | Item | Size | Phase |
|---|---|---|---|
| 7.1 | **Launch:** Show HN (lead with transparent scoring and its limits), r/webdev, r/web_design, r/ClaudeAI, r/cursor, X/Bluesky/LinkedIn threads with the social card, Product Hunt once the gallery (1.3) exists | M | v0.2 |
| 7.2 | **Newsletters:** pitch Smashing, CSS Weekly, Frontend Focus, TLDR Design, Sidebar, UX Collective. Lead with a different hook each: the history angle, the agent angle, the industry angle | S | v0.2 |
| 7.3 | **Awesome lists and directories:** PRs to awesome-claude-code, awesome-design-systems, awesome-css and the agent-skill registries | S | v0.2 |
| 7.4 | **Good first issues** always open: one fact fix, one industry rating, one demo section, one scenario | S (ongoing) | v0.2 |
| 7.5 | **Monthly release cadence** with a short changelog post ("new: claymorphism; changed: fintech picks") | S (ongoing) | v0.2 |
| 7.6 | **"Style of the month" deep dives:** one long-form post and a short video per deep guide, made with the content studio | M each | v0.3 |
| 7.7 | **Contributor ladder:** contributor → style maintainer (owns one style's guide and demo) → core reviewer | S | v0.4 |
| 7.8 | **Translations of guides** by community maintainers | L (ongoing) | v1.0 |
| 7.9 | **Talks and workshops:** "Picking a design style with AI agents", for local meetups and design or dev conferences | M | Beyond |
| 7.10 | **Sponsorship:** GitHub Sponsors once there's a maintainer team. Funds go to designer-panel honoraria and demo work | S | Beyond |

---

## 8. Research and data (the moat)

| # | Item | Size | Phase |
|---|---|---|---|
| 8.1 | **Data-backed timeline from HTTP Archive:** query real CSS usage across millions of sites per year (`backdrop-filter`, `prefers-color-scheme`, zero-blur offset shadows, grid areas, `background-clip: text`) to chart when each style *actually* spread, beyond what articles said | XL | Beyond |
| 8.2 | **Style detector:** paste a URL, get which style(s) it uses and how faithfully, using CSS signatures plus a screenshot classifier | XL | v1.0 |
| 8.3 | **Annual "State of Web Design Styles" report**, built from 8.1 and 8.2 plus picker feedback. A yearly launch moment | L (yearly) | v1.0 |
| 8.4 | **Industry reality check:** sample top sites per industry and measure which styles they really use, then compare with our ratings and publish the differences | L | v1.0 |
| 8.5 | **Accessibility outcomes per style:** measure the real contrast and axe failure rates of sites in each style, so "a11y risk" is data, not opinion | L | Beyond |

---

## 9. Moonshots

- **Style transfer:** "rebuild this page in neubrutalism", with an agent workflow that maps components and tokens from one style to another and verifies the result with the audit.
- **Brand-to-style:** upload a logo and a few brand photos, get the styles that fit them, with tokens derived from the brand.
- **Trend radar:** spot the next dominant style early from Dribbble, Awwwards, GitHub and HTTP Archive signals, and add it to the 2026+ watch list with evidence.
- **Live A/B advisor:** for sites with analytics, suggest a style experiment and measure it (opt-in, the user's own data).
- **Design-literacy course:** "Ten years of web design in ten lessons", free, built from the era guides and demos.

---

## Explicitly not planned

- **A paid tier or sign-up.** The picker stays free, static and account-less.
- **Copying real sites** as examples or templates. Generic, original components only.
- **Tracking users.** Any stats will be aggregate and cookie-free, decided in the open.
- **Ranking styles as "good" or "bad" in general.** Fit depends on context, which is the whole point.

---

## How to help with the roadmap

1. Pick an item and comment on its issue (or open one, referencing the number here, e.g. "Roadmap 2.6").
2. For content items, follow [CONTRIBUTING.md](CONTRIBUTING.md). For data items, add a scenario.
3. Propose new items in [Discussions → Ideas](https://github.com/sunstonesoft/design-style-picker/discussions/categories/ideas).
