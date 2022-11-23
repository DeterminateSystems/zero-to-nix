<script setup lang="ts">
const { title: dangerTitle } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="not-prose my-6 rounded-lg border-2 border-red bg-pale-red py-4 px-6 dark:bg-inherit"
  >
    <div class="space-y-2">
      <p v-if="dangerTitle" class="text-2xl font-semibold tracking-tight">
        {{ dangerTitle }}
      </p>

      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>
