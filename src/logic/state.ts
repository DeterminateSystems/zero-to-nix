import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/vue";
import site from "~/site";
import { WritableAtom } from "nanostores";

const { languages } = site;

const defaultSystem: string =
  typeof window !== "undefined"
    ? window.navigator.userAgent.indexOf("Mac") != -1
      ? "macOS"
      : "Linux"
    : "Linux";

export const languageState: WritableAtom<string> = persistentAtom<string>(
  "zero-to-nix:language",
  languages[0]!
);

export const systemState: WritableAtom<string> = persistentAtom<string>(
  "zero-to-nix:system",
  defaultSystem
);

export const language = useStore(languageState);
export const system = useStore(systemState);
