<template>
  <a
    :href="href"
    class="dark:hover:bg-in text-normal rounded-lg border-2 border-light-gray py-1.5 px-3 font-semibold hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-inherit md:py-2 md:px-4 md:text-lg lg:py-2.5 lg:px-5 lg:text-xl"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex flex-col space-y-1.5">
        <p class="text-xl leading-tight tracking-tight">
          {{ title }}
        </p>

        <a
          v-if="source"
          :href="source.href"
          target="_blank"
          class="text-sm font-light tracking-tight hover:text-primary dark:hover:text-light-blue"
          >{{ source.title }}</a
        >
      </div>

      <div>
        <IconFaExternalLink
          class="h-4 w-4"
          :class="{ 'text-primary': hover, 'text-gray': !hover }"
        />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { title, href, source } = defineProps<{
  title: string;
  href: string;
  source?: {
    title: string;
    href: string;
  };
}>();

const hover = ref<boolean>(false);
</script>
