import Concept from "components/mdx/Concept";
import Harmonic from "components/mdx/Harmonic";
import Language from "components/mdx/Language";
import Languages from "components/mdx/Languages";
import NixStorePath from "components/mdx/NixStorePath";
import Shell from "components/mdx/Shell";
import Systems from "components/mdx/Systems";
import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
  code: string;
};

const MDX = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="prose max-w-none">
      <MDXContent
        components={{
          Concept,
          Harmonic,
          Language,
          Languages,
          NixStorePath,
          Shell,
          Systems,
        }}
      />
    </div>
  );
};

export default MDX;
