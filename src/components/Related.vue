<script setup lang="ts">
import { relatedConceptPages, ConceptPage } from "../content";

const { related } = defineProps<{
  related: string[];
}>();

type HasId = {
  id: string;
};

const relatedPages: ConceptPage[] = relatedConceptPages(related);
</script>

<template>
  <div class="space-y-4">
    <p class="text-lg font-semibold md:text-xl lg:text-2xl">Related</p>

    <Grid3>
      <HoverableLink
        v-for="page in relatedPages"
        :key="page.id"
        :text="page.title"
        :href="page.href"
        :size="'sm'"
      />
    </Grid3>
  </div>
</template>
