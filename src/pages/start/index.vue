<script setup lang="ts">
import { sortedQuickStartPages } from "../../content";

const title = "Quick start";
const description = "Feel the power of Nix in no time";
</script>

<template>
  <HorizontalContainer>
    <Hero :title="title" :description="description" />

    <Grid2>
      <HoverableLink
        v-for="page in sortedQuickStartPages"
        :key="page.id"
        :href="page.href"
        :text="`${page.frontmatter.order}. ${page.frontmatter.title}`"
        :size="'normal'"
      />
    </Grid2>
  </HorizontalContainer>
</template>
