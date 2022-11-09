import Content from "components/docs/Content";

import { allExplanations } from ".contentlayer/generated";

type Topic = "flake-template";

type Props = {
  topic: Topic;
};

const Explainer = ({ topic }: Props) => {
  const {
    title,
    body: { html },
  } = allExplanations.find((e) => e.id === topic)!;

  return (
    <div className="not-prose border-teal-500 border-2 rounded-xl py-4 px-6 bg-teal-50">
      <p className="text-xl font-semibold">{title}</p>

      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default Explainer;
