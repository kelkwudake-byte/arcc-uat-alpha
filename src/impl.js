export function clamp(x, lo, hi) {
  if (![x, lo, hi].every(value => typeof value === 'number' && Number.isFinite(value))) {
    throw new TypeError('Arguments must be finite numbers');
  }
  if (lo > hi) throw new RangeError('Lower bound cannot exceed upper bound');
  return Math.min(hi, Math.max(lo, x));
}
