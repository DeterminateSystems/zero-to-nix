import { useMDXComponent } from "next-contentlayer/hooks";

// Custom MDX components
import Harmonic from "../../mdx/Harmonic";
import Language from "../../mdx/Language";
import Languages from "../../mdx/Languages";
import Script from "../../mdx/Script";

type Props = {
  code: string;
};

const Content = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-none prose">
      <MDXContent components={{ Harmonic, Language, Languages, Script }} />
    </div>
  );
};

export default Content;
