# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.

`clamp` throws `TypeError` if any argument is not a finite number, and `RangeError` if `lo > hi`.

## Deprecated

`src/legacy.js` exports `clampLegacy(lo, hi, x)` (old argument order). Do not use it.

## Tests

`npm test` (Node.js built-in test runner, no dependencies).
