<!-- TODO: make this programmatic -->
<template>
  <div class="language-shell" data-lang="shell">
    <pre
      class="language-shell"
    ><code><span class="token function">mkdir</span> {{ `nix-${language.toLowerCase()}` }} <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> {{  `nix-${language.toLowerCase()}` }}
nix flake init <span class="token parameter variable">--template</span> <span class="token string">"github:DeterminateSystems/zero-to-nix#{{ language.toLowerCase() }}"</span></code></pre>
  </div>
</template>

<script setup lang="ts">
import { language } from "~/logic/state";
</script>
