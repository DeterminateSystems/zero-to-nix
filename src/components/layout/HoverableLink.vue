<template>
  <a
    :href="href"
    class="rounded-lg border-1.5 border-light-gray transition-colors duration-150 hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray"
    :class="[
      normalLink &&
        'px-3 py-1.5 text-lg tracking-tight md:px-4 md:py-2 md:text-xl lg:px-5 lg:py-2.5 lg:text-2xl',
      smallLink &&
        'px-3 py-1.5 text-base md:px-4 md:py-2 md:text-lg lg:px-5 lg:py-2.5 lg:text-xl',
    ]"
  >
    <div v-if="order" class="flex items-center justify-between">
      <span class="flex space-x-2 md:space-x-3 lg:space-x-4">
        <span>{{ order }}.</span>
        <span>{{ text }}</span>
      </span>
      <IconFaLink class="h-3 w-3 text-primary md:h-4 md:w-4" />
    </div>

    <span v-else class="flex items-center justify-between">
      <span>{{ text }}</span>
      <IconFaLink class="h-3 w-3 text-primary md:h-4 md:w-4" />
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  order?: number;
  text: string;
  href: string;
  size?: "normal" | "sm";
}>();

const { text, href, size = "normal" } = props;

const normalLink = size === "normal";
const smallLink = size === "sm";
</script>
