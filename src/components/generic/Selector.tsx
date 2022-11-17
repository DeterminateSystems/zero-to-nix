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
    <div className="not-prose inline-flex items-center space-x-6 border-2 bg-pale border-light-gray rounded-lg dark:bg-black dark:border-gray text-normal p-3 md:p-3.5 lg:p-4">
      <p className="font-semibold tracking-tight text-normal md:text-lg lg:text-xl">
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
                  "py-0 md:py-0.5 lg:py-1 px-2 md:px-3 lg:px-4 rounded-lg font-semibold text-sm mg:text-normal lg:text-lg",
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
