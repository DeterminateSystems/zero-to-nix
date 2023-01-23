<script setup lang="ts">
import { computed } from "vue";
import { language } from "~/logic/state";

const lang = computed(() => {
  return (language.value === "C++" ? "cpp" : language.value).toLowerCase();
});
</script>

<!-- TODO: make this programmatic -->
<template>
  <div class="language-shell" data-lang="shell">
    <pre
      class="language-shell"
    ><code>nix develop <span class="token string">"github:DeterminateSystems/zero-to-nix#{{ lang }}"</span></code></pre>
  </div>
</template>
