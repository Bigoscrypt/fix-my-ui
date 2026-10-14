# Designing every state

A screen is not finished when the happy path looks good. Design all of these for every data view.

| State | What the user sees | Rules |
|---|---|---|
| **Loading (first)** | Skeleton in the shape of the real content | No spinner on a blank page. Keep layout stable so nothing jumps when data lands. |
| **Loading (refresh)** | The old content, with a quiet indicator | Never blank out content the user is reading. |
| **Empty (first use)** | What will appear here and the one action that fills it | Friendly, specific, with a button. Not "No data". |
| **Empty (filtered)** | "Nothing matches" plus a way to clear filters | Show which filters are active. |
| **Partial** | What we have, with what is missing marked | Do not hide a whole view because one field is missing. Do not promise a count you do not have. |
| **Error (recoverable)** | What went wrong in plain words and a retry | Keep any user input. Retry in place. |
| **Error (fatal / not found)** | Where to go next | A real page with navigation, not a dead end. |
| **Offline / slow** | Cached content and a clear offline note | Queue actions where it is safe. |
| **Success** | Confirmation that matches the action | Inline, brief. A toast for background actions. |
| **Permission / locked** | What it is, why it is locked, how to unlock | Show the value before asking for an upgrade or sign-in. |

## Checks

- Turn the network off and to "slow 3G" in dev tools and walk every screen.
- Use an account with no data, one with one item, and one with a huge amount (long names, 500 rows).
- First load on a slow connection: the branded loading screen must stay up until the page draws. A hard timeout shorter than the slowest real load leaves people on a blank page.
- Dates and times: today, tomorrow, past, across midnight, other time zones.
