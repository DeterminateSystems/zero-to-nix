<template>
  <Grid2>
    <a
      v-for="({ title, description, href }, idx) in $site.nixTerms"
      :key="idx"
      :href="href"
      class="rounded border-1.5 border-light-gray p-3 transition-colors duration-150 hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray md:p-5 lg:p-7"
    >
      <div class="flex flex-col space-y-1 md:space-y-1.5 lg:space-y-2">
        <h1 class="text-xl font-light md:text-2xl lg:text-3xl">
          {{ title }}
        </h1>
        <h2 class="text-sm tracking-tight md:text-base lg:text-lg">
          {{ description }}
        </h2>
      </div>
    </a>
  </Grid2>
</template>
