import { useMDXComponent } from "next-contentlayer/hooks";

import InstallNix from "../../mdx/InstallNix";

type Props = {
  code: string;
};

const Content = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-none prose">
      <MDXContent components={{ InstallNix }} />
    </div>
  );
};

export default Content;
