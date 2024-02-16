import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";

import headings from "@islands/headings";
import icons from "@islands/icons";
import { RawPageMatter, RouteToRender, SSGContext, defineConfig } from "iles";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlugCustomId from "rehype-slug-custom-id";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";

import codeBlockPlugin from "./src/plugins/code";
import site from "./src/site";

const { rootUrl } = site;

const mode = process.env["ENV"] === "production" ? "production" : "development";

export default defineConfig({
  siteUrl: rootUrl,
  extendFrontmatter(frontmatter: RawPageMatter, filename: string) {
    // Set the layout for e.g. src/pages/section/foo.mdx to section
    const section = filename.split("/").at(2)!;

    // Infer the order from the filename
    if (section === "start") {
      const order = getFileSlug(filename)!;
      frontmatter["order"] = parseInt(order);
    }

    if (["concepts", "start"].includes(section) && filename.endsWith("mdx")) {
      frontmatter.layout = filename.split("/")[2];
    }

    // Add an `id` parameter to concept pages based on filename
    if (filename.split("/")[2] === "concepts") {
      const id = getFileSlug(filename);
      frontmatter["id"] = id;
    }
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
      [rehypeSlugCustomId, { enableCustomId: true }],
    ],
    remarkPlugins: [remarkGfm, remarkEmoji],
  },
  modules: [
    headings(),
    icons(),
    codeBlockPlugin({
      aliases: {
        shell: "bash",
      },
    }),
  ],
  prettyUrls: true,
  ssg: {
    onSiteRendered: ({ pages, config }: SSGContext) => {
      // Only necessary when checking internal links
      if (process.env["ENV"] === "ci") {
        const out = config.outDir;

        pages
          .filter((page: RouteToRender) => page.outputFilename !== "index.html")
          .forEach((page: RouteToRender) => {
            const filename = page.outputFilename;
            const html = page.rendered;
            const pathSegments = filename.split("/");

            const relativeOutputDir =
              pathSegments.length > 1
                ? // Convert e.g. /start/install.html to /start/install/index.html
                  `${pathSegments.at(0)}/${getFileSlug(filename)}`
                : // Convert e.g. /start.html to /start/index.html
                  getFileSlug(filename);

            const outputFilename = `${out}/${filename}`;
            rmSync(outputFilename);

            const newOutputDir = `${out}/${relativeOutputDir}`;
            if (!existsSync(newOutputDir)) {
              mkdirSync(newOutputDir);
            }
            const filepath = `${newOutputDir}/index.html`;
            writeFileSync(filepath, html);
          });
      }
    },
  },
  turbo: false, // turbo messes up posthog's pageview tracking
  vite: {
    mode,
    server: {
      port: 3000,
      open: true,
    },
  },
});

// Utils
const getFileSlug = (path: string) => path.split("/").at(-1)?.split(".").at(0);
