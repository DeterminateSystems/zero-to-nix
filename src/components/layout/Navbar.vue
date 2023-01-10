<template>
  <nav
    class="sticky top-0 z-10 bg-white py-2 shadow-sm shadow-light-gray dark:bg-inherit dark:shadow-dark-gray md:py-2.5 lg:py-3"
  >
    <HorizontalContainer>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <a
            href="/"
            class="text-2xl font-semibold tracking-tight hover:text-primary dark:hover:text-light-gray md:text-3xl lg:text-4xl"
          >
            {{ $site.title }}
          </a>

          <IconAppNix
            class="h-5 w-5 fill-primary md:h-6 md:w-6 lg:h-7 lg:w-7"
          />
        </div>

        <div class="flex items-center space-x-4 md:hidden">
          <ThemeSwitcher client:load />

          <a :href="$site.githubUrl">
            <IconFaGithub
              class="h-4 w-4 hover:text-gray dark:hover:text-light-gray md:h-5 md:w-5 lg:h-6 lg:w-6"
            />
          </a>

          <button
            ref="toggler"
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
            <IconFaSolidBars class="h-4 w-4" />
          </button>
        </div>

        <ul
          class="hidden items-center space-x-4 md:flex md:space-x-5 lg:space-x-6"
        >
          <li>
            <QuickStartDropdown client:load />
          </li>
          <li>
            <ConceptsDropdown client:load />
          </li>
          <li v-for="({ text, href }, idx) in $site.navbarLinks" :key="idx">
            <a
              :href="href"
              class="text-sm tracking-tight hover:text-primary md:text-base lg:text-lg"
            >
              {{ text }}
            </a>
          </li>
          <li class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            <ThemeSwitcher client:load />

            <a :href="$site.githubUrl" target="_blank">
              <IconFaGithub
                class="h-4 w-4 hover:text-gray dark:hover:text-light-gray md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </HorizontalContainer>
  </nav>

  <Drawer ref="drawer" client:load>
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
  </Drawer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { conceptPages, sortedQuickStartPages } from "~/logic/content";
import { onClickOutside } from "@vueuse/core";
import { closeDrawer, drawerIsOpen, toggleDrawer } from "~/logic/state";

const drawer = ref(null);
const toggler = ref(null);

onClickOutside(
  drawer,
  () => {
    closeDrawer();
  },
  {
    ignore: [toggler],
  },
);
</script>
