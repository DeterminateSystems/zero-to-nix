<!-- TODO: make this programmatic -->
<template>
  <div class="language-shell" data-lang="shell">
    <pre
      class="language-shell"
    ><code><span class="token function">mkdir</span> {{ `nix-${template}` }} <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> {{  `nix-${template}` }}
nix flake init <span class="token parameter variable">--template</span> <span class="token string">"github:DeterminateSystems/zero-to-nix#{{ template }}"</span></code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { language } from "~/logic/state";

const { kind } = defineProps<{
  kind: string;
}>();

const lang = computed(() => {
  return (language.value === "C++" ? "cpp" : language.value).toLowerCase();
});

const template = computed(() => {
  return `${lang.value.toLowerCase()}-${kind}`;
});
</script>
