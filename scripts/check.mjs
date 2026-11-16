#!/usr/bin/env node
// Validates every era file: frontmatter keys, required sections, source links,
// and that the era is listed in SKILL.md and timeline.md. No dependencies.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = join(root, "skills", "design-style-picker");
const erasDir = join(skillDir, "eras");

const REQUIRED_KEYS = ["year", "style", "slug", "era", "peak", "depth"];
const REQUIRED_SECTIONS = [
  "Snapshot",
  "Origin & timeline",
  "Textbook rules",
  "Tokens",
  "Components",
  "Do / Don't",
  "Accessibility",
  "Agent checklist",
  "Sources",
];
const DEEP_EXTRA_SECTIONS = ["Layout recipes", "Performance", "Anti-patterns"];
const MIN_SOURCES = { basic: 3, deep: 8 };

const skill = readFileSync(join(skillDir, "SKILL.md"), "utf8");
const timeline = readFileSync(join(skillDir, "timeline.md"), "utf8");

const errors = [];
const files = readdirSync(erasDir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
const years = new Set();

for (const file of files) {
  const text = readFileSync(join(erasDir, file), "utf8").replace(/\r\n/g, "\n");
  const where = `eras/${file}`;
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) {
    errors.push(`${where}: missing frontmatter`);
    continue;
  }
  const meta = Object.fromEntries(
    fm[1]
      .split("\n")
      .map((l) => l.replace(/\s+#.*$/, ""))
      .filter((l) => l.includes(":"))
      .map((l) => [l.slice(0, l.indexOf(":")).trim(), l.slice(l.indexOf(":") + 1).trim()]),
  );
  for (const k of REQUIRED_KEYS) if (!meta[k]) errors.push(`${where}: frontmatter missing "${k}"`);

  const depth = meta.depth === "deep" ? "deep" : "basic";
  if (!file.startsWith(`${meta.year}-${meta.slug}`))
    errors.push(`${where}: file name should be ${meta.year}-${meta.slug}.md`);
  if (years.has(meta.year)) errors.push(`${where}: year ${meta.year} already has a dominant style`);
  years.add(meta.year);

  const headings = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  const needed = depth === "deep" ? [...REQUIRED_SECTIONS, ...DEEP_EXTRA_SECTIONS] : REQUIRED_SECTIONS;
  for (const s of needed) if (!headings.includes(s)) errors.push(`${where}: missing section "## ${s}"`);

  const sources = text.split(/^## Sources$/m)[1] ?? "";
  const links = sources.match(/\]\(https?:\/\/[^)]+\)/g) ?? [];
  if (links.length < MIN_SOURCES[depth])
    errors.push(`${where}: ${links.length} source links, need at least ${MIN_SOURCES[depth]} for a ${depth} era`);

  const ref = `eras/${file}`;
  if (!skill.includes(ref)) errors.push(`SKILL.md: does not link ${ref}`);
  if (!timeline.includes(ref)) errors.push(`timeline.md: does not link ${ref}`);

  for (const m of text.matchAll(/\]\((\.\.?\/[^)#]+)\)/g)) {
    if (!existsSync(join(erasDir, m[1]))) errors.push(`${where}: broken relative link ${m[1]}`);
  }
}

// ── picker data ───────────────────────────────────────────────────
const data = JSON.parse(readFileSync(join(root, "data", "picker.json"), "utf8"));
const styleIds = new Set(data.styles.map((s) => s.id));
const eraFiles = new Set(files.map((f) => `eras/${f}`));
for (const s of data.styles) {
  if (!eraFiles.has(s.file)) errors.push(`picker.json: style ${s.id} points to missing ${s.file}`);
  for (const k of ["energy", "tone", "edge", "freshness"])
    if (!(s.traits[k] >= 1 && s.traits[k] <= 5)) errors.push(`picker.json: ${s.id}.${k} must be 1–5`);
  for (const k of ["density", "a11yRisk"])
    if (!(s.traits[k] >= 1 && s.traits[k] <= 3)) errors.push(`picker.json: ${s.id}.${k} must be 1–3`);
  if (!["light", "dark", "both"].includes(s.traits.mode)) errors.push(`picker.json: ${s.id}.mode must be light|dark|both`);
}
for (const f of eraFiles)
  if (!data.styles.some((s) => s.file === f)) errors.push(`picker.json: era ${f} has no style entry`);
for (const ind of data.industries) {
  const seen = new Set();
  const refs = [...Object.keys(ind.strong || {}), ...(ind.works || []), ...Object.keys(ind.avoid || {})];
  for (const id of refs) {
    if (!styleIds.has(id)) errors.push(`picker.json: industry ${ind.id} references unknown style ${id}`);
    if (seen.has(id)) errors.push(`picker.json: industry ${ind.id} rates ${id} twice`);
    seen.add(id);
  }
  const baseOk = [...Object.keys(ind.strong || {}), ...(ind.works || [])].some(
    (id) => data.styles.find((s) => s.id === id)?.kind === "style",
  );
  if (!baseOk) errors.push(`picker.json: industry ${ind.id} has no strong/works base style`);
  if (!ind.defaults) errors.push(`picker.json: industry ${ind.id} needs defaults`);
  else {
    for (const k of ["energy", "tone", "edge"])
      if (!(ind.defaults[k] >= 1 && ind.defaults[k] <= 5)) errors.push(`picker.json: ${ind.id}.defaults.${k} must be 1–5`);
    if (!["marketing", "app", "content", "store"].includes(ind.defaults.page))
      errors.push(`picker.json: ${ind.id}.defaults.page must be marketing|app|content|store`);
  }
}
for (const s of data.styles) {
  if (!["style", "layout", "theme"].includes(s.kind)) errors.push(`picker.json: ${s.id}.kind must be style|layout|theme`);
  for (const pg of ["marketing", "app", "content", "store"])
    if (![0, 1, 2].includes(s.traits.pages?.[pg])) errors.push(`picker.json: ${s.id}.pages.${pg} must be 0|1|2`);
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join("\n"));
  console.error(`\n${errors.length} problem(s) in ${files.length} era file(s).`);
  process.exit(1);
}
console.log(`✓ ${files.length} era files OK (${[...years].sort().join(", ")})`);
