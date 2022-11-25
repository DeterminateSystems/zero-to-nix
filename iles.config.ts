import headings from "@islands/headings";
import icons from "@islands/icons";
import prism from "@islands/prism";
import { RawPageMatter, defineConfig } from "iles";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlugCustomId from "rehype-slug-custom-id";

import site from "./src/site";

const env = process.env["ENV"];
const isPreview = env === "preview";

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
  prettyUrls: !isPreview, // Disable in preview mode
  turbo: true,
});
