<script setup lang="ts">
const {
  route: { path },
} = usePage();
</script>

<template>
  <nav
    class="bg-white border-light-gray border-b-2 py-2 top-0 sticky md:py-2.5 lg:py-3 dark:bg-black dark:border-b-gray"
  >
    <HorizontalContainer>
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 items-center md:space-x-3 lg:space-x-4">
          <a
            href="/"
            class="font-semibold tracking-tighter text-2xl md:text-3xl lg:text-4xl hover:text-primary dark:hover:text-primary"
            >{{ $site.title }}</a
          >

          <NixLogo />
        </div>

        <ul class="flex space-x-4 items-center md:space-x-5 lg:space-x-6">
          <li v-for="link in $site.navbarLinks" :key="link.text">
            <a
              :href="link.href"
              class="text-normal md:text-lg lg:text-xl hover:text-blue dark:hover:text-light-blue"
              :class="{
                'font-semibold': path.startsWith(link.href),
                'font-normal': !path.startsWith(link.href),
              }"
              >{{ link.text }}</a
            >
          </li>
          <li class="flex items-center">
            <ThemeSwitcher client:load />
          </li>
        </ul>
      </div>
    </HorizontalContainer>
  </nav>
</template>
