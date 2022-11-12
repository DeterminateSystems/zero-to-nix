"use client";

import Footer from "components/Footer";
import MDX from "components/MDX";
import Navbar from "components/Navbar";
import { Concept, allConcepts } from "contentlayer/generated";
import Head from "next/head";
import Link from "next/link";

type Props = {
  concept: Concept;
};

const Related = ({ concept }: Props) => {
  const { title, path } = concept;

  return (
    <Link href={path} className="hover:text-blue-500">
      {title}
    </Link>
  );
};

const ConceptLayout = ({ concept }: Props) => {
  const {
    title,
    body: { code },
    related,
  } = concept;

  const relatedConcepts: Concept[] = related.map(
    (r) => allConcepts.find((c) => c.slug === r)!
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Navbar />
          <div className="px-6 pt-12">
            <div className="container mx-auto">
              <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl">{title}</h1>
                </div>

                <MDX code={code} />

                {related.length > 0 && (
                  <div>
                    <p>Related concepts</p>

                    <div className="flex flex-col space-y-2">
                      {relatedConcepts.map((c) => (
                        <Related key={c._id} concept={c} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConceptLayout;
