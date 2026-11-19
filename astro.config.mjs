import { isSiblingProperty } from "./src/lib/siblings";
import alpinejs from "@astrojs/alpinejs";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import rehypeExternalLinks from "rehype-external-links";
import remarkEmoji from "remark-emoji";
import remarkHeadingId from "remark-heading-id";

// Last commit date of a file, for sitemap <lastmod> entries. Skipped in shallow
// clones, where every file would report the same (latest) commit.
const isShallowClone = (() => {
  try {
    return (
      execFileSync("git", ["rev-parse", "--is-shallow-repository"])
        .toString()
        .trim() === "true"
    );
  } catch {
    return true;
  }
})();

const lastModified = (file) => {
  if (isShallowClone || !file) return undefined;
  try {
    const date = execFileSync("git", ["log", "-1", "--format=%cI", "--", file])
      .toString()
      .trim();
    return date || undefined;
  } catch {
    return undefined;
  }
};

const startFiles = fs.readdirSync("src/content/start");

// The content file behind a page URL, if there is one
const contentFile = (pathname) => {
  const concept = pathname.match(/^\/concepts\/([^/]+)$/);
  if (concept) return `src/content/concepts/${concept[1]}.mdx`;
  const start = pathname.match(/^\/start\/([^/]+)$/);
  if (start) {
    const file = startFiles.find((f) => f.endsWith(`.${start[1]}.mdx`));
    return file && `src/content/start/${file}`;
  }
  if (pathname === "/about") return "src/content/plain/about.mdx";
  return undefined;
};

export default defineConfig({
  integrations: [
    alpinejs({
      entrypoint: "./src/entrypoint",
    }),
    expressiveCode(),
    icon(),
    mdx(),
    sitemap({
      serialize(item) {
        const lastmod = lastModified(contentFile(new URL(item.url).pathname));
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
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
          {
            // No nofollow: these are links we stand behind. Links to other
            // Determinate Systems sites keep the referrer for their analytics.
            rel: (element) =>
              isSiblingProperty(String(element.properties?.href ?? ""))
                ? ["noopener"]
                : ["noopener", "noreferrer"],
            target: "_blank",
          },
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
  // Serve pages at URLs without a trailing slash (concepts/flakes.html is
  // served at /concepts/flakes), matching how the site links internally, so
  // internal links don't go through a redirect
  build: {
    format: "file",
  },
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
