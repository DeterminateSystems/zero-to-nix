<script setup lang="ts">
const heroProps = defineProps<{
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

const { size: heroSize = "normal" } = heroProps;
const normal = heroSize === "normal";
const large = heroSize === "lg";
</script>

<template>
  <section
    :class="{
      'space-y-2 py-10 md:(space-y-3 py-12) lg:(space-y-4 py-14)': normal,
      'space-y-3 py-16 md:(space-y-4 py-20) lg:(space-y-5 py-24)': large,
    }"
  >
    <h1
      class="tracking-tight"
      :class="{
        'text-4xl md:text-5xl lg:text-6xl': normal,
        'text-5xl md:text-6xl lg:text-7xl': large,
      }"
    >
      {{ title }}
    </h1>
    <h2
      v-if="description"
      :class="{
        'text-lg md:text-xl lg:text-2xl': normal,
        'text-xl md:text-2xl lg:text-3xl': large,
      }"
    >
      {{ description }}
    </h2>

    <Breadcrumb :breadcrumb="breadcrumb" />
  </section>
</template>
