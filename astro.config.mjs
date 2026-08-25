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
    // Shared styles are intentionally extracted when they are large enough so
    // visitors can reuse the browser-cached CSS across the entire site.
    inlineStylesheets: "auto",
  },
});
