const MAX_RANGE_ITEMS = 1_000_000;

export function range(start, end, step = 1) {
  if (![start, end, step].every(x => typeof x === 'number' && Number.isFinite(x))) {
    throw new TypeError('Arguments must be finite numbers');
  }
  if (step === 0) throw new RangeError('Step cannot be zero');
  const values = [];
  for (let x = start; step > 0 ? x < end : x > end;) {
    if (values.length >= MAX_RANGE_ITEMS) {
      throw new RangeError('Range exceeds the maximum supported length');
    }
    const next = x + step;
    if (next === x) {
      throw new RangeError('Step is too small to advance the range');
    }
    values.push(x);
    x = next;
  }
  return values;
}
