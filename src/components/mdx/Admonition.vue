<template>
  <div
    class="admonition not-prose rounded-lg border-2 py-4 px-5 dark:bg-inherit"
    :class="[
      type === 'danger' && 'border-red bg-pale-red',
      type === 'info' && 'border-blue bg-pale-blue',
      type === 'success' && 'border-green bg-pale-green',
      type === 'warning' && 'border-yellow bg-pale-yellow',
    ]"
  >
    <Disclosure v-if="id" as="div" :defaultOpen="open" v-slot="{ open }">
      <div class="flex items-center justify-between">
        <span class="text-xl font-semibold tracking-tight">{{ title }}</span>

        <DisclosureButton as="button" class="flex items-center justify-between">
          <IconFaChevronRight
            class="h-4 w-4 hover:text-dark-gray dark:hover:text-light-gray"
            :class="[
              open && 'rotate-90 transform duration-200',
              type === 'danger' && 'text-red',
              type === 'info' && 'text-blue',
              type === 'success' && 'text-green',
              type === 'warning' && 'text-yellow',
            ]"
            @click="toggle"
          />
        </DisclosureButton>
      </div>

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
</script>
