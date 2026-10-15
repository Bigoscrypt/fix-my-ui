# UX audit: Billfold (example)

Billfold is a made-up invoicing product, built the way AI site builders usually produce a landing page and dashboard. Source: [`before/`](before/index.html) and the fixed version in [`after/`](after/index.html).

Widths checked: 360, 390, 768, 1280 · Theme: as shipped · Run: `node skills/fix-my-ui/scripts/audit.mjs <url>`

## Summary
The page looks polished at desktop width and falls apart on a phone: the headline is cut off and the whole page scrolls sideways. The copy makes claims it cannot back up ("#1 Invoicing App", "10,000+ Happy Users") and never says what the product actually does. First fix: the mobile layout and the claims. Then one primary action and real states.

## Automatic checks (before → after)

| Check | Before | After |
|---|---|---|
| Sideways scroll at 360px | 820px | none |
| Sideways scroll at 768px | 412px | none |
| Tap targets under 44px | 3 per width (delete icons) | 0 |
| Text under 14px on mobile | 1 block | 0 |

## Findings

| # | Sev | Screen | What is wrong | Why it matters | Fix |
|---|---|---|---|---|---|
| 1 | P0 | Landing, mobile | Fixed 1100px and 1000px widths; headline clipped to "Supercha", page scrolls sideways | Most visitors arrive on a phone and see a broken page | Fluid layout, `clamp()` headline, grid that stacks at 720px |
| 2 | P0 | Landing | "#1 Invoicing App", "10,000+ Happy Users", "99.9% Uptime" with no source | Unprovable claims destroy trust and can break advertising rules | Remove; state a true, specific offer ("Free for up to 5 clients. No card needed.") |
| 3 | P0 | Dashboard | Delete uses `alert('Are you sure?')`, which also never deletes | Native dialogs look broken and block the page; the action does nothing | In-app actions menu with its own confirm and undo |
| 4 | P0 | Dashboard | Test data in production ("Lorem Ipsum Ltd", "Test Client") | Looks unfinished | Real sample rows, or an empty state for new accounts |
| 5 | P1 | Landing | Hero copy is hype ("Supercharge", "revolutionizes", "Seamless. Effortless. Powerful.") and never says what Billfold does | Visitors cannot tell what they are signing up for | Concrete promise: "Send an invoice in a minute. Get paid on time." |
| 6 | P1 | Landing | Two competing gradient buttons ("Get Started Free", "Book a Demo") | No clear next step | One primary ("Create your first invoice"), one quiet link |
| 7 | P1 | Navigation | Links overflow on mobile; the ☰ icon is hidden and has no label | No way to navigate on a phone, invisible to screen readers | Labelled "Menu" button at 720px and below, links in a sheet |
| 8 | P1 | Dashboard | Amounts and dates in four formats ($1200, $850.5, $3,400.00; 2026-10-02, 10/09/26, Oct 21) | Inconsistent data reads as untrustworthy | One format: `$1,200.00`, `Due 2 Oct 2026`, tabular figures, right-aligned |
| 9 | P1 | Landing, cards | Body text #6b7280 on the page (4.0:1) and on cards (3.7:1) | Hard to read, fails WCAG AA (4.5:1) | Token colours: muted text #5b6475 on #f7f8fa is 5.6:1 |
| 10 | P1 | Dashboard | No empty, loading or error states | New users see an empty table with no next step | Empty state with one action ("Set up a recurring invoice") |
| 11 | P2 | Landing | Emoji as feature icons, thin coloured rails on cards | Looks template-made | Numbered steps that explain how it works |
| 12 | P2 | Landing | Fake testimonial ("Best app ever!!!", John D., CEO) | Reads as invented | Remove until there are real, attributable quotes |
| 13 | P2 | Global | Gradient text, glow shadows, 3 accent colours | Visual noise competes with the content | One accent (`--primary`), flat surfaces, tokens from `templates/tokens.css` |

## Design system created
Colour roles and light/dark tokens from `templates/tokens.css` with one accent (#4f46e5), Inter for headings and body, a 4px spacing scale, 12/16px radii, status chips with fixed meanings (Paid, Overdue, Draft).
