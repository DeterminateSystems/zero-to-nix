import { Doc } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  docs: Doc[];
};

const DocTile = ({ doc }: { doc: Doc }) => {
  const { title, description, weight, path } = doc;

  return (
    <Link href={path}>
      <div className="border-2 shadow rounded-xl hover:border-blue-500 py-4 px-6 h-full">
        <div className="flex items-start space-x-6">
          <div>
            <span className="text-lg font-bold">{weight}.</span>
          </div>
          <div className="space-y-2">
            <p className="text-lg leading-tight">{title}</p>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Tiles = ({ docs }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      {docs.map((d) => (
        <DocTile key={d._id} doc={d} />
      ))}
    </div>
  );
};

export default Tiles;
