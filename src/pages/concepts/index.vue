<script setup lang="ts">
import { conceptPages } from "../../content";

const conceptsTitle = "Nix concepts";
const conceptsDescription = "The whys and the hows of Nix";
</script>

<template>
  <HorizontalContainer>
    <Hero :title="conceptsTitle" :description="conceptsDescription" />

    <Grid3>
      <HoverableLink
        v-for="page in conceptPages"
        :key="page.id"
        :href="page.href"
        :text="page.frontmatter.title"
        :size="'normal'"
      />
    </Grid3>
  </HorizontalContainer>
</template>
