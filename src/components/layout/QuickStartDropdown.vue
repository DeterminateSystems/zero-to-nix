<template>
  <Dropdown :dropdown="{ text: 'Quick start', pages: sortedQuickStartPages }" />
</template>

<script setup lang="ts">
import { sortedQuickStartPages } from "~/logic/content";
</script>
