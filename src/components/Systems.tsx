import { system, systems } from "../data/store";
import Selector from "./generic/Selector";

const Systems = () => (
  <Selector title="Select your platform" options={systems} atom={system} />
);

export default Systems;
