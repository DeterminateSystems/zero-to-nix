import { useStore } from "@nanostores/react";

import { language } from "../data/store";

const Shell = () => {
  const $language = useStore(language);
  const lang = $language.toLowerCase();
  const dir = `nix-${lang}`;

  const bg = "#0d1117";
  const command = "#C9D1D9";
  const operator = "#FF7B72";
  const quote = "#A5D6FF";
  const cd = "#8BE9FD";

  return (
    // TODO: make this not hard-coded
    <pre
      className="astro-code"
      style={{ backgroundColor: bg, overflowX: "auto" }}
    >
      <code>
        <span className="line">
          <span style={{ color: command }}>mkdir {dir} </span>
          <span style={{ color: operator }}>&amp;&amp;</span>
          <span style={{ color: command }}> </span>
          <span style={{ color: cd }}>cd</span>
          <span style={{ color: command }}> {dir}</span>
        </span>

        <br />

        <span className="line">
          <span style={{ color: command }}>nix flake init --template </span>
          <span style={{ color: quote }}>
            "github:DeterminateSystems/zero-to-nix#{lang}"
          </span>
        </span>
      </code>
    </pre>
  );
};

export default Shell;
