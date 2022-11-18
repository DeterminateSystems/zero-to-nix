import { Tab } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import type { StoreValue, WritableAtom } from "nanostores";
import { Fragment } from "react";

type Props = {
  title: string;
  options: string[];
  atom: WritableAtom<string>;
};

const Selector = ({ title, options, atom }: Props) => {
  const $item: string = useStore<StoreValue<string>>(atom);

  return (
    <div className="not-prose inline-flex items-center space-x-6 rounded-lg border-2 border-light-gray bg-pale p-3 text-base dark:border-gray dark:bg-black md:p-3.5 lg:p-4">
      <p className="text-base font-semibold tracking-tight md:text-lg lg:text-xl">
        {title}
      </p>
      <Tab.Group onChange={(idx: number) => atom.set(options[idx]!)}>
        <Tab.List as="div" className="flex space-x-2 md:space-x-3 lg:space-x-4">
          {options.map((o) => (
            <Tab as={Fragment}>
              <button
                aria-label={title}
                key={o}
                onClick={() => atom.set(o)}
                className={clsx(
                  "rounded-lg py-0 px-2 text-sm font-semibold md:py-0.5 md:px-3 md:text-base lg:py-1 lg:px-4 lg:text-lg",
                  $item === o && "bg-primary text-white"
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
