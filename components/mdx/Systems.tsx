import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { state, systems } from "lib/state";
import { Fragment, useEffect, useState } from "react";

const Systems = () => {
  const [system, setSystem] = state((s) => [s.system, s.setSystem]);
  const [_, setSys] = useState<string>();

  useEffect(() => {
    setSys(system);
  }, [system]);

  return (
    <Tab.Group>
      <Tab.List as="div" className="flex space-x-2">
        {systems.map((s) => (
          <Tab key={s} as={Fragment}>
            {({ selected }) => (
              <button
                onClick={() => setSystem(s)}
                className={clsx(
                  "py-1 px-3 rounded-lg font-semibold shadow tracking-tight",
                  selected
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-black hover:bg-slate-200"
                )}
              >
                {s}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

export default Systems;
