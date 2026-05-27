import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkEmoji from "remark-emoji";
import remarkHeadingId from "remark-heading-id";

export default defineConfig({
  integrations: [
    alpinejs({
      entrypoint: "./src/entrypoint",
    }),
    expressiveCode(),
    icon(),
    mdx({
      //gfm: true,
      remarkPlugins: [remarkEmoji, remarkHeadingId],
    }),
    sitemap(),
    react(),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { rel: ["nofollow noopener noreferrer"], target: "_blank" },
      ],
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  server: {
    open: true,
    port: 3000,
  },
  site: "https://zero-to-nix.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
