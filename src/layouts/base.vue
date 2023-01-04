<template>
  <div v-cloak>
    <slot />

    <CookieConsent v-show="activateCookieConsent" client:load />
  </div>
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

const activateCookieConsent = import.meta.env.MODE === "production";
</script>

<style>
@import "~/assets/css/main"; /* main.css */

[v-cloak] {
  display: none;
}
</style>
