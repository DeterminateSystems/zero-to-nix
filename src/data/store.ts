import { persistentAtom } from "@nanostores/persistent";

import { site } from "../../site";

export const { systems, languages } = site;

const defaultTheme: string =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : "light";

const defaultSystem: string =
  typeof window !== "undefined"
    ? window.navigator.userAgent.indexOf("Mac") != -1
      ? "macOS"
      : "Linux"
    : "Linux";

export const language = persistentAtom<string>("language", languages[0]);
export const system = persistentAtom<string>("system", defaultSystem);
export const theme = persistentAtom<string>("theme", defaultTheme);
