<template>
  <div
    class="my-6 rounded-lg border-2 border-blue bg-pale-blue py-4 px-6 dark:bg-inherit"
  >
    <div class="space-y-2">
      <span v-if="infoTitle" class="text-2xl font-semibold tracking-tight">
        {{ infoTitle }}
      </span>

      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title: infoTitle } = defineProps<{
  title?: string;
}>();
</script>
