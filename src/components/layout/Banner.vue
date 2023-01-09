<template>
  <section class="bg-primary py-1.5 md:py-2 lg:py-2.5" v-if="showBanner">
    <HorizontalContainer>
      <div class="flex items-center justify-between">
        <p
          class="text-sm font-light text-white md:text-base lg:text-lg"
          v-html="md(text)"
        />

        <button @click="disableBanner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 text-white hover:text-black md:h-5 md:w-5 lg:h-6 lg:w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </HorizontalContainer>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/vue";
import { WritableAtom } from "nanostores";
import site from "~/site";
import { md } from "~/logic/content";

const {
  banner: { text, generation },
} = site;

// Show/hide the top banner
const bannerState: WritableAtom<string> = persistentAtom<string>(
  `zero-to-nix:banner-${generation}`,
  "show",
);

const bannerStore = useStore(bannerState);

const showBanner = ref<boolean>(false);

const disableBanner = () => {
  bannerState.set("hide");
  showBanner.value = false;
};

onMounted(() => {
  if (bannerStore.value === "show") {
    showBanner.value = true;
  }
});
</script>
