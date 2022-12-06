<template>
  <h2 id="$attrs.id" @mouseover="hover = true" @mouseleave="hover = false">
    <slot />
    <span v-if="hover" class="ml-4"
      ><a
        :href="`#${$attrs.id}`"
        class="text-gray no-underline hover:text-primary dark:text-light-gray dark:hover:text-primary"
        >#</a
      ></span
    >
  </h2>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hover = ref<boolean>(false);
</script>
