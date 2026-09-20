# arcc-uat-alpha

UAT project for the AI Review Control Center (bounded test project, no production value).

## Contract

`clamp(x, lo, hi)` must return `lo` when `x < lo`, `hi` when `x > hi`, otherwise `x`.

- `clamp(x, lo, hi)`: x limited to [lo, hi] — clamp(5, 0, 3) === 3 (v1.2 S7 live-harness canary: L15 concurrency partner / L07 node-offline recovery)
