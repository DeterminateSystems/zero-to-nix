import { useMDXComponent } from "next-contentlayer/hooks";

// Custom MDX components
import Harmonic from "../../mdx/Harmonic";
import Languages from "../../mdx/Languages";

type Props = {
  code: string;
};

const Content = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-none prose">
      <MDXContent components={{ Harmonic, Languages }} />
    </div>
  );
};

export default Content;
