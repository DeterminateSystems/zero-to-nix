<script setup lang="ts">
type Link = {
  title: string;
  href: string;
};

const { links: readMoreLinks } = defineProps<{
  links: Link[];
}>();
</script>

<template>
  <div class="space-y-4">
    <p class="text-lg font-semibold md:text-xl lg:text-2xl">Read more</p>

    <Grid3>
      <HoverableLink
        v-for="link in readMoreLinks"
        :key="link.title"
        :text="link.title"
        :href="link.href"
        :size="'sm'"
      />
    </Grid3>
  </div>
</template>
