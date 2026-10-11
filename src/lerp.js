// arcc-uat-alpha lab change for the ARCC-V14-P3-WP2 Controller E2E (no production value).
// lerp(a, b, t): linear interpolation; the README contract style: t is clamped to [0, 1].
export function lerp(a, b, t) {
  return a + (b - a) * t;
}
