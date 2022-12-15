<template>
  <div class="space-y-4">
    <PageSurveyButtons v-if="step === 'prompt'" @complete="acceptResponse" />
    <PageSurveyFeedback
      v-else-if="step === 'feedback'"
      :reaction="reaction"
      @complete="step = 'thankyou'"
    />
    <PageSurveyThankYou v-else-if="step === 'thankyou'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

export type Reaction = "positive" | "negative";
export type Step = "prompt" | "feedback" | "thankyou";

const reaction = ref<Reaction>();
const step = ref<Step>("prompt");

const acceptResponse = (r: Reaction) => {
  reaction.value = r;
  step.value = "feedback";
};
</script>
