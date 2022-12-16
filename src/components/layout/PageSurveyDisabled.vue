<template>
  <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">
    Was this page helpful?
  </h3>
  <p>turn on tracking plz</p>

  <button
    class="flex items-center justify-between space-x-3 rounded-lg border-2 border-light-gray py-2 px-3 text-sm font-semibold tracking-tight hover:border-primary hover:shadow-sm dark:border-gray dark:hover:border-primary md:text-base"
    @click="enableCookie()"
  >
    <span>Ok</span>
  </button>
</template>

<script setup lang="ts">
import posthog from "posthog-js";

const emit = defineEmits(["complete"]);

const enableCookie = () => {
  posthog.opt_in_capturing();
  emit("complete");
};
</script>
