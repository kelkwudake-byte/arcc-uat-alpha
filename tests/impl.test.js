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
