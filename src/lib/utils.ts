import { marked } from "marked";

export const conceptPagePath = (id: string): string => {
  return pagePath("concepts", id);
};

// Emphasis delimiters around text: *a*, **a**, _a_, __a__. Underscores inside
// a word (snake_case) aren't emphasis
const emphasis =
  /(?<!\w)(_{1,2})(?=\S)(.+?)(?<=\S)\1(?!\w)|(\*{1,2})(?=\S)(.+?)(?<=\S)\3/g;

// Plain text from inline Markdown: drops link targets, code-span backticks, and
// emphasis delimiters. The contents of a code span are kept as they are, so
// `x86_64-linux` stays x86_64-linux
export const plainText = (markdown: string): string =>
  markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    // Splitting on a capture group puts the code spans at the odd indices
    .split(/(`[^`]*`)/)
    .map((part, i) =>
      i % 2 === 1 ? part.slice(1, -1) : part.replace(emphasis, "$2$4"),
    )
    .join("")
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
