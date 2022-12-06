<template>
  <div
    class="rounded-lg border-2 border-light-gray py-1.5 px-3 dark:border-gray md:py-2 md:px-4 lg:py-2.5 lg:px-5"
  >
    <div class="flex flex-col space-y-1.5">
      <a
        :href="readMoreHref"
        class="text-xl leading-tight tracking-tight hover:text-primary"
      >
        {{ title }}
      </a>

      <a
        v-if="source"
        :href="source.href"
        target="_blank"
        class="text-sm font-light tracking-tight hover:text-primary dark:hover:text-light-blue"
        >{{ source.title }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  title,
  href: readMoreHref,
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
