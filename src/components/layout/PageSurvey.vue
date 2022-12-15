<template>
  <div class="space-y-4">
    <PageSurveyButtons v-if="step == 'prompt'" @complete="acceptResponse" />
    <PageSurveyFeedback v-else-if="step == 'feedback'" :reaction="reaction" @complete="step = 'thankyou'" />
    <PageSurveyThankYou v-else-if="step == 'thankyou'" />
  </div>
</template>

<script lang="ts">
interface State {
  reaction: String,
  step: "prompt" | "feedback" | "thankyou"
}
export default {
  data(): State {
    return {
      reaction: "",
      step: "prompt",
    }
  },
  methods: {
    acceptResponse(reaction: String) {
      this.reaction = reaction
      this.step = "feedback"
    }
  }
}

</script>
