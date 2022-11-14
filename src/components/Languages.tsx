import { language, languages } from "../data/store";
import Selector from "./generic/Selector";

const Languages = () => <Selector options={languages} atom={language} />;

export default Languages;
