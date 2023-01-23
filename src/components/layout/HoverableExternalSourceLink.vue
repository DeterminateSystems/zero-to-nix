<template>
  <div
    class="rounded-lg border-1.5 border-light-gray py-1.5 px-3 hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray md:py-2 md:px-4 lg:py-2.5 lg:px-5"
  >
    <div class="flex flex-col space-y-1.5">
      <a
        :href="externalSourceHref"
        class="inline-flex items-start justify-between gap-2 text-lg leading-snug hover:text-primary dark:hover:text-light-blue md:text-xl lg:text-2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <span class="content" v-html="md(title)" />
        </span>
        <IconFaExternalLink class="h-3 w-3 text-primary md:h-4 md:w-4" />
      </a>

      <a
        v-if="source"
        :href="source.href"
        class="content block text-base font-light tracking-tight hover:text-primary dark:hover:text-light-blue md:text-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ source.title }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { md } from "~/logic/content";

const {
  title,
  href: externalSourceHref,
  source,
} = defineProps<{
  title: string;
  href: string;
  source?: {
    title: string;
    href: string;
  };
}>();
</script>
