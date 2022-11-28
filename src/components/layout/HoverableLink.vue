<template>
  <a
    :href="href"
    class="dark:hover:bg-in rounded-lg border-2 border-light-gray hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-inherit"
    :class="[
      normalLink &&
        'py-1.5 px-3 text-xl tracking-tight md:py-2 md:px-4 md:text-2xl lg:py-2.5 lg:px-5 lg:text-3xl',
      smallLink &&
        'text-normal py-1 px-2 md:py-1.5 md:px-3 md:text-lg lg:py-2.5 lg:px-4 lg:text-xl',
    ]"
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  href: string;
  size?: "normal" | "sm";
}>();

const { text, href, size = "normal" } = props;

const normalLink = size === "normal";
const smallLink = size === "sm";
</script>
