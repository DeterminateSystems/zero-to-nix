import { Tab } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { Fragment } from "react";

import { system, systems } from "../data/store";

const Systems = () => {
  const $system = useStore(system);

  return (
    <>
      <Tab.Group>
        <Tab.List as="div" className="space-x-2">
          {systems.map((s) => (
            <Tab as={Fragment}>
              <button
                key={s}
                onClick={() => system.set(s)}
                className={clsx(
                  "py-1 px-3 rounded-lg shadow font-semibold",
                  $system === s
                    ? "bg-black text-white"
                    : "bg-slate-200 text-black hover:bg-slate-300"
                )}
              >
                {s}
              </button>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default Systems;
