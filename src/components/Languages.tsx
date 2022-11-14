import { Tab } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { Fragment } from "react";

import { language, languages } from "../data/store";

const Languages = () => {
  const $language = useStore(language);

  return (
    <>
      <Tab.Group onChange={(idx: number) => language.set(languages[idx]!)}>
        <Tab.List as="div" className="space-x-2">
          {languages.map((l) => (
            <Tab as={Fragment}>
              <button
                key={l}
                onClick={() => language.set(l)}
                className={clsx(
                  "py-1 px-3 rounded-lg shadow font-semibold",
                  $language === l
                    ? "bg-black text-white"
                    : "bg-slate-200 text-black hover:bg-slate-300"
                )}
              >
                {l}
              </button>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default Languages;
