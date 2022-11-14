import { useStore } from "@nanostores/react";
import type React from "react";

import { language } from "../data/store";

type Props = {
  lang: string;
  children: React.ReactNode;
};

const Specific = ({ lang, children }: Props) => {
  const $language = useStore(language);

  return <>{$language === lang && <>{children}</>}</>;
};

export default Specific;
