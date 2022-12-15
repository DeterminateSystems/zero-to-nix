<template>
  <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">
    Was this page helpful?
  </h3>
  <div class="flex items-center space-x-2">
    <button
      class="flex items-center justify-between space-x-3 rounded-lg border-2 border-light-gray py-2 px-3 text-sm font-semibold tracking-tight hover:border-primary hover:shadow-sm dark:border-gray dark:hover:border-primary md:text-base"
      @click="submitResponse('positive')"
    >
      <span>Yes</span>
      <span>👍</span>
    </button>
    <button
      class="flex items-center justify-between space-x-3 rounded-lg border-2 border-light-gray py-2 px-3 text-sm font-semibold tracking-tight hover:border-primary hover:shadow-sm dark:border-gray dark:hover:border-primary md:text-base"
      @click="submitResponse('negative')"
    >
      <span>No</span>
      <span>👎</span>
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
