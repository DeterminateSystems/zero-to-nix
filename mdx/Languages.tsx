import clsx from "clsx";
import { languages, state } from "lib/state";
import { useEffect, useState } from "react";

let script: string;

const Languages = () => {
  const [language, setLanguage] = state((s) => [s.language, s.setLanguage]);
  const [lang, setLang] = useState<string>();

  useEffect(() => {
    setLang(language);
    script = `nix flake init --template github:DeterminateSystems/template?dir=${language.toLowerCase()}`;
  }, [language]);

  return (
    <>
      <div className="not-prose">
        <div className="space-x-2">
          {languages.map((l) => (
            <button
              key={l}
              className={clsx(
                "py-1.5 px-3 rounded-lg font-semibold shadow tracking-tight",
                l === lang ? "bg-black text-white" : "bg-slate-100 text-black"
              )}
              onClick={() => setLanguage(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <pre>
        <code className="language-shell">{script}</code>
      </pre>
    </>
  );
};

export default Languages;
