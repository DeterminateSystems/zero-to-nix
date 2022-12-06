import Heading2 from "~/components/layout/Heading2.vue";
import Heading3 from "~/components/layout/Heading3.vue";
import setDarkTheme from "~/logic/dark-mode-set?raw";
import site from "~/site";
import { defineApp } from "iles";

const { languageCode } = site;

export default defineApp({
  head: {
    bodyAttrs: { class: "font-sans antialiased" },
    htmlAttrs: {
      lang: languageCode,
    },
    meta: [
      { property: "HandheldFriendly", content: "True" },
      { property: "MobileOptimized", content: "320" },
    ],
    script: [
      // This approach taken from the îles site:
      // https://github.com/ElMassimo/iles/blob/cacd1947281008b299793f617757262871ace795/docs/src/logic/dark-color-scheme-check.ts
      { children: setDarkTheme, once: true },
    ],
  },
  mdxComponents: {
    h2: Heading2,
    h3: Heading3,
  },
});
