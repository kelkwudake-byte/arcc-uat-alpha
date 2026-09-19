// UAT canary for the v1.2 S4 L13 live qualification (final Completion Gate review at the DEEP floor).
// Contract: lerp(a, b, t) returns a + (b - a) * t for t in [0, 1]; t outside [0, 1] is clamped to the range.
import { clamp } from './impl.js';

export function lerp(a, b, t) {
  const k = clamp(t, 0, 1);
  return a + (b - a) * k;
}
