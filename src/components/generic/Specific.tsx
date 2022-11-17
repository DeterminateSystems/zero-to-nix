import { useStore } from "@nanostores/react";
import type { StoreValue, WritableAtom } from "nanostores";
import type React from "react";

type Props = {
  option: string;
  children: React.ReactNode;
  atom: WritableAtom<string>;
};

const Specific = ({ option, children, atom }: Props) => {
  const $item: string = useStore<StoreValue<string>>(atom);

  return <>{$item === option && <>{children}</>}</>;
};

export default Specific;
