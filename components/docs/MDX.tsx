import { useMDXComponent } from "next-contentlayer/hooks";

import Harmonic from "../../mdx/Harmonic";
import Language from "../../mdx/Language";
import Languages from "../../mdx/Languages";
import Script from "../../mdx/Script";
import Topic from "../../mdx/Topic";

type Props = {
  code: string;
};

const MDX = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-none prose">
      <MDXContent
        components={{ Harmonic, Language, Languages, Script, Topic }}
      />
    </div>
  );
};

export default MDX;
