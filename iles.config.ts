import headings from "@islands/headings";
import icons from "@islands/icons";
import prism from "@islands/prism";
import { RawPageMatter, defineConfig } from "iles";

const env = process.env["ENV"];
const isPreview = env === "preview";

export default defineConfig({
  siteUrl: "https://zero-to-nix.vercel.app",
  extendFrontmatter(frontmatter: RawPageMatter, filename: string) {
    // Set the layout for e.g. src/pages/section/foo.mdx to section
    const section = filename.split("/").at(2)!;

    if (["concepts", "start"].includes(section) && filename.endsWith("mdx")) {
      frontmatter.layout = filename.split("/")[2];
    }

    // Add an `id` parameter to concept pages based on filename
    if (filename.split("/")[2] === "concepts") {
      const id = filename.split("/").at(-1)?.split(".").at(0);
      frontmatter["id"] = id;
    }
  },
  markdown: {
    rehypePlugins: ["rehype-external-links"],
  },
  modules: [headings(), icons(), prism()],
  prettyUrls: !isPreview, // Disable in preview mode
  turbo: true,
});
