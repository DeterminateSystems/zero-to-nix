import type React from "react";

import { language } from "../data/store";
import Specific from "./generic/Specific";

type Props = {
  lang: string;
  children: React.ReactNode;
};

const SpecificLanguage = ({ lang, children }: Props) => {
  return <Specific option={lang} children={children} atom={language} />;
};

export default SpecificLanguage;
