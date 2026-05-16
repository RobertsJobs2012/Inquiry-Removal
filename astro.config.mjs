import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  site: "https://www.inquiryremoval.com",
  output: "static",
  compressHTML: true,
  integrations: [react(), sitemap()],
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
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
    resolve: {
      alias: {
        "@": projectRoot,
        "next/link": fileURLToPath(new URL("./src/shims/next-link.tsx", import.meta.url)),
        "next/image": fileURLToPath(new URL("./src/shims/next-image.tsx", import.meta.url)),
      },
    },
    build: {
      cssCodeSplit: false,
      cssMinify: "lightningcss",
      minify: true,
      sourcemap: false,
    },
  },
});
