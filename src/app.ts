import setDarkTheme from "~/logic/dark-mode-set?raw";
import site from "~/site";
import { defineApp } from "iles";

const { languageCode } = site;

export default defineApp({
  head: {
    bodyAttrs: { class: "text-black dark:text-white font-sans antialiased" },
    htmlAttrs: {
      lang: languageCode,
    },
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//cdn-images.mailchimp.com/embedcode/classic-071822.css",
      },
    ],
    meta: [
      {
        name: "google-site-verification",
        content: "Sv3w9s25Ovp0Qj2VlyNNL6etToADAPQys8kbJ_e_Df8",
      },
    ],
    script: [
      // This approach taken from the îles site:
      // https://github.com/ElMassimo/iles/blob/cacd1947281008b299793f617757262871ace795/docs/src/logic/dark-color-scheme-check.ts
      { children: setDarkTheme },
    ],
  },
});
