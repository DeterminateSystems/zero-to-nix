<script setup lang="ts">
const size = "lg";
</script>

<template>
  <HorizontalContainer>
    <Hero :title="$site.title" :description="$site.description" :size="size" />
  </HorizontalContainer>
</template>
