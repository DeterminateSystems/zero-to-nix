<template>
  <div
    class="not-prose rounded-lg border-2 border-yellow bg-pale-yellow py-4 px-6 dark:bg-inherit"
  >
    <div class="space-y-2">
      <p v-if="warningTitle" class="text-2xl font-semibold tracking-tight">
        {{ warningTitle }}
      </p>

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { title: warningTitle } = defineProps<{
  title?: string;
}>();
</script>
