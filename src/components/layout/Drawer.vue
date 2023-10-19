<template>
  <div ref="drawer">
    <SlideEffect>
      <div
        v-if="drawerIsOpen"
        id="nav-drawer"
        tabindex="-1"
        class="fixed z-40 flex h-full flex-col overflow-y-auto border-t border-r border-light-gray bg-white p-4 shadow-xl dark:border-dark-gray dark:bg-dark"
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

        <ul class="space-y-1 pr-20">
          <li>
            <a
              href="/start"
              class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
              @click="closeDrawer"
            >
              Quick start
            </a>
          </li>

          <li>
            <a
              href="/concepts"
              class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
              @click="closeDrawer"
            >
              Concepts
            </a>
          </li>

          <li>
            <a
              href="/about"
              class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
              @click="closeDrawer"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </SlideEffect>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { closeDrawer, drawerIsOpen } from "~/logic/state";

const drawer = ref(null);

onClickOutside(drawer, () => {
  if (drawerIsOpen.value) {
    closeDrawer();
  }
});
</script>
