import Markdown from "components/docs/Markdown";
import MDX from "components/docs/MDX";
import { allTopics } from "contentlayer/generated";

type Props = {
  id: string;
};

const Topic = ({ id }: Props) => {
  const {
    title,
    body: { code },
  } = allTopics.find((e) => e.id === id)!;

  return (
    <div className="not-prose border-teal-500 border-2 rounded-xl py-3 px-5 bg-teal-50">
      <p className="text-xl font-semibold">{title}</p>

      <MDX code={code} />
    </div>
  );
};

export default Topic;
