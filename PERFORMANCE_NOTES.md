

## Build-safe performance note
Do not rename CSS files to `.css.txt` or import page styles through `?raw` unless the production build is verified. The safer current setup keeps Astro/Vite-managed CSS with `inlineStylesheets: "always"`, `ClientRouter`, static output, and smart prefetching.
