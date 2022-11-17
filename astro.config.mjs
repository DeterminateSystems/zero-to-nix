import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zero-to-nix.vercel.app/",
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  integrations: [
    mdx(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-us",
        },
      },
    }),
    tailwind(),
  ],
});
