import { useStore } from "@nanostores/react";

import { system } from "../data/store";

type Command = "plan" | "install";

type Props = {
  command: Command;
};

const Harmonic = ({ command }: Props) => {
  const $system = useStore(system);

  const arch = $system == "Linux" ? "linux" : "darwin";

  let script: string;

  switch (command) {
    case "plan":
      script = `harmonic plan install ${arch}-multi`;
      break;
    case "install":
      script = `harmonic install ${arch}-multi`;
      break;
  }

  return (
    <pre>
      <code className="language-shell">{script}</code>
    </pre>
  );
};

export default Harmonic;
