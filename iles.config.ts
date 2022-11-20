import headings from "@islands/headings";
import icons from "@islands/icons";
import prism from "@islands/prism";
import { RawPageMatter, defineConfig } from "iles";
import windicss from "vite-plugin-windicss";

export default defineConfig({
  siteUrl: "https://zero-to-nix.vercel.app",
  extendFrontmatter(frontmatter: RawPageMatter, filename: string) {
    // Set the layout for e.g. src/pages/section/foo.mdx to section
    if (filename.endsWith("mdx")) {
      frontmatter.layout = filename.split("/")[2];
    }
  },
  markdown: {
    rehypePlugins: ["rehype-external-links"],
  },
  modules: [headings(), icons(), prism()],
  prettyUrls: true,
  ssg: {},
  vite: {
    plugins: [windicss()],
  },
});
