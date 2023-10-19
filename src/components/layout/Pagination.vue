<template>
  <div
    class="flex flex-col-reverse gap-3 tracking-tight md:flex-row md:items-center md:justify-between md:gap-0 md:space-y-0 md:text-lg lg:text-xl"
  >
    <!-- Previous -->
    <div>
      <a
        v-if="previous"
        :href="previous.href"
        class="flex space-x-3 rounded-lg font-semibold"
      >
        <span class="text-gray">&larr;</span>
        <span class="tracking-tight hover:text-gray dark:hover:text-light-gray">
          {{ previous.frontmatter.title }}
        </span>
      </a>
    </div>

    <!-- Next -->
    <div>
      <a
        v-if="next"
        :href="next.href"
        class="flex justify-between space-x-3 rounded-full border-1.5 border-primary px-4 py-2 font-semibold hover:bg-pale dark:hover:bg-darker-gray md:px-5 md:py-3"
      >
        <span class="tracking-tight">
          {{ next.frontmatter.title }}
        </span>
        <span class="text-primary">&rarr;</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPrevious, getNext, QuickStartPage } from "../../logic/content";

const { order } = defineProps<{
  order: number;
}>();

const previous: QuickStartPage | undefined = getPrevious(order);
const next: QuickStartPage | undefined = getNext(order);
</script>
