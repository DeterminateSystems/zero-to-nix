import { ParsedUrlQuery } from "querystring";

type WithPath = { path: string };
type WithSlug = { slug: string };
type WithWeight = { weight: number };

export const allDocumentPaths = <T extends WithPath>(docs: T[]): string[] =>
  docs.map((d) => d.path);

export const getDocumentBySlug = <T extends WithSlug>(
  docs: T[],
  slug: string
) => docs.find((d) => d.slug === slug);

export const sortByWeight = <T extends WithWeight>(docs: T[]): T[] =>
  docs.sort((d1, d2) => d1.weight - d2.weight);

export interface SlugParam extends ParsedUrlQuery {
  slug: string;
}
