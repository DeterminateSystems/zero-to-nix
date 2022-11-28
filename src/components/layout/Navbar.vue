<template>
  <nav
    class="sticky top-0 border-b-2 border-light-gray bg-white/75 py-2 backdrop-blur dark:border-b-gray dark:bg-dark/75 dark:bg-blend-darken md:py-2.5 lg:py-3"
  >
    <HorizontalContainer>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <a
            href="/"
            class="text-2xl font-semibold tracking-tighter hover:text-primary dark:hover:text-primary md:text-3xl lg:text-4xl"
          >
            {{ $site.title }}
          </a>

          <IconAppNix
            class="h-5 w-5 fill-sky-600 dark:fill-sky-400 md:h-6 md:w-6 lg:h-7 lg:w-7"
          />
        </div>

        <ul class="flex items-center space-x-4 md:space-x-5 lg:space-x-6">
          <li>
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
          </li>
          <li>
            <Menu as="div" class="relative inline-block text-left">
              <MenuButton
                class="inline-flex justify-center rounded-md text-lg hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Concepts
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
                        v-for="({ title, href }, idx) in conceptPages"
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
          </li>
          <li class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            <ThemeSwitcher client:load />

            <a :href="$site.githubUrl">
              <IconFaGithub
                v-bind="$attrs"
                class="h-4 w-4 hover:text-gray dark:hover:text-light-gray md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </HorizontalContainer>
  </nav>
</template>

<script setup lang="ts">
import { conceptPages, sortedQuickStartPages } from "~/logic/content";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const {
  route: { path },
} = usePage();
</script>
