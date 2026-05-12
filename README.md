# State 48 Credit

Arizona credit repair website rebuilt on the 2026 static-speed blueprint: Astro 6, static HTML output, native CSS, tiny JavaScript, optimized public assets, generated sitemap, JSON-LD schema, and Vercel immutable caching.

Live domain: **state48credit.com**

## Stack

- **Framework**: Astro 6.3.1 with `output: "static"`
- **Build**: Vite managed by Astro, CSS code splitting, compressed HTML, source maps disabled
- **Styling**: native CSS first, Tailwind 4.3.0 available through the Vite plugin
- **Images**: AVIF/WebP-ready public assets with explicit dimensions and eager LCP loading
- **SEO**: canonical tags, Open Graph, JSON-LD, `robots.txt`, `llms.txt`, generated sitemap
- **Hosting**: Vercel with clean URLs, trailing slashes, redirects, and immutable cache headers
- **Runtime goal**: readable without JavaScript, under 30 KB initial JS and 15 KB gzipped CSS

## Local Development

```bash
npx pnpm install
npx pnpm dev
```

Open http://localhost:4321.

## Scripts

- `npx pnpm dev`: start the Astro dev server
- `npx pnpm build`: build static production files into `dist/`
- `npx pnpm preview`: serve the production build locally
- `npx pnpm typecheck`: run `astro check`
- `npx pnpm perf:budget`: check gzipped Astro JS/CSS budgets

## Project Structure

```txt
src/
  components/          Astro header, footer, logo, inline SVG icons
  data/                Astro route helpers and city-page data
  layouts/             Base HTML, metadata, schema, preload, speculation rules
  pages/               Static Astro pages and dynamic blog/city routes
  styles/              Native global CSS
lib/                   Shared business content and schema builders
public/                Images, icons, robots.txt, llms.txt, manifest
scripts/               Performance budget checker
astro.config.mjs       Astro static/Vercel production config
vercel.json            Redirects, clean URLs, immutable cache headers
```

## Verified Checks

```bash
npx pnpm typecheck
npx pnpm build
npx pnpm perf:budget
```

Current budget result: 1.0 KB gzipped JS and 2.9 KB gzipped CSS in `dist/_astro`.

## Deployment

Deploy to Vercel from GitHub. Vercel should use:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`
- Node: `24.x`

No environment variables are required for the static build.

## Content Editing

Primary business data remains in `lib/site.ts`, `lib/homepage.ts`, `lib/servicesPage.ts`, `lib/blog.ts`, and `lib/resultsGallery.ts`. Route rendering lives in `src/pages`.

## Compliance

- FCRA and CROA disclosures are in the footer.
- No guaranteed score-increase claims.
- Contact forms are static and do not load third-party embeds on initial page load.

## License

Proprietary - State 48 Credit LLC.
