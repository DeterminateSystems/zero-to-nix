<template>
  <div
    class="not-prose rounded-lg border-2 border-light-gray bg-pale py-3 px-5 dark:border-gray dark:bg-inherit"
  >
    <div class="space-y-2 md:space-y-3 lg:space-y-4">
      <pre
        class="flex overflow-auto whitespace-nowrap break-keep text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        <div class="flex flex-col md:space-y-1 lg:space-y-1.5">
          <span class="font-mono text-lilac dark:text-cerulean">
            /nix/store/
          </span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-normal">
            <strong>1.</strong> Root path
          </span>
        </div>
        <div class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span class="font-mono font-light text-blue dark:text-lilac">
            sglc12hc6pc68w5ppn2k56n6jcpaci16
          </span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-normal">
            <strong>2.</strong> Input hash
          </span>
        </div>
        <span>-</span>
        <div class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span class="font-mono text-orange dark:text-rose">{{ pkg }}</span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-normal">
            <strong>3.</strong> Package name
          </span>
        </div>
        <div v-if="bin" class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span>/</span>
          <span class="font-mono text-orange dark:text-rose">bin/{{ bin }}</span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-normal">
            <strong>4.</strong> Program path
          </span>
        </div>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pkg } = defineProps<{
  pkg: string;
  bin?: string;
}>();
</script>
