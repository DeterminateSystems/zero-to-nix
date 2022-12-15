<template>
  <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">{{ title }}</h3>
  <div class="space-y-2">
    <textarea class="border-2 border-soft-gray dark:bg-dark rounded-sm shadow-sm w-full p-1.5 text-sm" rows=3
      @change="setFeedback" :placeholder="placeholder" autoFocus />
    <div>
      <button
        class="sm:rounded-md border-2 border-soft-gray bg-cerulean text-white text-base font-bold flex items-center flex-grow sm:flex-grow-0 sm:w-[220px] justify-between px-4 py-2 rounded-sm shadow-sm bg-white text-black/70 hover:text-black/95 dark:bg-white/30 dark:text-white/90 dark:hover:bg-white/40 dark:hover:text-white/100 relative active:top-[1px] active:scale-[.98] transition-none transition-colors"
        :disabled="feedback.trim() === ''" @click="submitFeedback">
        Send feedback
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import posthog from 'posthog-js'

interface State {
  title: String,
  placeholder: String
  feedback: String,
}
export default {
  emits: ['complete'],
  props: ['reaction'],

  data(): State {
    return {
      title: this.reaction == "positive" ? "What made this page great?" : "How can we improve?",
      placeholder: this.reaction == "positive" ? "Let usk now what you found helpful" : "Let us know how we can do better",
      feedback: "",
    }
  },

  methods: {
    setFeedback(event: Event) {
      const el = event.target as HTMLInputElement
      this.feedback = el.value
    },

    submitFeedback() {
      posthog.capture("page_feedback", {
        reaction: this.reaction,
        feedback: this.feedback,
      })
      this.$emit('complete')
    },
  }
}

</script>
