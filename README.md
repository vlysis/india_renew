# India Renewables Map

A static, map-first visualization of Indian renewable energy capacity by state.

## Run

```bash
python3 -m http.server 5188
```

Then open `http://127.0.0.1:5188`. Append `?story` to the URL to auto-start the narrated story tour (also launchable from the "Watch the Story" button).

## Features

- Interactive choropleth map with zoom/pan, leaderboard, search, light/dark themes.
- **Sources Over Time**: a stacked-area chart showing how solar, wind, small hydro and bio capacity grew year by year (all-India and each Top 5 state).
- **Year-aware energy mix**: dragging the timeline updates the per-source breakdown (solar/wind/small-hydro/bio/large-hydro + coal/lignite/gas/diesel/nuclear) using **real data only**. Where a year's figures aren't published, the panel shows **"unknown"** rather than estimating. Coverage: renewable sources are real for All-India and the Top 5 states across all years, and for every state in 2024-25; large hydro is derived as (total RE − the four RES sources); conventional fuels are published only for 2024-25 (CEA, 31.03.2025), so earlier years read "unknown". The renewable-vs-conventional share strip is real for All-India every year (from the national totals series).
- **Narrated Story Tour**: a kid-friendly guided walkthrough (mascot, big captions, optional spoken narration via the Web Speech API) that flies the map between states and animates the source growth. Press the dots/arrows to navigate, space to pause, Esc to exit.

## Data

- Capacity time series and 2024-25 source mix: MNRE Renewable Energy Statistics 2024-25, tables 8.1 and 8.2.
- Year-wise capacity by source (powers Sources Over Time + the story tour): MNRE Renewable Energy Statistics 2024-25, Table 2.1 (all-India) and Chapters 11-15 / Tables 11.2.1-15.2.1 (Rajasthan, Gujarat, Tamil Nadu, Karnataka, Maharashtra). These use the MNRE "RES" definition (solar, wind, small hydro, bio; large hydro excluded). Compiled in `data/source-history.json`.
- Conventional capacity comparison: CEA/National Power Portal state-wise installed capacity reports as of March 31, 2025.
- National renewable share trend: CEA Growth of Electricity Sector in India 2025. The 2025-26 projection extrapolates from PIB/Ministry of Power installed capacity data as of January 31, 2026.
- State boundary layer: open India states GeoJSON from Subhash9325/GeoJson-Data-of-Indian-States.

The open boundary layer uses older Andhra/Telangana and J&K/Ladakh geography, so Telangana and Ladakh are represented in the data and beacon layer while the base polygons carry the legacy boundaries.
