<template>
  <Banner client:load />

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

<script client:load lang="ts">
import { posthog } from "posthog-js";

if (import.meta.env.MODE === "production") {
  const apiKey = "phc_OPJtdGL4gAGdo8VKLsHz4LmKfoOMKkrza1BsBNeUdx4";
  posthog.init(apiKey, {
    api_host: "https://app.posthog.com",
  });
}
</script>

<style>
@import "~/assets/css/main"; /* main.css */
</style>
