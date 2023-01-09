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
            class="hover:text-dark-gray dark:hover:text-gray"
            @click="toggleDrawer"
            type="button"
            id="drawer-toggle"
            data-drawer-target="nav-drawer"
            data-drawer-show="nav-drawer"
            aria-controls="nav-drawer"
            :class="[
              showDrawer && 'text-primary',
              !showDrawer && 'text-gray dark:text-light-gray',
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

            <a :href="$site.githubUrl">
              <IconFaGithub
                class="h-4 w-4 hover:text-gray dark:hover:text-light-gray md:h-5 md:w-5 lg:h-6 lg:w-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </HorizontalContainer>
  </nav>

  <OnClickOutside
    @trigger="closeDrawer"
    :options="{ ignore: ['#drawer-toggle'] }"
    client:load
  >
    <TransitionRoot
      :show="showDrawer"
      enter="transition-opacity duration-100"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-150"
      leave-from="opacity-100"
      leave-to="opacity-0"
      client:load
    >
      <div
        id="nav-drawer"
        tabindex="-1"
        class="fixed z-40 flex h-full w-5/6 flex-col overflow-y-auto border-t border-r border-light-gray bg-white p-4 dark:border-gray dark:bg-dark"
        aria-labelledby="nav-drawer"
        vOnClickOutside="toggleDrawer"
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

            <li v-for="({ text, href }, idx) in $site.navbarLinks" :key="idx">
              <a
                :href="href"
                class="text-lg font-light tracking-tight hover:text-primary md:text-base lg:text-lg"
                @click="closeDrawer"
              >
                {{ text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </TransitionRoot>
  </OnClickOutside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { OnClickOutside } from "@vueuse/components";
import { conceptPages, sortedQuickStartPages } from "~/logic/content";
import { TransitionRoot } from "@headlessui/vue";

const showDrawer = ref<boolean>(false);

const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value;
};

const closeDrawer = () => {
  showDrawer.value = false;
};
</script>
