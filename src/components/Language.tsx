import { useStore } from "@nanostores/react";

import { language } from "../data/store";

const Language = () => {
  const $language = useStore(language);

  return <span>{$language}</span>;
};

export default Language;
