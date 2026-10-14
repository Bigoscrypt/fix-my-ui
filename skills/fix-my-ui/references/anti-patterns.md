# Anti-patterns that make a product look amateur

Each one with the fix. Most came from real review feedback.

| Anti-pattern | Fix |
|---|---|
| A label promises a count the data does not always have ("Top 10" showing seven) | Make the label always true ("Top results") or guarantee the count server-side |
| Thin coloured accent rail down the side of a card | Tint the whole block or use a full border |
| Third-party logos placed inside extra tiles or rounded containers | Show the logo as the brand supplies it, on a background it was designed for |
| Sticky header with a solid background over the hero at the top of the page | Transparent until the page scrolls, then add the background |
| Browser `alert()` / `confirm()` / `prompt()` | In-app modal or sheet with the product's own buttons |
| Spinner on a blank page | Skeleton in the shape of the content |
| Only the happy path designed | Design loading, empty, error, partial, offline, success (`states.md`) |
| Icon visibly off centre in its circle | Measure the rendered position and nudge |
| Chip text wrapping onto two lines | `white-space: nowrap`, shorter label, or smaller tracking |
| Fixed pixel widths that break at 360 px | Fluid widths, `clamp()`, breakpoint classes |
| Headline drop shadow clipped into rectangles by overflow masks | Remove the shadow or the mask |
| Elements flashing in their final position before animating in | Set the start state at first paint |
| Every page and video built from the same template | Give each its own concept, layout and transition family |
| Busy background (gradient blobs, grain, watermarks) behind dense UI | Flat colour fields; let the product UI be the texture |
| Static screenshots in phone mockups | Real, moving UI: scroll, tap, result arriving |
| Copy that describes itself ("plain words", "no fluff") or uses hype verbs | Say the concrete benefit (`copy.md`) |
| Over-explaining footnotes under every number | Better label; move detail to a help page |
| Legal text scattered on product screens | Keep it where it is legally required |
| Badges and pills as eyebrow labels on every section | Use plain small text, or nothing |
| Two primary buttons fighting on one screen | One primary; others secondary or tertiary |
| A slanted or distorted version of the logo mark | Use the master asset at its proper angle and aspect |
| Loading screen with a hard timeout shorter than a slow load | Keep it until the page draws; long safety timeout only |
| Analytics and tag scripts competing with the app bundle on first load | Load them after the page has drawn |
| Same feature named three different ways | One glossary, enforced in UI, emails and notifications |
