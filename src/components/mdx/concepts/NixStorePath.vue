<template>
  <div
    class="not-prose rounded-lg border-2 border-light-gray bg-pale py-3 px-5 dark:border-gray dark:bg-inherit"
  >
    <div class="space-y-2 md:space-y-3 lg:space-y-4">
      <pre
        class="flex overflow-auto whitespace-nowrap break-keep text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        <div class="flex flex-col md:space-y-1 lg:space-y-1.5">
          <span class="font-mono text-lilac dark:text-cerulean">
            /nix/store/
          </span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-base" v-if="showExplainer">
            <strong>1.</strong> Nix store prefix
          </span>
        </div>
        <div class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span class="font-mono font-light text-blue dark:text-lilac">
            {{ finalHash }}
          </span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-base" v-if="showExplainer">
            <strong>2.</strong> Hash part
          </span>
        </div>
        <span>-</span>
        <div class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span class="font-mono text-orange dark:text-rose">{{ pkg }}</span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-base" v-if="showExplainer">
            <strong>3.</strong> Package name
          </span>
        </div>
        <span v-if="bin">/</span>
        <div v-if="bin" class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span class="font-mono text-orange dark:text-rose">bin/{{ bin }}</span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-base" v-if="showExplainer">
            <strong>4.</strong> Program path
          </span>
        </div>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pkg, bin, hash, valueOnly } = defineProps<{
  pkg: string;
  bin?: string;
  hash?: string;
  valueOnly?: boolean;
}>();

const showExplainer = !valueOnly;
const finalHash = hash ?? "sglc12hc6pc68w5ppn2k56n6jcpaci16";
</script>
