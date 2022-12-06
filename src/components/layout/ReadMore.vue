<template>
  <div class="space-y-4">
    <p class="text-lg font-semibold md:text-xl lg:text-2xl">Read more</p>

    <Grid3>
      <HoverableReadMoreLink
        v-for="({ title, href, source }, idx) in readMoreLinks"
        :title="title"
        :href="href"
        :source="source"
        :key="idx"
      />
    </Grid3>
  </div>
</template>

<script setup lang="ts">
import { ReadMore } from "~/logic/content";

const { links: readMoreLinks } = defineProps<{
  links: ReadMore[];
}>();
</script>
