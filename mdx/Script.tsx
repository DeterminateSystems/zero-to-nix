import { state } from "lib/state";
import { useEffect, useState } from "react";

let script: string;

const Script = () => {
  const [language] = state((s) => [s.language]);
  const [lang, setLang] = useState<string>();

  useEffect(() => {
    setLang(language);
    script = `nix flake init --template github:DeterminateSystems/template?dir=${language.toLowerCase()}`;
  }, [language]);

  return (
    <pre>
      <code>{script}</code>
    </pre>
  );
};

export default Script;
