import { persistentAtom } from "@nanostores/persistent";

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
