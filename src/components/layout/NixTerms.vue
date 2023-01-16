<template>
  <Grid2>
    <a
      v-for="(term, idx) in $site.nixTerms"
      :key="idx"
      :href="term.href"
      class="rounded border-1.5 border-light-gray p-3 transition-colors duration-150 hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray md:p-4 lg:p-5"
    >
      <div class="space-y-1 md:space-y-3 lg:space-y-4">
        <h1 class="text-2xl font-light md:text-3xl lg:text-4xl">
          {{ term.title }}
        </h1>
        <h2
          class="leading-snug text-dark dark:text-light-gray md:text-lg lg:text-xl"
        >
          {{ term.description }}
        </h2>
      </div>
    </a>
  </Grid2>
</template>
