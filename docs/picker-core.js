// Scoring logic shared by the website (docs/index.html), the build script and the
// scenario tests. Pure functions, no dependencies. The same rules are written out for
// agents in skills/design-style-picker/picker.md, so keep the two in sync.

const PAGE_DENSITY = { marketing: 1, store: 2, app: 3, content: 3 };
const ENUMS = {
  page: ["marketing", "app", "content", "store"],
  mode: ["light", "dark", "either"],
  trend: ["current", "any", "retro"],
  effects: ["simple", "rich"],
};

/** Preferences nobody answered stay null and cost nothing: an unknown isn't a "3". */
export const EMPTY_PREFS = { page: "marketing", energy: null, tone: null, edge: null, mode: "either", trend: "any", effects: "simple" };

/** Merge user prefs over an industry's defaults over EMPTY_PREFS, and validate. */
export function resolvePrefs(industry, prefs = {}) {
  const p = { ...EMPTY_PREFS, ...(industry?.defaults || {}) };
  for (const [k, v] of Object.entries(prefs)) if (v !== undefined && v !== null && v !== "") p[k] = v;
  for (const k of ["energy", "tone", "edge"]) {
    if (p[k] === null) continue;
    p[k] = Number(p[k]);
    if (!(p[k] >= 1 && p[k] <= 5)) throw new RangeError(`${k} must be 1–5 or null`);
  }
  for (const [k, allowed] of Object.entries(ENUMS))
    if (!allowed.includes(p[k])) throw new RangeError(`${k} must be one of ${allowed.join(", ")}`);
  return p;
}

/** @returns {"strong"|"works"|"avoid"|"neutral"} */
export function fitOf(industry, styleId) {
  if (industry.strong && styleId in industry.strong) return "strong";
  if (industry.avoid && styleId in industry.avoid) return "avoid";
  if (industry.works && industry.works.includes(styleId)) return "works";
  return "neutral";
}

export function scoreStyle(style, industry, p, cfg) {
  const t = style.traits;
  const fit = fitOf(industry, style.id);
  const notes = [];
  let score = cfg.industry[fit];

  if (fit === "strong") notes.push({ kind: "plus", text: industry.strong[style.id] });
  if (fit === "works") notes.push({ kind: "plus", text: `Works well for ${industry.name.toLowerCase()}` });
  if (fit === "avoid") notes.push({ kind: "minus", text: industry.avoid[style.id] });

  const pageFit = t.pages[p.page];
  score += cfg.page[pageFit];
  if (pageFit === 2) notes.push({ kind: "plus", text: `Made for ${PAGE_LABEL[p.page]}` });
  if (pageFit === 0) notes.push({ kind: "minus", text: `Poor fit for ${PAGE_LABEL[p.page]}` });

  const d = (k) => (p[k] === null ? 0 : Math.abs(t[k] - p[k]));
  const dE = d("energy"), dT = d("tone"), dX = d("edge");
  score -= cfg.perPointEnergy * dE + cfg.perPointTone * dT + cfg.perPointEdge * dX;
  if (p.energy !== null && p.tone !== null && dE === 0 && dT === 0) notes.push({ kind: "plus", text: "Matches the feel and tone you asked for" });
  else if (dE >= 2) notes.push({ kind: "minus", text: t.energy > p.energy ? "Louder than you asked for" : "Quieter than you asked for" });
  else if (dT >= 2) notes.push({ kind: "minus", text: t.tone > p.tone ? "More playful than you asked for" : "More serious than you asked for" });

  if (p.mode !== "either" && t.mode !== "both" && t.mode !== p.mode) {
    score -= cfg.modeMismatch;
    notes.push({ kind: "minus", text: `Native to ${t.mode} pages; needs adapting for ${p.mode}` });
  }

  if (p.trend === "current") score += cfg.trendPerPoint * (t.freshness - 3);
  if (p.trend === "retro") score += cfg.trendPerPoint * (3 - t.freshness);
  if (p.trend === "current" && t.freshness >= 4) notes.push({ kind: "plus", text: "Reads as current today" });
  if (p.trend === "current" && t.freshness <= 1) notes.push({ kind: "minus", text: "Reads as dated today" });

  const shortfall = PAGE_DENSITY[p.page] - t.density;
  if (shortfall > 0) score -= cfg.densityShortfallPerPoint * shortfall;

  const risk = t.a11yRisk - 1;
  score -= cfg.riskPerPoint * risk + (p.effects === "simple" ? cfg.simpleEffectsRiskPerPoint * risk : 0);
  if (t.a11yRisk === 3) notes.push({ kind: "minus", text: "High accessibility risk: apply every fix in its build guide" });

  return { id: style.id, style, fit, score, notes };
}

const PAGE_LABEL = { marketing: "marketing pages", app: "web apps and tools", content: "content-heavy sites", store: "online stores" };

/**
 * Rank everything for an industry and preferences.
 * Returns { prefs, styles, addons }: `styles` are whole visual directions (the pick and
 * runners-up); `addons` are layouts/themes that combine with the pick (Bento, Dark Mode).
 * Styles rated "avoid" for the industry always sort last. `tie` marks a runner-up that
 * scored the same as the pick: present both as equally good.
 */
export function rankStyles(data, industryId, prefs = {}) {
  const industry = data.industries.find((i) => i.id === industryId);
  if (!industry) throw new RangeError(`unknown industry "${industryId}"`);
  const p = resolvePrefs(industry, prefs);
  const all = data.styles
    .map((s) => scoreStyle(s, industry, p, data.scoring))
    .sort((a, b) => (a.fit === "avoid") - (b.fit === "avoid") || b.score - a.score || b.style.year - a.style.year);
  const styles = all.filter((r) => r.style.kind === "style");
  styles.forEach((r, i) => { r.tie = i > 0 && r.score === styles[0].score; });
  const addons = all.filter((r) => {
    if (r.style.kind === "style" || r.fit === "avoid" || r.fit === "neutral") return false;
    if (r.style.traits.pages[p.page] === 0) return false;
    if (r.style.kind === "theme" && p.mode === "light") return false;
    return true;
  });
  return { industry, prefs: p, styles, addons };
}
