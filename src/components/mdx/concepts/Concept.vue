<script lang="ts">
import { defineComponent } from "vue";
import Popper from "vue3-popper";

export default defineComponent({
  components: {
    Popper,
  },
});
</script>

<script setup lang="ts">
import { ConceptPage, conceptPage } from "~/logic/content";

const { id, show } = defineProps<{
  id: string;
  show?: string;
}>();

const page: ConceptPage = conceptPage(id);
const displayText = show ?? page.title;
</script>

<template>
  <Popper v-bind="$attrs" placement="top">
    <button
      :aria-label="`Tooltip popover explainer for the ${page.title} concept`"
      class="underline decoration-primary decoration-dotted underline-offset-4 hover:cursor-help hover:text-rose"
    >
      {{ displayText }}
    </button>
    <template #content>
      <div
        class="not-prose max-w-fit space-y-3 rounded-lg bg-pale py-3 px-5 shadow-md dark:bg-slate-700 md:space-y-4"
      >
        <p class="text-base md:text-lg lg:text-xl">{{ page.snippet }}</p>
        <div class="flex justify-end">
          <a
            :href="page.href"
            class="rounded-md bg-light-gray px-3 py-1.5 text-xs hover:bg-primary hover:text-white dark:bg-gray dark:hover:bg-primary md:text-sm"
          >
            More
          </a>
        </div>
      </div>
    </template>
  </Popper>
</template>
