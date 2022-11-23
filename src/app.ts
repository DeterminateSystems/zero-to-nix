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
  },
});
