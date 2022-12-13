<template>
  <Selector
    title="Select your language"
    :options="languages"
    :state="languageState"
  />
</template>

<script setup lang="ts">
import { languageState } from "~/logic/state";
import site from "~/site";

const { languages } = site;
</script>
