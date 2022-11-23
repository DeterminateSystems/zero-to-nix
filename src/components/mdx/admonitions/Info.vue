<script setup lang="ts">
const { title: infoTitle } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="not-prose rounded-lg border-2 border-blue bg-pale-blue py-4 px-6 dark:bg-inherit"
  >
    <div class="space-y-2">
      <p v-if="infoTitle" class="text-2xl font-semibold tracking-tight">
        {{ infoTitle }}
      </p>

      <slot />
    </div>
  </div>
</template>
