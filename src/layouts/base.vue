<template>
  <slot />
</template>

<script setup lang="ts">
import { PageProps } from "iles";
import site from "~/site";

const { url } = site;

const {
  frontmatter: { href },
} = usePage<PageProps>();

const canonical = new URL(url, href).toString();

useHead({
  link: [{ rel: "canonical", href: canonical }],
});
</script>

<style>
@import "@fontsource/inter"; /* sans-serif */
@import "@fontsource/fira-mono"; /* monospace */
@import "~/assets/css/tailwind";
@import "prism-themes/themes/prism-night-owl"; /* https://www.npmjs.com/package/prism-themes */
</style>
