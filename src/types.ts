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

// Component props
export type BreadcrumbProps = Breadcrumb & HasTitle;

export type HeroProps = HasTitle &
  HasDescription & {
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
