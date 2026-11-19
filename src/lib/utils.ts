import { marked } from "marked";

export const conceptPagePath = (id: string): string => {
  return pagePath("concepts", id);
};

// Plain text from inline Markdown: drops links, code, and emphasis
export const plainText = (markdown: string): string =>
  markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const md = async (md: string): Promise<string> => {
  return marked.parseInline(md);
};

export const startPagePath = (id: string): string => {
  return pagePath("start", id.substring(1));
};

const pagePath = (collection: string, id: string): string => {
  return `/${collection}/${id}`;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
