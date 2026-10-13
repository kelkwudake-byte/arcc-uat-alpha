export function range(start, end, step = 1) {
  if (![start, end, step].every(Number.isFinite)) {
    throw new TypeError('range arguments must be finite numbers');
  }
  if (step === 0) {
    throw new RangeError('range step must not be zero');
  }

  const values = [];
  for (let value = start; step > 0 ? value < end : value > end;) {
    values.push(value);
    const next = value + step;
    if (next === value) {
      break; // Floating-point precision prevents further progress.
    }
    value = next;
  }
  return values;
}
