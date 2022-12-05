<template>
  <div
    class="admonition not-prose rounded-lg border-2 border-light-gray bg-pale py-4 px-5 dark:border-gray dark:bg-inherit"
  >
    <Disclosure as="div" :defaultOpen="open" v-slot="{ open }">
      <DisclosureButton as="div" class="flex items-center justify-between">
        <span class="text-xl font-semibold tracking-tight">{{ show }}</span>
        <IconFaChevronRight
          class="h-4 w-4 text-primary"
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
