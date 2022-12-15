<template>
  <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">{{ title }}</h3>
  <div class="space-y-2">
    <textarea
      class="w-full rounded-sm border-2 border-soft-gray p-1.5 text-sm shadow-sm dark:bg-dark"
      rows="3"
      @change="setFeedback"
      :placeholder="placeholder"
      autoFocus
    />
    <div>
      <button
        class="relative flex flex-grow items-center justify-between rounded-sm border-2 border-soft-gray bg-cerulean bg-white px-4 py-2 text-base font-bold text-white text-black/70 shadow-sm transition-none transition-colors hover:text-black/95 active:top-[1px] active:scale-[.98] dark:bg-white/30 dark:text-white/90 dark:hover:bg-white/40 dark:hover:text-white/100 sm:w-[220px] sm:flex-grow-0 sm:rounded-md"
        :disabled="feedback.trim() === ''"
        @click="submitFeedback"
      >
        Send feedback
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import posthog from "posthog-js";
import { Reaction } from "./PageSurvey.vue";

const emit = defineEmits(["complete"]);

const { reaction } = defineProps<{
  reaction: Reaction | undefined;
}>();

const title = ref<string>(
  reaction === "positive" ? "What made this page great?" : "How can we improve?"
);

const placeholder = ref<string>(
  reaction === "positive"
    ? "Let usk now what you found helpful"
    : "Let us know how we can do better"
);

const feedback = ref<string>("");

const setFeedback = (event: Event) => {
  const el = event.target as HTMLInputElement;
  feedback.value = el.value;
};

const submitFeedback = () => {
  posthog.capture("page_feedback", {
    reaction,
    feedback: feedback.value,
  });
  emit("complete");
};
</script>
