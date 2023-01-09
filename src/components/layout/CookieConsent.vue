<template>
  <div
    v-show="!hideCookieConsent"
    class="fixed left-6 bottom-6 z-50 print:hidden"
  >
    <div
      class="max-w-[202px] rounded-lg bg-primary text-white/80 dark:bg-dark-gray"
    >
      <p class="content m-0 p-3 text-[14px]">
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
          class="py-2 text-sm font-semibold text-white hover:text-light-gray"
          @click="acceptCookies"
        >
          Accept
        </button>
        <button
          class="py-2 text-sm font-semibold text-white hover:text-light-gray"
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

// Set to false initially to avoid flash of content
const optionSelected = ref<boolean>(false);

// Whether the user has explicitly opted into or out of the cookie
const posthogKnowsPreference = computed(() => {
  return typeof window === "undefined"
    ? false
    : posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing();
});

// Whether the cookie consent widget should be shown to the user
const hideCookieConsent = computed(() => {
  return typeof window === "undefined"
    ? false
    : posthogKnowsPreference.value
    ? true
    : optionSelected.value;
});

// Callback for the Accept button
const acceptCookies = () => {
  if (typeof window !== "undefined") {
    posthog.opt_in_capturing();
    optionSelected.value = true;
  }
};

// Callback for the Decline button
const declineCookies = () => {
  if (typeof window !== "undefined") {
    posthog.opt_out_capturing();
    optionSelected.value = true;
  }
};
</script>
