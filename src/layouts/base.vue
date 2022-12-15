<template>
  <slot />
</template>

<script setup lang="ts">
import posthog from 'posthog-js'
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

posthog.init('phc_OPJtdGL4gAGdo8VKLsHz4LmKfoOMKkrza1BsBNeUdx4', { api_host: 'https://app.posthog.com' })

</script>

<style>
@import "@fontsource/inter"; /* sans-serif */
@import "@fontsource/fira-mono"; /* monospace */
@import "~/assets/css/main"; /* main.css */
</style>
