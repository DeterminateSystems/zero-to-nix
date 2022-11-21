<script setup lang="ts">
import { isDark, toggleTheme } from "~/logic/theme";
</script>

<template>
  <button @click="toggleTheme()" class="flex items-center">
    <IconFaSolidSun
      v-bind="$attrs"
      v-if="isDark"
      class="h-4 w-4 text-yellow hover:text-dark-yellow md:h-5 md:w-5"
    />
    <IconFaSolidMoon
      v-bind="$attrs"
      v-else
      class="h-4 w-4 text-light-blue hover:text-blue md:h-5 md:w-5"
    />
  </button>
</template>
