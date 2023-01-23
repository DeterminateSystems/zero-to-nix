<template>
  <Popper v-bind="$attrs" placement="top">
    <button
      :aria-label="`Tooltip popover explainer for the ${title} concept`"
      class="underline decoration-primary decoration-dotted underline-offset-4 hover:cursor-help hover:text-rose"
    >
      {{ displayText }}
    </button>
    <template #content>
      <div
        class="not-prose max-w-fit space-y-3 rounded-lg bg-pale py-3 px-5 shadow-md dark:bg-gray md:space-y-4"
      >
        <span
          v-html="md(snippet)"
          class="content text-base md:text-lg lg:text-xl"
        />
        <div class="flex justify-end">
          <a
            :href="href"
            class="rounded-md bg-light-gray px-3 py-1.5 text-xs hover:bg-primary hover:text-white dark:bg-gray dark:hover:bg-primary md:text-sm"
          >
            More
          </a>
        </div>
      </div>
    </template>
  </Popper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Popper from "vue3-popper";
import { md } from "~/logic/content";

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

const { title, href, snippet }: ConceptPage = conceptPage(id);
const displayText = show ?? title;
</script>
