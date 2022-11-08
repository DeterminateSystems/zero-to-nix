import create from "zustand";
import createContext from "zustand/context";
import { persist } from "zustand/middleware";

const systems: string[] = ["Linux", "macOS"];
const languages: string[] = ["JavaScript", "Python", "Go", "Rust", "Ruby"];

interface State {
  system: string;
  language: string;
  setSystem: (s: string) => void;
  setLanguage: (l: string) => void;
}

const ctx = createContext();
export const Provider = ctx.Provider;

const guessSystem = (): string => {
  if (typeof window !== "undefined") {
    return window.navigator.userAgent.indexOf("Mac") != -1 ? "macOS" : "Linux";
  } else {
    return "Linux";
  }
};

const state = create<State>()(
  persist(
    (set, _get) => ({
      system: guessSystem(),
      language: languages[0],
      setSystem: (s: string) => set({ system: s }),
      setLanguage: (l: string) => set({ language: l }),
    }),
    {
      name: "zero-to-nix",
      version: 1,
      getStorage: () => localStorage,
    }
  )
);

export { systems, state };
