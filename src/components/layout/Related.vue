<script setup lang="ts">
import { Document } from "iles";
import { relatedConceptPages, ConceptPage } from "../../logic/content";

const { related } = defineProps<{
  related: string[];
}>();

const relatedPages: ConceptPage[] = relatedConceptPages(related);
</script>

<template>
  <div class="space-y-4">
    <p class="text-lg font-semibold md:text-xl lg:text-2xl">Related</p>

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
