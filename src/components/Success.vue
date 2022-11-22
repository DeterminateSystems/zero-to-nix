<script setup lang="ts">
const { title: successTitle } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div
    class="not-prose rounded-lg border-2 border-green bg-pale-green py-4 px-6 dark:bg-black"
  >
    <div class="space-y-2">
      <p v-if="successTitle" class="text-2xl font-semibold tracking-tight">
        {{ successTitle }}
      </p>

      <slot />
    </div>
  </div>
</template>
