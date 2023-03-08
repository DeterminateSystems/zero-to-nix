<template>
  <div v-show="show" class="fixed left-6 bottom-6 z-50 print:hidden">
    <div class="max-w-[225px] bg-soft-gray shadow-lg dark:text-dark">
      <p class="content m-0 py-4 px-6 text-[16px]">
        We use a single, first-party analytics cookie to focus our limited time
        and energy on the most important documentation. Check out our
        <a
          href="https://determinate.systems/privacy"
          class="underline"
          target="_blank"
          >privacy policy</a
        >.
      </p>
      <div
        class="grid grid-cols-2 divide-x-1.5 divide-light-gray border-t-1.5 border-light-gray"
      >
        <button
          class="py-2.5 font-bold hover:bg-green hover:text-dark"
          @click="acceptCookies"
        >
          Accept
        </button>
        <button
          class="py-2.5 font-bold hover:bg-red hover:text-white"
          @click="declineCookies"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { posthog } from "posthog-js";
import { computed, onBeforeMount, onMounted, ref } from "vue";

// Set to `false` initially to avoid flash of content
const show = ref<boolean>(false);

// Whether the user has selected Accept or Decline at some point. Initially
// `false` but potentially switched to `true` as a computed value depending on
// Posthog's response.
const optionSelected = ref<boolean>(false);

// Whether the user has explicitly opted into or out of the cookie.
const posthogKnowsPreference = computed(() => {
  return typeof window === "undefined"
    ? false
    : posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing();
});

// Whether the cookie consent widget should be shown to the user.
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
    show.value = false;
    optionSelected.value = true;
  }
};

// Callback for the Decline button
const declineCookies = () => {
  if (typeof window !== "undefined") {
    posthog.opt_out_capturing();
    show.value = false;
    optionSelected.value = true;
  }
};

// Logic run before the component is mounted. This is where the Posthog client
// connection is established.
onBeforeMount(() => {
  // Register and inject the Posthog plugin
  if (typeof window !== "undefined") {
    posthog.init("phc_OPJtdGL4gAGdo8VKLsHz4LmKfoOMKkrza1BsBNeUdx4", {
      api_host: "https://app.posthog.com",
    });
  }
});

// Once the component has been loaded, display it if
onMounted(() => {
  if (!hideCookieConsent.value) {
    show.value = true;
  }
});
</script>
