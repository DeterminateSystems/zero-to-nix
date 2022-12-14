<template>
  <div
    class="admonition not-prose rounded-lg border-2 py-4 px-5 hover:border-dark dark:bg-inherit dark:hover:border-light-gray"
    :class="[
      type === 'danger' && 'border-red bg-pale-red',
      type === 'info' && 'border-blue bg-pale-blue',
      type === 'success' && 'border-green bg-pale-green',
      type === 'warning' && 'border-yellow bg-pale-yellow',
    ]"
  >
    <Disclosure v-if="id" as="div" :defaultOpen="open" v-slot="{ open }">
      <DisclosureButton
        as="div"
        @mouseover="buttonHover = true"
        @mouseleave="buttonHover = false"
        class="flex items-center justify-between hover:cursor-pointer"
      >
        <span class="text-xl font-semibold tracking-tight">
          {{ title }}
        </span>

        <IconFaChevronRight
          class="h-4 w-4 hover:text-dark-gray dark:hover:text-light-gray"
          :class="[
            open && 'rotate-90 transform duration-200',
            buttonHover && 'text-dark dark:text-light-gray',
            type === 'danger' && 'text-red',
            type === 'info' && 'text-blue',
            type === 'success' && 'text-green',
            type === 'warning' && 'text-yellow',
          ]"
          @click="toggle"
        />
      </DisclosureButton>

      <DisclosurePanel
        as="div"
        class="content mt-3.5 text-sm md:text-base lg:text-lg"
      >
        <slot />
      </DisclosurePanel>
    </Disclosure>

    <div v-else class="space-y-2">
      <p v-if="title" class="text-xl font-semibold tracking-tight">
        {{ title }}
      </p>

      <div class="content text-sm md:text-base lg:text-lg">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/vue";
import { WritableAtom } from "nanostores";
import { ref } from "vue";

const { id, type, title } = defineProps<{
  id?: string;
  type: "danger" | "info" | "success" | "warning";
  title?: string;
}>();

if (id !== undefined && title === undefined) {
  throw new Error("If you specify an id you need to also specify a title");
}

const openState: WritableAtom<string> = persistentAtom<string>(
  `zero-to-nix:callout-${id}`,
  "false"
);
const open = useStore(openState).value === "true";

const toggle = () => {
  openState.set(open ? "false" : "true");
};

const buttonHover = ref<boolean>(false);
</script>
