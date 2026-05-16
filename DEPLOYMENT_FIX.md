# Vercel Deployment Fix

This build uses npm for Vercel installs instead of pnpm.

The prior Vercel error happened during `pnpm install` before the Next.js build started:

```txt
ERR_PNPM_META_FETCH_FAIL GET https://registry.npmjs.org/eslint: Value of "this" must be of type URLSearchParams
```

The deployment path is now:

```bash
npm install --no-audit --no-fund
npm run build
```

If Vercel still runs `pnpm install`, check the Vercel project settings and clear any custom Install Command set in the dashboard.
