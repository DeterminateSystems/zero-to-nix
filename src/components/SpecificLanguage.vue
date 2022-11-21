<script setup lang="ts">
const props = defineProps<{
  lang: string;
}>();

import { useStore } from "@nanostores/vue";
import { languageState } from "~/logic/state";

const language = useStore(languageState);
</script>

<template>
  <slot v-if="lang === language" />
</template>
