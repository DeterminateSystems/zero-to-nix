<template>
  <div
    class="rounded-lg border-1.5 border-light-gray dark:border-dark-gray dark:bg-dark"
  >
    <div
      class="flex flex-col flex-nowrap items-start space-y-2 px-3 py-2 md:flex-row md:space-x-6 md:space-y-0 md:px-4 md:py-3 lg:px-6 lg:py-4"
    >
      <span class="font-bold md:text-lg lg:text-xl">In this guide</span>
      <span class="space-y-1.5">
        <div
          v-for="item in items"
          :key="item"
          class="text-sm md:text-base lg:text-lg"
        >
          <p class="space-x-3">
            <span class="font-semibold">&RightArrow;</span>
            <span v-html="md(item)" class="content" />
          </p>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { md } from "~/logic/content";

const { items } = defineProps<{
  items?: string[];
}>();
</script>
