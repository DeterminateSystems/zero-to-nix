<template>
  <Menu as="div" class="relative">
    <MenuButton
      class="text-lg hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Quick start
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-1.5 w-72 origin-top-right rounded bg-white py-2 shadow ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black"
      >
        <MenuItem v-slot="{ active }">
          <ul class="flex flex-col space-y-1.5">
            <li
              v-for="({ title, href }, idx) in sortedQuickStartPages"
              :key="idx"
              class="py-1.5 px-3 hover:bg-pale dark:hover:bg-dark-gray"
            >
              <a
                class="text-sm tracking-tight hover:text-primary md:text-base lg:text-lg"
                :class="{ 'bg-blue-500': active }"
                :href="href"
              >
                {{ title }}
              </a>
            </li>
          </ul>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { sortedQuickStartPages } from "~/logic/content";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
</script>
