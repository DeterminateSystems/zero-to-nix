import persist from "@alpinejs/persist";
import type { Alpine } from "alpinejs";

export default (Alpine: Alpine) => {
  Alpine.plugin(persist);
};
