<template>
  <div class="space-y-4">
    <p class="text-lg font-semibold md:text-xl lg:text-2xl">Read more</p>

    <Grid3>
      <a
        v-for="({ title, href, source }, idx) in readMoreLinks"
        :key="idx"
        :href="href"
        class="dark:hover:bg-in text-normal rounded-lg border-2 border-light-gray py-1 px-2 font-semibold hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-inherit md:py-1.5 md:px-3 md:text-lg lg:py-2.5 lg:px-4 lg:text-xl"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div class="flex items-center justify-between">
          <div>
            <p>
              {{ title }}
            </p>

            <p
              v-if="source"
              class="text-sm font-light tracking-tight hover:text-primary dark:hover:text-light-blue"
            >
              {{ source.title }}
            </p>
          </div>

          <div>
            <IconFaExternalLink
              class="h-4 w-4"
              :class="{ 'text-primary': hover, 'text-gray': !hover }"
            />
          </div>
        </div>
      </a>
    </Grid3>
  </div>
</template>

<script setup lang="ts">
import { ReadMore } from "~/logic/content";
import { ref } from "vue";

const { links: readMoreLinks } = defineProps<{
  links: ReadMore[];
}>();

const hover = ref<boolean>(false);
</script>
