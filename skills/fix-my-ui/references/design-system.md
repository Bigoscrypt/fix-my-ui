# Building the design system

A design system is a small set of decisions written down so nobody has to make them again. Start from what the product already does well; do not import a generic kit and paint over it.

## 1. Extract before you invent

- Collect every colour, font size, spacing value, radius and shadow currently used (grep the CSS, Tailwind config, theme files, inline styles).
- Cluster near-duplicates (`#2563EB` and `#2463EA` are one colour; 15 px and 16 px are one size).
- Keep the values that appear most and look best; map the rest onto them.

## 2. Colour

- **Roles, not names.** Tokens describe use: `--bg`, `--surface`, `--surface-2`, `--fg`, `--fg-muted`, `--border`, `--primary`, `--primary-fg`, `--success`, `--warning`, `--danger`, `--focus`.
- **One accent.** One brand colour for the primary action and key highlights. Status colours (green, amber, red) are for status only.
- **Tinted neutrals.** Greys with a slight hue toward the accent look designed; pure mid-grey looks default.
- **Both themes as first-class.** Define every token in the light set and redefine it for dark. Never invert. Keep the accent usable on both backgrounds.
- **Contrast:** body text at least 4.5:1, large text and UI parts at least 3:1, in both themes.
- **Whole-block tints beat accent rails.** To mark a card as special, tint the whole card or give it a full border, not a thin coloured stripe down one side.

## 3. Typography

- Two families at most: one for headings (it can have character) and one for body and UI (highly legible). Add a monospace only for codes and numbers.
- A modular scale, for example 12, 14, 16, 18, 20, 24, 30, 36, 48, 60. Use only scale values.
- Body 16 px minimum on mobile, line height 1.4 to 1.6, line length about 45 to 75 characters.
- Headings get `text-wrap: balance`. Uppercase labels get letter-spacing of about 0.04 to 0.1 em and `white-space: nowrap`.
- Tabular figures (`font-variant-numeric: tabular-nums`) for prices, totals, metrics, tables and timers.

## 4. Spacing, radius, elevation

- Spacing scale on a 4 px base: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80.
- Radius: a small set (for example 8 for inputs, 12 to 16 for cards, 999 for pills). Nested radius = outer radius minus padding.
- Elevation: two or three shadow levels at most. In dark themes, prefer lighter surfaces over heavier shadows.

## 5. Components

For each component write: purpose, anatomy, variants, sizes, every state (default, hover, pressed, focus, disabled, loading, error), do and don't. Start with the ones every product has:

Button, Link, Input, Select, Checkbox/Radio/Switch, Card, List row, Tabs, Chip/Badge, Toast, Modal/Sheet, Empty state, Skeleton, Avatar, Nav bar, Tab bar.

Rules that save the most rework:

- One primary button per view. Destructive buttons are a distinct variant, not a red primary.
- Status chips have fixed meanings and one look everywhere. The word inside never changes per screen.
- Cards in a row share height logic (content sets height; no stretching to fill empty space).
- Modals and sheets are in-app components. Never the browser's native dialogs.

## 6. Motion tokens

`--dur-fast: 120ms`, `--dur-base: 200ms`, `--dur-slow: 320ms`; easing `--ease-out: cubic-bezier(.22,1,.36,1)`, `--ease-in-out: cubic-bezier(.65,0,.35,1)`. See `motion.md`.

## 7. Write it down

Fill `templates/design-system.md` and `templates/tokens.css`. Add a "Decisions and rejected ideas" section: every time the owner rejects something, record it with the reason so it never comes back.
