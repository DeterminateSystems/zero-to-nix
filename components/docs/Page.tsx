import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Doc, allDocs } from "contentlayer/generated";
import { languages } from "lib/state";
import { NextPage } from "next";
import Head from "next/head";
import site from "site";

import Content from "./Content";
import Pagination from "./Pagination";

type Props = {
  doc: Doc;
};

const Page: NextPage<Props> = ({ doc }: Props) => {
  const {
    title,
    description,
    weight,
    body: { code },
  } = doc;

  const fullTitle = `${title} | ${site.title}`;

  const next: Doc | undefined = allDocs.find((d) => d.weight === weight + 1);
  const previous: Doc | undefined = allDocs.find(
    (d) => d.weight === weight - 1
  );

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Navbar />
          <div className="px-6 pt-12">
            <div className="container mx-auto flex flex-col space-y-4">
              <header className="space-y-3">
                <h1 className="text-4xl">{title}</h1>
                <h2 className="text-2xl text-slate-500">{description}</h2>
              </header>
              <Content code={code} />
            </div>
          </div>
        </main>
        <Pagination previous={previous} next={next} />
        <Footer />
      </div>
    </>
  );
};

export default Page;
