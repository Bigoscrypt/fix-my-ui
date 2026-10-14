# Accessibility basics

These are the checks that catch most real problems. Aim for WCAG 2.2 AA.

- **Contrast:** 4.5:1 for body text, 3:1 for large text, icons and input borders, in every theme.
- **Not colour alone:** status uses a word or icon as well as colour (a "Failed" chip carries the word, not just red).
- **Focus:** every interactive element has a visible focus ring (`:focus-visible`), and focus order follows the visual order.
- **Keyboard:** everything works with Tab, Shift+Tab, Enter, Space and Escape. Modals trap focus and return it on close.
- **Labels:** every input has a real `<label>`; icon-only buttons have `aria-label`; images have meaningful `alt` or `alt=""` if decorative.
- **Semantics:** use `button` for actions and `a` for navigation; one `h1` per page; headings in order; lists as lists; tables for tabular data.
- **Touch targets:** at least 44 x 44 px.
- **Zoom:** the page works at 200% browser zoom and with large system text.
- **Motion:** respect reduced motion; no flashing more than 3 times per second.
- **Announcements:** toasts and async results use an `aria-live` region.
- **Forms:** errors are announced, linked to their field (`aria-describedby`) and not shown by colour alone.

Test with a screen reader for ten minutes (VoiceOver, TalkBack or NVDA): can you complete the main task?
