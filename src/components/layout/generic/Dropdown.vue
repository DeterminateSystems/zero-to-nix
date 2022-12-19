<template>
  <Menu as="div" class="relative">
    <MenuButton
      class="text-lg hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      {{ text }}
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
        class="absolute right-0 mt-1.5 w-72 origin-top-right rounded bg-white py-2 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black"
      >
        <MenuItem>
          <ul class="flex flex-col space-y-1.5">
            <li
              v-for="({ title, href, order }, idx) in dropdown.pages"
              :key="idx"
            >
              <a
                class="block py-1.5 px-3 text-sm tracking-tight hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-dark md:text-base lg:text-lg"
                :href="href"
              >
                <div v-if="order" class="flex space-x-1">
                  <span>{{ order }}.</span>
                  <span>{{ title }}</span>
                </div>
                <span v-else>{{ title }}</span>
              </a>
            </li>
          </ul>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { DropdownProps } from "~/logic/content";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const { dropdown } = defineProps<{
  dropdown: DropdownProps;
}>();

const { text, pages } = dropdown;
</script>
