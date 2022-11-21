<script setup lang="ts">
const { related } = defineProps<{
  related: string[];
}>();

const allConceptPages = useDocuments("~/pages/concepts");

const filteredPages = related.map(
  (id: string) => allConceptPages.value.find((page) => page.id === id)!
);
</script>

<template>
  <div class="space-y-4">
    <p class="text-lg md:text-xl lg:text-2xl font-semibold">Related</p>

    <Grid3>
      <HoverableLink
        v-for="page in filteredPages"
        :key="page.id"
        :text="page.title"
        :href="page.href"
        :size="'sm'"
      />
    </Grid3>
  </div>
</template>
