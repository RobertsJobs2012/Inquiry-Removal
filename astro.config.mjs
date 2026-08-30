// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { NON_INDEXABLE_PATHS, SITE_ORIGIN } from "./src/data/discovery.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE_ORIGIN,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !NON_INDEXABLE_PATHS.has(new URL(page).pathname),
      namespaces: {
        image: false,
        news: false,
        video: false,
        xhtml: false,
      },
    }),
  ],
  build: {
    format: "directory",
    // Keep the large shared stylesheet cacheable across the full site. The
    // technical audit also prevents oversized page-level inline CSS.
    inlineStylesheets: "auto",
  },
});
