import type { MarkdownLayoutProps } from "astro";

export type NavLink = {
  title: string;
  href: string;
};

export type HoverableLinkProps = NavLink & {
  size?: "normal" | "sm";
};

type HasTitle = {
  title: string;
};

type HasDescription = {
  description: string;
};

type Ordered = {
  weight: number;
};

export type Breadcrumb = {
  back: {
    title: string;
    href: string;
  };
};

export type ConceptProps = MarkdownLayoutProps<
  HasTitle & {
    id: string;
    related: string[];
    readMore?: NavLink[];
  }
>;

export type StepProps = MarkdownLayoutProps<
  HasTitle &
    Ordered & {
      summary?: string[];
    }
>;

export type HeroProps = MarkdownLayoutProps<
  HasTitle &
    HasDescription & {
      breadcrumb?: Breadcrumb;
    }
>;
