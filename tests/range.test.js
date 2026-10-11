import test from 'node:test';
import assert from 'node:assert/strict';
import { range } from '../src/range.js';

test('positive ranges', () => {
  assert.deepEqual(range(0, 5), [0, 1, 2, 3, 4]);
  assert.deepEqual(range(1, 8, 3), [1, 4, 7]);
});

test('negative step', () => {
  assert.deepEqual(range(5, 0, -2), [5, 3, 1]);
});

test('empty range', () => {
  assert.deepEqual(range(3, 3), []);
  assert.deepEqual(range(5, 0, 1), []);
  assert.deepEqual(range(0, 5, -1), []);
});

test('zero step raises RangeError', () => {
  assert.throws(() => range(0, 5, 0), RangeError);
});

test('invalid arguments raise TypeError', () => {
  for (const args of [[NaN, 5], [0, Infinity], ['0', 5], [undefined, 5], [0, undefined], [0, 5, NaN], [0, 5, '1']]) {
    assert.throws(() => range(...args), TypeError);
  }
});

test('range rejects a step that does not advance at floating-point precision', () => {
  assert.throws(() => range(1e20, 1e21, 1), RangeError);
  assert.throws(() => range(-1e20, -1e21, -1), RangeError);
});

test('range returns complete valid results beyond one million elements', () => {
  const values = range(0, 1_000_002);
  assert.equal(values.length, 1_000_002);
  assert.deepEqual(values.slice(0, 3), [0, 1, 2]);
  assert.deepEqual(values.slice(-3), [999_999, 1_000_000, 1_000_001]);
  assert.deepEqual(range(2, 0, -1), [2, 1]);
});
