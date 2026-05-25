import { fileURLToPath } from "node:url";
import { defineConfig, envField, sharpImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  site: "https://www.inquiryremoval.com",
  output: "static",
  compressHTML: true,
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/draft/") && !page.includes("/admin/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
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
    responsiveStyles: true,
    layout: "constrained",
    service: sharpImageService({
      avif: { effort: 9, quality: 72 },
      webp: { effort: 6, quality: 78 },
      jpeg: { mozjpeg: true, quality: 78 },
    }),
  },
  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'"],
        strictDynamic: false,
      },
      styleSrcDirective: {
        resources: ["'self'"],
      },
    },
  },
  env: {
    schema: {
      SITE_URL: envField.string({ context: "client", access: "public" }),
      FORM_ENDPOINT: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    resolve: {
      alias: {
        "@": projectRoot,
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
