<template>
  <section
    :class="[
      normalHero &&
        'space-y-3 py-10 md:space-y-4 md:py-12 lg:space-y-5 lg:py-14',
      largeHero &&
        'space-y-3 py-24 md:space-y-4 md:py-28 lg:space-y-5 lg:py-32',
    ]"
  >
    <h1
      class="tracking-tight"
      :class="[
        normalHero && 'text-4xl md:text-5xl lg:text-6xl',
        largeHero &&
          'text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl',
      ]"
    >
      {{ title }}
    </h1>
    <h2
      v-if="description"
      class="content text-dark-gray dark:text-light-gray"
      :class="[
        normalHero && 'text-lg md:text-xl lg:text-2xl',
        largeHero && 'text-xl md:text-2xl lg:text-3xl',
      ]"
      v-html="md(description)"
    />

    <Breadcrumb v-if="breadcrumb" :breadcrumb="breadcrumb" />

    <div v-if="buttons" class="flex items-center space-x-4 pt-2">
      <a
        v-for="({ text, href, highlight }, idx) in buttons"
        :key="idx"
        :href="href"
        :class="{
          'bg-primary text-white': highlight,
          'bg-light-gray text-black': !highlight,
        }"
        class="rounded-full py-2 px-4 font-bold shadow-md transition-colors duration-150 hover:bg-dark-gray hover:text-white"
      >
        {{ text }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BreadcrumbProps, ButtonProps, md } from "~/logic/content";

const { size: heroSize = "normal" } = defineProps<{
  title: string;
  description?: string;
  size?: "normal" | "lg";
  breadcrumb?: BreadcrumbProps;
  buttons?: ButtonProps[];
}>();

const normalHero = heroSize === "normal";
const largeHero = heroSize === "lg";
</script>
