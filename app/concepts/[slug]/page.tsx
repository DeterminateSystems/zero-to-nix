"use client";

import MDX from "components/MDX";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Concept, allConcepts } from "contentlayer/generated";
import Link from "next/link";

type Parameters = {
  params: Params;
};

type Params = {
  slug: string;
};

export const generateStaticParams = async (): Promise<Params[]> => {
  return allConcepts.map((c) => ({ slug: c.slug }));
};

const Page = ({ params: { slug } }: Parameters) => {
  const concept: Concept | undefined = allConcepts.find(
    (c) => c.slug === slug
  )!;

  const {
    title,
    snippet,
    body: { code },
    related,
  } = concept;

  const relatedConcepts: Concept[] = related.map(
    (r) => allConcepts.find((c) => c.slug === r)!
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <div className="px-6 pt-12">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl">{title}</h1>
                <div className="flex space-x-4 border-2 border-slate-200 py-3 px-5 rounded-lg">
                  <span className="font-bold">TL;DR</span>
                  <p>{snippet}</p>
                </div>
              </div>

              <MDX code={code} />

              {related.length > 0 && (
                <div className="space-y-4">
                  <p className="text-xl font-semibold">Related concepts</p>

                  <ul className="space-y-1.5">
                    {relatedConcepts.map((c) => (
                      <li key={c._id}>
                        <Link href={c.path} className="hover:text-blue-500">
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
