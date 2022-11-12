"use client";

import MDX from "components/MDX";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Step, allSteps } from "contentlayer/generated";
import Pagination from "components/start/Pagination";

type Parameters = {
  params: Params;
};

type Params = {
  slug: string;
};

export const generateStaticParams = async (): Promise<Params[]> => {
  return allSteps.map((s) => ({ slug: s.slug }));
};

const StepPage = ({ params: { slug } }: Parameters) => {
  const step: Step | undefined = allSteps.find((s) => s.slug === slug)!;

  const {
    title,
    description,
    weight,
    body: { code },
  } = step;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <div className="px-6 pt-12">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl">{title}</h1>
                <h2 className="text-xl">{description}</h2>
              </div>

              <MDX code={code} />
            </div>
          </div>
        </div>
      </main>

      <Pagination weight={weight} />
      <Footer />
    </div>
  );
};

export default StepPage;
