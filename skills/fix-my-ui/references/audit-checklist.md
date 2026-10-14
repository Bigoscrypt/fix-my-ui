# Audit checklist

Work through it per screen. Severity: **P0** breaks a task or misleads the user, **P1** hurts comprehension or trust, **P2** polish.

## P0: broken or untrue

- [ ] Every button and link does something. No dead "Coming soon" buttons dressed up as real ones.
- [ ] Every form can be submitted and shows field-level errors in words a person understands.
- [ ] Labels match the data. A heading that promises "Last 6", "Top 10" or "Today" must show exactly that, or be reworded so it is always true ("Recent").
- [ ] Numbers are correct and consistently formatted (same decimals, same units, same currency style everywhere).
- [ ] No placeholder or test content in production (lorem ipsum, "Test user", sample avatars, fake counts).
- [ ] Every data view handles empty, loading and error (see `states.md`). A blank area is a bug.
- [ ] Destructive actions ask for confirmation in the app's own UI, not a browser `alert()`/`confirm()`, and can be undone where possible.
- [ ] Auth walls explain what the user gets before asking them to sign up.
- [ ] First load never shows a blank screen. If the bundle is slow, a branded loading screen stays until the page draws (and its timeout is longer than a slow 3G load).

## P1: comprehension and trust

- [ ] One primary action per screen, visually dominant. Secondary actions look secondary.
- [ ] A stranger understands what the product does from the first screen in about two seconds: a concrete benefit, not a slogan.
- [ ] Visual hierarchy: one H1, clear section headings, body text 16 px or more on mobile.
- [ ] Consistent terminology. The same thing has the same name on every screen, in buttons, emails and notifications.
- [ ] Navigation shows where you are. Active tab or item is obvious.
- [ ] No horizontal scroll at 360 px. No clipped or overlapping text at any width.
- [ ] Tap targets at least 44 x 44 px with at least 8 px between them.
- [ ] Forms: labels above fields (not placeholder-only), correct input types (`email`, `tel`, `numeric`), autofill attributes, the keyboard never covers the active field.
- [ ] Feedback for every action within 100 ms (pressed state, spinner on the button, optimistic update).
- [ ] Errors say what happened and what to do next. Never a raw code or stack trace.
- [ ] Prices, limits and requirements are shown before the user commits, not after.
- [ ] Legal or compliance text lives where it is legally needed, not sprinkled over product screens.

## P2: polish

- [ ] Every colour, size, radius, shadow and duration comes from a token.
- [ ] Spacing follows one scale (4 or 8 px base). Sibling groups use `gap`, not ad-hoc margins.
- [ ] Repeated items (cards, rows, chips) share the same padding, edges and baselines, and recurring parts sit in the same place on each.
- [ ] Icons are optically centred in their circles and buttons. Measure the rendered position; do not trust the CSS.
- [ ] Logos are shown as the brand supplies them. No extra tile, border or container around a third-party logo.
- [ ] Numbers that line up in columns use tabular figures.
- [ ] Long names truncate with an ellipsis instead of pushing siblings off-screen (`min-width: 0` on flex children).
- [ ] Chips and pills never wrap their own text (`white-space: nowrap`).
- [ ] Dark and light themes are both designed, not one inverted from the other. Check contrast in both.
- [ ] Empty space is intentional. Sticky headers start transparent and gain a background only once the page scrolls.
- [ ] Motion follows `motion.md`; nothing pops in, flashes in its final position before animating, or slides from an invisible line.
- [ ] Favicon, page titles, social share image and app icon are set and on-brand.
