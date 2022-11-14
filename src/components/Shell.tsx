import { useStore } from "@nanostores/react";

import { language } from "../data/store";

const Shell = () => {
  const $language = useStore(language);
  const lang = $language.toLowerCase();
  const dir = `nix-${lang}`;

  return (
    // TODO: make this not hard-coded
    <pre
      className="astro-code"
      style={{ backgroundColor: "#282A36", overflowX: "auto" }}
    >
      <code>
        <span className="line">
          <span style={{ color: "#F8F8F2" }}>mkdir {dir} </span>
          <span style={{ color: "#FF79C6" }}>&amp;&amp;</span>
          <span style={{ color: "#F8F8F2" }}> </span>
          <span style={{ color: "#8BE9FD" }}>cd</span>
          <span style={{ color: "#F8F8F2" }}> {dir}</span>
        </span>

        <br />

        <span className="line">
          <span style={{ color: "#F8F8F2" }}>nix flake init --template </span>
          <span style={{ color: "#E9F284" }}>"</span>
          <span style={{ color: "#F1FA8C" }}>
            github:DeterminateSystems/template#{lang}
          </span>
          <span style={{ color: "#E9F284" }}>"</span>
        </span>
      </code>
    </pre>
  );
};

export default Shell;
