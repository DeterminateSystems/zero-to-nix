<script setup lang="ts">
defineProps<{
  breadcrumb: {
    back: {
      title: string;
      href: string;
    };
    title: string;
  };
}>();
</script>

<template>
  <div
    class="flex items-center space-x-2 text-xs md:space-x-2.5 md:text-sm lg:space-x-3 lg:text-base"
  >
    <span>
      <a :href="breadcrumb.back.href" class="hover:text-primary">{{
        breadcrumb.back.title
      }}</a>
    </span>
    <span class="text-lg font-bold md:text-xl lg:text-2xl">/</span>
    <span class="underline decoration-dotted">{{ breadcrumb.title }}</span>
  </div>
</template>
