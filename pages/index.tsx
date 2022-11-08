import { Doc, allDocs } from "contentlayer/generated";
import Head from "next/head";
import Link from "next/link";

import site from "../site";

const DocTile = ({ doc }: { doc: Doc }) => {
  const { title, description, path } = doc;

  return (
    <Link href={path}>
      <div className="border-2 shadow rounded-xl hover:border-blue-500 py-4 px-6">
        <div className="flex items-center space-x-4">
          <div>
            <span className="text-xl font-semibold">1</span>
          </div>
          <div>
            <p className="text-lg">{title}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Home = () => {
  let n = 1;

  const { title, description } = site;

  const metaTitle = `${title}: ${description.toLowerCase()}`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl">{title} ❄️</h1>
        <h2 className="text-xl">{description}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {allDocs.map((d) => (
            <DocTile key={d._id} doc={d} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
