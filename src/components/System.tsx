import { useStore } from "@nanostores/react";

import { system } from "../data/store";

const System = () => {
  const $system = useStore(system);

  return <span>{$system}</span>;
};

export default System;
