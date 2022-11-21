<script setup lang="ts">
type HasTitle = {
  title: string;
};

const conceptPages = useDocuments<HasTitle>("~/pages/concepts");

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
