# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.

`add(a, b)` must return the sum of `a` and `b`: `add(2, 3) === 5`. Test: `node --test test/`.
