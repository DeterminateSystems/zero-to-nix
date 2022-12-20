<template>
  <div
    class="rounded-lg border-2 border-light-gray py-1.5 px-3 dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray md:py-2 md:px-4 lg:py-2.5 lg:px-5"
  >
    <div class="flex flex-col space-y-1.5">
      <div class="flex items-start justify-between gap-2">
        <a
          :href="externalSourceHref"
          class="text-lg leading-tight tracking-tight hover:text-primary md:text-xl lg:text-2xl"
          target="_blank"
          rel="noopener noreferrer"
          v-html="title"
        />

        <IconFaExternalLink class="h-4 w-4 text-primary" />
      </div>

      <a
        v-if="source"
        :href="source.href"
        class="text-base font-light tracking-tight hover:text-primary dark:hover:text-light-blue md:text-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ source.title }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
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
