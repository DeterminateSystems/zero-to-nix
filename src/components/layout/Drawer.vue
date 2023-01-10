<template>
  <TransitionRoot
    :show="drawerIsOpen"
    enter="transition ease-in-out duration-300 transform"
    enter-from="-translate-x-full"
    enter-to="translate-x-0"
    leave="transition ease-in-out duration-300 transform"
    leave-from="translate-x-0"
    leave-to="-translate-x-full"
  >
    <div
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
      <div>
        <ul class="space-y-1">
          <li>
            <a
              href="/start"
              class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
            >
              Quick start
            </a>
          </li>

          <li>
            <a
              href="/concepts"
              class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
            >
              Concepts
            </a>
          </li>

          <li>
            <a
              href="/about"
              class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TransitionRoot } from "@headlessui/vue";
import { closeDrawer, drawerIsOpen, toggleDrawer } from "~/logic/state";
</script>
