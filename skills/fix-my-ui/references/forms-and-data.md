# Forms and data display

## Forms

- Labels above fields, always visible. Placeholder text is an example, not the label.
- The right input type and keyboard: `email`, `tel`, `inputmode="numeric"`, `url`, date pickers for dates.
- `autocomplete` attributes on every field the browser can fill.
- Validate on blur and on submit, not on every keystroke. Errors appear next to the field, in words, and stay until fixed.
- Keep what the user typed on any error, including server errors.
- A paste button next to fields people usually paste into (codes, links, addresses), with a sensible default if the clipboard is refused.
- The submit button shows progress and cannot be double-submitted.
- Long forms: group into steps with progress, save as they go.
- When the user picks a source or type (a provider, a country, a format), auto-detect it from what they pasted where possible and pre-select it, so the selector confirms instead of asks.

## Lists and tables

- Sort by what the user cares about, and say how it is sorted.
- Filters show their active state and a one-tap clear.
- Rows have one obvious tap target and a consistent layout: primary text, secondary text, trailing value or status.
- Long lists paginate or virtualise; never load thousands of DOM nodes.
- Show only items that have something to show. A list of events with nothing scheduled, or categories with no items, is noise.

## Numbers and data

- Same format everywhere: decimals, thousands separators, currency symbol position, units.
- Tabular figures in columns, prices, totals and timers.
- Relative times ("in 2 hours") for near events, absolute dates for far ones, always in the user's time zone.
- Sequences have a stated direction and a consistent one (oldest to newest left to right, for example), with a legend if it is not obvious.
- Status chips carry a word as well as a colour, and the same word means the same thing everywhere.
- Live data shows when it was last updated and moves without jumping the layout.
- Never present an estimate as a certainty. If something is a prediction, rating or guess, the UI and copy say so.
- Counts in headings come from the same data as the list below them.
