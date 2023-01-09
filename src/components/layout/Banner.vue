<template>
  <section class="bg-primary py-2" v-if="banner">
    <HorizontalContainer>
      <div class="flex items-center">
        <p class="font-light first-letter:font-bold">Banner</p>
      </div>
    </HorizontalContainer>
  </section>
</template>

<script setup lang="ts">
import { banner } from "~/logic/state";
</script>
