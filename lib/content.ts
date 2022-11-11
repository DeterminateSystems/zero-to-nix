import { ParsedUrlQuery } from "querystring";

type WithPath = { path: string };

export const allDocumentPaths = <T extends WithPath>(docs: T[]): string[] =>
  docs.map((d) => d.path);

export interface SlugParam extends ParsedUrlQuery {
  slug: string;
}
