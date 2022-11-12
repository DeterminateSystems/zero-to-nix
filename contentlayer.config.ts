import {
  LocalDocument,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

export const Step = defineDocumentType(() => ({
  name: "Step",
  filePathPattern: "start/**/*.{md,mdx}",
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
    slug: {
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
    snippet: {
      type: "string",
      required: true,
    },
    related: {
      type: "list",
      of: { type: "string" },
      required: false,
      default: [],
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Concept, Step],
});
