<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  breadcrumb?: {
    back: {
      title: string;
      href: string;
    };
    title: string;
  };
}>();

const { breadcrumb } = props;
</script>

<template>
  <div
    v-if="breadcrumb"
    class="flex items-center text-dark-gray dark:text-white space-x-2.5 text-normal md:text-lg lg:text-xl"
  >
    <span>
      <a :href="breadcrumb.back.href" class="hover:text-primary">{{
        breadcrumb.back.title
      }}</a>
    </span>
    <span class="font-bold">/</span>
    <span class="underline decoration-dotted">{{ breadcrumb.title }}</span>
  </div>
</template>
