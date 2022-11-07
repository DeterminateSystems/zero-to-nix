import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
  code: string;
};

const Content = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);

  return (
    <div className="max-w-none prose">
      <MDXContent components={{}} />
    </div>
  );
};

export default Content;
