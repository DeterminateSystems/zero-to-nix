<script setup lang="ts">
import { conceptPages } from "../../logic/content";
</script>

<template>
  <HorizontalContainer>
    <Hero
      :title="'Nix concepts'"
      :description="'The whys and the hows of Nix'"
    />

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
