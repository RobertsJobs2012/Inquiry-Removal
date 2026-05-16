# Inquiry Removal — Next.js App Router Build

Converted from the Astro version to a real Next.js App Router site for the most instant, State48Credit-style navigation feel possible while keeping the current design, copy, URLs, and SEO structure.

## Stack

- Next.js 16.2.6 App Router
- React 19.2.6
- TypeScript 6
- Static-first pages on Vercel
- Real `next/link` navigation and production route prefetching
- Persistent app shell: announcement bar, navigation, footer, and mobile dock stay mounted between pages
- Lightweight route warmup after idle time for key internal pages

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm links:check
```

## Notes

- Do not add a global loading/progress bar. The goal is instant-feeling route transitions.
- Keep most components as Server Components. Only use `"use client"` where interactivity is required.
- Avoid third-party scripts unless they are absolutely necessary.
- Keep page-specific CSS imported by the route page to preserve PageSpeed while letting Next.js prefetch route assets.
- Test PageSpeed on mobile and desktop after every deployment.
