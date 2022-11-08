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
  filePathPattern: "docs/**/*.mdx",
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
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
});
