"use client";

import Footer from "components/Footer";
import MDX from "components/MDX";
import Navbar from "components/Navbar";
import Pagination from "components/start/Pagination";
import { Step } from "contentlayer/generated";

type Props = {
  step: Step;
};

const StepLayout = ({ step }: Props) => {
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

export default StepLayout;
