import { state } from "lib/state";
import { useEffect, useState } from "react";

const InstallNix = () => {
  const [system] = state((s) => [s.system]);
  const [sys, setSys] = useState<string>("");
  useEffect(() => {
    setSys(system);
  }, [system]);

  const arch = sys == "Linux" ? "linux" : "darwin";

  const script = `harmonic install ${arch}-multi`;

  return (
    <pre>
      <code className="language-shell">{script}</code>
    </pre>
  );
};

export default InstallNix;
