<template>
  <div
    class="not-prose rounded-lg border-1.5 border-light-gray bg-pale py-3 px-5 dark:border-gray dark:bg-inherit"
  >
    <div class="space-y-2 md:space-y-3 lg:space-y-4">
      <pre
        class="flex overflow-auto whitespace-nowrap break-keep text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        <div class="flex flex-col md:space-y-1 lg:space-y-1.5">
          <span class="font-mono text-lilac dark:text-cerulean">
            {{ reference }}
          </span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-base">
            <strong>1.</strong> Flake ref
          </span>
        </div>
        <span class="text-dark-gray dark:text-light-gray">#</span>
        <div class="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span class="font-mono font-light text-blue dark:text-lilac">
            {{ outputPath }}
          </span>
          <span class="font-sans text-xs tracking-tight md:text-sm lg:text-base">
            <strong>2.</strong> Output path
          </span>
        </div>
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const { reference } = defineProps<{
  reference: string;
  outputPath: string;
}>();
</script>
