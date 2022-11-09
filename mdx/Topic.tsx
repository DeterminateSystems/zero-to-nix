import Markdown from "components/docs/Markdown";
import { allTopics } from "contentlayer/generated";

type Props = {
  id: string;
};

const Topic = ({ id }: Props) => {
  const {
    title,
    body: { html },
  } = allTopics.find((e) => e.id === id)!;

  return (
    <div className="not-prose border-teal-500 border-2 rounded-xl py-4 px-6 bg-teal-50">
      <p className="text-xl font-semibold">{title}</p>

      <Markdown html={html} />
    </div>
  );
};

export default Topic;
