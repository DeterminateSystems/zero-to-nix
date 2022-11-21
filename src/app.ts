import initializeTheme from "~/logic/initialize-theme?raw";
import site from "~/site";
import { defineApp } from "iles";

const { languageCode } = site;

export default defineApp({
  head: {
    bodyAttrs: { class: "font-sans antialiased" },
    htmlAttrs: {
      lang: languageCode,
    },
    script: [{ children: initializeTheme, once: true }],
  },
});
