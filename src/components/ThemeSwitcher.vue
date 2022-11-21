<script setup lang="ts">
import { isDark, toggleTheme } from "~/logic/theme";
</script>

<template>
  <button @click="toggleTheme()" class="flex items-center">
    <IconFaSolidSun
      v-bind="$attrs"
      v-if="isDark"
      class="h-4 text-yellow w-4 md:h-5 md:w-5 hover:text-dark-yellow"
    />
    <IconFaSolidMoon
      v-bind="$attrs"
      v-else
      class="h-4 text-light-blue w-4 md:h-5 md:w-5 hover:text-blue"
    />
  </button>
</template>
