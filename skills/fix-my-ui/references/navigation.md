# Navigation

People should always know where they are, how they got there and how to get back.

## Structure

- **3 to 5 top-level destinations.** On mobile a bottom tab bar; on desktop a top bar or a left rail. More than five means the information architecture needs work, not a "More" drawer full of core features.
- **Name tabs by what the user gets**, not by internal feature names. Keep the names identical to the page titles they open.
- **One home for each thing.** If a feature lives in two places, pick one and link from the other.
- **A centre action button** in a tab bar is only for the one action people do most (create, scan, check). It opens that action or a short quick-actions sheet, never a settings menu.
- **Search** is reachable from every main screen when the product has more than a few dozen items to find.

## Behaviour

- **Active state is obvious**: filled icon, label weight or colour, and an indicator. Never colour alone.
- **Back always works** and returns to the same scroll position and filter state.
- **Deep links land in context**: a notification about an item opens that item, with a back path to its parent, not the home screen.
- **Tapping the active tab** scrolls its list to the top.
- **Sticky headers** start transparent over the page and gain a background and a hairline border once the page scrolls.
- **Don't hide navigation behind gestures** only. Every gesture has a visible alternative.
- **Modals for tasks, pages for places.** A short task (filter, confirm, pick a value) is a sheet or modal; anything worth linking to is a page with its own URL.
- **Guards**: a signed-out user tapping a members-only destination sees what it is and a sign-in prompt, not a blank page or a silent redirect home.
- **External links** to other products open in a new tab or the system browser and look like links out (icon or label).

## Wayfinding on long pages

- Section headings that can be scanned; a sticky in-page tab row for pages with several sections.
- Breadcrumbs on desktop for deep hierarchies.
- "See all" links on previews always lead to the full, filterable list.

## Verify

Walk every route from a cold start, from a notification, and from a shared link, signed in and signed out. At each screen ask: where am I, what can I do here, how do I go back?
