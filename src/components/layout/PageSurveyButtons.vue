<template>
  <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">
    Was this page helpful?
  </h3>
  <div class="flex items-center space-x-3">
    <button
      class="relative flex flex-grow items-center justify-between rounded-sm border-2 border-soft-gray bg-white px-4 py-2 text-base font-bold text-black/70 shadow-sm transition-none transition-colors hover:text-black/95 active:top-[1px] active:scale-[.98] dark:bg-white/30 dark:text-white/90 dark:hover:bg-white/40 dark:hover:text-white/100 sm:w-[220px] sm:flex-grow-0 sm:rounded-md"
      @click="() => submitResponse('positive')"
    >
      <span>Yes</span>
      👍
    </button>
    <button
      class="relative flex flex-grow items-center justify-between rounded-sm border-2 border-soft-gray bg-white px-4 py-2 text-base font-bold text-black/70 shadow-sm transition-none transition-colors hover:text-black/95 active:top-[1px] active:scale-[.98] dark:bg-white/30 dark:text-white/90 dark:hover:bg-white/40 dark:hover:text-white/100 sm:w-[220px] sm:flex-grow-0 sm:rounded-md"
      @click="() => submitResponse('negative')"
    >
      <span>No</span>
      👎
    </button>
  </div>
</template>

<script setup lang="ts">
import posthog from "posthog-js";
import { Reaction } from "./PageSurvey.vue";

const emit = defineEmits(["complete"]);

const submitResponse = (reaction: Reaction) => {
  posthog.capture("page_review", { reaction });
  emit("complete");
};
</script>
