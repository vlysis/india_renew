// Build data/india-states-lite.geojson from datta07/INDIAN-SHAPEFILES, which
// depicts India's boundaries as per the Government of India / Survey of India
// political map (Ladakh includes Gilgit-Baltistan and Aksai Chin, ~37°N/80.3°E)
// with post-2019 geography (separate J&K + Ladakh, Telangana, modern names).
//
// Pipeline: download (pinned commit) -> rename props to the app's canonical
// state names -> Douglas–Peucker simplify + 3-decimal rounding (~110 m) ->
// validate -> write. Run: node scripts/build-boundaries.mjs
import { writeFileSync } from "node:fs";

// Pinned for reproducibility (datta07/INDIAN-SHAPEFILES master @ 2026-07-16).
const COMMIT = "2c028f5c30fb4191ca1639ff136b152cecdbb69f";
const SRC_URL = `https://raw.githubusercontent.com/datta07/INDIAN-SHAPEFILES/${COMMIT}/INDIA/INDIA_STATES.geojson`;
const OUT = "data/india-states-lite.geojson";

const EPS = 0.01;          // simplification tolerance in degrees (~1.1 km)
const MIN_RING = 4;        // never reduce a ring below this many points

// Source STNAME_SH values that differ from the app's canonical names
// (`CAPACITY` keys in app.js). Everything else matches exactly. DNH and DD are
// two features in the source; both map to the single merged UT, so the app's
// per-state-name selection/choropleth treats them as one entity.
const RENAME = {
  "Andaman & Nicobar": "Andaman & Nicobar Islands",
  "Dadra & Nagar Haveli": "Dadra & Nagar Haveli and Daman & Diu",
  "Daman & Diu": "Dadra & Nagar Haveli and Daman & Diu",
};

// The 36 states/UTs the app has data for — the output must cover exactly these.
const CANONICAL = [
  "Andaman & Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

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

function boundsOf(features) {
  let minX = 180, maxX = -180, minY = 90, maxY = -90;
  for (const f of features) {
    const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    polys.forEach((p) => p.forEach((ring) => ring.forEach(([x, y]) => {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    })));
  }
  return { minX, maxX, minY, maxY };
}

console.log(`Downloading ${SRC_URL} ...`);
const res = await fetch(SRC_URL);
if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
const geo = await res.json();

for (const f of geo.features) {
  const src = f.properties?.STNAME_SH;
  const name = RENAME[src] ?? src;
  if (!CANONICAL.includes(name)) throw new Error(`unexpected state name in source: ${JSON.stringify(src)}`);
  f.properties = { name };
  const g = f.geometry;
  if (g.type === "Polygon") g.coordinates = simplifyPolygon(g.coordinates);
  else g.coordinates = g.coordinates.map(simplifyPolygon).filter((p) => p.length);
}

// Every canonical state must be present...
const present = new Set(geo.features.map((f) => f.properties.name));
for (const n of CANONICAL) {
  if (!present.has(n)) throw new Error(`missing state after build: ${n}`);
}
// ...and Ladakh must retain the official Government of India extent
// (Gilgit-Baltistan + Aksai Chin). This is the whole point of the dataset.
const ladakh = boundsOf(geo.features.filter((f) => f.properties.name === "Ladakh"));
if (ladakh.maxY < 37.0 || ladakh.maxX < 80.2) {
  throw new Error(`Ladakh extent regressed (${JSON.stringify(ladakh)}); expected >=37.0N and >=80.2E`);
}

const out = JSON.stringify(geo);
writeFileSync(OUT, out);

let pts = 0;
geo.features.forEach((f) => {
  const p = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  p.forEach((poly) => poly.forEach((r) => (pts += r.length)));
});
console.log(`features: ${geo.features.length} (${present.size} states)`);
console.log(`points: ${pts}, bytes: ${out.length}`);
console.log(`Ladakh bounds: ${JSON.stringify(ladakh)}`);
