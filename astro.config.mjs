import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  site: "https://www.inquiryremoval.com",
  output: "static",
  compressHTML: true,
  integrations: [
    react(),
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
    resolve: {
      alias: {
        "@": projectRoot,
        "next/link": fileURLToPath(new URL("./src/shims/next-link.tsx", import.meta.url)),
        "next/image": fileURLToPath(new URL("./src/shims/next-image.tsx", import.meta.url)),
      },
    },
    build: {
      cssCodeSplit: true,
      cssMinify: "lightningcss",
      minify: true,
      sourcemap: false,
    },
  },
});
