<template>
  <slot v-if="lang === language" />
</template>

<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { languageState } from "~/logic/state";

defineProps<{
  lang: string;
}>();

const language = useStore(languageState);
</script>
