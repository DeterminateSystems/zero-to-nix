import { useStore } from "@nanostores/react";
import clsx from "clsx";

import { system, systems } from "../data/store";

const Systems = () => {
  const $system = useStore(system);

  return (
    <div>
      <div className="flex space-x-2">
        {systems.map((s) => (
          <button
            key={s}
            onClick={() => system.set(s)}
            className={clsx(
              "py-1 px-3 rounded-lg shadow font-semibold",
              s === $system
                ? "bg-black text-white"
                : "bg-slate-200 text-black hover:bg-slate-300"
            )}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Systems;
