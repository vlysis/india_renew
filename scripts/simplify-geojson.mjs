// One-off: shrink data/india-states-lite.geojson for faster mobile loads.
// Douglas–Peucker per ring + round coords to 3 decimals (~110 m) + keep only
// the `name` property (all the app reads). Guards small rings so islands/tiny
// states don't collapse. Run: node scripts/simplify-geojson.mjs
import { readFileSync, writeFileSync } from "node:fs";

const SRC = "data/india-states-lite.geojson";
const EPS = 0.01;          // simplification tolerance in degrees (~1.1 km)
const MIN_RING = 4;        // never reduce a ring below this many points

const perpDist = (p, a, b) => {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  if (dx === 0 && dy === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy);
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
};

function dp(pts, eps) {
  if (pts.length < 3) return pts;
  let maxD = 0, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = perpDist(pts[i], pts[0], pts[pts.length - 1]);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD > eps) {
    const left = dp(pts.slice(0, idx + 1), eps);
    const right = dp(pts.slice(idx), eps);
    return left.slice(0, -1).concat(right);
  }
  return [pts[0], pts[pts.length - 1]];
}

const round = ([lon, lat]) => [Math.round(lon * 1000) / 1000, Math.round(lat * 1000) / 1000];

// Round, then drop consecutive duplicate points created by rounding.
const roundDedupe = (ring) =>
  ring.map(round).filter((p, i, a) => i === 0 || p[0] !== a[i - 1][0] || p[1] !== a[i - 1][1]);

function simplifyRing(ring) {
  let out = roundDedupe(dp(ring, EPS));
  if (out.length < MIN_RING) out = roundDedupe(ring);   // collapsed too far: keep rounded original
  if (out.length && (out[0][0] !== out.at(-1)[0] || out[0][1] !== out.at(-1)[1])) out.push(out[0]); // re-close
  return out;
}

// Simplify a polygon's rings, dropping degenerate (<MIN_RING) ones. If they all
// collapse, keep the largest so the feature never disappears.
function simplifyPolygon(poly) {
  const rings = poly.map(simplifyRing);
  const good = rings.filter((r) => r.length >= MIN_RING);
  return good.length ? good : [rings.reduce((a, b) => (b.length > a.length ? b : a))];
}

const geo = JSON.parse(readFileSync(SRC, "utf8"));

for (const f of geo.features) {
  const g = f.geometry;
  f.properties = { name: f.properties?.name };    // strip everything but name
  if (g.type === "Polygon") g.coordinates = simplifyPolygon(g.coordinates);
  else g.coordinates = g.coordinates.map(simplifyPolygon).filter((p) => p.length); // MultiPolygon
}

const out = JSON.stringify(geo);
writeFileSync(SRC, out);
console.log(`features: ${geo.features.length}`);
console.log(`names: ${geo.features.map((f) => f.properties.name).join(", ")}`);
