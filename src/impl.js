export function clamp(x, lo, hi) {
  if (![x, lo, hi].every(value => typeof value === 'number' && Number.isFinite(value))) {
    throw new TypeError('clamp arguments must be finite numbers');
  }
  if (lo > hi) throw new RangeError('clamp lower bound must not exceed upper bound');
  return Math.min(hi, Math.max(lo, x));
}
