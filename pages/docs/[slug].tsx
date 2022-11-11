import Page from "components/docs/Page";
import { Doc, allDocs } from "contentlayer/generated";
import { SlugParam, allDocumentPaths } from "lib/content";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  doc: NonNullable<ReturnType<typeof getDoc>>;
};

const getDoc = (slug: string): Doc | undefined =>
  allDocs.find((d) => d.relativePath === slug);

const getStaticProps: GetStaticProps<Props, SlugParam> = async ({ params }) => {
  const { slug } = params!;
  const doc: Doc | undefined = getDoc(slug);
  return doc ? { props: { doc } } : { notFound: true };
};

const getStaticPaths: GetStaticPaths<SlugParam> = async () => {
  const paths: string[] = allDocumentPaths(allDocs);

  return {
    paths,
    fallback: false,
  };
};

const DocPage: NextPage<Props> = ({ doc }: Props) => <Page doc={doc} />;

export { getStaticPaths, getStaticProps };

export default DocPage;
