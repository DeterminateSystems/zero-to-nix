import { ParsedUrlQuery } from "querystring";

import Content from "components/docs/Content";
import Pagination from "components/docs/Pagination";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Doc, allDocs } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import site from "site";

// Helper types for generic stuff
type WithRelativePath = { relativePath: string };
type WithPath = { path: string };

// I hate that JS makes this necessary, but here we are
const arraysEqual = <T,>(a: T[], b: T[]) =>
  a.every((val, idx) => val === b[idx]);

// Find a doc based on segments, e.g. ["docs", "install"]
const getRawBySegments = <T extends WithRelativePath>(
  docs: T[],
  segments: string[]
): T | undefined => {
  return docs.find((d) => arraysEqual(d.relativePath.split("/"), segments));
};

// The properties to pass on to pages under /docs
type Props = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

// URL params captured by this template (hence the [...segments])
interface Params extends ParsedUrlQuery {
  segments: string[];
}

// Pre-calculate all available /docs paths (to keep this static)
const getPaths = <T extends WithPath>(docs: T[]): string[] =>
  docs.map((d) => d.path);

const allDocPaths: string[] = getPaths(allDocs);

// Find a doc based on path segments or return undefined
const getDoc = (segments: string[]): Doc | undefined =>
  getRawBySegments(allDocs, segments);

// Take path segments and return either a doc or not found
const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { segments } = params!;
  const doc: Doc | undefined = getDoc(segments);
  return doc ? { props: { doc } } : { notFound: true };
};

// Statically generated paths (to keep this from being a "web app")
const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: allDocPaths,
    fallback: false,
  };
};

// Doc page template
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
          <article>
            <div className="px-6 pt-12">
              <div className="container mx-auto">
                <div className="flex flex-col space-y-8">
                  <section className="grow">
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-4xl">{title}</h1>
                      <h2 className="text-2xl">{description}</h2>
                      <Content code={code} />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Pagination previous={previous} next={next} />
        <Footer />
      </div>
    </>
  );
};

export { getStaticPaths, getStaticProps };

export default Page;
