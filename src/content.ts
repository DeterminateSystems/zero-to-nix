import { Document, useDocuments } from "iles";

export type QuickStartPage = {
  title: string;
  order: number;
};

export type ConceptPage = {
  title: string;
  id: string;
  readMore?: string[];
  related?: string[];
};

// Quick start
const quickStartPages: Document<QuickStartPage>[] =
  useDocuments<QuickStartPage>("~/pages/start").value;

export const sortedQuickStartPages: Document<QuickStartPage>[] =
  quickStartPages.sort(
    (p1: QuickStartPage, p2: QuickStartPage) => p1.order - p2.order
  );

// Concepts
export const conceptPages: Document<ConceptPage>[] =
  useDocuments<ConceptPage>("~/pages/concepts").value;

// Pagination
export const getPrevious = (order: number): QuickStartPage | undefined =>
  quickStartPages.find((p: QuickStartPage) => p.order === order - 1);

export const getNext = (order: number): QuickStartPage | undefined =>
  quickStartPages.find((p: QuickStartPage) => p.order === order + 1);

// Related concepts
export const relatedConceptPages = (ids: string[]): Document<ConceptPage>[] =>
  ids.map(
    (id: string) => conceptPages.find((page: ConceptPage) => page.id === id)!
  );
