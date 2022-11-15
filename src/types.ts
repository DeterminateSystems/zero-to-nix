import type { MarkdownLayoutProps } from "astro";

export type Link = {
  title: string;
  href: string;
};

export type Breadcrumb = {
  section: string;
  page: string;
};

export type ConceptProps = MarkdownLayoutProps<{
  id: string;
  title: string;
  related: string[];
  readMore?: Link[];
}>;

export type StepProps = MarkdownLayoutProps<{
  title: string;
  summary?: string[];
  weight: number;
}>;

export type HeroProps = MarkdownLayoutProps<{
  title: string;
  description: string;
  breadcrumb?: {
    back: {
      title: string;
      href: string;
    };
    page: string;
  };
}>;
