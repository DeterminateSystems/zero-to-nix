<template>
  <div
    class="rounded-lg border-2 border-slate-300 bg-slate-50 dark:border-slate-500 dark:bg-dark"
  >
    <div
      class="md:px-4.5 flex flex-col flex-nowrap items-start space-y-2 py-2 px-3 md:flex-row md:space-y-0 md:space-x-6 md:py-3 lg:py-4 lg:px-6"
    >
      <span class="text-lg font-bold md:text-xl lg:text-2xl">
        In this guide
      </span>
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
