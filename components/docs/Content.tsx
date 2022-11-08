import { useMDXComponent } from "next-contentlayer/hooks";

import Harmonic from "../../mdx/Harmonic";

type Props = {
  code: string;
};

const Content = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-none prose">
      <MDXContent components={{ Harmonic }} />
    </div>
  );
};

export default Content;
