<template>
  <button
    class="hover:text-dark-gray dark:hover:text-gray"
    @click="toggleDrawer"
    type="button"
    id="drawer-toggle"
    data-drawer-target="nav-drawer"
    data-drawer-show="nav-drawer"
    aria-controls="nav-drawer"
    :class="[
      drawerIsOpen && 'text-primary',
      !drawerIsOpen && 'text-gray dark:text-light-gray',
    ]"
  >
    <IconFaSolidBars class="h-4 w-4" id="toggler-icon" />
  </button>
</template>

<script setup lang="ts">
import { drawerIsOpen, toggleDrawer } from "~/logic/state";
</script>
