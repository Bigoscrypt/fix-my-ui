# Sign-up, sign-in and onboarding

The goal of onboarding is the first moment of real value ("aha"), as fast as possible. Everything else is friction to justify.

## Before sign-up

- **Show the product before the wall.** Let visitors see real content, a sample result or a live preview. Ask for an account when they try to save, personalise or use something that needs one.
- **Say what they get** next to every sign-up prompt: one concrete benefit, not "Join now".
- **The landing page explains the product in one screen**: what it is, who it is for, one primary call to action, real screenshots of the product moving.

## Sign-up

- **Fewest possible fields.** Email (or phone) and password, or a social/passkey option. Ask for everything else later, when it is needed.
- **Social sign-in buttons** follow each provider's brand guidelines; put the most used one first.
- **Passwords**: show/hide toggle, rules shown up front (not after a failed attempt), allow paste and password managers (`autocomplete="new-password"`).
- **Verification codes**: one input that accepts paste, `autocomplete="one-time-code"`, auto-submit when complete, a resend timer, and a way to change the email if they typed it wrong.
- **Age or eligibility checks** only where legally required, asked once, stored, and never repeated to existing users.
- **Referral or invite codes** are captured automatically from the link (and kept across the sign-up flow), with a manual field as a fallback, never a required step.
- **Track attribution** (where the sign-up came from) server-side at account creation, not only in a cookie-gated analytics tool, or campaign reports will undercount.

## First run

- **One question at a time**, each with a skip. Ask only what changes what they see (role, interests, goal).
- **Personalise immediately**: the next screen should visibly use the answers.
- **Seed the empty product.** If a tool needs input the user does not have yet (a code, a file, a URL), offer a ready sample so they can try it right now.
- **Guided tour**: short (three to five steps), points at real UI, can be skipped and replayed, and ends on the user doing the core action themselves.
- **Permissions in context.** Ask for notifications or location right after showing why ("Get an alert when your order ships"), with your own pre-prompt first; never on first launch.
- **Welcome email** sent once, about the product they actually signed up to, with one link back to the core action.

## Sign-in and recovery

- Remember the last sign-in method and pre-fill the email.
- "Forgot password" next to the password field; the reset flow ends signed in.
- Account recovery that does not depend on the old device, with clear security delays where needed.
- Sessions survive app updates; a forced sign-out explains why.

## Measure

Track each step as a funnel: landing, sign-up start, sign-up complete, first core action, return on day 1 and day 7. A step that starts but never completes is a broken flow, and should alert someone before users report it.
