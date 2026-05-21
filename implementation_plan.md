# India Renewables Dashboard - Implementation Plan

Refactor the static India Renewables map into a state-of-the-art interactive dashboard. This plan details the architectural and visual upgrades, design tokens, and testing procedures.

## User Review Required

We are introducing the following major structural and UX enhancements:
- **National vs. State Mode**: The application will now start in a "National Overview" mode, displaying India's nationwide clean energy footprint. Clicking any state drills down into that state's details, with a back button to return.
- **Map Zoom & Pan**: Adding mouse-wheel zooming and click-and-drag panning, along with visual overlay controls.
- **Rankings / Leaderboard Sidebar**: An interactive list of states sorted by capacity for the selected metric and year.
- **Dark Mode**: A beautiful, premium dark theme utilizing rich deep obsidian and forest greens, glowing neon accents, and smooth glassmorphic blur effects.

> [!IMPORTANT]
> Since this is a client-side vanilla JS and CSS application, all upgrades will be written using high-performance native APIs (no bloated frameworks or large external charting/mapping dependencies), keeping the footprint extremely lightweight, fast, and secure.

## Proposed Changes

We will refactor `index.html`, `styles.css`, and `app.js` to implement the new design and features.

---

### UI & Layout Layer

#### [MODIFY] [index.html](file:///Users/vivek/dev/india_renew/index.html)
- Add SEO meta tags and description.
- Add an elegant Header with a **Dark Mode Toggle**.
- Restructure the main layout:
  - **Map Stage**: Add floating Zoom Controls (`+`, `-`, `Reset`) and a Floating Custom Tooltip element.
  - **Sidebar (Inspector)**: Add a Search Bar with autocomplete and a **Leaderboard / Rankings Panel** containing collapsible progress bars.
  - **Details Card**: Update markup to support toggling between "National Overview" and "State Detail" states, including a "Back to National Overview" button.
- Make all cards semantic and ARIA-compliant.

#### [MODIFY] [styles.css](file:///Users/vivek/dev/india_renew/styles.css)
- Implement a unified design system with CSS custom properties for Light and Dark themes:
  - **Obsidian/Jade Dark Mode**: Sleek deep dark backdrops, glowing neon borders, and green highlights.
  - **Cream/Forest Light Mode**: An updated, highly elegant version of the original warm aesthetic.
- Add custom styles for the new components:
  - **Glassmorphism panels**: `backdrop-filter: blur(12px)` and subtle glowing drop-shadows.
  - **Search & autocomplete dropdown**: Elegant, clean focus states and list layouts.
  - **Leaderboard list**: Smooth hover states and progress bar layouts.
  - **Floating Tooltip**: Hardware-accelerated transitions (`transform` and `opacity`) that trace the mouse smoothly.
  - **Zoom overlay controls**: Glassmorphic floating round buttons in the map area.
- Refine responsive breakpoints to ensure the dashboard feels native on both mobile and massive desktop monitors.

---

### Interaction & Logic Layer

#### [MODIFY] [app.js](file:///Users/vivek/dev/india_renew/app.js)
- **State Selection System**:
  - Implement a `selectedState` variable that can be `null` (representing the All-India National Overview) or a string (representing a specific state).
  - Calculate All-India aggregates by summing `CAPACITY`, `MIX`, and `CONVENTIONAL` objects for any given year.
- **Canvas Zoom & Pan Engine**:
  - Add `zoom` and `pan` state variables (`zoom` bounds: `1` to `8`).
  - Listen to `wheel` events on the canvas for scroll-to-zoom at the cursor's location.
  - Listen to `mousedown`, `mousemove`, `mouseup`, and touch counterparts for smooth drag-to-pan.
  - Integrate these variables into the projection and drawing logic so that dragging and zooming redraws the map in real-time.
- **Rich Floating Tooltip**:
  - Implement smooth mouse tracking, displaying the active state, its capacity for the selected metric, and its national rank.
- **State Search & Auto-complete**:
  - Implement autocomplete filtering as the user types state names.
  - Handle keyboard navigation (Arrow keys to navigate dropdown, Enter to select, Escape to close).
- **Dynamic Leaderboard Panel**:
  - Sort states descending by capacity for the selected metric and year.
  - Render progress bars relative to the top state. Add click handlers to select the state from the list.
- **Advanced Interactive Charting**:
  - Refactor line chart drawing with cubic Bezier curves (`bezierCurveTo`) for smooth waves instead of sharp lines.
  - Add gradient area fills underneath the charts matching the theme colors.
  - Add gridlines, ticks, and hover interaction crosshairs showing coordinates and values.
- **Theme Manager**:
  - Read/write the user's preference to `localStorage`.
  - Toggle a `.dark` class on the `<html>` or `<body>` element.
- **Accessibility & Playback**:
  - Enhance timeline slider with keyboard navigation support.
  - Create a screen-reader-only announcements area to announce timeline states and selections.

## Verification Plan

### Automated & Lint Verification
- Verify that there are no CSS syntax errors.
- Verify Javascript files do not contain syntax errors.

### Manual Verification & Visual Audit
1. **Interactive Testing**:
   - Deploy a local server using `python3 -m http.server 5188` and open the app in a browser.
   - Verify that the page loads in "National Overview" mode by default.
   - Drag and scroll-wheel over the map to verify smooth zoom and pan.
   - Click the Zoom buttons (+ / - / Reset) to ensure correct mapping.
   - Hover over states to verify that a gorgeous tooltip appears and tracks the cursor.
   - Click a state to ensure it switches the sidebar to the "State Detail View".
   - Search for a state using the new Search bar and verify autocomplete behaves correctly.
   - Click a state in the Sidebar Leaderboard and confirm it highlights the map and shows details.
2. **Visual & Theme Audit**:
   - Toggle between Light and Dark mode, ensuring contrast is excellent, charts look gorgeous in both themes, and glassmorphic blurs work correctly.
3. **Accessibility Audit**:
   - Tab through the elements (tabs, search bar, leaderboard, slider, play button, theme toggle).
   - Verify that keyboard-focused states are visible and clearly highlighted.
