import test from 'node:test';
import assert from 'node:assert/strict';
import { range } from '../src/range.js';

test('range generates ascending values, excluding the end', () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
  assert.deepEqual(range(1, 8, 3), [1, 4, 7]);
});

test('range counts down with a negative step', () => {
  assert.deepEqual(range(5, 0, -2), [5, 3, 1]);
});

test('range returns an empty array when endpoints match or step points away', () => {
  assert.deepEqual(range(3, 3), []);
  assert.deepEqual(range(5, 0), []);
  assert.deepEqual(range(0, 5, -1), []);
});

test('range rejects a zero step with RangeError', () => {
  assert.throws(() => range(0, 5, 0), RangeError);
});

test('range rejects non-number and non-finite arguments with TypeError', () => {
  assert.throws(() => range('0', 5), TypeError);
  assert.throws(() => range(undefined, 5), TypeError);
  assert.throws(() => range(0, undefined), TypeError);
  assert.throws(() => range(0, 5, '1'), TypeError);
  assert.throws(() => range(0, 5, NaN), TypeError);
  assert.throws(() => range(0, Infinity), TypeError);
});
