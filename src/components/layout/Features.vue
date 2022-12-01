<template>
  <Grid2>
    <div
      v-for="({ title, description, links }, idx) in $site.features"
      :key="idx"
      class="flex flex-col rounded-lg border-2 border-light-gray py-4 px-6 dark:border-gray"
    >
      <div class="space-y-4">
        <div class="space-y-2">
          <p class="content text-2xl font-light" v-html="md(title)" />

          <p
            class="content font-light text-dark-gray dark:text-light-gray"
            v-html="md(description)"
          />
        </div>

        <ul>
          <li
            v-for="({ text, href }, idx) in links"
            :key="idx"
            class="space-x-2"
          >
            <span>&rarr;</span>
            <a :href="href" class="text-xl hover:text-primary">{{ text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </Grid2>
</template>

<script setup lang="ts">
import { md } from "~/logic/content";
</script>
