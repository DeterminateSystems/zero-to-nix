<template>
  <Banner client:load />

  <CookieConsent client:load />

  <Modal client:load />

  <slot />
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
    { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
  ],
  meta: tags && [{ name: "keywords", content: tags!.join(",") }],
  title,
});
</script>

<style>
@import "~/assets/css/main"; /* main.css */

/* Mailchimp embed styling */
#mc_embed_signup {
  background: inherit;
  clear: left;
}
</style>
