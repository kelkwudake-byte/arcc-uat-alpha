import test from 'node:test';
import assert from 'node:assert/strict';
import { range } from '../src/range.js';

test('range counts upwards, includes start, and excludes end', () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
  assert.deepEqual(range(1, 7, 2), [1, 3, 5]);
});

test('range counts down with a negative step', () => {
  assert.deepEqual(range(5, 0, -2), [5, 3, 1]);
});

test('range is empty when endpoints are equal or the step points away', () => {
  assert.deepEqual(range(3, 3), []);
  assert.deepEqual(range(5, 0), []);
  assert.deepEqual(range(0, 5, -1), []);
});

test('range rejects a zero step', () => {
  assert.throws(() => range(0, 5, 0), RangeError);
});

test('range rejects non-finite or non-number arguments', () => {
  assert.throws(() => range('0', 5), TypeError);
  assert.throws(() => range(undefined, 5), TypeError);
  assert.throws(() => range(0, undefined), TypeError);
  assert.throws(() => range(NaN, 5), TypeError);
  assert.throws(() => range(0, Infinity), TypeError);
  assert.throws(() => range(0, 5, NaN), TypeError);
  assert.throws(() => range(0, 5, '1'), TypeError);
});

test('range rejects steps too small to advance either direction', () => {
  assert.throws(() => range(1, 2, Number.MIN_VALUE), RangeError);
  assert.throws(() => range(2, 1, -Number.MIN_VALUE), RangeError);
});

test('range rejects oversized results instead of returning partial ranges', () => {
  assert.throws(() => range(0, 1_000_002), RangeError);
});
