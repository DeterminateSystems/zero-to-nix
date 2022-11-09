import { state } from "lib/state";
import { useEffect, useState } from "react";

const Language = () => {
  const [language] = state((s) => [s.language]);
  const [lang, setLang] = useState<string>();

  useEffect(() => {
    setLang(language);
  }, [language]);

  return <span>{lang}</span>;
};

export default Language;
