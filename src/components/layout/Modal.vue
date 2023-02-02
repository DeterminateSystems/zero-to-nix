<template>
  <Dialog
    :open="modalIsOpen"
    @close="closeModal"
    class="relative z-50 text-dark dark:text-dark"
  >
    <div class="fixed inset-0 bg-black/40" aria-hidden="true" />

    <div class="fixed inset-0 flex items-center justify-center">
      <DialogPanel
        class="flex w-full max-w-sm flex-col space-y-6 rounded bg-pale py-8 px-12"
      >
        <DialogTitle class="text-4xl font-light leading-tight">
          Sign up for the
          <span class="text-primary">Determinate Systems</span> mailing list
        </DialogTitle>
        <DialogDescription class="text-lg">
          Here is some text.</DialogDescription
        >

        <div class="flex items-end space-x-2">
          <button
            @click="submit"
            class="rounded bg-primary py-2 px-3 font-bold text-white transition-colors duration-150 hover:bg-green"
          >
            Submit
          </button>

          <button
            @click="closeModal"
            class="rounded bg-light-gray py-2 px-3 font-bold transition-colors duration-150 hover:bg-red hover:text-white"
          >
            Close
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

import { closeModal, modalIsOpen, toggleModal } from "~/logic/state";

const submit = () => {
  alert("Submitted!");
};
</script>
