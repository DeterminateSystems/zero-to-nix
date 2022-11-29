<template>
  <div
    class="my-6 rounded-lg border-2 border-yellow bg-pale-yellow py-6 px-8 dark:bg-inherit"
  >
    <div class="space-y-2">
      <span v-if="warningTitle" class="text-2xl font-semibold tracking-tight">
        {{ warningTitle }}
      </span>

      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title: warningTitle } = defineProps<{
  title?: string;
}>();
</script>
