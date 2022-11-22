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
  <span>
    <a :href="breadcrumb.back.href" class="hover:text-primary">{{
      breadcrumb.back.title
    }}</a>
  </span>
  <span class="font-bold">/</span>
  <span class="underline decoration-dotted">{{ breadcrumb.title }}</span>
</template>
