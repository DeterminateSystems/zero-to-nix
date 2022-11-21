<script setup lang="ts">
const {
  text,
  href,
  size = "normal",
} = defineProps<{
  text: string;
  href: string;
  size?: "normal" | "sm";
}>();

const normalLink = size === "normal";
const smallLink = size === "sm";
</script>

<template>
  <a
    :href="href"
    class="border-2 border-light-gray dark:border-gray rounded-lg hover:border-primary hover:bg-pale dark:hover:bg-black dark:hover:border-primary"
    :class="{
      'py-1.5 md:py-2 lg:py-2.5 px-3 md:px-4 lg:px-5 text-xl md:text-2xl lg:text-3xl tracking-tight':
        normalLink,
      'py-1 md:py-1.5 lg:py-2.5 px-2 md:px-3 lg:px-4 text-normal md:text-lg lg:text-xl':
        smallLink,
    }"
  >
    {{ text }}
  </a>
</template>
