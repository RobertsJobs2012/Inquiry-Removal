# Performance notes

CSS source files under `src/styles` use `.css.txt` and are imported with `?raw` so Astro injects them into the shared layout as inline CSS. This avoids creating separate render-blocking CSS files while preserving the exact styling.

Decorative shimmer/background-position animations are disabled to avoid Lighthouse non-composited animation diagnostics. The gradient visuals remain static.

`ClientRouter` is intentionally kept for instant Astro client-side navigation. Lighthouse may still attribute some forced reflow to it; removing it would hurt app-like navigation.
