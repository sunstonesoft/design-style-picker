#!/usr/bin/env node
// Runs axe-core on every demo in light and dark, with reduced motion, and fails on any
// serious/critical violation or any colour-contrast failure.
// Not part of `npm run check` (needs a browser). CI installs the tools on the fly:
//   npm i --no-save playwright axe-core && npx playwright install chromium && node scripts/a11y.mjs
// Locally you can point it at an existing Chromium: CHROME_PATH=/path/to/chrome node scripts/a11y.mjs
import { readFileSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const root = join(dirname(fileURLToPath(import.meta.url)), "..", "skills", "design-style-picker", "examples");

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
  args: ["--no-sandbox"],
});
let failures = 0;
for (const dir of readdirSync(root).filter((d) => /^\d{4}-/.test(d)).sort()) {
  for (const colorScheme of ["light", "dark"]) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, colorScheme, reducedMotion: "reduce" });
    await page.goto(pathToFileURL(join(root, dir, "index.html")).href);
    await page.waitForTimeout(600);
    await page.addScriptTag({ content: axeSource });
    const result = await page.evaluate(() => window.axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"] }));
    const bad = result.violations.filter((v) => v.impact === "serious" || v.impact === "critical" || v.id === "color-contrast");
    const label = `${dir} [${colorScheme}]`;
    if (!bad.length) console.log(`✓ ${label}`);
    for (const v of bad) {
      failures++;
      const where = v.nodes.slice(0, 3).map((n) => {
        const d = n.any[0]?.data;
        return n.target.join(" ") + (d?.contrastRatio ? ` (${d.contrastRatio}:1, ${d.fgColor} on ${d.bgColor})` : "");
      });
      console.error(`✗ ${label} ${v.id} (${v.impact}) ×${v.nodes.length}: ${where.join(" | ")}`);
    }
    await page.close();
  }
}
await browser.close();
if (failures) process.exit(1);
