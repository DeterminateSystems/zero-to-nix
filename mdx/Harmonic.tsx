import { state } from "lib/state";
import { useEffect, useState } from "react";

type Command = "plan" | "install";

type Props = {
  command: Command;
};

const Harmonic = ({ command }: Props) => {
  const [system] = state((s) => [s.system]);
  const [sys, setSys] = useState<string>("");

  useEffect(() => {
    setSys(system);
  }, [system]);

  const arch = sys == "Linux" ? "linux" : "darwin";

  let script: string;

  switch (command) {
    case "plan":
      script = `harmonic plan install ${arch}-multi`;
    case "install":
      script = `harmonic install ${arch}-multi`;
  }

  return (
    <pre>
      <code className="language-shell">{script}</code>
    </pre>
  );
};

export default Harmonic;
