<template>
  <div v-if="doDisplayConsent" class="fixed left-0 bottom-0 z-50">
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
import { ref, computed, inject, onMounted } from "vue";

onMounted(() => {
  console.log(`the component is now mounted.`)
})

const posthog = inject('posthog');

const posthogRemembersPreference = computed (() => {
  console.log("in/out");

  console.log(posthog.has_opted_out_capturing());

    console.log("in/out");
    console.log(posthog.has_opted_out_capturing());
    console.log(posthog.has_opted_in_capturing());
    return (
      posthog.has_opted_out_capturing() ||
      posthog.has_opted_in_capturing()
    );
});

const isEnabled = computed (() => {
  return true;
  //return (import.meta.env.MODE === "production");
});

const optionSelected = ref<boolean>(false);

const doDisplayConsent = computed (() => {
  return !(posthogRemembersPreference || optionSelected);
});


const acceptCookies = () => {
  posthog.opt_in_capturing();

  optionSelected.value = true;
};

const declineCookies = () => {
  posthog.opt_out_capturing();

  optionSelected.value = true;
};
</script>
