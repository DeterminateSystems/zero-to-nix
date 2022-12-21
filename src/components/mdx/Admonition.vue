<template>
  <div
    class="admonition not-prose rounded-lg border-2 dark:bg-inherit"
    :class="[
      type === 'danger' && 'border-red',
      type === 'info' && 'border-blue',
      type === 'success' && 'border-green',
      type === 'warning' && 'border-yellow',
    ]"
  >
    <Disclosure v-if="id" as="div" :defaultOpen="open" v-slot="{ open }">
      <DisclosureButton
        as="div"
        class="flex items-center justify-between py-4 px-5 hover:cursor-pointer hover:text-dark dark:bg-dark dark:hover:bg-darker-gray dark:hover:text-light-gray"
        :class="[
          open && 'rounded-t-lg border-b-2',
          !open && 'rounded-lg',
          type === 'danger' && 'border-red bg-pale-red hover:bg-middle-red',
          type === 'info' && 'border-blue bg-pale-blue hover:bg-middle-blue',
          type === 'success' &&
            'border-green bg-pale-green hover:bg-middle-green',
          type === 'warning' &&
            'border-yellow bg-pale-yellow hover:bg-middle-yellow',
        ]"
        @mouseover="buttonHover = true"
        @mouseleave="buttonHover = false"
        @click="toggle"
      >
        <span
          class="flex items-center space-x-4 text-xl font-semibold tracking-tight"
        >
          <IconFaBolt v-if="type === 'danger'" class="h-4 w-4 text-red" />
          <IconFaInfo v-if="type === 'info'" class="h-4 w-4 text-blue" />
          <IconFaWarning
            v-if="type === 'warning'"
            class="h-4 w-4 text-yellow"
          />
          <IconFaCheck v-if="type === 'success'" class="h-4 w-4 text-green" />
          <span>{{ title }}</span>
        </span>

        <IconFaChevronRight
          class="h-4 w-4 transform duration-300"
          :class="[
            open && 'rotate-90',
            type === 'danger' && 'text-red',
            type === 'info' && 'text-blue',
            type === 'success' && 'text-green',
            type === 'warning' && 'text-yellow',
          ]"
        />
      </DisclosureButton>

      <DisclosurePanel
        as="div"
        class="content mt-3.5 px-5 pb-4 text-sm md:text-base lg:text-lg"
      >
        <slot />
      </DisclosurePanel>
    </Disclosure>

    <div v-else>
      <span
        v-if="title"
        class="flex items-center space-x-4 py-4 px-5 text-xl font-semibold tracking-tight"
      >
        <IconFaBolt v-if="type === 'danger'" class="h-4 w-4 text-red" />
        <IconFaInfo v-if="type === 'info'" class="h-4 w-4 text-blue" />
        <IconFaWarning v-if="type === 'warning'" class="h-4 w-4 text-yellow" />
        <IconFaCheck v-if="type === 'success'" class="h-4 w-4 text-green" />
        <span>{{ title }}</span>
      </span>

      <div class="content px-5 pb-4 text-sm md:text-base lg:text-lg">
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
  "false",
);
const open = useStore(openState).value === "true";

const toggle = () => {
  openState.set(open ? "false" : "true");
};

const buttonHover = ref<boolean>(false);
</script>
