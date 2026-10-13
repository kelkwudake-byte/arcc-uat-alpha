export function range(start, end, step = 1) {
  if (![start, end, step].every(value => typeof value === 'number' && Number.isFinite(value))) {
    throw new TypeError('range arguments must be finite numbers');
  }
  if (step === 0) {
    throw new RangeError('range step must not be zero');
  }

  const values = [];
  const maxLength = 1_000_000;
  const ascending = step > 0;
  for (let value = start; ascending ? value < end : value > end;) {
    if (values.length >= maxLength) {
      throw new RangeError('range exceeds maximum supported length');
    }
    const next = value + step;
    if (next === value) {
      throw new RangeError('range step is too small to make progress');
    }
    values.push(value);
    value = next;
  }
  return values;
}
