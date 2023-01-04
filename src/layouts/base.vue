<template v-cloak>
  <slot />

  <CookieConsent client:load />
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
@import "~/assets/css/main"; /* main.css */

[v-cloak] {
  display: none;
}
</style>
