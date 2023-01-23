<template>
  <div class="space-y-4">
    <h3 class="text-lg font-semibold md:text-xl lg:text-2xl">{{ title }}</h3>
    <textarea
      class="w-full resize-none rounded-lg border-1.5 border-soft-gray p-1.5 text-sm shadow-sm dark:border-gray dark:bg-dark md:p-3 md:text-base lg:p-2.5"
      rows="5"
      v-model="feedback"
      :placeholder="placeholder"
      autoFocus
    />
    <button
      v-if="feedback"
      class="rounded-lg bg-light-gray py-2 px-3 font-semibold text-dark hover:cursor-pointer hover:bg-gray hover:text-pale active:bg-rose dark:bg-gray dark:text-pale dark:hover:bg-dark-gray"
      :disabled="feedback.trim() === ''"
      @click="submitFeedback"
    >
      Send feedback
    </button>
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
  reaction === "positive"
    ? "What made this page great?"
    : "How can we improve?",
);

const placeholder = ref<string>(
  reaction === "positive"
    ? "Let usk now what you found helpful"
    : "Let us know how we can do better",
);

const feedback = ref<string | undefined>();

const submitFeedback = () => {
  posthog.capture("page_feedback", {
    reaction,
    feedback: feedback!.value,
  });
  emit("complete");
};
</script>
