<template>
  <div class="space-y-4">
    <h2 class="text-3xl" id="key-terms">Core Nix terms</h2>

    <Grid2>
      <a
        v-for="(term, idx) in $site.nixTerms"
        :key="idx"
        :href="term.href"
        class="rounded-lg border-2 border-light-gray p-3 hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-inherit md:p-4 lg:p-5"
      >
        <div class="space-y-2">
          <p class="text-xl md:text-2xl lg:text-3xl">{{ term.title }}</p>
          <p class="text-dark-gray dark:text-light-gray">
            {{ term.description }}
          </p>
        </div>
      </a>
    </Grid2>
  </div>
</template>
