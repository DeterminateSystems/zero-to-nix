<template>
  <div class="language-shell" data-lang="shell">
    <pre
      class="language-shell"
    ><code>harmonic {{ command }} {{ `${system === "Linux" ? "linux" : "darwin"}-multi` }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { system } from "~/logic/state";

defineProps<{
  command: string;
}>();
</script>
