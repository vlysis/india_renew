const YEARS = ["2017-18", "2018-19", "2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"];
const NATIONAL_SHARE = {
  years: ["2017-18","2018-19","2019-20","2020-21","2021-22","2022-23","2023-24","2024-25","2025-26 proj"],
  renewable: [115945,124811,133955,142012,156608,172010,190573,220096,271808],
  total: [345631,357871,371334,383521,399497,416059,441970,475212,529571]
};
const CAPACITY = {
  "Rajasthan":[7289.36,8223.73,10134.97,10812.35,17451.62,22809.05,27103.89,34136.34],
  "Gujarat":[9339.45,10697.72,12683.77,15204.25,18577.90,21425.85,27461.72,33393.03],
  "Tamil Nadu":[13451.7,14909.40,16588.8,17476.70,18277.5,20098.60,22161.60,25241.36],
  "Karnataka":[16241.60,17524.40,18918.10,19149.30,19593.8,20408.40,21441.90,23917.64],
  "Maharashtra":[11519.21,12421.69,12822.27,13382.85,13704.08,15804.50,17530.12,22401.46],
  "Himachal Pradesh":[10514.30,10707.75,10768.91,10916.61,11303.49,11330.42,11356.16,12196.18],
  "Andhra Pradesh":[8060.58,9560.02,10091.40,10696.10,10821.6,10970.20,11029.30,12114.48],
  "Madhya Pradesh":[6445.13,6864.87,7285.75,7526.97,7703.88,8140.08,9333.37,10827.7],
  "Telangana":[6507.48,6405.96,6442.85,6796.59,7364.79,7510.97,7604.40,7688.34],
  "Uttar Pradesh":[3447.25,3739.46,3900.97,4563.07,4985.12,5282.65,5697.17,6223.91],
  "Uttarakhand":[4379.83,4426.88,4437.96,4589.24,4787.15,4909.14,4971.94,5010.77],
  "Kerala":[2282.06,2290.71,2304.35,2428.92,2527.2,2957.10,3229.46,3853.38],
  "Jammu & Kashmir":[3650.22,3664.10,3581.11,3588.11,3551.61,3556.12,3595.37,3624.42],
  "Punjab":[2626.98,2522.38,2566.86,2743.80,2864.12,2961.93,3163.92,3270.42],
  "Odisha":[2364.94,2681.68,2686.38,2715.63,2771.64,2782.57,2825.03,2958.84],
  "Haryana":[510.49,519.11,547.19,762.51,1242.13,1362.09,1832.92,2449.94],
  "Sikkim":[2222.98,2222.99,2223.05,2223.05,2338.79,2341.80,2344.15,2344.67],
  "West Bengal":[1747.46,1849.29,1888.03,1923.44,1928.15,1962.77,1982.13,2112.18],
  "Chhattisgarh":[785.42,850.77,864.89,886.52,989.08,1419.82,1683.39,1828.46],
  "Arunachal Pradesh":[517.00,655.69,955.98,1256.27,1257.34,1259.75,1259.90,1270.46],
  "Assam":[378.39,414.58,433.86,437.67,504.05,534.04,542.29,582.65],
  "Bihar":[346.18,352.23,365.09,376.63,387.35,389.60,450.15,539.26],
  "Jharkhand":[320.14,267.87,273.80,288.21,307.14,324.19,395.55,434.06],
  "Delhi":[123.03,180.35,218.62,246.43,270.12,302.26,340.51,397.4],
  "Meghalaya":[418.85,372.18,372.18,372.18,372.48,372.48,395.07,395.11],
  "Ladakh":[0,0,89.00,89.00,136.44,137.79,139.79,142.59],
  "Mizoram":[100.16,101.20,102.52,103.45,104.37,133.49,135.78,135.86],
  "Manipur":[115.28,118.66,120.43,121.84,122.70,122.73,123.49,124.24],
  "Nagaland":[108.51,108.51,108.51,108.58,108.71,110.71,110.84,110.84],
  "Chandigarh":[26.01,35.52,41.36,45.97,55.17,58.69,65.52,78.85],
  "Goa":[1.08,4.09,5.29,7.95,20.34,26.88,45.47,58.43],
  "Puducherry":[0.34,3.32,5.69,9.51,13.69,35.53,49.91,54.51],
  "Dadra & Nagar Haveli and Daman & Diu":[16.07,19.93,25.32,46.01,46.18,46.47,46.47,51.87],
  "Tripura":[24.53,24.53,28.91,29.57,30.9,33.61,34.47,37.25],
  "Andaman & Nicobar Islands":[12.05,17.22,17.68,34.71,34.74,35.16,35.16,35.16],
  "Lakshadweep":[3.14,3.14,3.27,3.27,3.27,3.27,4.97,4.97]
};
const MIX = {
  "Rajasthan":[28286.47,5208.75,434.85,206.27],"Gujarat":[18496.66,12677.48,2096.64,122.25],
  "Tamil Nadu":[10153.58,11739.91,2301.25,1046.62],"Karnataka":[9679.66,7351.10,4973.93,1912.95],
  "Maharashtra":[10687.27,5284.61,3431.28,2998.30],"Himachal Pradesh":[204.26,0,11981.73,10.20],
  "Andhra Pradesh":[5370,4377.15,1773.31,594.02],"Madhya Pradesh":[5118.38,3195.15,2358.71,155.46],
  "Telangana":[4842.10,128.10,2496.47,221.67],"Uttar Pradesh":[3364.07,0,550.70,2309.14],
  "Uttarakhand":[593.07,0,4269.17,148.53],"Kerala":[1538.94,71.27,2240.67,2.50],
  "Jammu & Kashmir":[74.49,0,3549.93,0],"Punjab":[1421.43,0,1272.40,576.59],
  "Odisha":[624.44,0,2270.18,64.22],"Haryana":[2064.97,0,73.50,311.47],
  "Sikkim":[7.56,0,2337.11,0],"West Bengal":[320.62,0,1439.70,351.86],
  "Chhattisgarh":[1347.04,0,196,285.42],"Arunachal Pradesh":[14.85,0,1255.61,0],
  "Assam":[196.54,0,384.11,2],"Bihar":[328.34,0,70.70,140.22],
  "Jharkhand":[199.87,0,214.05,20.14],"Delhi":[313.40,0,0,84],
  "Meghalaya":[4.28,0,377.03,13.80],"Ladakh":[7.80,0,134.79,0],
  "Mizoram":[30.39,0,105.47,0],"Manipur":[13.79,0,110.45,0],
  "Nagaland":[3.17,0,107.67,0],"Chandigarh":[78.85,0,0,0],
  "Goa":[56.44,0,0.05,1.94],"Puducherry":[54.51,0,0,0],
  "Dadra & Nagar Haveli and Daman & Diu":[48.12,0,0,3.75],"Tripura":[21.24,0,16.01,0],
  "Andaman & Nicobar Islands":[29.91,0,5.25,0],"Lakshadweep":[4.97,0,0,0]
};
const CONVENTIONAL = {
  "Andaman & Nicobar Islands":[0,0,0,92.71,0],"Andhra Pradesh":[13190,0,4678.54,36.80,0],
  "Arunachal Pradesh":[0,0,0,0,0],"Assam":[750,0,597.35,0,0],"Bihar":[9060,0,0,0,0],
  "Chandigarh":[0,0,0,0,0],"Chhattisgarh":[23493,0,0,0,0],"Dadra & Nagar Haveli and Daman & Diu":[0,0,0,0,0],
  "Delhi":[0,0,2208.40,0,0],"Goa":[0,0,0,0,0],"Gujarat":[14692,1400,6580.31,0,1840],
  "Haryana":[5330,0,431.59,0,0],"Himachal Pradesh":[0,0,0,0,0],"Jammu & Kashmir":[0,0,175,0,0],
  "Jharkhand":[5570,0,0,0,0],"Karnataka":[9480,0,370.05,25.20,880],"Kerala":[0,0,533.58,159.96,0],
  "Ladakh":[0,0,0,0,0],"Lakshadweep":[0,0,0,26.83,0],"Madhya Pradesh":[21170,0,0,0,0],
  "Maharashtra":[23316.01,0,2819.08,0,1400],"Manipur":[0,0,0,36,0],"Meghalaya":[0,0,0,0,0],
  "Mizoram":[0,0,0,0,0],"Nagaland":[0,0,0,0,0],"Odisha":[9600,0,0,0,0],
  "Puducherry":[0,0,32.50,0,0],"Punjab":[5680,0,0,0,0],"Rajasthan":[9200,1580,1022.83,0,1180],
  "Sikkim":[0,0,0,0,0],"Tamil Nadu":[10522.50,3640,1027.18,211.70,2440],"Telangana":[10242.50,0,0,0,0],
  "Tripura":[0,0,1067.60,0,0],"Uttar Pradesh":[28035,0,1493.14,0,440],"Uttarakhand":[0,0,664,0,0],
  "West Bengal":[13487,0,80,0,0]
};
const ALIAS = {"Andaman and Nicobar":"Andaman & Nicobar Islands","Dadra and Nagar Haveli":"Dadra & Nagar Haveli and Daman & Diu","Daman and Diu":"Dadra & Nagar Haveli and Daman & Diu","Jammu and Kashmir":"Jammu & Kashmir","Orissa":"Odisha","Pondicherry":"Puducherry","Uttaranchal":"Uttarakhand"};
const MODE = {
  total: ["Total renewable capacity", [47, 122, 90]],
  solar: ["Solar capacity in 2024-25", [221, 168, 58]],
  wind: ["Wind capacity in 2024-25", [76, 145, 160]],
  hydro: ["Hydro capacity in 2024-25", [59, 111, 158]]
};

// Real year-wise renewable capacity by source (MW) for India + Top-5 RE states.
// Source order: [solar, wind, smallHydro, bio]. Years align with YEARS[0..7] (2017-18..2024-25).
// Source: MNRE Renewable Energy Statistics 2024-25 (Table 2.1 national; Chapters 11-15 states).
// Categories are MNRE "RES" (solar, wind, small hydro, bio); large hydro excluded.
const SOURCE_HISTORY = {
  "India":[[22350,34150,4490,9670],[29100,35630,4590,10100],[35600,37740,4680,10230],[41240,39250,4790,10540],[54000,40360,4850,10690],[66780,42630,4940,10800],[81810,45890,5000,10950],[105650,50040,5100,11580]],
  "Rajasthan":[[2431.66,4297.72,23.85,125.13],[3364.03,4299.72,23.85,125.13],[5275.27,4299.72,23.85,125.13],[5925.60,4326.82,23.85,125.08],[12564.87,4326.82,23.85,125.08],[17055.70,5193.42,23.85,125.08],[21347.58,5195.82,23.85,125.64],[28286.47,5208.75,23.85,206.27]],
  "Gujarat":[[1626.19,5613.42,28.54,81.24],[2478.32,6073.07,61.24,95.03],[2986.77,7541.52,68.95,96.53],[4469.87,8561.82,82.69,99.87],[7180.03,9209.22,89.39,109.26],[9254.56,9978.92,91.64,110.73],[13544.88,11722.72,91.64,112.48],[18496.66,12677.48,106.64,122.25]],
  "Tamil Nadu":[[1950.86,8197.09,123.05,977.52],[2618.71,8968.91,123.05,1020.52],[3961.56,9304.34,123.05,1021.69],[4527.47,9608.04,123.05,1039.91],[5067.18,9866.37,123.05,1042.70],[6736.43,10017.17,123.05,1043.70],[8211.38,10603.54,123.05,1045.45],[10153.58,11739.91,123.05,1046.62]],
  "Karnataka":[[4965.25,4608.40,1230.73,1779.81],[6120.76,4694.90,1254.73,1809.81],[7306.18,4790.60,1280.73,1896.42],[7383.88,4938.60,1280.73,1901.92],[7590.81,5130.90,1280.73,1902.15],[8241.40,5294.95,1280.73,1902.15],[8544.68,6019.61,1280.73,1907.72],[9679.66,7351.10,1284.73,1912.95]],
  "Maharashtra":[[1251.40,4783.93,373.18,2223.70],[1648.46,4794.13,375.57,2556.53],[1835.62,5000.33,379.58,2559.74],[2323.79,5000.33,379.58,2632.15],[2631.02,5012.83,381.08,2632.15],[4722.90,5012.83,381.08,2640.69],[6249.67,5207.98,382.28,2643.19],[10687.27,5284.61,384.28,2998.30]]
};

// Source display metadata: [label, emoji, cssColorVar]
const SOURCES = [
  ["Solar", "☀️", "var(--sun)"],
  ["Wind", "💨", "var(--wind)"],
  ["Hydro", "💧", "var(--water)"],
  ["Bio", "🌿", "var(--bio)"]
];

// Approx map centroids (lon,lat) for the camera to fly to during the story tour.
const STATE_CENTROIDS = {
  "India":[80.0,22.5],
  "Rajasthan":[74.2,26.8],
  "Gujarat":[71.4,22.7],
  "Tamil Nadu":[78.3,11.2],
  "Karnataka":[76.2,14.7],
  "Maharashtra":[75.7,19.4]
};

const $ = (id) => document.getElementById(id);

// Canvas and Rendering Contexts
const canvas = $("indiaMap");
const ctx = canvas.getContext("2d");
const spark = $("sparkline");
const sctx = spark.getContext("2d");
const shareTrend = $("shareTrend");
const shctx = shareTrend.getContext("2d");
const sourceChart = $("sourceChart");
const scctx = sourceChart.getContext("2d");

// Main App State Variables
let geo;
let paths = [];
let year = 7;
let selected = null; // null = National Overview
let hover = null;
let mode = "total";
let timer = null;

// Zoom and Pan Camera Engine
let zoom = 1;
let pan = { x: 0, y: 0 };
let isDragging = false;
let startDrag = { x: 0, y: 0 };
let basePan = { x: 0, y: 0 };
let dragMoved = false;

// Interactive Chart Hover Index
let sparkHoverIdx = -1;
let shareHoverIdx = -1;

// Utilities
const fmt = (v) => Math.round(v).toLocaleString("en-IN");
const total = (s, y = year) => CAPACITY[s]?.[y] ?? 0;
const mix = (s) => MIX[s] ?? [0,0,0,0];
const conventional = (s) => CONVENTIONAL[s] ?? [0,0,0,0,0];
const nonRenewableTotal = (s) => conventional(s).reduce((sum, value) => sum + value, 0);
const metric = (s) => mode === "total" ? total(s) : mode === "solar" ? mix(s)[0] : mode === "wind" ? mix(s)[1] : mix(s)[2];
const maxMetric = () => Math.max(...Object.keys(CAPACITY).map(metric));
const nameFor = (n) => ALIAS[n] ?? n;

// Map coloring as a SHARE of all installed capacity (renewable + conventional).
// total -> renewable/all ; solar -> solar/all ; wind -> wind/all ; hydro -> hydro/all.
// Needs conventional data, which is real only for 2024-25 -> returns null (grey) for other years.
function shareMetric(s) {
  if (year !== 7) return null;
  const allCap = (CAPACITY[s]?.[7] ?? 0) + nonRenewableTotal(s);
  if (allCap <= 0) return null;
  const num = mode === "total" ? (CAPACITY[s]?.[7] ?? 0)
            : mode === "solar" ? mix(s)[0]
            : mode === "wind" ? mix(s)[1]
            : mix(s)[2];
  return num / allCap;
}
// Fixed 0..1 colour ramp so intensity reads as the actual percentage.
function colorShare(ratio, state) {
  const [r, g, b] = MODE[mode][1];
  const isSelected = state === selected;
  const alpha = Math.min(0.95, 0.1 + ratio * (isSelected ? 0.95 : 0.82));
  return `rgba(${r},${g},${b},${alpha})`;
}

// National aggregated statistics calculations
const nationalMix = () => {
  const sum = [0,0,0,0];
  Object.values(MIX).forEach(arr => {
    sum[0] += arr[0];
    sum[1] += arr[1];
    sum[2] += arr[2];
    sum[3] += arr[3];
  });
  return sum;
};

const nationalConventional = () => {
  const sum = [0,0,0,0,0];
  Object.values(CONVENTIONAL).forEach(arr => {
    sum[0] += arr[0];
    sum[1] += arr[1];
    sum[2] += arr[2];
    sum[3] += arr[3];
    sum[4] += arr[4];
  });
  return sum;
};

// Accessibility Screen Reader updates
function announce(msg) {
  const container = $("ariaAnnouncements");
  if (container) {
    container.textContent = msg;
  }
}

// Bounding box calculation for base projection
function eachCoord(g, cb) {
  const polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  polys.forEach((p) => p.forEach((r) => r.forEach(cb)));
}

function bounds(features) {
  const b = {minX:99,minY:99,maxX:-99,maxY:-99};
  features.forEach((f) => eachCoord(f.geometry, ([lon,lat]) => {
    b.minX = Math.min(b.minX, lon); b.maxX = Math.max(b.maxX, lon); b.minY = Math.min(b.minY, lat); b.maxY = Math.max(b.maxY, lat);
  }));
  return b;
}

// Coordinate projection mapping with Zoom and Pan offsets
function project([lon, lat], b, w, h) {
  const pad = Math.min(w,h) * .07;
  const scale = Math.min((w-pad*2)/(b.maxX-b.minX), (h-pad*2)/(b.maxY-b.minY));
  const mw = (b.maxX-b.minX)*scale;
  const mh = (b.maxY-b.minY)*scale;
  
  // Base coordinates projected in standard bounding box space
  const bx = (w-mw)/2 + (lon-b.minX)*scale;
  const by = (h+mh)/2 - (lat-b.minY)*scale;
  
  // Center of screen coordinate viewport
  const cx = w / 2;
  const cy = h / 2;
  
  // Scale from center, apply pan translation offsets
  const zx = cx + (bx - cx) * zoom + pan.x;
  const zy = cy + (by - cy) * zoom + pan.y;
  
  return [zx, zy];
}

// Build canvas path representations
function buildPaths() {
  if (!geo) return;
  const r = canvas.getBoundingClientRect();
  const dpr = devicePixelRatio || 1;
  
  canvas.width = r.width*dpr;
  canvas.height = r.height*dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  
  const b = bounds(geo.features);
  paths = geo.features.map((f) => {
    const p = new Path2D();
    const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    polys.forEach((poly) => poly.forEach((ring) => ring.forEach((c,i) => {
      const [x,y] = project(c,b,r.width,r.height);
      if (i) p.lineTo(x,y); else p.moveTo(x,y);
    })));
    p.closePath();
    return {path:p, state:nameFor(f.properties.name)};
  });
  
  draw();
}

// Dynamic state color choropleth palette mapping
function color(v, max, state) {
  const [r,g,b] = MODE[mode][1];
  const isSelected = state === selected;
  const alpha = Math.min(.95, Math.sqrt(v / max) * (isSelected ? .9 : .7) + .08);
  return `rgba(${r},${g},${b},${alpha})`;
}

// Map legend reflects the share metric (and that it's a 2024-25-only view)
function updateLegend() {
  const low = $("legendLow"), high = $("legendHigh");
  if (!low || !high) return;
  if (year !== 7) {
    low.textContent = "Share shown for 2024-25 only";
    high.textContent = "← drag slider to 2024-25";
    return;
  }
  const label = mode === "total" ? "renewable" : mode;
  low.textContent = `Less ${label}`;
  high.textContent = `More ${label}`;
}

// Drawing routine
function draw() {
  if (!canvas.width || !canvas.height) return;
  const r = canvas.getBoundingClientRect();

  ctx.clearRect(0, 0, r.width, r.height);

  // Glassy background tint
  const isDark = document.body.classList.contains("dark");
  ctx.fillStyle = isDark ? "rgba(20, 28, 25, 0.42)" : "rgba(255, 250, 240, 0.42)";
  ctx.fillRect(0, 0, r.width, r.height);

  // Neutral fill for states whose share is unknown (any year other than 2024-25)
  const greyFill = isDark ? "rgba(150, 162, 156, 0.14)" : "rgba(120, 120, 108, 0.13)";

  paths.forEach(({path,state}) => {
    const ratio = shareMetric(state);
    ctx.fillStyle = ratio == null ? greyFill : colorShare(ratio, state);

    const isSelected = state === selected;
    const isHovered = state === hover;

    ctx.strokeStyle = isSelected || isHovered
      ? (isDark ? "#3cd070" : "#18322a")
      : (isDark ? "rgba(60, 208, 112, 0.16)" : "rgba(66,76,55,0.22)");

    ctx.lineWidth = isSelected ? 2.5 : isHovered ? 1.5 : 0.75;

    ctx.fill(path);
    ctx.stroke(path);
  });

  updateLegend();
  drawBeacons(r.width, r.height);
}

// Draw dynamic pulsing beacon targets for small or focal states
function drawBeacons(w, h) {
  const b = bounds(geo.features);
  const pts = [
    ["Rajasthan",74.2,26.8],
    ["Gujarat",71.2,22.7],
    ["Maharashtra",75.7,19.4],
    ["Karnataka",76.2,14.7],
    ["Tamil Nadu",78.7,11],
    ["Telangana",79,17.8],
    ["Ladakh",77.6,34.2]
  ];
  const isDark = document.body.classList.contains("dark");

  pts.forEach(([s,lon,lat]) => {
    const ratio = shareMetric(s);
    if (ratio == null || ratio <= 0) return; // grey years: no beacons
    const [x,y] = project([lon,lat], b, w, h);

    const rad = 5 + ratio * 20;
    const isSelected = s === selected;
    const isHovered = s === hover;
    
    // Glowing ring pulse overlay
    if (isSelected || isHovered) {
      ctx.beginPath();
      ctx.arc(x, y, rad + 4, 0, Math.PI*2);
      ctx.strokeStyle = isSelected 
        ? (isDark ? "rgba(60, 208, 112, 0.45)" : "rgba(47, 122, 90, 0.4)") 
        : "rgba(221, 168, 58, 0.4)";
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI*2);
    ctx.fillStyle = isSelected 
      ? (isDark ? "#3cd070" : "#18322a") 
      : (isDark ? "rgba(20, 28, 25, 0.9)" : "rgba(255, 250, 240, 0.85)");
    ctx.fill();
    
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = colorShare(ratio, s);
    ctx.stroke();
  });
}

// Click point-in-path picker
function pick(e) {
  const r = canvas.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  
  for (let i = paths.length - 1; i >= 0; i--) {
    if (ctx.isPointInPath(paths[i].path, x, y)) {
      return paths[i].state;
    }
  }
  return null;
}

// Small-hydro capacity (MW) by state as on 31.03.2025 (MNRE RE Statistics 2024-25, Table 8.2).
// Used to split the renewable mix; large hydro is derived as (total RE - solar - wind - small hydro - bio).
const SMALL_HYDRO_2025 = {
  "Rajasthan":23.85,"Gujarat":106.64,"Tamil Nadu":123.05,"Karnataka":1284.73,"Maharashtra":384.28,
  "Himachal Pradesh":1000.71,"Andhra Pradesh":163.31,"Madhya Pradesh":123.71,"Telangana":90.87,
  "Uttar Pradesh":49.10,"Uttarakhand":233.82,"Kerala":276.52,"Jammu & Kashmir":189.93,"Punjab":176.10,
  "Odisha":115.63,"Haryana":73.50,"Sikkim":55.11,"West Bengal":98.50,"Chhattisgarh":76.00,
  "Arunachal Pradesh":140.61,"Assam":34.11,"Bihar":70.70,"Jharkhand":4.05,"Delhi":0,"Meghalaya":55.03,
  "Ladakh":45.79,"Mizoram":45.47,"Manipur":5.45,"Nagaland":32.67,"Chandigarh":0,"Goa":0.05,
  "Puducherry":0,"Dadra & Nagar Haveli and Daman & Diu":0,"Tripura":16.01,
  "Andaman & Nicobar Islands":5.25,"Lakshadweep":0
};

// --- Year-aware data accessors (real data only; return {known:false} when unpublished) ---
// Real renewable total (incl. large hydro) for any state/year.
function renewableTotal(entity, y) {
  return entity === "India" ? NATIONAL_SHARE.renewable[y] : (CAPACITY[entity]?.[y] ?? 0);
}
// Renewable split [solar, wind, smallHydro, bio] + derived largeHydro for a given year.
function renewableSplit(entity, y) {
  let solar, wind, smallHydro, bio;
  if (SOURCE_HISTORY[entity]) {
    [solar, wind, smallHydro, bio] = SOURCE_HISTORY[entity][y];
  } else if (y === 7 && MIX[entity]) {
    solar = MIX[entity][0]; wind = MIX[entity][1]; bio = MIX[entity][3];
    smallHydro = SMALL_HYDRO_2025[entity] ?? 0;
  } else {
    return { known: false };
  }
  const tot = renewableTotal(entity, y);
  const largeHydro = Math.max(0, tot - solar - wind - smallHydro - bio);
  return { known: true, solar, wind, smallHydro, bio, largeHydro };
}
// Conventional split [coal, lignite, gas, diesel, nuclear] — only published for 2024-25.
function conventionalSplit(entity, y) {
  if (y !== 7) return { known: false };
  if (entity === "India") return { known: true, values: nationalConventional() };
  if (CONVENTIONAL[entity]) return { known: true, values: conventional(entity) };
  return { known: false };
}
// Conventional total (for the renewable-share strip).
function conventionalTotal(entity, y) {
  if (entity === "India") return { known: true, value: NATIONAL_SHARE.total[y] - NATIONAL_SHARE.renewable[y] };
  if (y === 7 && CONVENTIONAL[entity]) return { known: true, value: nonRenewableTotal(entity) };
  return { known: false };
}

// Show a real photo at the top of the state sidebar for states that have one.
function updateStatePhoto() {
  const wrap = $("statePhotoWrap");
  if (!wrap) return;
  const key = selected ? STATE_PHOTOS[selected] : null;
  const ph = key ? PHOTOS[key] : null;
  if (ph) {
    const img = $("statePhoto");
    if (img.getAttribute("src") !== ph.src) img.src = ph.src;
    img.alt = ph.alt;
    $("statePhotoCredit").textContent = ph.credit;
    wrap.hidden = false;
  } else {
    wrap.hidden = true;
  }
}

// Side Panel Detail Views Renderer (reflects the selected year)
function updatePanel() {
  const entity = selected || "India";
  const y = year;
  const isNat = !selected;

  $("stateEyebrow").textContent = isNat ? "National Overview" : "Selected State";
  $("backToNational").style.display = isNat ? "none" : "inline-block";
  $("stateName").textContent = isNat ? "All India" : selected;
  updateStatePhoto();

  const renTotal = renewableTotal(entity, y);
  const growth = renTotal - renewableTotal(entity, 0);
  $("stateTotal").textContent = fmt(renTotal);
  $("stateTotalLabel").textContent = `MW renewable capacity (${YEARS[y]})`;
  $("growthLabel").textContent = `${growth >= 0 ? "+" : ""}${fmt(growth)} MW`;

  const ren = renewableSplit(entity, y);
  const conv = conventionalSplit(entity, y);
  const convTot = conventionalTotal(entity, y);

  // Year-aware, honest summary line
  let summary;
  if (ren.known) {
    const parts = [["solar", ren.solar], ["wind", ren.wind], ["hydro", ren.smallHydro + ren.largeHydro], ["bio", ren.bio]];
    const leader = parts.slice().sort((a, b) => b[1] - a[1])[0][0];
    summary = `In ${YEARS[y]}, ${isNat ? "India" : selected} had ${fmt(renTotal)} MW of renewable capacity, led by ${leader}.`;
    if (convTot.known) {
      const share = Math.round(renTotal / (renTotal + convTot.value) * 100);
      summary += ` Renewables are about ${share}% of total power capacity.`;
    }
  } else {
    summary = `${isNat ? "India" : selected} had ${fmt(renTotal)} MW of renewable capacity in ${YEARS[y]}. A per-source breakdown for this year isn't published${isNat ? "" : ` for ${selected}`} — only 2024-25 is available.`;
  }
  $("stateSummary").textContent = summary;

  renderMixBars(ren, conv, convTot, renTotal, y);

  drawSpark(isNat ? NATIONAL_SHARE.renewable.slice(0, 8) : (CAPACITY[selected] ?? []));
  updateRankings();
  setSourceEntity();
  drawSourceChart();
}

// DOM helpers for the mix panel
const elc = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };
const spanTxt = (t, cls) => { const s = elc("span", cls); s.textContent = t; return s; };

// One progress row. value === null => "unknown" (no bar); a number (incl. 0) => real value.
function mixRow(label, value, colorVar, max, isConv) {
  const row = elc("div", "mix-row" + (isConv ? " nonrenewable" : ""));
  row.append(spanTxt(label));
  const track = elc("div", "mix-track");
  if (value != null && value > 0) {
    const fill = elc("div", "mix-fill");
    fill.style.width = (value / max * 100) + "%";
    fill.style.background = `var(${colorVar})`;
    track.append(fill);
  }
  row.append(track);
  row.append(spanTxt(value == null ? "unknown" : fmt(value) + " MW", value == null ? "mix-value unknown" : "mix-value"));
  return row;
}

// Render the energy mix for the selected year: real values, or "unknown" where unpublished.
function renderMixBars(ren, conv, convTot, renTotal, y) {
  const host = $("mixBars");
  host.replaceChildren();

  const known = [];
  if (ren.known) known.push(ren.solar, ren.wind, ren.smallHydro, ren.bio, ren.largeHydro);
  if (conv.known) known.push(...conv.values);
  const max = Math.max(...known, 1);

  // Renewable vs conventional share strip
  if (convTot.known && renTotal + convTot.value > 0) {
    const share = Math.round(renTotal / (renTotal + convTot.value) * 100);
    const strip = elc("div", "share-strip");
    strip.style.setProperty("--renewable-share", share + "%");
    strip.append(elc("span"), elc("span"));
    const labels = elc("div", "share-labels");
    labels.append(spanTxt(`${share}% renewable`), spanTxt(`${100 - share}% other`));
    host.append(strip, labels);
  } else {
    host.append(spanTxt(`Renewable vs conventional share for ${YEARS[y]} is unavailable.`, "mix-note"));
  }

  // Renewable sources (large hydro derived as the residual)
  const rg = elc("div", "mix-group-label"); rg.textContent = "Renewable Sources"; host.append(rg);
  const renRows = [["Solar", "--sun", "solar"], ["Wind", "--wind", "wind"], ["Small hydro", "--water", "smallHydro"], ["Bio", "--bio", "bio"], ["Large hydro", "--leaf", "largeHydro"]];
  for (const [label, colorVar, key] of renRows) host.append(mixRow(label, ren.known ? ren[key] : null, colorVar, max, false));

  // Conventional sources
  const cg = elc("div", "mix-group-label"); cg.textContent = "Conventional Sources"; host.append(cg);
  const convRows = [["Coal", "--coal", 0], ["Lignite", "--lignite", 1], ["Gas", "--gas", 2], ["Diesel", "--diesel", 3], ["Nuclear", "--nuclear", 4]];
  for (const [label, colorVar, idx] of convRows) host.append(mixRow(label, conv.known ? conv.values[idx] : null, colorVar, max, true));
  if (!conv.known) host.append(spanTxt("Conventional capacity is only published for 2024-25.", "mix-note"));
}

// Render dynamic state rankings list card
function updateRankings() {
  const metricLabel = mode === "total" ? "Total MW" : mode.charAt(0).toUpperCase() + mode.slice(1) + " MW";
  $("rankingsMetricLabel").textContent = metricLabel;

  const sorted = Object.keys(CAPACITY)
    .map(s => ({ name: s, val: metric(s) }))
    .sort((a, b) => b.val - a.val);

  const maxVal = sorted[0].val || 1;
  const container = $("rankingsList");
  
  container.innerHTML = sorted.map((item, idx) => {
    const isSelected = item.name === selected;
    const pct = (item.val / maxVal) * 100;
    return `
      <div class="ranking-item ${isSelected ? "selected" : ""}" data-state="${item.name}" tabindex="0" role="button" aria-pressed="${isSelected}">
        <span class="rank-num">#${idx + 1}</span>
        <div class="rank-details">
          <span class="rank-name">${item.name}</span>
          <div class="rank-bar-bg"><div class="rank-bar-fill" style="width:${pct}%"></div></div>
        </div>
        <span class="rank-val">${fmt(item.val)}</span>
      </div>
    `;
  }).join("");

  // Add click & keyboard triggers to rankings
  container.querySelectorAll(".ranking-item").forEach(el => {
    const trigger = () => {
      selectState(el.dataset.state);
    };
    el.addEventListener("click", trigger);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });
}

// Dynamic spline rendering for sparkline line graph
function drawSpark(values) {
  const r = spark.getBoundingClientRect();
  const dpr = devicePixelRatio || 1;
  const pad = 15;
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = Math.max(max-min, 1);
  
  spark.width = r.width*dpr;
  spark.height = r.height*dpr;
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  sctx.clearRect(0, 0, r.width, r.height);

  const isDark = document.body.classList.contains("dark");
  const colorLine = isDark ? "#3cd070" : "#2f7a5a";
  const colorAreaStart = isDark ? "rgba(60, 208, 112, 0.18)" : "rgba(47, 122, 90, 0.15)";
  const colorGrid = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)";
  
  // 1. Draw horizontal grid lines
  sctx.strokeStyle = colorGrid;
  sctx.lineWidth = 1;
  const gridLinesCount = 3;
  for (let i = 0; i < gridLinesCount; i++) {
    const gy = pad + (i / (gridLinesCount - 1)) * (r.height - pad * 2);
    sctx.beginPath();
    sctx.moveTo(pad, gy);
    sctx.lineTo(r.width - pad, gy);
    sctx.stroke();
  }

  const pts = values.map((v, i) => [
    pad + i/(values.length-1)*(r.width-pad*2),
    r.height-pad - (v-min)/range*(r.height-pad*2)
  ]);

  // 2. Draw curved gradient area
  if (pts.length > 1) {
    const areaGrad = sctx.createLinearGradient(0, pad, 0, r.height - pad);
    areaGrad.addColorStop(0, colorAreaStart);
    areaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    sctx.fillStyle = areaGrad;
    sctx.beginPath();
    sctx.moveTo(pts[0][0], r.height - pad);
    sctx.lineTo(pts[0][0], pts[0][1]);
    
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i+1];
      const cpX = p0[0] + (p1[0] - p0[0]) / 2;
      sctx.bezierCurveTo(cpX, p0[1], cpX, p1[1], p1[0], p1[1]);
    }
    
    sctx.lineTo(pts[pts.length - 1][0], r.height - pad);
    sctx.closePath();
    sctx.fill();
  }

  // 3. Draw curved line stroke
  if (pts.length > 1) {
    sctx.strokeStyle = colorLine;
    sctx.lineWidth = 3;
    sctx.beginPath();
    sctx.moveTo(pts[0][0], pts[0][1]);
    
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i+1];
      const cpX = p0[0] + (p1[0] - p0[0]) / 2;
      sctx.bezierCurveTo(cpX, p0[1], cpX, p1[1], p1[0], p1[1]);
    }
    sctx.stroke();
  }

  // 4. Draw interactive dot indicators and hover text
  pts.forEach(([x,y], i) => {
    const isTimelineYear = i === year;
    const isHovered = i === sparkHoverIdx;
    
    if (isHovered) {
      // Draw crosshair vertical line
      sctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";
      sctx.setLineDash([4, 4]);
      sctx.beginPath();
      sctx.moveTo(x, pad);
      sctx.lineTo(x, r.height - pad);
      sctx.stroke();
      sctx.setLineDash([]);
    }

    sctx.beginPath();
    sctx.arc(x, y, isHovered ? 6 : isTimelineYear ? 5 : 3.5, 0, Math.PI*2);
    sctx.fillStyle = isHovered ? "var(--sun)" : isTimelineYear ? (isDark ? "#3cd070" : "#18322a") : "var(--sun)";
    sctx.fill();
    
    sctx.lineWidth = 2;
    sctx.strokeStyle = "var(--bg-tooltip)";
    sctx.stroke();
    
    if (isHovered) {
      sctx.fillStyle = isDark ? "#fff" : "#18322a";
      sctx.font = "800 10px Inter, sans-serif";
      sctx.textAlign = "center";
      sctx.fillText(`${YEARS[i]}: ${fmt(values[i])} MW`, x, y - 10);
    }
  });
}

// Dynamic spline rendering for National Share Trend graph
function drawShareTrend() {
  const values = NATIONAL_SHARE.renewable.map((value, i) => value / NATIONAL_SHARE.total[i] * 100);
  const r = shareTrend.getBoundingClientRect();
  const dpr = devicePixelRatio || 1;
  const pad = 15;
  const min = Math.floor(Math.min(...values) - 1.5);
  const max = Math.ceil(Math.max(...values) + 1.5);
  const range = max - min;
  
  shareTrend.width = r.width*dpr;
  shareTrend.height = r.height*dpr;
  shctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  shctx.clearRect(0, 0, r.width, r.height);

  const isDark = document.body.classList.contains("dark");
  const colorLine = isDark ? "#3cd070" : "#2f7a5a";
  const colorAreaStart = isDark ? "rgba(60, 208, 112, 0.18)" : "rgba(47, 122, 90, 0.15)";
  const colorGrid = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)";
  const colorText = isDark ? "#8da698" : "#65766b";

  // 1. Draw horizontal grid lines
  shctx.strokeStyle = colorGrid;
  shctx.lineWidth = 1;
  const gridLinesCount = 3;
  for (let i = 0; i < gridLinesCount; i++) {
    const gy = pad + (i / (gridLinesCount - 1)) * (r.height - pad * 2);
    shctx.beginPath();
    shctx.moveTo(pad, gy);
    shctx.lineTo(r.width - pad, gy);
    shctx.stroke();
  }

  const pts = values.map((v, i) => [
    pad + i/(values.length-1)*(r.width-pad*2),
    r.height-pad - (v-min)/range*(r.height-pad*2)
  ]);

  const projectedIndex = values.length - 1;

  // 2. Draw curved gradient area
  if (pts.length > 1) {
    const areaGrad = shctx.createLinearGradient(0, pad, 0, r.height - pad);
    areaGrad.addColorStop(0, colorAreaStart);
    areaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    shctx.fillStyle = areaGrad;
    shctx.beginPath();
    shctx.moveTo(pts[0][0], r.height - pad);
    shctx.lineTo(pts[0][0], pts[0][1]);
    
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i+1];
      const cpX = p0[0] + (p1[0] - p0[0]) / 2;
      shctx.bezierCurveTo(cpX, p0[1], cpX, p1[1], p1[0], p1[1]);
    }
    
    shctx.lineTo(pts[pts.length - 1][0], r.height - pad);
    shctx.closePath();
    shctx.fill();
  }

  // 3. Draw curved line stroke
  if (pts.length > 1) {
    // Solid line for historical years
    shctx.strokeStyle = colorLine;
    shctx.lineWidth = 3;
    shctx.beginPath();
    shctx.moveTo(pts[0][0], pts[0][1]);
    
    for (let i = 0; i < projectedIndex - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i+1];
      const cpX = p0[0] + (p1[0] - p0[0]) / 2;
      shctx.bezierCurveTo(cpX, p0[1], cpX, p1[1], p1[0], p1[1]);
    }
    shctx.stroke();

    // Dashed line segment for the projection year
    shctx.beginPath();
    const pPrev = pts[projectedIndex - 1];
    const pProj = pts[projectedIndex];
    shctx.moveTo(pPrev[0], pPrev[1]);
    const cpX = pPrev[0] + (pProj[0] - pPrev[0]) / 2;
    shctx.bezierCurveTo(cpX, pPrev[1], cpX, pProj[1], pProj[0], pProj[1]);
    
    shctx.setLineDash([5, 5]);
    shctx.stroke();
    shctx.setLineDash([]);
  }

  // 4. Render dots & active year tooltips
  pts.forEach(([x,y], i) => {
    const isProjection = i === projectedIndex;
    const isTimelineYear = i === year;
    const isHovered = i === shareHoverIdx;
    
    if (isHovered) {
      // Draw crosshair vertical line
      shctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";
      shctx.setLineDash([4, 4]);
      shctx.beginPath();
      shctx.moveTo(x, pad);
      shctx.lineTo(x, r.height - pad);
      shctx.stroke();
      shctx.setLineDash([]);
    }

    shctx.beginPath();
    shctx.arc(x, y, isHovered ? 6 : isTimelineYear || isProjection ? 5 : 3.5, 0, Math.PI*2);
    shctx.fillStyle = isHovered 
      ? "var(--sun)" 
      : isProjection 
        ? "var(--bg-tooltip)" 
        : isTimelineYear 
          ? (isDark ? "#3cd070" : "#18322a") 
          : "var(--sun)";
    shctx.fill();
    
    shctx.lineWidth = 2.0;
    shctx.strokeStyle = colorLine;
    shctx.stroke();
    
    if (isHovered) {
      shctx.fillStyle = isDark ? "#fff" : "#18322a";
      shctx.font = "800 10px Inter, sans-serif";
      shctx.textAlign = "center";
      shctx.fillText(`${NATIONAL_SHARE.years[i]}: ${values[i].toFixed(1)}%`, x, y - 10);
    }
  });

  // Draw static endpoint text values if not currently hovered
  if (shareHoverIdx !== 0) {
    shctx.fillStyle = colorText;
    shctx.font = "700 10px Inter, sans-serif";
    shctx.textAlign = "left";
    shctx.fillText(`${values[0].toFixed(1)}%`, pts[0][0], pts[0][1] - 10);
  }
  if (shareHoverIdx !== projectedIndex) {
    shctx.fillStyle = colorText;
    shctx.font = "700 10px Inter, sans-serif";
    shctx.textAlign = "right";
    shctx.fillText(`${values[projectedIndex].toFixed(1)}% proj`, pts[projectedIndex][0], pts[projectedIndex][1] - 10);
  }
  
  $("sharePeakLabel").textContent = `${values[projectedIndex].toFixed(1)}% proj`;
}

// Unified State Selection logic
function selectState(stateName) {
  if (stateName === null || stateName === selected) {
    selected = null;
    $("stateSearch").value = "";
    $("clearSearch").style.display = "none";
    announce("Returned to National Overview. Cumulative clean capacity is 220,096 MW.");
  } else {
    selected = stateName;
    $("stateSearch").value = selected;
    $("clearSearch").style.display = "block";
    announce(`Selected state: ${selected}. Total installed capacity is ${fmt(total(selected, 7) + nonRenewableTotal(selected))} MW.`);
  }
  
  draw();
  updatePanel();
}

// Update year timeline position
function setYear(i) {
  year = Number(i);
  $("yearSlider").value = year;
  $("yearLabel").textContent = YEARS[year];
  
  const natSum = Object.keys(CAPACITY).reduce((sum,s) => sum + total(s,year), 0);
  $("nationalTotal").textContent = fmt(natSum);
  $("nationalTotalLabel").textContent = `MW in ${YEARS[year]}`;
  
  announce(`Timeline timeline year set to ${YEARS[year]}. National capacity is ${fmt(natSum)} MW.`);
  
  draw();
  updatePanel();
  drawShareTrend();
}

// Update active map metric mode
function setMode(next) {
  mode = next;
  $("modeLabel").textContent = MODE[mode][0];
  
  document.querySelectorAll(".mode-tab").forEach((b) => {
    const isActive = b.dataset.mode === mode;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  
  draw();
  updatePanel();
}

// --- Autocomplete State Search Handling ---
const searchInput = $("stateSearch");
const clearSearchBtn = $("clearSearch");
const autocompleteList = $("autocompleteList");
let currentFocus = -1;

searchInput.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase().trim();
  closeAllSuggestions();
  if (!val) {
    clearSearchBtn.style.display = "none";
    return;
  }
  clearSearchBtn.style.display = "block";
  currentFocus = -1;

  const matches = Object.keys(CAPACITY).filter(s => s.toLowerCase().includes(val));
  if (!matches.length) return;

  autocompleteList.style.display = "block";
  matches.forEach((match) => {
    const div = document.createElement("div");
    div.className = "autocomplete-item";
    const startIdx = match.toLowerCase().indexOf(val);
    div.innerHTML = match.substring(0, startIdx) + 
                    "<strong>" + match.substring(startIdx, startIdx + val.length) + "</strong>" + 
                    match.substring(startIdx + val.length);
    
    div.addEventListener("click", () => {
      selectState(match);
      closeAllSuggestions();
    });
    autocompleteList.appendChild(div);
  });
});

searchInput.addEventListener("keydown", (e) => {
  const items = autocompleteList.getElementsByClassName("autocomplete-item");
  if (!items.length) return;

  if (e.keyCode === 40) { // Arrow Down
    currentFocus++;
    setActive(items);
  } else if (e.keyCode === 38) { // Arrow Up
    currentFocus--;
    setActive(items);
  } else if (e.keyCode === 13) { // Enter
    e.preventDefault();
    if (currentFocus > -1 && items[currentFocus]) {
      items[currentFocus].click();
    } else if (items.length > 0) {
      items[0].click();
    }
  } else if (e.keyCode === 27) { // Escape
    closeAllSuggestions();
  }
});

function setActive(items) {
  if (!items) return false;
  removeActive(items);
  if (currentFocus >= items.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = items.length - 1;
  items[currentFocus].classList.add("active");
  items[currentFocus].scrollIntoView({ block: "nearest" });
}

function removeActive(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
}

function closeAllSuggestions() {
  autocompleteList.innerHTML = "";
  autocompleteList.style.display = "none";
}

document.addEventListener("click", (e) => {
  if (e.target !== searchInput) {
    closeAllSuggestions();
  }
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  closeAllSuggestions();
  selectState(null);
  searchInput.focus();
});


// --- Drag-to-Pan and Touch Navigation events ---
canvas.addEventListener("mousedown", (e) => {
  isDragging = true;
  dragMoved = false;
  startDrag.x = e.clientX;
  startDrag.y = e.clientY;
  basePan.x = pan.x;
  basePan.y = pan.y;
  canvas.style.cursor = "grabbing";
});

canvas.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const dx = e.clientX - startDrag.x;
    const dy = e.clientY - startDrag.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      dragMoved = true;
      pan.x = basePan.x + dx;
      pan.y = basePan.y + dy;
      buildPaths();
    }
  }
  
  // Custom Floating Tooltip Tracking
  hover = pick(e);
  const tooltip = $("mapTooltip");
  if (hover && CAPACITY[hover]) {
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    
    const ratio = shareMetric(hover);
    $("tooltipState").textContent = hover;
    if (ratio != null) {
      const label = mode === "total" ? "renewable" : mode;
      $("tooltipValue").textContent = `${Math.round(ratio * 100)}% ${label}`;
      $("tooltipRank").textContent = `${fmt(metric(hover))} MW`;
    } else {
      $("tooltipValue").textContent = `${fmt(total(hover, year))} MW`;
      $("tooltipRank").textContent = `renewable · ${YEARS[year]}`;
    }
    
    tooltip.style.opacity = "1";
    tooltip.style.transform = `translate(${x + 15}px, ${y + 15}px)`;
    canvas.style.cursor = isDragging ? "grabbing" : "pointer";
  } else {
    tooltip.style.opacity = "0";
    canvas.style.cursor = isDragging ? "grabbing" : "grab";
  }
  
  draw();
});

canvas.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    canvas.style.cursor = "grab";
  }
});

canvas.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
  }
  hover = null;
  $("mapTooltip").style.opacity = "0";
  canvas.style.cursor = "grab";
  draw();
});

// Click Selection
canvas.addEventListener("click", (e) => {
  if (dragMoved) return; // Prevent selection trigger if user dragged to pan
  const s = pick(e);
  if (s && CAPACITY[s]) {
    selectState(s);
  }
});

// Touch Navigation panning equivalents
canvas.addEventListener("touchstart", (e) => {
  if (e.touches.length !== 1) return;
  isDragging = true;
  dragMoved = false;
  startDrag.x = e.touches[0].clientX;
  startDrag.y = e.touches[0].clientY;
  basePan.x = pan.x;
  basePan.y = pan.y;
}, { passive: true });

canvas.addEventListener("touchmove", (e) => {
  if (!isDragging || e.touches.length !== 1) return;
  const dx = e.touches[0].clientX - startDrag.x;
  const dy = e.touches[0].clientY - startDrag.y;
  if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
    dragMoved = true;
    pan.x = basePan.x + dx;
    pan.y = basePan.y + dy;
    buildPaths();
  }
}, { passive: true });

canvas.addEventListener("touchend", () => {
  isDragging = false;
});

// Scroll to Zoom at cursor position
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  const r = canvas.getBoundingClientRect();
  const mouseX = e.clientX - r.left;
  const mouseY = e.clientY - r.top;

  const cx = r.width / 2;
  const cy = r.height / 2;

  const zoomFactor = 1.15;
  const nextZoom = e.deltaY < 0 ? zoom * zoomFactor : zoom / zoomFactor;
  const boundedZoom = Math.max(1, Math.min(8, nextZoom));
  
  if (boundedZoom !== zoom) {
    // Offset camera pan matrix relative to mouse focal point
    pan.x = mouseX - cx - (mouseX - cx - pan.x) * (boundedZoom / zoom);
    pan.y = mouseY - cy - (mouseY - cy - pan.y) * (boundedZoom / zoom);
    zoom = boundedZoom;
    
    // Automatically reset pan centered if zoomed out fully to 1x scale
    if (zoom === 1) {
      pan.x = 0;
      pan.y = 0;
    }
    buildPaths();
  }
}, { passive: false });


// --- Floating Zoom Overlay Buttons ---
$("zoomIn").addEventListener("click", () => {
  const nextZoom = Math.min(8, zoom * 1.35);
  if (nextZoom !== zoom) {
    zoom = nextZoom;
    buildPaths();
  }
});

$("zoomOut").addEventListener("click", () => {
  const nextZoom = Math.max(1, zoom / 1.35);
  if (nextZoom !== zoom) {
    zoom = nextZoom;
    if (zoom === 1) { pan.x = 0; pan.y = 0; }
    buildPaths();
  }
});

$("zoomReset").addEventListener("click", () => {
  zoom = 1;
  pan.x = 0;
  pan.y = 0;
  buildPaths();
});


// --- Interactive Chart Hover Events ---
spark.addEventListener("mousemove", (e) => {
  const r = spark.getBoundingClientRect();
  const x = e.clientX - r.left;
  const pad = 15;
  const spacing = (r.width - pad * 2) / 7;
  const idx = Math.round((x - pad) / spacing);
  
  if (idx >= 0 && idx < 8) {
    if (sparkHoverIdx !== idx) {
      sparkHoverIdx = idx;
      drawSpark(selected ? (CAPACITY[selected] ?? []) : NATIONAL_SHARE.renewable.slice(0, 8));
    }
  }
});

spark.addEventListener("mouseleave", () => {
  sparkHoverIdx = -1;
  drawSpark(selected ? (CAPACITY[selected] ?? []) : NATIONAL_SHARE.renewable.slice(0, 8));
});

shareTrend.addEventListener("mousemove", (e) => {
  const r = shareTrend.getBoundingClientRect();
  const x = e.clientX - r.left;
  const pad = 15;
  const spacing = (r.width - pad * 2) / 8;
  const idx = Math.round((x - pad) / spacing);
  
  if (idx >= 0 && idx < 9) {
    if (shareHoverIdx !== idx) {
      shareHoverIdx = idx;
      drawShareTrend();
    }
  }
});

shareTrend.addEventListener("mouseleave", () => {
  shareHoverIdx = -1;
  drawShareTrend();
});


// --- Dark Mode / Light Mode Theme Switching ---
const themeToggle = $("themeToggle");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
  
  // Re-render components with newly assigned theme variables
  draw();
  updatePanel();
  drawShareTrend();
});


// --- Slider and Tab Trigger Events ---
$("yearSlider").addEventListener("input", (e) => setYear(e.target.value));

$("playButton").addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    $("playButton").textContent = "▶";
    $("playButton").setAttribute("aria-label", "Play timeline animation");
    announce("Timeline animation paused.");
    return;
  }
  $("playButton").textContent = "Ⅱ";
  $("playButton").setAttribute("aria-label", "Pause timeline animation");
  timer = setInterval(() => setYear((year + 1) % YEARS.length), 1300);
});

document.querySelectorAll(".mode-tab").forEach((b) => {
  b.addEventListener("click", () => setMode(b.dataset.mode));
});

$("backToNational").addEventListener("click", () => {
  selectState(null);
});

addEventListener("resize", () => {
  if (geo) buildPaths();
  updatePanel();
  drawShareTrend();
});

// ============================================================
//  SOURCES-OVER-TIME CHART (real MNRE data for India + Top 5)
// ============================================================
let sourceEntity = "India";
let sourceReveal = 1; // 0..1 animated reveal of the timeline

const cssVar = (name) => getComputedStyle(document.body).getPropertyValue(name).trim() || "#888";

// Resolve which entity the source chart shows. An explicit `entity` (used by the
// story tour) wins; otherwise derive from the currently selected state.
function setSourceEntity(entity) {
  sourceEntity = (entity && SOURCE_HISTORY[entity]) ? entity
    : (selected && SOURCE_HISTORY[selected]) ? selected
    : "India";
  const note = $("sourceChartNote");
  const label = $("sourceChartEntity");
  if (label) label.textContent = sourceEntity === "India" ? "All India" : sourceEntity;
  if (note) {
    if (!entity && selected && !SOURCE_HISTORY[selected]) {
      note.textContent = "Showing all-India. Year-by-year source history is published for the Top 5 states.";
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  }
}

// Stacked-area chart of the 4 renewable sources growing 2017-18 -> 2024-25
function drawSourceChart() {
  const data = SOURCE_HISTORY[sourceEntity];
  if (!data || !sourceChart) return;
  const r = sourceChart.getBoundingClientRect();
  if (!r.width) return;
  const dpr = devicePixelRatio || 1;
  const pad = 14;

  sourceChart.width = r.width * dpr;
  sourceChart.height = r.height * dpr;
  scctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  scctx.clearRect(0, 0, r.width, r.height);

  const n = data.length;
  const totals = data.map((a) => a[0] + a[1] + a[2] + a[3]);
  const max = Math.max(...totals, 1);
  const xAt = (i) => pad + (i / (n - 1)) * (r.width - pad * 2);
  const yAt = (v) => r.height - pad - (v / max) * (r.height - pad * 2);
  const colors = [cssVar("--sun"), cssVar("--wind"), cssVar("--water"), cssVar("--bio")];

  // Reveal clip for the "grow" animation
  scctx.save();
  scctx.beginPath();
  scctx.rect(0, 0, pad + sourceReveal * (r.width - pad * 2) + 0.5, r.height);
  scctx.clip();

  // Stack solar -> wind -> hydro -> bio
  let lower = new Array(n).fill(0);
  for (let s = 0; s < 4; s++) {
    const upper = lower.map((lo, i) => lo + data[i][s]);
    scctx.beginPath();
    for (let i = 0; i < n; i++) { const x = xAt(i), y = yAt(upper[i]); i ? scctx.lineTo(x, y) : scctx.moveTo(x, y); }
    for (let i = n - 1; i >= 0; i--) { scctx.lineTo(xAt(i), yAt(lower[i])); }
    scctx.closePath();
    scctx.fillStyle = colors[s];
    scctx.globalAlpha = 0.88;
    scctx.fill();
    scctx.globalAlpha = 1;
    lower = upper;
  }
  scctx.restore();

  // Endpoint year labels
  scctx.fillStyle = cssVar("--muted");
  scctx.font = "700 10px Inter, sans-serif";
  scctx.textAlign = "left";
  scctx.fillText(YEARS[0], xAt(0), r.height - 2);
  scctx.textAlign = "right";
  scctx.fillText(YEARS[n - 1], xAt(n - 1), r.height - 2);
}

async function growSources(entity, duration = 1600) {
  setSourceEntity(entity);
  await tween(duration, (e) => { sourceReveal = e; drawSourceChart(); });
  sourceReveal = 1;
  drawSourceChart();
}

// ============================================================
//  ANIMATION PRIMITIVES + CAMERA (used by the story tour)
// ============================================================
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const prefersReducedMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let sceneGen = 0; // bumped on every scene change to cancel in-flight animations

function tween(duration, onUpdate) {
  const myGen = sceneGen;
  return new Promise((res) => {
    if (prefersReducedMotion()) { onUpdate(1); res(); return; }
    const start = performance.now();
    function frame(now) {
      if (myGen !== sceneGen) { res(); return; }
      const t = Math.min(1, (now - start) / duration);
      onUpdate(easeInOut(t));
      if (t < 1) requestAnimationFrame(frame); else res();
    }
    requestAnimationFrame(frame);
  });
}

// Base (zoom=1, pan=0) projection of a lon/lat -> used to compute fly targets
function baseProject(lon, lat) {
  const r = canvas.getBoundingClientRect();
  const w = r.width, h = r.height;
  const b = bounds(geo.features);
  const pad = Math.min(w, h) * 0.07;
  const scale = Math.min((w - pad * 2) / (b.maxX - b.minX), (h - pad * 2) / (b.maxY - b.minY));
  const mw = (b.maxX - b.minX) * scale;
  const mh = (b.maxY - b.minY) * scale;
  const bx = (w - mw) / 2 + (lon - b.minX) * scale;
  const by = (h + mh) / 2 - (lat - b.minY) * scale;
  return { bx, by, w, h };
}

async function flyTo(entity, targetZoom, duration = 900) {
  if (!geo) return;
  const c = STATE_CENTROIDS[entity] || STATE_CENTROIDS["India"];
  const { bx, by, w, h } = baseProject(c[0], c[1]);
  const z0 = zoom, px0 = pan.x, py0 = pan.y;
  const tpx = -(bx - w / 2) * targetZoom;
  const tpy = -(by - h / 2) * targetZoom;
  await tween(duration, (e) => {
    zoom = lerp(z0, targetZoom, e);
    pan.x = lerp(px0, tpx, e);
    pan.y = lerp(py0, tpy, e);
    buildPaths();
  });
}

async function sweepYears(from, to, duration = 4000) {
  await tween(duration, (e) => {
    const y = Math.round(lerp(from, to, e));
    if (y !== year) setYear(y);
  });
  setYear(to);
}

// ============================================================
//  NARRATED STORY TOUR (kid-friendly)
// ============================================================
// Real, freely-licensed photos of Indian solar parks & wind farms (see images/_credits.json)
const PHOTOS = {
  bhadla: { src: "images/bhadla.jpg", alt: "Aerial view of the vast Bhadla Solar Park in the Rajasthan desert", credit: "Bhadla Solar Park, Rajasthan · Sarvajanik Puralekh / CC BY-SA 2.0" },
  gujarat: { src: "images/gujarat.jpg", alt: "Wind turbines on the beach at Mandvi, Kutch, Gujarat at sunset", credit: "Mandvi coast, Kutch, Gujarat · Rahultalreja11 / CC BY 4.0" },
  muppandal: { src: "images/muppandal.jpg", alt: "Rows of wind turbines at the Muppandal wind farm, Tamil Nadu", credit: "Muppandal wind farm, Tamil Nadu · Deepa Vasudevan / CC BY-SA 4.0" },
  pavagada: { src: "images/pavagada.jpg", alt: "Satellite view of the enormous Pavagada Solar Park, Karnataka", credit: "Pavagada Solar Park, Karnataka (satellite) · Copernicus Sentinel-2, ESA" },
  windfield: { src: "images/tn-windfield.jpg", alt: "Wind turbines beside farm fields in Tamil Nadu", credit: "Wind turbines & farmland, Tamil Nadu · PJeganathan / CC BY-SA 4.0" },
  maharashtra: { src: "images/maharashtra.jpg", alt: "Aerial view of a large solar power plant in Maharashtra", credit: "Solar Power Plant Maharashtra I · Thomas Lloyd Group / CC BY-SA 4.0" }
};

// State -> photo (uses the PHOTOS records above) for the state sidebar banner.
const STATE_PHOTOS = {
  "Rajasthan": "bhadla",
  "Gujarat": "gujarat",
  "Tamil Nadu": "muppandal",
  "Karnataka": "pavagada",
  "Maharashtra": "maharashtra"
};

// Each scene maps to a recorded narration clip in renewaudio/ (renew-1..renew-10).
// `hold` is now only the fallback timer used when the clip can't play (missing
// file or autoplay blocked); normally a scene advances when its audio ends.
const STORY = [
  { photo: "bhadla", audio: "renewaudio/renew-1.m4a", caption: "Hello! Through this website you will find out how India makes clean energy from the sun, wind and water!", hold: 3800,
    run: async () => { setMode("total"); selectState(null); await flyTo("India", 1, 700); } },
  { audio: "renewaudio/renew-2.m4a", caption: "Let's go back to the year 2017. India is just getting started with clean power, also known as renewable energy.", hold: 2600,
    run: async () => { await sweepYears(year, 0, 500); } },
  { audio: "renewaudio/renew-3.m4a", caption: "Now watch the whole map turn greener as the years pass by (by people adding more solar panels and wind turbines): more clean energy every year!", hold: 1000,
    run: async () => { await sweepYears(0, 7, 5200); } },
  { audio: "renewaudio/renew-4.m4a", caption: "India's clean energy has grown almost 2 times bigger. Let's see the states that made some of the largest contributions...", hold: 3600,
    run: async () => {} },
  { photo: "bhadla", audio: "renewaudio/renew-5.m4a", caption: "First stop: Rajasthan... India's giant desert state, with sunshine almost every day.", hold: 2800,
    run: async () => { selectState("Rajasthan"); await flyTo("Rajasthan", 3.4, 1000); } },
  { photo: "bhadla", audio: "renewaudio/renew-6.m4a", caption: "Rajasthan covered its deserts with solar panels. Solar power grew about 11 times: from 2,400 to over 28,000 MW!", hold: 4200,
    run: async () => { await growSources("Rajasthan", 1800); } },
  { photo: "gujarat", audio: "renewaudio/renew-7.m4a", caption: "Next: Gujarat, right by the sea. It catches both sunshine and the salty sea breeze!", hold: 3400,
    run: async () => { selectState("Gujarat"); await flyTo("Gujarat", 3.4, 1000); await growSources("Gujarat", 1500); } },
  { photo: "muppandal", audio: "renewaudio/renew-8.m4a", caption: "Tamil Nadu is India's wind champion! Tall white turbines spin in the wind to make electricity.", hold: 3400,
    run: async () => { selectState("Tamil Nadu"); await flyTo("Tamil Nadu", 3.4, 1000); await growSources("Tamil Nadu", 1500); } },
  { photo: "pavagada", audio: "renewaudio/renew-9.m4a", caption: "Karnataka built one of the world's biggest solar parks: Pavagada is so huge you can spot it from space! Maharashtra joined in too.", hold: 4200,
    run: async () => { selectState("Karnataka"); await flyTo("Karnataka", 3.4, 900); await growSources("Karnataka", 1400); } },
  { photo: "windfield", audio: "renewaudio/renew-10.m4a", caption: "Together, all of India now makes enough clean energy to be a real clean-power superhero! Now it's your turn — go explore the map!", hold: 5400,
    run: async () => { selectState(null); setMode("total"); await flyTo("India", 1, 1000); await growSources("India", 1600); } }
];

let tourPlaying = false;
let tourSpeak = true;
let autoTimer = null;
let sceneIdx = -1;
let sceneAudioDriven = false; // true while the current scene is timed by its clip

// --- Recorded narration playback ---
// One preloaded <audio> per scene (built lazily) keyed by the clip src so the
// next scene's clip is ready and there's no gap. `currentAudio` is the clip for
// the scene on screen right now.
const narrationCache = {};
let currentAudio = null;

function audioFor(src) {
  if (!narrationCache[src]) {
    const a = new Audio(src);
    a.preload = "auto";
    narrationCache[src] = a;
  }
  return narrationCache[src];
}

// Start a scene's narration. Returns true if playback actually began (so the
// caller can wait for it to end); false if there's no clip, it's missing, or
// autoplay was blocked (caller then falls back to the scene's `hold` timer).
function playNarration(sc) {
  if (currentAudio) { currentAudio.pause(); }
  currentAudio = null;
  if (!sc.audio) return Promise.resolve(false);
  const a = audioFor(sc.audio);
  currentAudio = a;
  a.muted = !tourSpeak;        // play (muted) even when sound is off, so timing matches
  a.currentTime = 0;
  return a.play().then(() => true).catch(() => false);
}

// Resolve when the current clip finishes (or right away if it's not playing).
// `gen` guards against the user navigating to another scene mid-wait.
function waitForNarrationEnd(gen) {
  return new Promise((resolve) => {
    const a = currentAudio;
    if (!a || a.ended) { resolve(); return; }
    const done = () => {
      a.removeEventListener("ended", done);
      a.removeEventListener("error", done);
      resolve();
    };
    a.addEventListener("ended", done);
    a.addEventListener("error", done);
    // safety: if we left this scene, stop waiting
    const guard = setInterval(() => {
      if (gen !== sceneGen) { clearInterval(guard); done(); }
    }, 200);
    a.addEventListener("ended", () => clearInterval(guard), { once: true });
  });
}

function stopNarration() {
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
}

function renderDots() {
  const dots = $("storyDots");
  if (!dots) return;
  dots.replaceChildren();
  STORY.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "story-dot" + (i === sceneIdx ? " active" : "");
    d.setAttribute("aria-label", `Go to scene ${i + 1}`);
    d.addEventListener("click", () => goScene(i));
    dots.appendChild(d);
  });
}

async function runScene(i) {
  sceneGen++;
  clearTimeout(autoTimer);
  sceneIdx = i;
  const sc = STORY[i];
  $("storyCaption").textContent = sc.caption;
  const ph = sc.photo ? PHOTOS[sc.photo] : null;
  const photoEl = $("storyPhoto"), creditEl = $("storyPhotoCredit");
  if (ph) {
    if (photoEl.getAttribute("src") !== ph.src) { photoEl.src = ph.src; }
    photoEl.alt = ph.alt;
    photoEl.style.display = "block";
    creditEl.textContent = ph.credit;
    creditEl.style.display = "block";
  } else {
    photoEl.style.display = "none";
    creditEl.style.display = "none";
  }
  renderDots();
  announce(sc.caption);
  const myGen = sceneGen;
  const started = await playNarration(sc);
  sceneAudioDriven = started;
  await sc.run();
  if (myGen !== sceneGen) return; // navigated away mid-scene

  const advance = () => {
    if (myGen !== sceneGen) return;
    if (sceneIdx + 1 < STORY.length) runScene(sceneIdx + 1);
    else endTour();
  };

  if (!tourPlaying) return;
  if (started) {
    // Narration is playing: advance once it finishes (plus a short gap).
    await waitForNarrationEnd(myGen);
    if (myGen !== sceneGen || !tourPlaying) return;
    autoTimer = setTimeout(advance, 600);
  } else {
    // No clip / missing file / autoplay blocked: fall back to the timed hold.
    autoTimer = setTimeout(advance, sc.hold || 3200);
  }
}

function goScene(i) {
  if (i < 0 || i >= STORY.length) return;
  stopNarration();
  runScene(i);
}

function setTourPlaying(on) {
  tourPlaying = on;
  const btn = $("storyPlayPause");
  if (btn) { btn.textContent = on ? "⏸ Pause" : "▶ Play"; btn.setAttribute("aria-label", on ? "Pause story" : "Play story"); }
  if (!on) {
    clearTimeout(autoTimer);
    if (currentAudio) currentAudio.pause();
  } else if (sceneIdx >= 0) {
    if (sceneAudioDriven && currentAudio && !currentAudio.ended) {
      // Resume the clip; the scene's pending end-wait will advance on its own.
      currentAudio.muted = !tourSpeak;
      currentAudio.play().catch(() => {});
    } else {
      autoTimer = setTimeout(() => {
        if (sceneIdx + 1 < STORY.length) runScene(sceneIdx + 1); else endTour();
      }, 1200);
    }
  }
}

function startTour() {
  Object.values(PHOTOS).forEach((p) => { const im = new Image(); im.src = p.src; });
  STORY.forEach((sc) => { if (sc.audio) audioFor(sc.audio); }); // warm the narration cache
  $("storyOverlay").hidden = false;
  document.body.classList.add("touring");
  setTourPlaying(true);
  runScene(0);
}

function endTour() {
  setTourPlaying(false);
  stopNarration();
  currentAudio = null;
  sceneGen++;
  sceneIdx = -1;
  $("storyOverlay").hidden = true;
  document.body.classList.remove("touring");
  zoom = 1; pan.x = 0; pan.y = 0;
  selectState(null);
  setYear(7);
  if (geo) buildPaths();
}

// Story tour controls
$("startStory").addEventListener("click", startTour);
$("storyExit").addEventListener("click", endTour);
$("storyNext").addEventListener("click", () => goScene(sceneIdx + 1));
$("storyPrev").addEventListener("click", () => goScene(sceneIdx - 1));
$("storyPlayPause").addEventListener("click", () => setTourPlaying(!tourPlaying));
$("storySound").addEventListener("click", () => {
  tourSpeak = !tourSpeak;
  const b = $("storySound");
  b.textContent = tourSpeak ? "🔊" : "🔇";
  b.setAttribute("aria-label", tourSpeak ? "Mute narration" : "Unmute narration");
  // Clip keeps progressing so scene timing is unchanged; just toggle audibility.
  if (currentAudio) currentAudio.muted = !tourSpeak;
});
$("replaySources").addEventListener("click", () => { sceneGen++; growSources(sourceEntity, 1600); });
document.addEventListener("keydown", (e) => {
  if ($("storyOverlay").hidden) return;
  if (e.key === "Escape") endTour();
  else if (e.key === "ArrowRight") goScene(sceneIdx + 1);
  else if (e.key === "ArrowLeft") goScene(sceneIdx - 1);
  else if (e.key === " ") { e.preventDefault(); setTourPlaying(!tourPlaying); }
});

// --- Bootstrapping App & Initial Fetch ---
initTheme();

fetch("data/india-states-lite.geojson")
  .then((r) => r.json())
  .then((j) => {
    geo = j;
    buildPaths();
    setYear(year);
    setMode(mode);
    updatePanel();
    drawShareTrend();
    // Shareable deep-link: index.html?story auto-starts the narrated tour
    if (/[?&]story\b/.test(location.search)) startTour();
  })
  .catch((err) => {
    console.error("Error loading geojson boundary map data:", err);
    $("stateSummary").textContent = "Failed to load interactive map geography. Please verify connection and try again.";
  });
