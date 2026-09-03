import alpinejs from "@astrojs/alpinejs";
import { unified } from "@astrojs/markdown-remark";
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
    mdx(),
    sitemap(),
    react(),
  ],
  markdown: {
    // Astro 7.1+ defaults to the Sätteri Markdown processor. This site relies
    // on remark/rehype plugins (custom heading IDs, emoji, external links), so
    // it uses the unified processor explicitly. MDX inherits these plugins.
    processor: unified({
      remarkPlugins: [remarkEmoji, remarkHeadingId],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { rel: ["nofollow noopener noreferrer"], target: "_blank" },
        ],
      ],
    }),
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
