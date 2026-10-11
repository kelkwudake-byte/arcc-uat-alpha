// DEPRECATED: the pre-0.2 clamp with swapped argument order. Nothing imports it; scheduled for removal (see SPEC.md item 3).
export function clampLegacy(lo, hi, x) { return x < lo ? lo : x > hi ? hi : x; }
