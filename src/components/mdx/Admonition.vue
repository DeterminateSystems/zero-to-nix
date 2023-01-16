<template>
  <div
    class="admonition not-prose rounded border-1.5 dark:bg-inherit"
    :class="[
      danger && 'border-red',
      info && 'border-blue',
      success && 'border-green',
      warning && 'border-yellow',
    ]"
  >
    <Disclosure v-if="id" as="div" :defaultOpen="isOpen" v-slot="{ open }">
      <DisclosureButton
        as="div"
        class="flex items-center justify-between py-1.5 px-3 hover:cursor-pointer hover:text-dark dark:bg-dark dark:hover:bg-darker-gray dark:hover:text-light-gray md:py-2 md:px-3.5 lg:py-3 lg:px-4"
        :class="[
          open && 'rounded-t border-b-1.5',
          !open && 'rounded',
          danger && 'border-b-red bg-pale-red hover:bg-middle-red',
          info && 'border-b-blue bg-pale-blue hover:bg-middle-blue',
          success && 'border-b-green bg-pale-green hover:bg-middle-green',
          warning && 'border-b-yellow bg-pale-yellow hover:bg-middle-yellow',
        ]"
        @mouseover="buttonHover = true"
        @mouseleave="buttonHover = false"
        @click="toggle"
      >
        <span
          class="flex items-center space-x-3 font-semibold leading-snug tracking-tight md:space-x-4 md:text-lg lg:space-x-5 lg:text-xl"
        >
          <IconFaBolt v-if="danger" class="h-3 w-3 text-red md:h-4 md:w-4" />
          <IconFaInfo v-if="info" class="h-3 w-3 text-blue md:h-4 md:w-4" />
          <IconFaWarning
            v-if="warning"
            class="h-3 w-3 text-yellow md:h-4 md:w-4"
          />
          <IconFaCheck
            v-if="success"
            class="h-3 w-3 text-green md:h-4 md:w-4"
          />
          <span v-html="md(title)" />
        </span>

        <IconFaChevronRight
          class="h-3 w-3 transform duration-300 md:h-4 md:w-4"
          :class="[
            open && 'rotate-90',
            danger && 'text-red',
            info && 'text-blue',
            success && 'text-green',
            warning && 'text-yellow',
          ]"
        />
      </DisclosureButton>

      <DisclosurePanel
        as="div"
        class="content py-1.5 px-3 text-sm md:py-2 md:px-3.5 md:text-base lg:py-3 lg:px-4 lg:text-lg"
      >
        <slot />
      </DisclosurePanel>
    </Disclosure>

    <div v-else>
      <span
        v-if="title"
        class="flex items-center space-x-4 py-1.5 px-3 font-semibold tracking-tight md:py-2 md:px-3.5 lg:py-3 lg:px-4"
      >
        <IconFaBolt v-if="danger" class="h-4 w-4 text-red" />
        <IconFaInfo v-if="info" class="h-4 w-4 text-blue" />
        <IconFaCheck v-if="success" class="h-4 w-4 text-green" />
        <IconFaWarning v-if="warning" class="h-4 w-4 text-yellow" />
        <span v-html="md(title)" />
      </span>

      <div
        class="content px-3 text-sm md:px-3.5 md:text-base lg:px-4 lg:text-lg"
        :class="[
          title && 'pb-1.5 md:pb-2 lg:pb-3',
          !title && 'py-1.5 md:py-2 lg:py-3',
        ]"
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
import { md } from "~/logic/content";

const { id, title, open, danger, info, success, warning } = defineProps<{
  id?: string;
  title?: string;
  open?: boolean;
  // Kinds
  danger: boolean;
  info: boolean;
  success: boolean;
  warning: boolean;
}>();

const openInitVal = open ?? false ? "true" : "false";

if (id !== undefined && title === undefined) {
  throw new Error("If you specify an id you need to also specify a title");
}

const openState: WritableAtom<string> = persistentAtom<string>(
  `zero-to-nix:callout-${id}`,
  openInitVal,
);
const isOpen = useStore(openState).value === "true";

const toggle = () => {
  openState.set(isOpen ? "false" : "true");
};

const buttonHover = ref<boolean>(false);
</script>
