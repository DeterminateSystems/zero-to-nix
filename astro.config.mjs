import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
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
    expressiveCode({
      themes: ["github-dark"],
      emitExternalStylesheet: true,
      defaultProps: {
        showLineNumbers: false,
      },
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      styleOverrides: {
        codeFontSize: "1rem",
        uiFontSize: "1rem",
      },
    }),
    icon(),
    mdx({
      //gfm: true,
      remarkPlugins: [remarkEmoji, remarkHeadingId],
    }),
    sitemap(),
    tailwind(),
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
});
