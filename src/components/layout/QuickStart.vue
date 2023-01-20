<template>
  <section
    class="rounded border border-gray py-2 px-3.5 md:py-3 md:px-5 lg:py-4 lg:px-6"
    v-if="showBanner"
  >
    <div class="flex items-center justify-between">
      <p
        class="text-sm font-light text-dark dark:text-white md:text-base lg:text-lg"
      >
        Something
      </p>

      <button @click="disableBanner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 stroke-2 text-dark hover:text-gray dark:text-white dark:hover:text-primary md:h-5 md:w-5 lg:h-6 lg:w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/vue";
import { WritableAtom } from "nanostores";
import { onMounted, ref } from "vue";

const quickStartBannerAtom: WritableAtom<string> = persistentAtom<string>(
  "zero-to-nix:quick-start-banner",
  "open",
);

const quickStartBannerOpen: boolean =
  useStore(quickStartBannerAtom).value === "open";

const showBanner = ref<boolean>(false);

const disableBanner = () => {
  quickStartBannerAtom.set("closed");
  showBanner.value = false;
};

onMounted(() => {
  if (quickStartBannerOpen) {
    showBanner.value = true;
  }
});
</script>
