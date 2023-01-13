<template>
  <Banner client:load />

  <slot />

  <CookieConsent client:load />
</template>

<script setup lang="ts">
import { PageProps } from "iles";
import site from "~/site";

const { url } = site;

type WithTags = PageProps & {
  tags?: string[];
};

const {
  frontmatter: { href, tags },
} = usePage<WithTags>();

const canonical = new URL(url, href).toString();

useHead({
  link: [{ rel: "canonical", href: canonical }],
  meta: tags && [{ name: "keywords", content: tags!.join(",") }],
});
</script>

<style>
@import "~/assets/css/main"; /* main.css */
</style>
