import { useMDXComponent } from "next-contentlayer/hooks";

import Concept from "../mdx/Concept";
import Harmonic from "../mdx/Harmonic";
import Language from "../mdx/Language";
import Languages from "../mdx/Languages";
import Shell from "../mdx/Shell";
import Topic from "../mdx/Topic";

type Props = {
  code: string;
};

const MDX = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="prose max-w-none">
      <MDXContent
        components={{ Concept, Harmonic, Language, Languages, Shell, Topic }}
      />
    </div>
  );
};

export default MDX;
