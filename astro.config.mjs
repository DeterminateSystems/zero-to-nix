import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://zero-to-nix.dev",
  integrations: [
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
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
