# AGENTS.md

Guidance for AI agents working in this repository. Human-facing docs live in `README.md`; this file captures architecture, conventions, and gotchas an agent needs before making changes.

## What this is

A **static, client-side dashboard** visualizing India's renewable (and conventional) electricity capacity by state, 2017-18 → 2024-25. Interactive canvas choropleth map, state leaderboard, search, year-aware energy-mix bars, several charts, and a narrated "story tour". No backend.

## Tech stack & hard constraints

- **Vanilla HTML + CSS + JavaScript. No framework, no bundler, no build step, no `package.json`, no npm dependencies.** Keep it that way unless explicitly asked.
- `app.js` is a single plain browser script (not an ES module) — top-level `const`s are global to the script. It is loaded with `<script src="app.js">` at the end of `index.html`.
- Browser APIs only (Canvas 2D, `fetch`, `<audio>`, Web Speech is not used; narration is pre-recorded m4a). Target evergreen browsers.
- Node is used **only** for one-off data-prep scripts in `scripts/` (ES modules, `.mjs`).

## Run & preview

```bash
python3 -m http.server 5188      # then open http://127.0.0.1:5188
```

- Append `?story` to auto-start the narrated tour.
- When verifying via a headless/preview browser, **cache-bust** edited assets (`index.html?v=<ts>`) — the static server sends no no-cache headers and stale `app.js`/`styles.css` will be served.
- There are no tests, linter, or typecheck. "Verification" means loading the page in a browser and exercising the change (resize to mobile, drag the timeline, run the tour, check the console for errors).

## File map

| Path | Role |
|------|------|
| `index.html` | Markup + element IDs the JS wires to. ~200 lines. |
| `app.js` | All app logic. Data constants at top, then rendering/interaction. ~1670 lines. |
| `styles.css` | All styling, theming (CSS vars + `body.dark`), responsive rules. |
| `data/india-states-lite.geojson` | Simplified state polygons (only a `name` prop), official Government of India / Survey of India depiction (Ladakh incl. Gilgit-Baltistan + Aksai Chin). Built by `scripts/build-boundaries.mjs`. |
| `data/source-history.json` | Year-wise renewable mix for All-India + Top-5 states. |
| `data/conventional-history.json` | Year-wise state conventional capacity `[coal,lignite,gas,diesel,nuclear]` (from CEA; see below). |
| `scripts/*.mjs` | One-off Node data-prep tools (not run at page load). |
| `images/`, `renewaudio/` | Story-tour photos and pre-recorded narration; credits in `images/CREDITS.md`. |

## Architecture (app.js)

Top-of-file data constants (edit these to change data):
- `YEARS` — the 8 fiscal-year labels; array index drives every time series.
- `CAPACITY` — per-state 2024-25 renewable mix `[solar, wind, smallHydro, bio]` (order = `SOURCES`).
- `CONVENTIONAL` — per-state 2024-25 conventional `[coal, lignite, gas, diesel, nuclear]`.
- `SOURCE_HISTORY` — year-wise renewable mix for India + Top-5 states.
- `MODE`, `SOURCES` — metric/source display metadata (labels + colors).
- `ALIAS` — maps GeoJSON/legacy state names to canonical names (e.g. `Orissa`→`Odisha`).
- `PHOTOS`, `STORY` — the story-tour scenes (caption, photo, narration audio, map action).

Rendering model:
- The map is **hand-drawn on a `<canvas>`** (`buildPaths` projects GeoJSON to `Path2D`; `draw` fills choropleth). Not SVG/Leaflet. Resizing rebuilds paths (`requestBuild`/`buildPaths`); DPR is capped at 2 for mobile perf.
- State selection is shared: clicking the map **or** a leaderboard row calls `selectState`. The panel (`updatePanel`, `updateRankings`, `renderMixBars`, charts) re-renders from the current `selected`/`year`/`mode`.
- Charts (`drawSpark`, `drawShareTrend`, `drawSourceChart`) are also canvas, redrawn on state/year/mode changes.
- Story tour: `STORY` scenes run via `runScene`; map camera animates with `flyTo`/`sweepYears`; overlay is self-contained (works even when the map is hidden).

## Conventions & principles

- **Real data only — never fabricate or estimate.** Where a year/state figure isn't published, show "unknown"/grey rather than interpolating. Several functions (`shareMetric`, `conventionalSplit`, `conventionalTotal`) deliberately return `null`/`{known:false}` for unavailable data. Preserve this.
- **State names** must round-trip through `nameFor`/`ALIAS` to canonical forms. The boundary file bakes canonical names at build time (see `scripts/build-boundaries.mjs`), so `ALIAS` is defensive. One quirk: Dadra & Nagar Haveli and Daman & Diu are **two polygons sharing one canonical name** — per-state-name selection/choropleth already treats them as one entity.
- **Boundary depiction is a hard requirement:** the map must show India's boundaries as per the Government of India / Survey of India political map (Ladakh reaching ≥37°N incl. Gilgit-Baltistan and Aksai Chin). `build-boundaries.mjs` asserts this; never swap in a de-facto-boundary dataset.
- **Responsive:** at `≤900px` the map moves below the state card in the inspector (`placeMap()` in `app.js`) and the year timeline becomes a fixed bottom dock; one-finger swipes scroll past the map, two-finger pinch zooms it. Keep mobile changes behind the existing `@media (max-width: 900px)` block and the `isMobile()` guard.
- **Accessibility:** preserve ARIA roles, `aria-live` regions, the `#ariaAnnouncements` channel (`announce()`), keyboard handlers, and `prefers-reduced-motion` checks.
- **Theming:** use existing CSS custom properties; support both light and `body.dark`.
- **CSS specificity:** base component rules sometimes appear *after* media queries in `styles.css`, so a later base rule can override a media-query rule of equal specificity — bump specificity (e.g. `.topbar .story-launch-btn`) when a responsive override doesn't take.

## Regenerating data (`scripts/`)

These are manual, not part of any build:

- `node scripts/build-boundaries.mjs` — rebuild `data/india-states-lite.geojson` from datta07/INDIAN-SHAPEFILES (pinned commit, MIT): downloads, renames `STNAME_SH` to the app's canonical state names, Douglas–Peucker-simplifies, and asserts the official-depiction extent (Ladakh ≥37°N/80.2°E) plus full 36-state coverage before writing. No deps.
- `node scripts/build-conventional-history.mjs` — rebuild `data/conventional-history.json` from CEA "Installed Capacity (incl. allocated shares)" reports. **Requires `pdftotext` (poppler) on PATH.** Downloads the 8 FY-end PDFs (URL map is in the script), parses each state's *Sub-Total* row, normalizes names. Notes: it's allocation-wise (differs from the curated `CONVENTIONAL` snapshot in `app.js`); the 2017-18 report folds lignite into coal; NLC/DVC/central-unallocated rows are excluded; Ladakh is folded into J&K.

When adding a data year or source, update `YEARS` and every aligned series together so indices stay consistent.

## Git & deploy

- Deployed via **Vercel** (`.vercel` is gitignored); it serves the static files as-is — no build command.
- Default branch is `main`. Branch before committing; only commit/push when asked.
- Don't commit downloaded report PDFs or generated caches — only the resulting `data/*.json`.
