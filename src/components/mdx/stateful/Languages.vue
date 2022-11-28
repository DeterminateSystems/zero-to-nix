<template>
  <div
    className="not-prose text-normal inline-flex items-center space-x-6 rounded-lg border-2 border-light-gray bg-pale p-3 dark:border-gray dark:bg-inherit"
  >
    <p
      className="text-normal font-semibold tracking-tight md:text-lg lg:text-xl"
    >
      Select your language
    </p>

    <button
      :aria-label="`Prefered programming language selector. Click to activate ${lang}.`"
      v-for="(lang, idx) in languages"
      :key="idx"
      @click="languageState.set(lang)"
      class="mg:text-normal rounded-lg py-0 px-2 text-sm font-semibold md:py-0.5 md:px-3 lg:py-1 lg:px-4 lg:text-lg"
      :class="{ 'bg-primary text-white': lang === language }"
    >
      {{ lang }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { language, languageState } from "~/logic/state";
import site from "~/site";

const { languages } = site;
</script>
