import type { MarkdownLayoutProps } from "astro";

export type Term = {
  title: string;
  description: string;
  href: string;
};

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
  order: number;
};

export type Breadcrumb = {
  back: {
    title: string;
    href: string;
  };
};

// Component props
export type BreadcrumbProps = Breadcrumb & HasTitle;

export type HeroProps = HasTitle & {
  description?: string;
  size?: "normal" | "lg";
  breadcrumb?: Breadcrumb;
};

export type ReadMoreProps = {
  links: NavLink[];
};

export type RelatedProps = {
  relatedConceptIds: string[];
};

// Page layout props
export type StandardProps = MarkdownLayoutProps<
  HasTitle & {
    description?: string;
  }
>;

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
