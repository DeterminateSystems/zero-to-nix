<template>
  <slot v-if="sys === system" />
</template>

<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { systemState } from "~/logic/state";

const { sys } = defineProps<{
  sys: string;
}>();

const system = useStore(systemState);
</script>
