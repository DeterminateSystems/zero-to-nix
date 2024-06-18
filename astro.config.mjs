import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import remarkHeadingId from "remark-heading-id";

export default defineConfig({
  site: "https://zero-to-nix.com",
  integrations: [
    alpinejs({
      entrypoint: "./src/entrypoint",
    }),
    expressiveCode({
      themes: ["github-dark"],
      defaultProps: {
        showLineNumbers: false,
      },
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    }),
    icon(),
    mdx({
      //gfm: true,
      remarkPlugins: [remarkHeadingId],
    }),
    sitemap(),
    tailwind(),
  ],
});
