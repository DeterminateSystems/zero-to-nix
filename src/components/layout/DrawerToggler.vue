<template>
  <div class="flex">
    <button
      v-if="!drawerIsOpen"
      class="text-gray hover:text-dark-gray dark:text-light-gray dark:hover:text-gray"
      @click="toggleDrawer"
      type="button"
      id="drawer-toggle"
      data-drawer-target="nav-drawer"
      data-drawer-show="nav-drawer"
      aria-controls="nav-drawer"
    >
      <IconFaSolidBars class="h-4 w-4" />
    </button>

    <button v-else>
      <IconAppClose
        class="h-4 w-4 dark:fill-light-gray dark:hover:fill-primary"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { drawerIsOpen, toggleDrawer } from "~/logic/state";
</script>
