<template>
  <Switch
    v-model="isDark"
    class="flex items-center"
    aria-label="Toggle theme between light and dark"
  >
    <IconFaSolidSun
      v-if="isDark"
      class="h-4 w-4 text-yellow hover:text-dark-yellow md:h-5 md:w-5 lg:h-6 lg:w-6"
    />
    <IconFaSolidMoon
      v-else
      class="h-4 w-4 text-light-blue hover:text-blue md:h-5 md:w-5 lg:h-6 lg:w-6"
    />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";
import { isDark, toggleTheme } from "~/logic/theme";
</script>
