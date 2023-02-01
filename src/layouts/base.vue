<template>
  <Banner client:load />

  <slot />

  <CookieConsent client:load />
</template>

<script setup lang="ts">
import { PageProps } from "iles";
import site from "~/site";

const { url } = site;

type Page = PageProps & {
  title: string;
  tags?: string[];
  order?: number;
};

const {
  frontmatter: { title: rawTitle, href, tags, order },
  route,
} = usePage<Page>();

const section = route.fullPath.split("/").at(1)!;
const title = section === "start" ? `${order!}. ${rawTitle}` : rawTitle;

const canonical = new URL(url, href).toString();

useHead({
  link: [
    { rel: "canonical", href: canonical },
    { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
  ],
  meta: tags && [{ name: "keywords", content: tags!.join(",") }],
  title,
});
</script>

<style>
@import "~/assets/css/main"; /* main.css */
</style>
