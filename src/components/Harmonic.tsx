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
    <pre style={{ backgroundColor: "rgb(40, 42, 54)", color: "#F8F8F2" }}>
      <code className="language-shell">{script}</code>
    </pre>
  );
};

export default Harmonic;
