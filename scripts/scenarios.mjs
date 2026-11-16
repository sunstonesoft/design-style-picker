#!/usr/bin/env node
// Runs the regression briefs in data/scenarios.json against the real scorer,
// then prints how the default picks spread across industries (to catch one
// style quietly winning everything again).
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rankStyles } from "../docs/picker-core.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(root, "data", "picker.json"), "utf8"));
const { scenarios } = JSON.parse(readFileSync(join(root, "data", "scenarios.json"), "utf8"));
const fails = [];

for (const sc of scenarios) {
  const industries = sc.industry === "*" ? data.industries.map((i) => i.id) : [sc.industry];
  for (const ind of industries) {
    const r = rankStyles(data, ind, sc.prefs);
    const top = r.styles[0];
    const label = `${sc.name}${sc.industry === "*" ? ` [${ind}]` : ""}`;
    const got = `${top.id} (${top.score})`;
    if (sc.expectTop && top.id !== sc.expectTop) fails.push(`${label}: expected ${sc.expectTop}, got ${got}`);
    if (sc.expectTopOneOf && !sc.expectTopOneOf.includes(top.id))
      fails.push(`${label}: expected one of ${sc.expectTopOneOf.join("/")}, got ${got}`);
    if (sc.expectKindOfTop && top.style.kind !== sc.expectKindOfTop)
      fails.push(`${label}: top pick ${top.id} is a ${top.style.kind}, expected a ${sc.expectKindOfTop}`);
    if (sc.expectAddon && !r.addons.some((a) => a.id === sc.expectAddon))
      fails.push(`${label}: expected add-on ${sc.expectAddon}, got ${r.addons.map((a) => a.id).join(", ") || "none"}`);
    for (const id of sc.expectNotIn || [])
      if (r.styles.slice(0, 3).some((s) => s.id === id)) fails.push(`${label}: ${id} must not be in the top 3`);
  }
}

// Spread of default picks: no single style should win most industries.
const spread = {};
for (const ind of data.industries) {
  const top = rankStyles(data, ind.id, {}).styles[0].id;
  spread[top] = (spread[top] || 0) + 1;
}
const max = Math.max(...Object.values(spread));
if (max > Math.ceil(data.industries.length * 0.4))
  fails.push(`one style wins ${max}/${data.industries.length} industries on defaults: ${JSON.stringify(spread)}`);

if (fails.length) {
  console.error(fails.map((f) => `✗ ${f}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${scenarios.length} scenarios pass · default picks: ${Object.entries(spread).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(", ")}`);
