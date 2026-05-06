import { marked } from "marked";
import { remark } from "remark";
import strip from "strip-markdown";

export const conceptPagePath = (slug: string): string => {
  return pagePath("concepts", slug);
};

export const md = async (md: string): Promise<string> => {
  return marked.parseInline(md);
};

export const startPagePath = (slug: string): string => {
  return pagePath("start", slug.substring(1));
};

export const plainText = async (md: string): Promise<string> => {
  const file = await remark().use(strip).process(md);
  return String(file).trim();
};

const pagePath = (collection: string, slug: string): string => {
  return `/${collection}/${slug}`;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
