<template>
  <SlideEffect>
    <div
      v-if="drawerIsOpen"
      id="nav-drawer"
      tabindex="-1"
      class="fixed z-40 flex h-full w-5/6 flex-col overflow-y-auto border-t border-r border-light-gray bg-white p-4 dark:border-gray dark:bg-dark"
      aria-labelledby="nav-drawer"
    >
      <div class="flex justify-end">
        <button
          @click="closeDrawer"
          data-drawer-hide="nav-drawer"
          aria-controls="nav-drawer"
        >
          <IconAppClose
            class="h-4 w-4 dark:fill-light-gray dark:hover:fill-primary"
          />
          <span class="sr-only">Close menu</span>
        </button>
      </div>

      <slot />
    </div>
  </SlideEffect>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { closeDrawer, drawerIsOpen, toggleDrawer } from "~/logic/state";
</script>
