<script setup lang="ts">
const summaryProps = defineProps<{
  items?: string[];
}>();

const { items } = summaryProps;
</script>

<template>
  <div
    class="rounded-lg bg-slate-50 border-2 border-slate-300 dark:bg-black dark:border-slate-500"
  >
    <div
      class="flex flex-col md:flex-row items-start flex-nowrap space-y-2 md:space-y-0 md:space-x-6 py-2 md:py-3 lg:py-4 px-3 md:px-4.5 lg:px-6"
    >
      <span class="text-lg md:text-xl lg:text-2xl font-bold"
        >In this guide</span
      >
      <span>
        <p
          v-for="item in items"
          :key="item"
          class="md:text-normal space-x-3 text-sm lg:text-lg"
        >
          <span class="font-semibold">&RightArrow;</span>
          <span class="first-letter:text-bold">{{ item }}</span>
        </p>
      </span>
    </div>
  </div>
</template>
