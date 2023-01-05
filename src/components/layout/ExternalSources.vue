<template>
  <div
    :class="[
      showTitle !== undefined && !showTitle && 'not-prose remove-underline',
    ]"
    class="space-y-4"
  >
    <p v-if="showTitle" class="text-lg font-semibold md:text-xl lg:text-2xl">
      External sources
    </p>

    <Grid3>
      <HoverableExternalSourceLink
        v-for="({ title, href, source }, idx) in externalSources"
        :title="md(title)"
        :href="href"
        :source="source"
        :key="idx"
      />
    </Grid3>
  </div>
</template>

<script setup lang="ts">
import { ExternalSource, md } from "~/logic/content";

const { showTitle, links: externalSources } = defineProps<{
  showTitle?: boolean;
  links: ExternalSource[];
}>();
</script>
