import type React from "react";

import { system } from "../data/store";
import Specific from "./generic/Specific";

type Props = {
  lang: string;
  children: React.ReactNode;
};

const SpecificSystem = ({ lang, children }: Props) => {
  return <Specific option={lang} children={children} atom={system} />;
};

export default SpecificSystem;
