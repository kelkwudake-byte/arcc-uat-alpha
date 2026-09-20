/**
 * clamp(x, lo, hi): returns x limited to the inclusive range [lo, hi].
 * Contract (README): clamp(5, 0, 3) === 3, clamp(-1, 0, 3) === 0, clamp(2, 0, 3) === 2.
 */
export function clamp(x, lo, hi) { return Math.min(hi, Math.max(lo, x)); }
