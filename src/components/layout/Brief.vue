<template>
  <component :is="brief" />
</template>

<script setup lang="ts">
import { BriefPage, getBrief } from "~/logic/content";

const { id } = defineProps<{
  id: string;
}>();

const brief: BriefPage = getBrief(id);
</script>
