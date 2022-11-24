<template>
  <HorizontalContainer>
    <Hero title="Quick start" description="Feel the power of Nix in no time" />

    <Grid2>
      <HoverableLink
        v-for="(page, idx) in sortedQuickStartPages"
        :key="idx"
        :href="page.href"
        :text="`${page.frontmatter.order}. ${page.frontmatter.title}`"
        size="normal"
      />
    </Grid2>
  </HorizontalContainer>
</template>

<script setup lang="ts">
import { sortedQuickStartPages } from "../../logic/content";
</script>
