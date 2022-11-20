import "virtual:windi.css";
import "virtual:windi-devtools";

import site from "~/site";
import { defineApp } from "iles";

const { languageCode } = site;

export default defineApp({
  head: {
    bodyAttrs: { class: "font-sans antialiased" },
    htmlAttrs: {
      lang: languageCode,
    },
  },
});
