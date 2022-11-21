<script setup lang="ts">
type QuickStartPage = {
  title: string;
  order: number;
};

const quickStartPages = useDocuments<QuickStartPage>(
  "~/pages/start"
).value.sort((p1, p2) => p1.frontmatter.order - p2.frontmatter.order);

const title = "Quick start";
const description = "Feel the power of Nix in no time";
</script>

<template>
  <HorizontalContainer>
    <Hero :title="title" :description="description" />

    <Grid2>
      <HoverableLink
        v-for="page in quickStartPages"
        :key="page.id"
        :href="page.href"
        :text="`${page.frontmatter.order}. ${page.frontmatter.title}`"
        :size="'normal'"
      />
    </Grid2>
  </HorizontalContainer>
</template>
