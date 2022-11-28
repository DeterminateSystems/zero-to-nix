<template>
  <section
    :class="[
      normalHero &&
        'space-y-2 py-10 md:space-y-3 md:py-12 lg:space-y-4 lg:py-14',
      largeHero &&
        'md:py-20) space-y-3 py-16 md:space-y-4 lg:space-y-5 lg:py-24',
    ]"
  >
    <h1
      class="tracking-tight"
      :class="[
        normalHero && 'text-4xl md:text-5xl lg:text-6xl',
        largeHero && 'text-5xl md:text-6xl lg:text-7xl',
      ]"
    >
      {{ title }}
    </h1>
    <h2
      v-if="description"
      class="content"
      :class="[
        normalHero && 'text-lg md:text-xl lg:text-2xl',
        largeHero && 'text-xl md:text-2xl lg:text-3xl',
      ]"
      v-html="md(description)"
    />

    <Breadcrumb v-if="breadcrumb" :breadcrumb="breadcrumb" />
  </section>
</template>

<script setup lang="ts">
import { md } from "~/logic/content";

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
