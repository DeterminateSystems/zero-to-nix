import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
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
    }),
    icon(),
    mdx({
      //gfm: true,
      remarkPlugins: [remarkEmoji, remarkHeadingId],
    }),
    sitemap(),
    tailwind(),
  ],
  server: {
    open: true,
    port: 3000,
  },
  site: "https://zero-to-nix.com",
});
