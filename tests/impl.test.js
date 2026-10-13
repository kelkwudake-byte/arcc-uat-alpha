import test from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/impl.js';

test('clamp returns lo below the range, hi above it, x inside it', () => {
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(7, 0, 10), 7);
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
});

test('clamp rejects non-finite or non-number arguments with TypeError', () => {
  for (const invalid of [NaN, Infinity, -Infinity, '3', null, undefined]) {
    assert.throws(() => clamp(invalid, 0, 10), TypeError);
    assert.throws(() => clamp(5, invalid, 10), TypeError);
    assert.throws(() => clamp(5, 0, invalid), TypeError);
  }
});

test('clamp rejects reversed bounds with RangeError', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
  assert.equal(clamp(5, 5, 5), 5);
});
