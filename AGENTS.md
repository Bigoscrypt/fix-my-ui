# Fix My UI: agent instructions

By Bigoscrypt. Works with any coding agent that reads `AGENTS.md` (Codex, Cursor, Windsurf, Aider, Gemini CLI, GitHub Copilot and others). Claude Code users can install it as a skill instead (see README).

When the user asks to redesign, polish, review the UX of, or build a design system for a website or app, follow `skills/fix-my-ui/SKILL.md`. In short:

1. **Identify the product type** (`skills/fix-my-ui/references/site-types.md`) and inventory every screen and its one job.
2. **Capture real renders** at 360, 390, 768 and 1280 px, signed in and out, light and dark: `node skills/fix-my-ui/scripts/audit.mjs <url>` (needs Playwright). Read the screenshots.
3. **Audit** with `skills/fix-my-ui/references/audit-checklist.md`. Rank findings P0 (broken or untrue), P1 (comprehension and trust), P2 (polish). Use `skills/fix-my-ui/templates/audit-report.md`.
4. **Settle the design system first** (`skills/fix-my-ui/references/design-system.md`, `skills/fix-my-ui/templates/design-system.md`, `skills/fix-my-ui/templates/tokens.css`). Extend what exists; do not replace it unless asked.
5. **Fix by priority**, one concern per change, system before instances.
6. **Verify** by re-capturing the same widths and re-running the audit.

Always apply:
- Every data view has loading, empty, error, partial and success states (`skills/fix-my-ui/references/states.md`).
- Labels and counts match the data; estimates are never shown as certainties.
- Nothing scrolls sideways at 360 px; tap targets are at least 44 px; text is never clipped.
- Plain, specific copy with no hype or AI-sounding filler (`skills/fix-my-ui/references/copy.md`).
- Motion explains change, starts from its start state on the first frame, and respects reduced motion (`skills/fix-my-ui/references/motion.md`).
- Navigation, onboarding, forms, notifications and paywalls follow their guides in `skills/fix-my-ui/references/`.
- Record every rejected idea in the project's design-system doc so it is not repeated.
