<template>
  <div v-if="!hideCookieConsent" class="fixed left-0 bottom-0 z-50">
    <div
      class="dark:bg-gray-accent-dark max-w-[202px] translate-x-[15px] translate-y-[-15px] rounded-lg bg-primary text-white/80"
    >
      <p class="m-0 p-3 text-[14px]">
        We use a single, first-party analytics cookie to focus our limited time
        and energy on the most important documentation. Check out our
        <a
          href="https://determinate.systems/privacy"
          class="underline"
          target="_blank"
          >privacy policy</a
        >.
      </p>
      <div class="grid grid-cols-2 divide-x border-t border-white/40">
        <button
          class="py-2 text-sm font-semibold text-white"
          @click="acceptCookies"
        >
          Accept
        </button>
        <button
          class="py-2 text-sm font-semibold text-white"
          @click="declineCookies"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostHog } from "posthog-js";
import { computed, getCurrentInstance, inject, ref } from "vue";

// Register and inject the Posthog plugin
import { PosthogPlugin } from "~/plugins/posthog";
const app = getCurrentInstance()!.appContext.app;
app.use(PosthogPlugin);
const posthog = inject("posthog") as PostHog;

// Whether Accept or Decline has been explicitly selected
const optionSelected = ref<boolean>(false);

// Whether the user has explicitly opted into or out of the cookie
const posthogKnowsPreference = computed(() => {
  return posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing();
});

// Whether the cookie consent widget should be shown to the user
const hideCookieConsent = computed(() => {
  return posthogKnowsPreference.value || optionSelected.value;
});

// Callback for the Accept button
const acceptCookies = () => {
  posthog.opt_in_capturing();
  optionSelected.value = true;
};

// Callback for the Decline button
const declineCookies = () => {
  posthog.opt_out_capturing;
  optionSelected.value = true;
};
</script>
