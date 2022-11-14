import { language, languages } from "../data/store";
import Selector from "./generic/Selector";

const Languages = () => (
  <Selector
    title="Select your preferred programming language"
    options={languages}
    atom={language}
  />
);

export default Languages;
