<script setup lang="ts">
const { size: heroSize = "normal" } = defineProps<{
  title: string;
  description?: string;
  size?: "normal" | "lg";
  breadcrumb?: {
    back: {
      title: string;
      href: string;
    };
    title: string;
  };
}>();

const normalHero = heroSize === "normal";
const largeHero = heroSize === "lg";
</script>

<template>
  <section
    :class="{
      'space-y-2 py-10 md:space-y-3 md:py-12 lg:space-y-4 lg:py-14': normalHero,
      'space-y-3 py-16 md:space-y-4 md:py-20 lg:space-y-5 lg:py-24': largeHero,
    }"
  >
    <h1
      class="tracking-tight"
      :class="{
        'text-4xl md:text-5xl lg:text-6xl': normalHero,
        'text-5xl md:text-6xl lg:text-7xl': largeHero,
      }"
    >
      {{ title }}
    </h1>
    <h2
      v-if="description"
      :class="{
        'text-lg md:text-xl lg:text-2xl': normalHero,
        'text-xl md:text-2xl lg:text-3xl': largeHero,
      }"
    >
      {{ description }}
    </h2>

    <Breadcrumb v-if="breadcrumb" :breadcrumb="breadcrumb" />
  </section>
</template>
