<template>
  <button @click="toggleModal" v-text="modalIsOpen ? 'Close' : 'Open'" />
</template>

<script setup lang="ts">
import { modalIsOpen, toggleModal } from "~/logic/state";
</script>
