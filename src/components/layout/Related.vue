<template>
  <div class="space-y-4">
    <p
      class="text-xl font-semibold hover:text-gray dark:hover:text-light-gray md:text-2xl lg:text-3xl"
      id="related"
    >
      <a href="#related">Related</a>
    </p>

    <Grid3>
      <HoverableLink
        v-for="(page, idx) in relatedPages"
        :key="idx"
        :text="page.title"
        :href="page.href"
        size="sm"
      />
    </Grid3>
  </div>
</template>

<script setup lang="ts">
import { relatedConceptPages, ConceptPage } from "../../logic/content";

const { related } = defineProps<{
  related: string[];
}>();

const { route } = usePage();

const relatedPages: ConceptPage[] = relatedConceptPages(route.path, related);
</script>
