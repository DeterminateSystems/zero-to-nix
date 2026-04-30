import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
  themes: ["github-dark"],
  emitExternalStylesheet: true,
  defaultProps: {
    showLineNumbers: false,
  },
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
  styleOverrides: {
    codeFontSize: "1rem",
    uiFontSize: "1rem",
  },
});
