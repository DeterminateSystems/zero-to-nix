<template>
  <div
    className="not-prose text-base inline-flex items-center space-x-6 rounded-lg border-1.5 border-light-gray py-2.5 pl-6 pr-4 dark:border-gray dark:bg-inherit"
  >
    <p className="text-base font-semibold tracking-tight md:text-lg lg:text-xl">
      {{ title }}
    </p>

    <TabGroup @change="update" :defaultIndex="defaultIndex">
      <TabList>
        <Tab
          v-for="(option, idx) in options"
          :key="idx"
          as="template"
          v-slot="{ selected }"
        >
          <button
            class="rounded-lg border-1.5 px-1.5 py-1 text-sm font-semibold tracking-tight focus:outline-none md:px-2 md:py-0.5 md:text-base lg:px-3 lg:py-1.5 lg:text-lg"
            :class="{
              'border-primary bg-pale dark:bg-darker-gray': selected,
              'border-pale hover:text-primary dark:border-dark': !selected,
            }"
          >
            {{ option }}
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { Tab, TabGroup, TabList } from "@headlessui/vue";
import { useStore } from "@nanostores/vue";
import { WritableAtom } from "nanostores";

const { title, options, state } = defineProps<{
  title: string;
  options: string[];
  state: WritableAtom<string>;
}>();

const store = useStore(state);

const defaultIndex = options.indexOf(store.value);

const update = (idx: number) => {
  state.set(options[idx]);
};
</script>
