import { useStore } from "@nanostores/react";

import { language } from "../data/store";

let script: string;

const Shell = () => {
  const $language = useStore(language);
  const lang = $language.toLowerCase();
  const dir = `nix-${lang}`;
  script = `mkdir ${dir} && cd ${dir}\nnix flake init --template "github:DeterminateSystems/template#${lang}"`;

  return (
    <pre>
      <code className="language-shell">{script}</code>
    </pre>
  );
};

export default Shell;
