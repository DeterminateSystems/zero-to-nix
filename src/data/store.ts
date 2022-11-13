import { persistentAtom } from "@nanostores/persistent";

export const systems: string[] = ["Linux", "macOS"];

export const languages: string[] = ["Python", "JavaScript", "Rust"];

export const language = persistentAtom<string>("language", "Python");

export const system = persistentAtom<string>("system", "Linux");
