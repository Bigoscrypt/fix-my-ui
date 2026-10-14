# Fix My UI

**You built it fast. Now make it feel finished.**

An agent skill by **[Bigoscrypt](https://github.com/Bigoscrypt)** that audits the app or website you already have and fixes its UX: every screen at phone and desktop widths, every state (loading, empty, error), navigation, sign-up and onboarding, forms, copy, motion and accessibility. Then it pulls a design system out of what you already built, so new pages stop drifting.

Not a style generator. It doesn't give you a new aesthetic; it finds what's broken, confusing or untrue in your current app or website and fixes it in priority order.

<!-- HERO: before / after GIF + sample audit report go here -->

## Install

**Any agent (Claude Code, Codex, Cursor, Gemini CLI, Copilot...)**
```bash
npx skills add Bigoscrypt/fix-my-ui
```

**Claude Code plugin**
```
/plugin marketplace add Bigoscrypt/fix-my-ui
/plugin install fix-my-ui@fix-my-ui
```

**Manual**: clone into `~/.claude/skills/` (Claude Code), or into your project and point your agent's rules file at `AGENTS.md`:
```
For any UI, UX or design-system work, follow tools/fix-my-ui/AGENTS.md.
```
That one line works in `AGENTS.md` (Codex and most agents), `.cursor/rules/fix-my-ui.mdc`, `.windsurfrules`, `GEMINI.md` and `.github/copilot-instructions.md`.

## Use it

- *"Fix my UI"* / *"Audit the UX of this site"*: full audit, ranked findings, fixes in priority order.
- *"Build a design system for this app or site"*: tokens, type and spacing scales and component rules, taken from your code.
- *"Design the empty and error states for this page"*, *"Fix our onboarding"*, *"Make this work at 360px"*: one area at a time.

## What it checks

| Area | Examples |
|---|---|
| Truth | Labels that promise counts the data doesn't have, dead buttons, fake numbers, estimates shown as facts |
| States | Loading skeletons, empty first-use and filtered states, errors with a retry, offline, partial data |
| Layout | Sideways scroll at 360px, clipped text, tap targets under 44px, off-centre icons, chips wrapping |
| Navigation | Tab bars, back behaviour, deep links, sticky headers, auth walls |
| Onboarding | Value before sign-up, fewest fields, verification codes, first run, permission prompts |
| Forms and data | Labels, input types, inline errors, tables, number formats, live data |
| Copy | Plain words, verbs on buttons, and a list of AI-sounding filler to cut |
| Motion | Timing, no flash-before-animate, no text sliding out of invisible lines, reduced motion |
| Accessibility | Contrast in both themes, focus, keyboard, labels, screen readers |
| Design system | Colour roles, light and dark tokens, type and spacing scales, component states, a "rejected ideas" log |

It also knows what matters most for each kind of product: landing pages, SaaS dashboards, online shops, blogs and docs, portfolios, marketplaces, mobile apps and anything that handles money.

## The audit script

```bash
npm i -D playwright && npx playwright install chromium
node skills/fix-my-ui/scripts/audit.mjs https://your-site.com https://your-site.com/pricing --out ux-audit
```
Saves full-page screenshots at 360, 390, 768 and 1280px and a `report.md` that flags sideways scroll, small tap targets, images without alt text, clipped text, unlabelled fields, icon buttons without labels, tiny mobile text and heading problems. It only opens the URLs you give it: no network calls of its own, no keys, no telemetry. It uses your installed Chrome if Playwright's browser isn't downloaded.

## What's inside

```
skills/fix-my-ui/
  SKILL.md               the skill
  references/            audit checklist, states, navigation, onboarding, forms and data,
                         notifications, paywalls, copy, motion, accessibility, layout,
                         design system, site types, anti-patterns
  templates/             design-system doc, tokens.css (light + dark), tokens.json, audit report
  scripts/audit.mjs      multi-width screenshots + automatic checks
AGENTS.md                the same instructions for non-Claude agents
.claude-plugin/          Claude Code plugin + marketplace manifests
```

## Principles

- Every number and label is true.
- Every state is designed, not just the happy path.
- One primary action per screen.
- Plain words. No hype.
- Fix the system, not the instance.
- Your taste beats the defaults: write down every rejected idea so it never comes back.

## License

MIT, © Bigoscrypt. Use it, fork it, improve it. A star helps other people find it.
