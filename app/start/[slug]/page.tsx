"use client";

import { Step, allSteps } from "contentlayer/generated";
import QuickstartStepLayout from "layouts/StepLayout";

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

  return <QuickstartStepLayout step={step} />;
};

export default StepPage;
