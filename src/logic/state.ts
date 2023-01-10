import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/vue";
import site from "~/site";
import { WritableAtom, atom } from "nanostores";
import { computed } from "vue";

const { languages } = site;

// Get the default system based on browser hint
const defaultSystem: string =
  typeof window !== "undefined"
    ? window.navigator.userAgent.indexOf("Mac") != -1
      ? "macOS"
      : "Linux"
    : "Linux";

// Current selected language (stored in localStorage)
export const languageState: WritableAtom<string> = persistentAtom<string>(
  "zero-to-nix:language",
  languages[0]!,
);

export const language = useStore(languageState);

// Current selected system (stored in localStorage)
export const systemState: WritableAtom<string> = persistentAtom<string>(
  "zero-to-nix:system",
  defaultSystem,
);

export const system = useStore(systemState);

// Nav drawer state
const drawerAtom = atom<boolean>(false);
export const drawerIsOpen = useStore(drawerAtom);

export const toggleDrawer = () => {
  drawerAtom.set(!drawerAtom.get());
};

export const closeDrawer = () => {
  drawerAtom.set(false);
};
