<template>
  <div
    class="rounded-lg border-2 border-light-gray py-1.5 px-3 dark:border-gray md:py-2 md:px-4 lg:py-2.5 lg:px-5"
  >
    <div class="flex flex-col space-y-1.5">
      <a
        :href="externalSourceHref"
        class="text-xl leading-tight tracking-tight hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
        v-html="title"
      />

      <a
        v-if="source"
        :href="source.href"
        class="text-sm font-light tracking-tight hover:text-primary dark:hover:text-light-blue"
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
