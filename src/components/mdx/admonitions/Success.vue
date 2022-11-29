<template>
  <div
    class="my-6 rounded-lg border-2 border-green bg-pale-green py-6 px-8 dark:bg-inherit"
  >
    <div class="space-y-2">
      <p v-if="successTitle" class="text-2xl font-semibold tracking-tight">
        {{ successTitle }}
      </p>

      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title: successTitle } = defineProps<{
  title?: string;
}>();
</script>
