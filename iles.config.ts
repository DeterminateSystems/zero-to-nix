import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";

import headings from "@islands/headings";
import icons from "@islands/icons";
import prism from "@islands/prism";
import { RawPageMatter, RouteToRender, SSGContext, defineConfig } from "iles";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlugCustomId from "rehype-slug-custom-id";

import site from "./src/site";

const { url: siteUrl } = site;

export default defineConfig({
  siteUrl,
  extendFrontmatter(frontmatter: RawPageMatter, filename: string) {
    // Set the layout for e.g. src/pages/foo/bar.mdx to foo
    // Filters out non-MDX pages
    if (filename.endsWith(".mdx")) {
      frontmatter.layout = filename.split("/")[2];
    }

    // Add an `id` parameter to concept pages based on filename
    if (filename.split("/")[2] === "concepts") {
      const id = filename.split("/").at(-1)?.split(".").at(0);
      frontmatter["id"] = id;
    }
  },
  markdown: {
    rehypePlugins: [
      rehypeExternalLinks,
      [rehypeSlugCustomId, { enableCustomId: true }],
    ],
  },
  modules: [headings(), icons(), prism()],
  prettyUrls: true,
  ssg: {
    onSiteRendered: ({ pages }: SSGContext) => {
      pages
        .filter((page: RouteToRender) => page.outputFilename !== "index.html")
        .forEach((page: RouteToRender) => {
          const html = page.rendered;
          if (page.outputFilename.split("/").length > 1) {
            const root = page.outputFilename.split("/").at(0);
            const slug = page.outputFilename
              .split("/")
              .at(-1)
              ?.split(".")
              .at(0);
            const outputDir = `dist/${root}/${slug}`;
            rmSync(`dist/${page.outputFilename}`);

            if (!existsSync(outputDir)) {
              mkdirSync(outputDir);
            }
            const filepath = `${outputDir}/index.html`;
            writeFileSync(filepath, html);
          } else if (page.outputFilename.split("/").length === 1) {
            const slug = page.outputFilename.split(".").at(0);
            rmSync(`dist/${page.outputFilename}`);
            const outputDir = `dist/${slug}`;
            if (!existsSync(outputDir)) {
              mkdirSync(outputDir);
            }
            const filepath = `${outputDir}/index.html`;
            writeFileSync(filepath, html);
          }
        });
    },
  },
  turbo: true,
});
