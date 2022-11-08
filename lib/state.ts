import create from "zustand";
import createContext from "zustand/context";
import { persist } from "zustand/middleware";

const systems: string[] = ["Linux", "macOS"];

interface State {
  system: string;
  setSystem: (s: string) => void;
}

const ctx = createContext();
export const Provider = ctx.Provider;

const state = create<State>()(
  persist(
    (set, _get) => ({
      system: systems[0],
      setSystem: (s: string) => set({ system: s }),
    }),
    {
      name: "zero-to-nix",
      version: 1,
      getStorage: () => localStorage,
    }
  )
);

export { systems, state };
