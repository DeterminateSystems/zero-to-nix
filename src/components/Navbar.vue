<script setup lang="ts">
const {
  route: { path },
} = usePage();
</script>

<template>
  <nav
    class="sticky top-0 border-b-2 border-light-gray bg-white py-2 dark:border-b-gray dark:bg-black md:py-2.5 lg:py-3"
  >
    <HorizontalContainer>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
          <a
            href="/"
            class="text-2xl font-semibold tracking-tighter hover:text-primary dark:hover:text-primary md:text-3xl lg:text-4xl"
            >{{ $site.title }}</a
          >

          <NixLogo />
        </div>

        <ul class="flex items-center space-x-4 md:space-x-5 lg:space-x-6">
          <li v-for="link in $site.navbarLinks" :key="link.text">
            <a
              :href="link.href"
              class="text-normal hover:text-blue dark:hover:text-light-blue md:text-lg lg:text-xl"
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
