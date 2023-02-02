<template>
  <div v-show="modalIsOpen">
    <p>HERE IS THE MODAL</p>
  </div>

  <button @click="toggleModal">TOGGLE</button>
</template>

<script setup lang="ts">
import { closeModal, modalIsOpen, toggleModal } from "~/logic/state";
</script>
