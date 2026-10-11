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

test('clamp rejects non-finite and non-number inputs with TypeError', () => {
  for (const args of [
    [NaN, 0, 10], [Infinity, 0, 10], ['5', 0, 10],
    [5, NaN, 10], [5, 0, -Infinity], [5, '0', 10],
    [undefined, 0, 10], [5, undefined, 10], [5, 0, undefined]
  ]) {
    assert.throws(() => clamp(...args), TypeError);
  }
});

test('clamp rejects reversed bounds with RangeError', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
  assert.equal(clamp(4, 4, 4), 4);
});
