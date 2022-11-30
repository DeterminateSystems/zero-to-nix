<template>
  <Dropdown :dropdown="{ text: 'Concepts', pages: conceptPages }" />
</template>

<script setup lang="ts">
import { conceptPages } from "~/logic/content";
</script>
