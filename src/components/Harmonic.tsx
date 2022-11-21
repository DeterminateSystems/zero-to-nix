import { useStore } from "@nanostores/react";

import { system } from "../data/store";

type Command = "plan" | "install";

type Props = {
  command: Command;
};

const Harmonic = ({ command }: Props) => {
  const $system = useStore(system);

  const arch = $system == "Linux" ? "linux" : "darwin";
  const multi = `${arch}-multi`;
  const script = `harmonic ${command} ${multi}`;

  return (
    // TODO: render this programmatically using Shiki or Prism
    <pre style={{ backgroundColor: "#0d1117", color: "rgb(201, 209, 217)" }}>
      <code className="language-shell">{script}</code>
    </pre>
  );
};

export default Harmonic;
