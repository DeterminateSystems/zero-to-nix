<template>
  <div
    className="not-prose text-normal inline-flex items-center space-x-6 rounded-lg border-2 border-light-gray bg-pale p-3 dark:border-gray dark:bg-inherit"
  >
    <p
      className="text-normal font-semibold tracking-tight md:text-lg lg:text-xl"
    >
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
            class="mg:text-normal rounded-lg py-0 px-2 text-sm font-semibold md:py-0.5 md:px-3 lg:py-1 lg:px-4 lg:text-lg"
            :class="{ 'bg-primary text-white': selected }"
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
