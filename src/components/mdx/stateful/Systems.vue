<template>
  <Selector
    title="Select your language"
    :options="systems"
    :state="systemState"
  />
</template>

<script setup lang="ts">
import { systemState } from "~/logic/state";
import site from "~/site";

const { systems } = site;
</script>
