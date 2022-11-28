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
            <Dropdown
              :dropdown="{ text: 'Quick start', pages: sortedQuickStartPages }"
              client:load
            />
          </li>
          <li>
            <Dropdown
              :dropdown="{ text: 'Concepts', pages: conceptPages }"
              client:load
            />
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
