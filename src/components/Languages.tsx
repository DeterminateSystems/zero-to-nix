import { useStore } from "@nanostores/react";
import clsx from "clsx";

import { language, languages } from "../data/store";

const Languages = () => {
  const $language = useStore(language);

  return (
    <div>
      <div className="flex space-x-2">
        {languages.map((l) => (
          <button
            key={l}
            onClick={() => language.set(l)}
            className={clsx(
              "py-1 px-3 rounded-lg shadow font-semibold",
              l === $language
                ? "bg-black text-white"
                : "bg-slate-200 text-black hover:bg-slate-300"
            )}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Languages;
