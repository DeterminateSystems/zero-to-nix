<script setup lang="ts">
const { order } = defineProps<{
  order: number;
}>();

type Ordered = {
  order: number;
};

const pages = useDocuments<Ordered>("~/pages/start").value;
const next = pages.find((p) => p.frontmatter.order === order + 1);
const previous = pages.find((p) => p.frontmatter.order === order - 1);
</script>

<template>
  <div
    class="text-normal flex flex-col items-center justify-between tracking-tight md:flex-row md:text-lg lg:text-xl"
  >
    <div>
      <span v-if="previous" class="flex space-x-4">
        <span>&larr;</span>
        <a :href="previous.href" class="font-semibold hover:text-primary">
          {{ previous.frontmatter.title }}
        </a>
      </span>
    </div>

    <div>
      <span v-if="next" class="flex space-x-4">
        <a :href="next.href" class="font-semibold hover:text-primary">
          {{ next.frontmatter.title }}
        </a>
        <span>&rarr;</span>
      </span>
    </div>
  </div>
</template>
