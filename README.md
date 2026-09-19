# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.

`lerp(a, b, t)` must return `a + (b - a) * t` with `t` clamped to `[0, 1]` (v1.2 S4 L13 canary).
