import persist from "@alpinejs/persist";
import type { Alpine } from "alpinejs";

type OS = "macos" | "linux" | "windows" | "android" | "unknown";

interface SystemStore {
  detected: OS;
  selected: OS | null;
  readonly os: OS;
  choose(os: OS): void;
  reset(): void;
}

function persisted<T>(Alpine: Alpine, initial: T, key: string): T {
  return Alpine.$persist(initial).as(key) as unknown as T;
}

export default (Alpine: Alpine) => {
  Alpine.plugin(persist);

  Alpine.store("system", {
    detected: (() => {
      const ua = navigator.userAgent;
      const platform = (navigator as Navigator).userAgent ?? "";
      if (/Mac|iPhone|iPad|iPod/i.test(platform) || /Mac OS X/i.test(ua))
        return "macos";
      if (/Win/i.test(platform)) return "windows";
      if (/Android/i.test(ua)) return "android";
      if (/Linux/i.test(platform)) return "linux";
      return "unknown";
    })(),

    selected: persisted<OS | null>(Alpine, null, "selected-os"),

    get os(): OS {
      return this.selected ?? this.detected;
    },

    choose(os: OS) {
      this.selected = os;
    },

    reset() {
      this.selected = null;
    },
  } satisfies SystemStore);
};
