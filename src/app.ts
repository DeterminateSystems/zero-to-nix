import "virtual:windi.css";
import "virtual:windi-devtools";

import site from "~/site";
import { defineApp } from "iles";

const { languageCode } = site;

export default defineApp({
  head: {
    bodyAttrs: { class: "bg-white font-sans antialiased dark:bg-black" },
    htmlAttrs: {
      lang: languageCode,
    },
  },
});
