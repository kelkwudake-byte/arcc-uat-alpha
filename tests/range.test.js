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
