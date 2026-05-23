#!/usr/bin/env node
// Build a year-wise, state-wise CONVENTIONAL capacity series from CEA's
// "Installed Capacity of Power Stations (including allocated shares in joint &
// central sector utilities)" reports — the same source the dashboard already
// cites for its 2024-25 snapshot.
//
// Output: data/conventional-history.json
//   { "<canonical state>": [ [coal,lignite,gas,diesel,nuclear], ...per FY... ] }
//   aligned to YEARS = 2017-18 .. 2024-25 (CEA reports as on 31.03.YYYY).
//
// Each state block in the PDF has State / Private / Central / Sub-Total rows;
// we read the Sub-Total row (the state's allocated total). The report layout
// changed over the years, so we key columns off the per-row count:
//   8 cols (FY2017-18): Coal* Gas Diesel ThTot Nuclear Hydro RES Grand  (*incl lignite, no lignite col)
//   9 cols (FY2018-19..2020-21): Coal Lignite Gas Diesel ThTot Nuclear Hydro RES Grand
//  10 cols (FY2021-22..2024-25): Coal Lignite Gas Diesel ThTot Nuclear Hydro RES RenTot Grand
//
// Requires: poppler's `pdftotext` on PATH.
//
// Usage: node scripts/build-conventional-history.mjs [--cache <dir>]

import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = join(__dirname, "..");

// FY label -> CEA "as on 31.03" report URL. Index 0..7 maps to YEARS in app.js.
const YEARS = ["2017-18","2018-19","2019-20","2020-21","2021-22","2022-23","2023-24","2024-25"];
const REPORTS = {
  "2017-18": "https://cea.nic.in/wp-content/uploads/2020/02/installed_capacity-03-3.pdf",
  "2018-19": "https://cea.nic.in/wp-content/uploads/2020/02/installed_capacity-03-4.pdf",
  "2019-20": "https://cea.nic.in/wp-content/uploads/2020/06/installed_capacity-03.pdf",
  "2020-21": "https://cea.nic.in/wp-content/uploads/installed/2021/03/installed_capacity.pdf",
  "2021-22": "https://cea.nic.in/wp-content/uploads/installed/2022/03/installed_capacity.pdf",
  "2022-23": "https://cea.nic.in/wp-content/uploads/installed/2023/03/IC_March_2023.pdf",
  "2023-24": "https://cea.nic.in/wp-content/uploads/installed/2024/03/IC_Mar_2024_allocation_wise.pdf",
  "2024-25": "https://cea.nic.in/wp-content/uploads/installed/2025/03/IC_March_2025_allocation_wise.pdf",
};

// Canonical state names used by the dashboard (keys of CONVENTIONAL in app.js).
const CANON = [
  "Andaman & Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar",
  "Chandigarh","Chhattisgarh","Dadra & Nagar Haveli and Daman & Diu","Delhi","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka",
  "Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
  "Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

// PDF row label (substring, case-insensitive) -> canonical state. Order matters:
// longer / more specific patterns first so e.g. "Andaman & Nicobar" wins.
// Ladakh is always folded into Jammu & Kashmir (legacy combined geography, matching
// the dashboard's existing treatment); the two UTs share one Sub-Total in the PDFs.
// "Daman & Diu" and "Dadra & Nagar(  Naveli)" are summed into the combined UT.
const ALIASES = [
  ["andaman & nicobar", "Andaman & Nicobar Islands"],
  // Older reports list Daman & Diu and Dadra & Nagar Haveli separately (summed);
  // 2020+ they're a single merged UT written with "and" instead of "&".
  ["dadra and nagar", "Dadra & Nagar Haveli and Daman & Diu"],
  ["daman and diu", "Dadra & Nagar Haveli and Daman & Diu"],
  ["dadra & nagar", "Dadra & Nagar Haveli and Daman & Diu"],
  ["daman & diu", "Dadra & Nagar Haveli and Daman & Diu"],
  ["jammu & kashmir", "Jammu & Kashmir"],
  ["ladakh", "Jammu & Kashmir"],
  ...CANON.filter(n => ![
    "Andaman & Nicobar Islands","Dadra & Nagar Haveli and Daman & Diu",
    "Jammu & Kashmir","Ladakh",
  ].includes(n)).map(n => [n.toLowerCase(), n]),
].sort((a, b) => b[0].length - a[0].length);

function fetchPdf(fy, cacheDir) {
  const path = join(cacheDir, `ic_${fy}.pdf`);
  if (!existsSync(path)) {
    console.error(`  downloading ${fy} ...`);
    execFileSync("curl", ["-sL", "--max-time", "120", "-o", path, REPORTS[fy]]);
  }
  return path;
}

const NUM = /-?\d[\d,]*\.\d+/g;
function nums(line) {
  return (line.match(NUM) || []).map(s => parseFloat(s.replace(/,/g, "")));
}

// Map a Sub-Total numeric row to [coal, lignite, gas, diesel, nuclear] by column count.
function conventionalFromRow(N) {
  if (N.length < 8) return null;
  // 8-col (FY2017-18) has no Lignite column: Coal(incl. lignite), Gas, Diesel, ...
  if (N.length === 8) return [N[0], 0, N[1], N[2], N[4]];
  // 9-col / 10-col: Coal, Lignite, Gas, Diesel, ThTot, Nuclear, ...
  return [N[0], N[1], N[2], N[3], N[5]];
}

// Identify which canonical state a label line refers to (or null).
function matchState(label) {
  const s = label.toLowerCase().replace(/\s+/g, " ").trim();
  if (!s || /^(state|private|central|sub-?total|total|grand|ownership)\b/.test(s)) return null;
  for (const [pat, canon] of ALIASES) if (s.includes(pat)) return canon;
  return null;
}

function parseReport(pdfPath) {
  const text = execFileSync("pdftotext", ["-layout", pdfPath, "-"], { encoding: "utf8", maxBuffer: 1 << 24 });
  const out = {};   // canonical -> [c,l,g,d,n]
  let current = null;
  for (const raw of text.split("\n")) {
    const line = raw.replace(/ /g, " ");
    const isSub = /sub-?total/i.test(line);
    if (!isSub) {
      const m = matchState(line.replace(NUM, ""));   // match on non-numeric part
      if (m) current = m;
      continue;
    }
    if (!current) continue;
    const conv = conventionalFromRow(nums(line));
    if (conv) {
      if (out[current]) out[current] = out[current].map((v, i) => +(v + conv[i]).toFixed(2)); // sum (DNH+DD)
      else out[current] = conv;
    }
    current = null;   // each Sub-Total closes its state block
  }
  return out;
}

// ---- main ----
const cacheArg = process.argv.indexOf("--cache");
const cacheDir = cacheArg > -1 ? process.argv[cacheArg + 1] : join(tmpdir(), "cea");
mkdirSync(cacheDir, { recursive: true });

const perYear = {};   // fy -> {state:[...]}
for (const fy of YEARS) {
  const pdf = fetchPdf(fy, cacheDir);
  perYear[fy] = parseReport(pdf);
  const got = Object.keys(perYear[fy]).length;
  console.error(`${fy}: parsed ${got} states from ${pdf.split("/").pop()}`);
}

// Assemble canonical -> [ per-year [c,l,g,d,n] ]; zero-fill missing.
const series = {};
for (const st of CANON) {
  series[st] = YEARS.map(fy => perYear[fy][st] || [0, 0, 0, 0, 0]);
}

// National conventional total per year (sum of states) for a sanity check.
const national = YEARS.map((_, yi) =>
  +CANON.reduce((s, st) => s + series[st][yi].reduce((a, b) => a + b, 0), 0).toFixed(2)
);
console.error("\nNational conventional total (MW) by FY:");
YEARS.forEach((fy, i) => console.error(`  ${fy}: ${national[i].toLocaleString("en-IN")}`));

// Validation: compare parsed 2024-25 against the dashboard's current snapshot.
console.error("\nParsed 2024-25 vs app CONVENTIONAL (allocation-wise vs curated):");
for (const st of ["Rajasthan", "Gujarat", "Tamil Nadu", "Uttar Pradesh", "Maharashtra"]) {
  console.error(`  ${st.padEnd(16)} ${JSON.stringify(series[st][7])}`);
}

const outPath = join(REPO, "data", "conventional-history.json");
writeFileSync(outPath, JSON.stringify({
  _source: "CEA Installed Capacity reports (incl. allocated shares), as on 31.03 each FY",
  _years: YEARS,
  _fields: ["coal", "lignite", "gas", "diesel", "nuclear"],
  _reports: REPORTS,
  data: series,
}, null, 2) + "\n");
console.error(`\nWrote ${outPath}`);
