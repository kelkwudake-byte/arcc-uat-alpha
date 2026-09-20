# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.

`multiply(a, b)` must return the product of `a` and `b`: `multiply(2, 3) === 6`. Test: `node --test test/multiply.test.mjs`.
