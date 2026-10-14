# Motion

Motion explains change: where something came from, where it went, what caused it. If it does not explain anything, remove it.

## Timing

| Use | Duration | Easing |
|---|---|---|
| Hover, press, toggle | 100 to 150 ms | ease-out |
| Small element in/out (chip, toast, tooltip) | 150 to 250 ms | ease-out in, ease-in out |
| Panels, sheets, page transitions | 250 to 400 ms | ease-in-out |
| Large hero or marketing moments | 400 to 900 ms | expo or custom ease-out |

Exits are faster than entrances. Nothing the user waits on should animate longer than 400 ms.

## Entrance rules

- **Set the start state before the first frame.** An element that renders in its final place and then jumps back to animate in is the most common motion bug. Hide it (or put it in its start pose) from the first paint, then animate.
- **Reveal text where it stands.** Fade, sharpen from a slight blur or rise a few pixels. Avoid revealing words by sliding them out of a clipped box; it reads as text appearing from an invisible line, and clipped boxes cut shadows into visible rectangles.
- **Don't animate layout on load.** Skeletons hold space; content fades in place.
- **Stagger small**, 30 to 60 ms between items, and cap the total.
- **One thing at a time.** The eye follows one moving element; animate the thing the user should look at.

## Loading screens

- A branded loading screen with a logo animation is fine, but let the animation finish once it has started, keep it short (about 1 to 1.5 s), and never block a page that is already ready behind a long intro.
- Its safety timeout must be longer than a slow-connection load, or users get a blank page after it disappears.

## Reduced motion

Respect `prefers-reduced-motion: reduce`: replace movement with opacity changes or none. Never auto-play parallax or large movement for these users.

## Performance

Animate `transform` and `opacity` only. Avoid animating `width`, `height`, `top`, `left`, `box-shadow` or filters on many elements at once on mobile. In React Native, one shared animated value is safer than many parallel native loops.

## Video and promo animation

The same rules apply to product videos and animated ads:

- Each element is hidden in its start pose from frame 0.
- Show the real product UI moving (scrolls, taps, results arriving), not a static screenshot in a phone frame.
- Vary the transition grammar per piece (wipes, scans, iris, hard cuts on the beat); when every video uses the same template they all look the same.
- Flat, confident backgrounds usually beat busy gradients, grain and floating blobs.
