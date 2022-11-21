<script setup lang="ts">
const { id } = defineProps<{
  id: string;
}>();

const page = useDocuments<{ id: string }>("~/briefs").value.find(
  (page) => page.frontmatter.id === id
);
</script>

<template>
  <component :is="page" />
</template>
