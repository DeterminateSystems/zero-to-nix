<template>
  <div
    class="admonition not-prose rounded-lg border-2 dark:bg-inherit"
    :class="[
      kind === 'danger' && 'border-red',
      kind === 'info' && 'border-blue',
      kind === 'success' && 'border-green',
      kind === 'warning' && 'border-yellow',
    ]"
  >
    <Disclosure v-if="id" as="div" :defaultOpen="open" v-slot="{ open }">
      <DisclosureButton
        as="div"
        class="flex items-center justify-between py-4 px-5 hover:cursor-pointer hover:text-dark dark:bg-dark dark:hover:bg-darker-gray dark:hover:text-light-gray"
        :class="[
          open && 'rounded-t-lg border-b-2',
          !open && 'rounded-lg',
          kind === 'danger' && 'border-b-red bg-pale-red hover:bg-middle-red',
          kind === 'info' && 'border-b-blue bg-pale-blue hover:bg-middle-blue',
          kind === 'success' &&
            'border-b-green bg-pale-green hover:bg-middle-green',
          kind === 'warning' &&
            'border-b-yellow bg-pale-yellow hover:bg-middle-yellow',
        ]"
        @mouseover="buttonHover = true"
        @mouseleave="buttonHover = false"
        @click="toggle"
      >
        <span
          class="flex items-center space-x-4 text-xl font-semibold tracking-tight"
        >
          <IconFaBolt v-if="kind === 'danger'" class="h-4 w-4 text-red" />
          <IconFaInfo v-if="kind === 'info'" class="h-4 w-4 text-blue" />
          <IconFaWarning
            v-if="kind === 'warning'"
            class="h-4 w-4 text-yellow"
          />
          <IconFaCheck v-if="kind === 'success'" class="h-4 w-4 text-green" />
          <span>{{ title }}</span>
        </span>

        <IconFaChevronRight
          class="h-4 w-4 transform duration-300"
          :class="[
            open && 'rotate-90',
            kind === 'danger' && 'text-red',
            kind === 'info' && 'text-blue',
            kind === 'success' && 'text-green',
            kind === 'warning' && 'text-yellow',
          ]"
        />
      </DisclosureButton>

      <DisclosurePanel
        as="div"
        class="content px-5 py-4 text-sm md:text-base lg:text-lg"
      >
        <slot />
      </DisclosurePanel>
    </Disclosure>

    <div v-else>
      <span
        v-if="title"
        class="flex items-center space-x-4 py-4 px-5 text-xl font-semibold tracking-tight"
      >
        <IconFaBolt v-if="kind === 'danger'" class="h-4 w-4 text-red" />
        <IconFaInfo v-if="kind === 'info'" class="h-4 w-4 text-blue" />
        <IconFaWarning v-if="kind === 'warning'" class="h-4 w-4 text-yellow" />
        <IconFaCheck v-if="kind === 'success'" class="h-4 w-4 text-green" />
        <span>{{ title }}</span>
      </span>

      <div
        class="content px-5 py-4 text-sm md:text-base lg:text-lg"
        :class="[title && 'pb-4', !title && 'py-4']"
      >
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

const { id, kind, title } = defineProps<{
  id?: string;
  kind: "danger" | "info" | "success" | "warning";
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
