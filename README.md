# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.
`range(start, end, step = 1)` (from `src/range.js`) returns an array starting at
`start` (inclusive) and advancing by `step` toward `end` (exclusive). The default
step is `1`; negative steps count down (for example, `range(5, 0, -2)` returns
`[5, 3, 1]`). Equal endpoints or a step directed away from `end` return `[]`.
A zero step throws `RangeError`; a non-number or non-finite `start`, `end`, or
`step` throws `TypeError`.


## Deprecated

`src/legacy.js` exports `clampLegacy(lo, hi, x)` (old argument order). Do not use it.

## Tests

`npm test` (Node.js built-in test runner, no dependencies).
