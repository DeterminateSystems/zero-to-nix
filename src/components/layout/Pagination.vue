<template>
  <div
    class="flex flex-col-reverse gap-2 tracking-tight md:flex-row md:items-center md:justify-between md:gap-0 md:space-y-0 md:text-lg lg:text-xl"
  >
    <!-- Previous -->
    <div>
      <a
        v-if="previous"
        :href="previous.href"
        class="flex justify-between space-x-3 rounded-lg border-2 border-gray px-6 py-4 font-semibold hover:bg-pale dark:hover:bg-darker-gray"
      >
        <span class="text-gray">&larr;</span>
        <span class="tracking-tight">
          {{ previous.frontmatter.title }}
        </span>
      </a>
    </div>

    <!-- Next -->
    <div>
      <a
        v-if="next"
        :href="next.href"
        class="flex justify-between space-x-3 rounded-lg border-2 border-orange px-6 py-4 font-semibold hover:bg-pale dark:hover:bg-darker-gray"
      >
        <span class="tracking-tight">
          {{ next.frontmatter.title }}
        </span>
        <span class="text-orange">&rarr;</span>
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
