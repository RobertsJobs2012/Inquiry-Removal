# Inquiry Removal

Production Next.js site for [inquiryremoval.com](https://www.inquiryremoval.com).

## Stack

- **Next.js 15** / React 19 / TypeScript
- **Fonts:** Plus Jakarta Sans (headings) · DM Sans (body) via `next/font/google`
- **CSS:** 4 static stylesheets, no CSS framework
- **Images:** AVIF throughout
- **Node:** 20.x

## Dev

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build   # production build
npm start       # serve production build locally
```

Deploys automatically to Vercel on push to `main`.

## Analyze bundle

```bash
ANALYZE=true npm run build
```

## CSS Architecture

| File | Purpose |
|------|---------|
| `base.css` | Tokens, reset, typography, buttons, global utilities |
| `design-system.css` | Nav, announcement bar, mobile dock, bento cards, section rhythm |
| `component-legacy.css` | Component-level styles (hero, pricing, proof, etc.) |
| `page-legacy.css` | Page-specific styles (about, results, compare, bureau pages) |


## Final speed pass

This build keeps Astro static and Vercel-ready, uses `<ClientRouter fallback="swap" />`, smart prefetching, inline critical stylesheets, and disables decorative background-position animations that PageSpeed flags as non-composited.
