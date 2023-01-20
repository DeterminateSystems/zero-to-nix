<template>
  <div v-if="show">
    <p>READ THE QUICK START!!!</p>

    <button @click="close">Close</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { quickStartBannerAtom, quickStartBannerOpen } from "~/logic/state";

const show = ref<boolean>(false);

const close = () => {
  quickStartBannerAtom.set("closed");
  show.value = false;
};

onMounted(() => {
  if (quickStartBannerOpen) {
    show.value = true;
  }
});
</script>
