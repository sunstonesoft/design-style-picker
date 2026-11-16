#!/usr/bin/env node
// Generates the picker outputs from data/picker.json:
//   1. the matrix + per-industry sections of skills/design-style-picker/picker.md
//   2. docs/picker-data.js (data for the website)
//   3. docs/demos/* (copies of the era demos so GitHub Pages can host them)
// `node scripts/build.mjs --check` fails if any output is out of date.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rankStyles } from "../docs/picker-core.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");
const data = JSON.parse(readFileSync(join(root, "data", "picker.json"), "utf8"));
const byId = Object.fromEntries(data.styles.map((s) => [s.id, s]));
const stale = [];

function emit(path, content) {
  const full = join(root, path);
  const current = existsSync(full) ? readFileSync(full, "utf8").replace(/\r\n/g, "\n") : null;
  if (current === content) return;
  if (CHECK) stale.push(path);
  else {
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content);
    console.log(`wrote ${path}`);
  }
}

// ── 1. picker.md generated section ────────────────────────────────
const SYMBOL = { strong: "★", works: "✓", avoid: "✕", neutral: "·" };
const fit = (ind, id) =>
  id in (ind.strong || {}) ? "strong" : id in (ind.avoid || {}) ? "avoid" : (ind.works || []).includes(id) ? "works" : "neutral";
const link = (s) => `[${s.name}](${s.file})`;

let gen = "";
gen += "## Industry fit matrix\n\n";
gen += "★ strong fit · ✓ works · · neutral · ✕ avoid. Column headers are the era year; the names are in the table below it.\n\n";
gen += `| Industry | ${data.styles.map((s) => s.year).join(" | ")} |\n`;
gen += `|---|${data.styles.map(() => ":-:").join("|")}|\n`;
for (const ind of data.industries) gen += `| ${ind.name} | ${data.styles.map((s) => SYMBOL[fit(ind, s.id)]).join(" | ")} |\n`;
gen += "\n## Style traits\n\n";
gen += "| Year | Style | Kind | Feel | Tone | Edge | Fresh | Density | A11y risk | Native mode | Marketing | App | Content | Store |\n";
gen += "|---|---|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|\n";
for (const s of data.styles) {
  const t = s.traits;
  gen += `| ${s.year} | ${link(s)} | ${s.kind} | ${t.energy} | ${t.tone} | ${t.edge} | ${t.freshness} | ${t.density} | ${t.a11yRisk} | ${t.mode} | ${t.pages.marketing} | ${t.pages.app} | ${t.pages.content} | ${t.pages.store} |\n`;
}
gen += "\nScales: feel 1 calm → 5 bold · tone 1 serious → 5 playful · edge 1 safe → 5 edgy · fresh 1 dated → 5 current · density 1 showcase → 3 content-heavy · a11y risk 1 low → 3 high · page columns 0 poor, 1 usable, 2 great. *Kind:* `style` competes for the main pick; `layout` and `theme` are add-ons combined with it.\n\n";

gen += "## Recommendations by industry\n\n";
for (const ind of data.industries) {
  const ranked = rankStyles(data, ind.id, {});
  const top = ranked.styles[0];
  const d = ind.defaults;
  gen += `### ${ind.name}\n\n`;
  gen += `*Defaults:* ${d.page} site · feel ${d.energy} · tone ${d.tone} · edge ${d.edge}\n\n`;
  if (Object.keys(ind.strong).length) {
    gen += "**Best fits**\n";
    for (const [id, why] of Object.entries(ind.strong)) gen += `- ${link(byId[id])}: ${why}\n`;
  } else gen += "**Best fits:** none of the ten styles is a clear fit yet (see *When nothing fits well*).\n";
  if (ind.works?.length) gen += `\n**Also works:** ${ind.works.map((id) => link(byId[id])).join(", ")}\n`;
  if (ind.avoid && Object.keys(ind.avoid).length) {
    gen += "\n**Avoid**\n";
    for (const [id, why] of Object.entries(ind.avoid)) gen += `- ${link(byId[id])}: ${why}\n`;
  }
  const addons = ranked.addons.map((a) => a.style.name);
  gen += `\n*Pick with these defaults:* **${top.style.name}**${addons.length ? ` + ${addons.join(" + ")}` : ""}\n\n`;
}

const pickerPath = "skills/design-style-picker/picker.md";
const BEGIN = "<!-- BEGIN GENERATED: npm run build -->";
const END = "<!-- END GENERATED -->";
const pickerSrc = readFileSync(join(root, pickerPath), "utf8").replace(/\r\n/g, "\n");
const a = pickerSrc.indexOf(BEGIN);
const b = pickerSrc.indexOf(END);
if (a < 0 || b < 0) throw new Error(`${pickerPath} is missing the generated-section markers`);
emit(pickerPath, `${pickerSrc.slice(0, a + BEGIN.length)}\n\n${gen}${pickerSrc.slice(b)}`);

// ── 2. website data ───────────────────────────────────────────────
emit(
  "docs/picker-data.js",
  `// Generated from data/picker.json by scripts/build.mjs. Do not edit by hand.\nexport default ${JSON.stringify(data, null, 2)};\n`,
);

// ── 3. demos for GitHub Pages ─────────────────────────────────────
const exDir = join(root, "skills/design-style-picker/examples");
for (const name of readdirSync(exDir)) {
  const src = join(exDir, name, "index.html");
  if (!existsSync(src)) continue;
  emit(`docs/demos/${name}/index.html`, readFileSync(src, "utf8").replace(/\r\n/g, "\n"));
}

if (CHECK && stale.length) {
  console.error(`✗ generated files are out of date (run npm run build):\n  ${stale.join("\n  ")}`);
  process.exit(1);
}
if (CHECK) console.log("✓ generated files up to date");
