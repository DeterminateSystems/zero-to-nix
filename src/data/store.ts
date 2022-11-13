import { persistentAtom } from "@nanostores/persistent";

export const systems: string[] = ["Linux", "macOS"];

export const languages: string[] = ["Python", "JavaScript", "Rust"];

export const language = persistentAtom<string>("language", "Python");

const defaultSystem =
  window.navigator.userAgent.indexOf("Mac") != -1 ? "macOS" : "Linux";

export const system = persistentAtom<string>("system", defaultSystem);
