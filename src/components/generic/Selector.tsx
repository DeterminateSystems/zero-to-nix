import { Tab } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import type { WritableAtom } from "nanostores";
import { Fragment } from "react";

type Props = {
  title: string;
  options: string[];
  atom: WritableAtom<string>;
};

const Selector = ({ title, options, atom }: Props) => {
  const $item: string = useStore(atom);

  return (
    <div className="not-prose inline-flex items-center space-x-6 border-2 rounded-xl py-4 px-6">
      <p className="text-xl font-semibold">{title}</p>
      <Tab.Group onChange={(idx: number) => atom.set(options[idx]!)}>
        <Tab.List as="div" className="space-x-2">
          {options.map((o) => (
            <Tab as={Fragment}>
              <button
                key={o}
                onClick={() => atom.set(o)}
                className={clsx(
                  "py-1 px-3 rounded-lg shadow font-semibold",
                  $item === o
                    ? "bg-black text-white"
                    : "bg-slate-200 text-black hover:bg-slate-300"
                )}
              >
                {o}
              </button>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Selector;
