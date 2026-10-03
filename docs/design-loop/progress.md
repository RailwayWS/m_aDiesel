# Design loop progress

Bar: trybooster.com (see bar.md). Pieces: A header/hero/proof · B services · C team · D about/contact/footer.

## Round 1
| Piece | Brief | System | Craft | Biggest gap |
|---|---|---|---|---|
| A | FAIL | FAIL | FAIL | H1 sat on the truck's own "BULK DIESEL DELIVERED" lettering; red used for the 24/7 stat; no call button in the mobile header |
| B | PASS | FAIL | FAIL | 5 identical zig-zag rows (~2,500px); no 24/7 badge on row 01 |
| C | FAIL | FAIL | FAIL | Tall gradient placeholders, ~4 screens of empty boxes on mobile |
| D | PASS | FAIL | PASS | Red icon circles on the phone rows |

Fixes: split navy-panel hero on desktop and a cab crop on mobile; red limited to the call path; mobile header call icon; emergency feature row + numbered 2×2 grid; team as a sticky heading + 3-col grid (2-col on mobile), 4:5 flat Galvanised placeholders labelled "Photo coming soon"; hairline phone rows with navy icons; backgrounds alternate white/tint.

## Round 2
| Piece | Brief | System | Craft | Biggest gap |
|---|---|---|---|---|
| A | PASS | FAIL | FAIL | Mobile hero: copy over the painted "M&A"; crop mostly sky |
| B | PASS | PASS | PASS | **Done** |
| C | PASS | PASS | FAIL | Nine tall placeholders, each repeating "Photo coming soon" |
| D | PASS | FAIL | FAIL | 4-thumbnail fleet strip (breaks one-visual-per-block); dead space under the form |

Fixes: on mobile the hero photo is a 4:3 block cropped to the tank + logo, with copy on solid navy below. Camera icon only on cards, plus one "portraits are on their way" line. Fleet strip removed. The success notice only takes space once sent. Footer swoosh no longer flipped (removed a hairline seam). DESIGN.md updated for the utility strip and the About rule (deliberate decisions, not violations).

## Round 3 (A, C, D only)
| Piece | Brief | System | Craft | Biggest gap |
|---|---|---|---|---|
| A | PASS | PASS | PASS | **Done** |
| C | PASS | PASS | FAIL | Flat grey frames on a near-identical background read as a broken image grid; mobile ≈2.5 screens of tiles |
| D | PASS | PASS | PASS | **Done** |

Fixes: placeholders become Logo Navy cards with white initials, a camera icon and the logo's oval keyline as a watermark. On mobile, compact roster rows (88px frame + name/role/phone). Apologetic intro line removed.

## Rounds 4–6 (Team only)
| Round | Treatment | Brief | System | Craft | Craft's gap |
|---|---|---|---|---|---|
| 4 | Solid navy 4:5 tiles, white initials | PASS | PASS | FAIL | Too heavy: ~800px of full-strength navy |
| 5 | Pale-blue 1:1 tiles, navy hairline | PASS | FAIL (initials > names) | FAIL | Empty squares dominate; arcs look like artifacts |
| 6 | Compact roster: 96px frame beside name/role/phone | PASS | PASS | FAIL | Camera icon announces "missing image"; asks for navy monograms (what round 4 rejected); orphan last row |

After round 6: desktop roster set to 3 columns (balanced 3×3). Loop stopped. The craft critic was oscillating between opposite treatments, and the only real resolution for an empty-photo section is the portraits. Team switches automatically to the 4:5 portrait grid once every member in `site/src/data.ts` has a `photo`.

## Final status
| Piece | Brief | System | Craft |
|---|---|---|---|
| A Header/hero/proof | PASS | PASS | PASS |
| B Services | PASS | PASS | PASS |
| C Team | PASS | PASS | FAIL (interim placeholders; see above) |
| D About/contact/footer | PASS | PASS | PASS |
