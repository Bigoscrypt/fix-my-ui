#!/usr/bin/env node
// Multi-width screenshots plus automatic UX checks.
//   npx playwright install chromium   (once)
//   node scripts/audit.mjs <url> [more urls...] [--out ux-audit] [--dark]
// Writes <out>/<page>-<width>.png and <out>/report.md. Exit code 1 when any check fails.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const urls = args.filter(a => /^https?:\/\//.test(a));
const out = args.includes('--out') ? args[args.indexOf('--out') + 1] : 'ux-audit';
const dark = args.includes('--dark');
const WIDTHS = [360, 390, 768, 1280];
if (!urls.length) { console.error('usage: node scripts/audit.mjs <url> [url...] [--out dir] [--dark]'); process.exit(2); }
fs.mkdirSync(out, { recursive: true });

// Playwright's own Chromium, else the installed Google Chrome
const browser = await chromium.launch().catch(() => chromium.launch({ channel: 'chrome' }));
const lines = [`# UX audit (automatic checks)\n`, `Generated ${new Date().toISOString()} · widths ${WIDTHS.join(', ')} · ${dark ? 'dark' : 'light'}\n`];
let failed = 0;

for (const url of urls) {
  const slug = url.replace(/^https?:\/\//, '').replace(/[^a-z0-9]+/gi, '-').replace(/-+$/, '').slice(0, 60) || 'page';
  lines.push(`\n## ${url}\n`);
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w < 800 ? 800 : 900 }, colorScheme: dark ? 'dark' : 'light', deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => errors.push('load: ' + e.message));
    await page.waitForTimeout(800);
    const file = path.join(out, `${slug}-${w}.png`);
    await page.screenshot({ path: file, fullPage: true });

    const r = await page.evaluate(() => {
      const vis = el => { const s = getComputedStyle(el); const b = el.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0 && b.width > 0 && b.height > 0; };
      const name = el => (el.innerText || el.getAttribute('aria-label') || el.getAttribute('alt') || el.tagName).trim().replace(/\s+/g, ' ').slice(0, 40);
      const overflowX = document.documentElement.scrollWidth - window.innerWidth;
      const smallTargets = [...document.querySelectorAll('a,button,[role=button],input,select,textarea,[onclick]')]
        .filter(vis).filter(el => { const b = el.getBoundingClientRect(); return b.width < 44 || b.height < 44; })
        .filter(el => !(el.tagName === 'A' && getComputedStyle(el).display === 'inline'))   // inline text links are fine
        .map(name);
      const noAlt = [...document.querySelectorAll('img')].filter(vis).filter(i => !i.hasAttribute('alt')).map(i => i.src.split('/').pop().slice(0, 40));
      const clipped = [...document.querySelectorAll('h1,h2,h3,h4,p,span,a,button,li,label')].filter(vis)
        .filter(el => { const s = getComputedStyle(el); return (s.overflow === 'hidden' || s.textOverflow === 'ellipsis' || s.overflowX === 'hidden') && el.scrollWidth > el.clientWidth + 1 && s.textOverflow !== 'ellipsis'; })
        .map(name);
      const unlabelled = [...document.querySelectorAll('input,select,textarea')].filter(vis)
        .filter(el => el.type !== 'hidden' && !el.labels?.length && !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')).map(el => el.name || el.type);
      const iconButtons = [...document.querySelectorAll('button,a')].filter(vis)
        .filter(el => !el.innerText.trim() && !el.getAttribute('aria-label') && !el.getAttribute('title')).length;
      const tinyText = [...document.querySelectorAll('p,li,span,a,button,label,td')].filter(vis)
        .filter(el => el.childElementCount === 0 && el.innerText.trim().length > 20 && parseFloat(getComputedStyle(el).fontSize) < 14).length;
      return { overflowX, smallTargets, noAlt, clipped, unlabelled, iconButtons, tinyText, h1: document.querySelectorAll('h1').length, title: document.title };
    });
    await ctx.close();

    const issues = [];
    if (r.overflowX > 1) issues.push(`scrolls sideways by ${r.overflowX}px`);
    if (r.smallTargets.length) issues.push(`${r.smallTargets.length} tap targets under 44px (${r.smallTargets.slice(0, 5).join(' | ')})`);
    if (r.noAlt.length) issues.push(`${r.noAlt.length} images without alt (${r.noAlt.slice(0, 3).join(', ')})`);
    if (r.clipped.length) issues.push(`${r.clipped.length} elements with clipped text (${r.clipped.slice(0, 3).join(' | ')})`);
    if (r.unlabelled.length) issues.push(`${r.unlabelled.length} form fields without a label`);
    if (r.iconButtons) issues.push(`${r.iconButtons} icon-only buttons/links without aria-label`);
    if (w <= 390 && r.tinyText) issues.push(`${r.tinyText} text blocks under 14px on mobile`);
    if (r.h1 !== 1) issues.push(`${r.h1} <h1> elements (want 1)`);
    if (!r.title) issues.push('no <title>');
    if (errors.length) issues.push(`JS errors: ${errors.slice(0, 2).join(' / ')}`);
    failed += issues.length;
    lines.push(`- **${w}px** ${issues.length ? '' : 'no automatic issues'} ![](${path.basename(file)})`);
    issues.forEach(i => lines.push(`  - ${i}`));
    console.log(`${url} @${w}: ${issues.length ? issues.join('; ') : 'ok'}`);
  }
}
await browser.close();
lines.push(`\n---\nAutomatic checks catch layout and markup problems only. Read every screenshot and walk references/audit-checklist.md for the rest.`);
fs.writeFileSync(path.join(out, 'report.md'), lines.join('\n'));
console.log(`\nreport: ${path.join(out, 'report.md')}`);
process.exit(failed ? 1 : 0);
