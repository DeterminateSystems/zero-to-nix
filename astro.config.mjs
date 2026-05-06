import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import remarkEmoji from "remark-emoji";
import remarkHeadingId from "remark-heading-id";

const port = 3000;
const site = process.env.ENV === "production"
  ? "https://zero-to-nix.com"
  : process.env.DEPLOY_PRIME_URL ?? `http://localhost:${port}`;

export default defineConfig({
	integrations: [
		alpinejs({
			entrypoint: "./src/entrypoint",
		}),
		expressiveCode(),
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
		port,
	},
	site,
});
