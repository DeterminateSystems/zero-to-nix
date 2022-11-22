<script setup lang="ts">
const { title: dangerTitle } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="not-prose rounded-lg border-2 border-red bg-pale-red py-4 px-6 dark:bg-black"
  >
    <div class="space-y-2">
      <p v-if="dangerTitle" class="text-2xl font-semibold tracking-tight">
        {{ dangerTitle }}
      </p>

      <slot />
    </div>
  </div>
</template>
