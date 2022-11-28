<template>
  <Grid2>
    <div
      v-for="({ title, description, links }, idx) in $site.features"
      :key="idx"
      class="flex flex-col divide-y-2 divide-light-gray rounded-lg border-2 border-light-gray dark:divide-gray dark:border-gray"
    >
      <div class="space-y-2 py-4 px-6">
        <p class="text-2xl font-bold">{{ title }}</p>

        <p class="text-lg font-light text-dark-gray dark:text-light-gray">
          {{ description }}
        </p>
      </div>

      <div class="py-4 px-6">
        <ul>
          <li v-for="({ text, href }, idx) in links" :key="idx">
            <a :href="href" class="text-xl hover:text-primary">{{ text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </Grid2>
</template>
