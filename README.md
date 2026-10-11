# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.
It throws `TypeError` when any argument is not a finite number and `RangeError` when `lo > hi`.

`range(start, end, step = 1)` returns an array starting at `start` (inclusive) and
advancing towards `end` (exclusive). A positive step counts up, a negative step counts
down; an incompatible step direction or equal endpoints returns `[]`.
It throws `TypeError` for non-finite or non-number arguments, and `RangeError`
for a zero step or a step too small to advance at floating-point precision.

## Tests

`npm test` (Node.js built-in test runner, no dependencies).
