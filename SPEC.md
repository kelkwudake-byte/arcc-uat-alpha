# SPEC — numeric helpers v0.3 (ARCC-V14-P3-WP3 end-to-end task)

The change is complete only when ALL items below hold. No dependencies may be added; `npm test` must pass.

1. **Create `src/range.js`** exporting `range(start, end, step = 1)`. It returns an array of numbers from `start` (inclusive) towards
   `end` (exclusive), adding `step` each time. A negative `step` counts down (`range(5, 0, -2)` -> `[5, 3, 1]`). If the step points away
   from `end`, or `start === end`, the result is `[]`.
   - `step === 0` throws `RangeError`.
   - Any argument that is not a finite number (NaN, Infinity, a string, undefined for start / end) throws `TypeError`.
2. **Modify `clamp(x, lo, hi)` in `src/impl.js`**: keep the current contract, and in addition
   - throw `TypeError` when any argument is not a finite number;
   - throw `RangeError` when `lo > hi`.
3. **Delete `src/legacy.js`** (deprecated, unused) and remove every mention of it from `README.md`.
4. **Tests**: `tests/range.test.js` covers normal ranges, a negative step, an empty range, `step === 0` and a non-number argument;
   `tests/impl.test.js` additionally covers both new `clamp` errors.
5. **README.md** documents `range` and the new `clamp` errors.
