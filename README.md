# 19 · DEVCON Chapters Showcase

**Roadmap stage:** Phase 6 – TypeScript + Tailwind · August 2025

**Inspired by:** the DEVCON PH Chapters showcase and the "She Is DEVCON" pages I designed

I designed these pages before but never built them myself, so this is me rebuilding the idea in React + TypeScript with routing. The chapter data is a typed JSON file of 15 sample chapters named after PH cities, and the She Is DEVCON stories use fictional personas.

### Features
- Chapters directory with search (city, tagline or focus area), region filter (Luzon / Visayas / Mindanao) and sorting
- Filters are stored in the URL query string, so a filtered view can be shared and the back button still works
- Chapter detail page at `/chapters/:slug` with stats, focus areas, events and linked stories
- "She Is DEVCON" feature page with a hero, program highlights and a stories grid
- Light/dark toggle saved to localStorage. The saved theme is applied before first paint so the page doesn't flash
- Accessibility: skip link, `aria-pressed` filter buttons, labelled sections, visible focus rings
- 404 page for unknown routes and slugs

### Run
```bash
npm install
npm run dev
```
