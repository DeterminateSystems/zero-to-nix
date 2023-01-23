<template>
  <Grid2>
    <div
      v-for="({ title, description, links }, idx) in $site.features"
      :key="idx"
    >
      <div class="space-y-4">
        <p
          class="text-lg font-bold md:text-xl lg:text-2xl"
          v-html="md(title)"
        />
        <p
          class="text-sm font-light md:text-base lg:text-lg"
          v-html="md(description)"
        />

        <ul>
          <li
            v-for="({ text, href }, idx) in links"
            :key="idx"
            class="flex items-center space-x-2 md:text-lg lg:text-xl"
          >
            <span>&rarr;</span>
            <a
              :href="href"
              class="text-dark underline hover:text-primary dark:text-light-gray dark:hover:text-light-blue"
            >
              {{ text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Grid2>
</template>

<script setup lang="ts">
import { md } from "~/logic/content";
</script>
