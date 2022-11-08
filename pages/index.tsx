import Tiles from "components/docs/Tiles";
import { Doc, allDocs } from "contentlayer/generated";
import Head from "next/head";
import Link from "next/link";

import site from "../site";

const Home = () => {
  let n = 1;

  const { title, description } = site;

  const metaTitle = `${title}: ${description.toLowerCase()}`;

  const sortedByWeight = allDocs.sort((d1, d2) => d1.weight - d2.weight);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl">{title} ❄️</h1>
          <h2 className="text-xl">{description}</h2>

          <Tiles docs={sortedByWeight} />
        </div>
      </div>
    </>
  );
};

export default Home;
