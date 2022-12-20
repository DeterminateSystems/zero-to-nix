<template>
  <HorizontalContainer>
    <Hero
      title="Quick start"
      description="Feel the power of Nix in no time"
      client:none
    />

    <Grid2>
      <HoverableLink
        v-for="({ href, frontmatter }, idx) in sortedQuickStartPages"
        :key="idx"
        :href="href"
        :order="frontmatter.order"
        :text="frontmatter.title"
        size="normal"
      />
    </Grid2>
  </HorizontalContainer>
</template>

<script setup lang="ts">
import { sortedQuickStartPages } from "../../logic/content";
</script>
