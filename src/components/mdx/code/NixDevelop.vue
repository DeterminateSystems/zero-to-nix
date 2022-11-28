<script setup lang="ts">
import { language } from "~/logic/state";
</script>

<!-- TODO: make this programmatic -->
<template>
  <div class="language-shell" data-lang="shell">
    <pre
      class="language-shell"
    ><code>nix develop <span class="token string">"github:DeterminateSystems/zero-to-nix#{{ language.toLowerCase() }}"</span></code></pre>
  </div>
</template>
