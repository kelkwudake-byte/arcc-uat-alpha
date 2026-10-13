export function range(start, end, step = 1) {
  if (![start, end, step].every(value => typeof value === 'number' && Number.isFinite(value))) {
    throw new TypeError('range arguments must be finite numbers');
  }
  if (step === 0) {
    throw new RangeError('range step must not be zero');
  }

  const values = [];
  if (step > 0) {
    for (let value = start; value < end; value += step) {
      values.push(value);
    }
  } else {
    for (let value = start; value > end; value += step) {
      values.push(value);
    }
  }
  return values;
}
