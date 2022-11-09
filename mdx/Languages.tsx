import clsx from "clsx";
import { languages, state } from "lib/state";
import { useEffect, useState } from "react";

const Languages = () => {
  const [language, setLanguage] = state((s) => [s.language, s.setLanguage]);
  const [lang, setLang] = useState<string>();

  useEffect(() => {
    setLang(language);
  }, [language]);

  return (
    <>
      <div className="not-prose">
        <div className="space-x-2">
          {languages.map((l) => (
            <button
              key={l}
              className={clsx(
                "py-1 px-3 rounded-lg font-semibold shadow tracking-tight",
                l === lang
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-black hover:bg-slate-200"
              )}
              onClick={() => setLanguage(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
