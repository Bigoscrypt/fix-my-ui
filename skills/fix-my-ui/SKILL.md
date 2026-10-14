---
name: fix-my-ui
description: Audit and revamp any website or app (landing page, SaaS dashboard, online shop, blog, docs, portfolio, marketplace, mobile app) so it follows solid UX and UI practice, and derive a design system (tokens, type scale, spacing, components, states) from what is already there. Use when the user asks to redesign, polish, "make it look professional", fix UX, review a UI, plan onboarding or navigation, build a design system, or ship a new page or screen.
---

# Fix My UI

*By Bigoscrypt. Lessons from shipping and reviewing real products, written down so your agent applies them.*

Make an interface feel deliberate: every screen has one job, every state is designed, every number and label is true, and the visual system is consistent enough that a new page looks like it always belonged.

This skill has two modes. Pick by what the user asked for; do both when they say "revamp".

1. **Audit and fix** an existing site or app (`references/audit-checklist.md`).
2. **Design system**: extract or create tokens, type, spacing and component rules (`references/design-system.md`, templates in `templates/`).

## Ground rules

- **Respect what exists.** Look for an existing theme, tokens file, Tailwind config, component library or brand guide before inventing anything. Extend it; do not replace it unless asked.
- **The user's taste beats your defaults.** If they reject something, record the rule (in the project's design-system doc) so it is never repeated.
- **Look at real renders, not code.** Take screenshots at phone and desktop widths before and after every change, and read them. Most UI bugs are invisible in source: clipped text, a box behind a word, an icon 2px off centre, a button wrapped onto two lines.
- **Fix the system, not the instance.** If one card has the wrong radius, the fix is the token or the component, not that card.
- **Small, reviewable changes.** One concern per change. Never mix a redesign with a logic change.

## Workflow

1. **Inventory.** Identify the type of product (`references/site-types.md`). List every page or screen and its single job. Note the stack, the styling method and any existing tokens.
2. **Capture.** Screenshot each key screen at 360, 390, 768 and 1280 px wide, signed in and signed out, light and dark if both exist. `scripts/audit.mjs` does this and flags horizontal overflow, small tap targets, images without alt text and text that is cut off.
3. **Audit.** Walk `references/audit-checklist.md`. Write findings as: screen, what is wrong, why it matters to the user, the fix. Rank by user impact, not by how easy it is.
4. **System first.** Before fixing screens, settle the tokens (colour, type, spacing, radius, shadow, motion) in `templates/design-system.md` and `templates/tokens.css`. Most visual findings disappear once the system is right.
5. **Fix by priority.** Broken flows and lies first (wrong labels, dead buttons, missing error states), then layout and responsiveness, then polish.
6. **Verify.** Re-capture the same widths, compare before and after, and re-run the audit script. State what changed and what you did not get to.

## What "done" looks like

- Every screen has one primary action, visually obvious within two seconds.
- Every data view has designed loading, empty, error, partial and success states (`references/states.md`).
- Nothing scrolls sideways at 360 px; no text is clipped; tap targets are at least 44 px.
- Colours, sizes and spacing come from tokens; there are no one-off hex values or pixel widths in components.
- Labels match the data: a heading that says "Last 30 days" shows 30 days of data, or says something that is always true.
- Copy is short and plain (`references/copy.md`). No filler, no claims the product cannot back up.
- Motion is purposeful, never blocks reading, and respects reduced-motion settings (`references/motion.md`).
- It passes the accessibility basics in `references/accessibility.md`.

## Reference files

| File | Use it for |
|---|---|
| `references/audit-checklist.md` | The full review list, grouped by severity |
| `references/design-system.md` | How to derive tokens, scales and component rules |
| `references/site-types.md` | Extra priorities for landing pages, dashboards, shops, content, portfolios, marketplaces, apps |
| `references/navigation.md` | Information architecture, tab bars, back behaviour, deep links |
| `references/onboarding-signup.md` | Sign-up, verification, first run, permissions, recovery |
| `references/forms-and-data.md` | Forms, lists, tables, numbers, live data |
| `references/notifications-retention.md` | Push, inbox, widgets, email, retention |
| `references/paywall-pricing.md` | Locked features, plans, checkout, trials, credits |
| `references/states.md` | Loading, empty, error, partial, offline, success |
| `references/layout-responsive.md` | Grids, breakpoints, the 360 px test, alignment traps |
| `references/copy.md` | Plain-language rules and common AI-sounding filler to cut |
| `references/motion.md` | Timing, easing, entrance rules, reduced motion |
| `references/accessibility.md` | Contrast, focus, labels, keyboard, screen readers |
| `references/anti-patterns.md` | Mistakes that make a product look amateur, with fixes |
| `templates/design-system.md` | Fill-in design-system document for the project |
| `templates/tokens.css` | Light and dark CSS custom properties to start from |
| `templates/tokens.json` | The same tokens for JS, native apps or Style Dictionary |
| `templates/audit-report.md` | Report format for findings |
| `scripts/audit.mjs` | Multi-width screenshots and automatic checks (Playwright) |
