<script setup lang="ts">
const paginationProps = defineProps<{
  order: number;
}>();

const { order } = paginationProps;

const pages = useDocuments("~/pages/start").value;
const next = pages.find((p) => p.frontmatter.order === order + 1);
const previous = pages.find((p) => p.frontmatter.order === order - 1);
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between text-normal md:text-lg lg:text-xl tracking-tight"
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
