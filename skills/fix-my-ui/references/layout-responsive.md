# Layout and responsiveness

Design mobile first and test at **360 px** (the narrowest common Android width), 390 (common iPhone), 768, 1024 and 1280+.

## Rules

- **Nothing scrolls sideways.** Only tables, code and diagrams may be wider, each inside its own `overflow-x: auto` container.
- **One gutter.** At least 16 px side padding, set once on the page wrapper.
- **Flex and grid with `gap`**, not per-element margins. Give text-holding flex/grid children `min-width: 0` so long content wraps or truncates instead of widening the page.
- **Responsive widths are classes or `clamp()`, never fixed inline pixel widths.**
- **Tab rows** that must fit on one line: tighten padding and gap on small screens and use a shorter label below a breakpoint. Do not let a tab row wrap to two lines.
- **Long horizontal chip rows**: `overflow-x: auto`, hidden scrollbar, and a soft fade on the right edge as a scroll hint.
- **Multi-card rows**: account for gutters and gaps when sizing; at 360 px three cards with 8 px gaps have about 104 px each.
- **Wide letter-spacing inflates text.** Chips with tracked uppercase text need `white-space: nowrap; flex-shrink: 0`.
- **Safe areas** on phones: fixed bars add `env(safe-area-inset-*)` to their padding.
- **Use `100%` or `dvh`, not `100vh`,** for full-height layouts on mobile browsers.
- **Keyboard**: on mobile the active input must stay visible above the keyboard.

## Alignment traps

- Icons inside circles or buttons are often visually off centre because of glyph metrics. Measure the rendered box (screenshot or `getBoundingClientRect`) and correct with a nudge, do not eyeball the CSS.
- Text in some native renderers (notably React Native on iOS) clips at the line box; give tight headings a line-height of at least 1.2 to 1.5 em.
- Baselines across sibling cards: same padding, same heading size, recurring parts in the same place.

## Verify

Take screenshots at every width, signed in and out, both themes. Zoom to 200%: does anything overlap? Rotate the phone: does the layout survive landscape?
