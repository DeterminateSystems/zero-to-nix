import type { MarkdownLayoutProps } from "astro";

export type ConceptProps = MarkdownLayoutProps<{
  id: string;
  title: string;
  related: string[];
}>;

export type StepProps = MarkdownLayoutProps<{
  title: string;
  weight: number;
}>;

export type HeroProps = MarkdownLayoutProps<{
  title: string;
  description: string;
}>;
