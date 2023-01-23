<template>
  <Grid2>
    <a
      v-for="({ title, description, href }, idx) in $site.nixTerms"
      :key="idx"
      :href="href"
      class="rounded border-1.5 border-light-gray p-3 transition-colors duration-150 hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray md:p-4 lg:p-5"
    >
      <div class="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
        <div>
          <IconAppNix
            class="h-5 w-5 fill-primary md:h-7 md:w-7 lg:h-8 lg:w-8"
          />
        </div>
        <div class="flex flex-col space-y-1 md:space-y-1.5 lg:space-y-2">
          <h1 class="text-xl font-light md:text-2xl lg:text-3xl">
            {{ title }}
          </h1>
          <h2 class="text-sm tracking-tight md:text-base lg:text-lg">
            {{ description }}
          </h2>
        </div>
      </div>
    </a>
  </Grid2>
</template>
