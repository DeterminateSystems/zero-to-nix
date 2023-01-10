<template>
  <TransitionRoot
    :show="drawerIsOpen"
    enter="transition-opacity duration-100"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
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
          <svg
            aria-hidden="true"
            class="h-4 w-4 dark:fill-light-gray dark:hover:fill-primary"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
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
import { TransitionRoot } from "@headlessui/vue";
import { closeDrawer, drawerIsOpen, toggleDrawer } from "~/logic/state";
</script>
