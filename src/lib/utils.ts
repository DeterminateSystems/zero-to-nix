import { marked } from "marked";

export const conceptPagePath = (slug: string): string => {
  return pagePath("concepts", slug);
};

export const md = async (md: string): Promise<string> => {
  return marked.parseInline(md);
};

export const startPagePath = (slug: string): string => {
  return pagePath("start", slug.substring(1));
};

const pagePath = (collection: string, slug: string): string => {
  return `/${collection}/${slug}`;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
