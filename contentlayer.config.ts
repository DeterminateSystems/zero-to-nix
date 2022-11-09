import {
  ComputedFields,
  LocalDocument,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  // Convert docs/foo/bar into /docs/foo/bar
  path: {
    type: "string",
    resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
  },
  // Convert /docs/foo/bar into /foo/bar
  relativePath: {
    type: "string",
    resolve: (doc: LocalDocument) =>
      doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

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
  computedFields,
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
    id: {
      type: "string",
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export const Topic = defineDocumentType(() => ({
  name: "Topic",
  filePathPattern: "topics/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Concept, Doc, Topic],
});
