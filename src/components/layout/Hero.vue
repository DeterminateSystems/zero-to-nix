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
      class="content"
      :class="[
        normalHero && 'text-lg md:text-xl lg:text-2xl',
        largeHero && 'text-xl md:text-2xl lg:text-3xl',
      ]"
      v-html="md(description)"
    />

    <Breadcrumb v-if="breadcrumb" :breadcrumb="breadcrumb" />

    <div
      v-if="wip"
      class="bg:light-orange rounded border-1.5 border-orange py-1.5 px-3 text-xs md:py-2 md:px-3.5 md:text-sm lg:py-3 lg:px-4 lg:text-base"
    >
      <div class="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
        <IconFaSolidHammer class="h-3 w-3 text-orange md:h-4 md:w-4" />
        <p>
          This document is a work in progress. It's intended to provide a brief
          definition or overview and nothing more. We'll be iterating on this
          content heavily in the coming weeks and months.
        </p>
      </div>
    </div>

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
  wip: boolean;
}>();

const normalHero = heroSize === "normal";
const largeHero = heroSize === "lg";
</script>
