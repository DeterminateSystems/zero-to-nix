<template>
  <div
    class="my-4 rounded-lg border-2 border-light-gray bg-pale py-4 px-6 dark:border-gray dark:bg-inherit"
  >
    <Disclosure as="div" :defaultOpen="open" v-slot="{ open }">
      <DisclosureButton as="div" class="flex items-center justify-between">
        <span class="text-2xl font-light tracking-tight">{{ show }}</span>
        <IconFaChevronRight
          class="h-3.5 w-3.5 text-primary"
          :class="{
            'rotate-90 transform duration-200': open,
          }"
          @click="toggle"
        />
      </DisclosureButton>
      <DisclosurePanel
        as="div"
        class="not-prose content mt-3.5 text-sm md:text-base lg:text-lg"
      >
        <slot />
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/vue";
import { WritableAtom } from "nanostores";

const { show, id } = defineProps<{
  show: string;
  id: string;
}>();

const openState: WritableAtom<string> = persistentAtom<string>(
  `zero-to-nix:callout-${id}`,
  "false"
);
const open = useStore(openState).value === "true";

const toggle = () => {
  openState.set(open ? "false" : "true");
};
</script>
