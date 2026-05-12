import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://state48credit.com",
  output: "static",
  compressHTML: true,
  trailingSlash: "always",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  image: {
    service: {
      config: {
        avif: { effort: 9, quality: 80 },
        webp: { effort: 6, quality: 82 },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      cssMinify: "lightningcss",
      minify: true,
      sourcemap: false,
    },
  },
});
