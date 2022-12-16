<template>
  <div v-if="show_banner" class="fixed z-50 left-0 bottom-0">
    <div
      class="bg-primary dark:bg-gray-accent-dark rounded-lg max-w-[202px] text-white/80 translate-x-[15px] translate-y-[-15px]">
      <p class="text-[14px] m-0 p-3">We use a single, first-party analytics cookie to focus our limited time and energy
        on the most important documentation. Check out our <a href="https://determinate.systems/privacy"
          class="underline" target="_blank">privacy policy</a>.
      </p>
      <div class="grid grid-cols-2 border-t border-white/40 divide-x">
        <button class="font-semibold text-white py-2 text-sm" @click="acceptCookies">Accept</button>
        <button class="font-semibold text-white py-2 text-sm" @click="declineCookies">Decline</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import posthog from "posthog-js";
import { ref } from "vue";

const show_banner = ref<boolean>(
  !posthog.has_opted_out_capturing()
  && !posthog.has_opted_in_capturing()
);

const acceptCookies = () => {
  posthog.opt_in_capturing();
  show_banner.value = false;
};

const declineCookies = () => {
  posthog.opt_out_capturing();
  show_banner.value = false;
};
</script>
