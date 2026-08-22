# Vim-cursor typewriter effect for header name

## Summary

The header `<h3>Danil Merinov</h3>` types itself out on page load, character
by character, with a solid vim-style block cursor following the last typed
character. Once typing finishes, the cursor keeps blinking in place. Users
with `prefers-reduced-motion` enabled see the static name with no animation
and no cursor.

## Scope

- Applies only to the header `<h3>` in [index.html](../../../index.html)
  (currently line 19).
- Does not affect the "Danil Merinov" text anywhere else on the page (there
  is none besides the `<title>` tag, which is unaffected).
- No external dependencies; vanilla JS + CSS only.

## Behavior

1. On `DOMContentLoaded`, a script checks
   `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
   - If `true`: leave the `<h3>` text as static markup, do nothing further.
   - If `false`: proceed with the animation below.
2. The script reads the full name from the `<h3>`'s existing text content
   (so the name itself stays authored in HTML, not duplicated in JS),
   clears it, and reveals one character at a time via `setInterval`
   (~80ms/char).
3. A `<span class="vim-cursor">` is appended immediately after the revealed
   substring on every tick, so it always sits at the "insertion point."
4. When all characters are revealed, the interval clears and the cursor
   stays in place, blinking indefinitely via a CSS `@keyframes` opacity
   toggle (~1s cycle, matches typical terminal cursor blink rate).

## Cursor styling

- Solid block, not a thin bar: `display: inline-block`, width ~`0.55em`,
  height matching the line box, `background-color` set to the same accent
  used for the project-card hover border:
  - light theme: `#27233A`
  - dark theme (`body.dark-theme`): `#E5E5CB`
- No text sits under the cursor block (it trails the revealed text rather
  than overlapping a character), so no contrast/legibility concerns.

## Accessibility

- `prefers-reduced-motion: reduce` fully disables the effect — static text,
  no cursor, no motion.
- The animation is purely decorative; screen readers see the final text
  content once populated. To avoid a screen reader announcing partial
  strings as they're typed, the `<h3>` gets `aria-label="Danil Merinov"`
  and the animated inner content is marked `aria-hidden="true"` during and
  after the type-in.

## Out of scope

- No looping/retyping, no hover-retrigger.
- No changes to the header layout, font, or size.
- No animation on any other page element.
