<template>
  <div class="space-y-4">
    <PageSurveyDisabled
      v-if="trackingDisabled() && updates >= 0"
      @complete="updateTracking"
    />
    <PageSurveyButtons
      v-else-if="step === 'prompt'"
      @complete="acceptResponse"
    />
    <PageSurveyFeedback
      v-else-if="step === 'feedback'"
      :reaction="reaction"
      @complete="step = 'thankyou'"
    />
    <PageSurveyThankYou v-else-if="step === 'thankyou'" />
  </div>
</template>

<script setup lang="ts">
import { posthog } from "posthog-js";
import { ref } from "vue";

export type Reaction = "positive" | "negative";
export type Step = "prompt" | "feedback" | "thankyou";

const reaction = ref<Reaction | undefined>();
const step = ref<Step>("prompt");
const updates = ref<number>(1);

const trackingDisabled = () => {
  return typeof window !== "undefined"
    ? posthog.has_opted_out_capturing()
    : false;
};

const updateTracking = () => {
  updates.value += 1;
};

const acceptResponse = (r: Reaction) => {
  reaction.value = r;
  step.value = "feedback";
};
</script>
