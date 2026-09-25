# Original BMJ Energy logo

Source: attachment 4, `logo_bmj_energy_main_aionui_1790359898752-9a1f2069.png`.

- `bmj-energy-original.png`: byte-identical supplied 615 × 615 RGBA PNG.
- `bmj-energy-display.png`: lossless RGBA crop `(93, 133, 523, 477)` (left, top, right-exclusive, bottom-exclusive), 430 × 344 pixels. No resizing, recolouring, alpha cleanup, redrawing or selective artwork removal.
- Alpha inspection of the interior `(25,25)-(590,590)` found all nontransparent artwork within `(97,137)-(519,473)`. The crop retains four transparent pixels around those bounds. The remote outside-canvas-edge green/white fringe is not part of the central artwork and is excluded with the surrounding empty margins.
- Every cropped RGBA pixel is identical to the corresponding source pixel, including low-alpha antialiasing and the original embedded company lettering. Original lettering remains inside the image; the accessible/readable HTML company label is positioned to its **right**, never below. The footer's redundant below-logo name was removed (the same name remains in the lockup and copyright).
- A white CSS image backing makes the original dark artwork legible on the footer without altering its colours or pixels.

SHA-256:

```
original 98e515dcffe20ac79105c58b99529c3d0213df2284dfcda99efdc0391e119f44
display  446a3541ac82970077a51358c7662a049230b51c207803cd18f4c1188f563727
```

Consumers: `BmjLogo` shared by Header and Footer on every route. Other `logo_ref` entries are unused asset-sheet metadata, not rendered brand lockups; left unchanged. No other photos or company/audit copy were changed.
