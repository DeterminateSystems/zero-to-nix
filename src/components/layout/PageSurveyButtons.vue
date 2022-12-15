<template>
  <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">Was this page helpful?</h3>
  <div class="flex space-x-3 items-center">
    <button
      class="sm:rounded-md border-2 border-soft-gray text-base font-bold flex items-center flex-grow sm:flex-grow-0 sm:w-[220px] justify-between px-4 py-2 rounded-sm shadow-sm bg-white text-black/70 hover:text-black/95 dark:bg-white/30 dark:text-white/90 dark:hover:bg-white/40 dark:hover:text-white/100 relative active:top-[1px] active:scale-[.98] transition-none transition-colors"
      @click="() => submitResponse('positive')">
      <span>Yes</span>
      👍
    </button>
    <button
      class="sm:rounded-md border-2 border-soft-gray text-base font-bold flex items-center flex-grow sm:flex-grow-0 sm:w-[220px] justify-between px-4 py-2 rounded-sm shadow-sm bg-white text-black/70 hover:text-black/95 dark:bg-white/30 dark:text-white/90 dark:hover:bg-white/40 dark:hover:text-white/100 relative active:top-[1px] active:scale-[.98] transition-none transition-colors"
      @click="() => submitResponse('negative')">
      <span>No</span>
      👎
    </button>
  </div>
</template>

<script lang="ts">
import posthog from 'posthog-js'

type Reaction = "positive" | "negative";

export default {
  emits: ['complete'],

  methods: {
    submitResponse(reaction: Reaction) {
      posthog.capture("page_review", {
        reaction: reaction
      })
      this.$emit("complete", reaction)
    },
  }
}
</script>
