export function range(start, end, step = 1) {
  if (![start, end, step].every(x => typeof x === 'number' && Number.isFinite(x))) {
    throw new TypeError('Arguments must be finite numbers');
  }
  if (step === 0) throw new RangeError('Step cannot be zero');
  const values = [];
  if (step > 0) {
    for (let x = start; x < end; x += step) values.push(x);
  } else {
    for (let x = start; x > end; x += step) values.push(x);
  }
  return values;
}
