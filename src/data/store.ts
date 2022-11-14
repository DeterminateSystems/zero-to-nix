import { persistentAtom } from "@nanostores/persistent";

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

export const systems: string[] = ["Linux", "macOS"];

export const languages: string[] = ["Python", "JavaScript", "Rust"];

export const language = persistentAtom<string>("language", "Python");
export const system = persistentAtom<string>("system", defaultSystem);
export const theme = persistentAtom<string>("theme", defaultTheme);
