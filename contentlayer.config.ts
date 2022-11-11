import {
  ComputedFields,
  LocalDocument,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    weight: {
      type: "number",
      required: true,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    relativePath: {
      type: "string",
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export const Concept = defineDocumentType(() => ({
  name: "Concept",
  filePathPattern: "concepts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    id: {
      type: "string",
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Concept, Doc],
});
