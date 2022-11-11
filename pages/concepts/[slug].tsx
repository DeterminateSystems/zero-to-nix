import { Concept, allConcepts } from "contentlayer/generated";
import ConceptLayout from "layouts/ConceptLayout";
import { SlugParam, allDocumentPaths } from "lib/content";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  concept: NonNullable<ReturnType<typeof getConcept>>;
};

const getConcept = (slug: string): Concept | undefined =>
  allConcepts.find((d) => d.id === slug);

const getStaticProps: GetStaticProps<Props, SlugParam> = async ({ params }) => {
  const { slug } = params!;
  const concept: Concept | undefined = getConcept(slug);
  return concept ? { props: { concept } } : { notFound: true };
};

const getStaticPaths: GetStaticPaths<SlugParam> = async () => {
  const paths: string[] = allDocumentPaths(allConcepts);

  return {
    paths,
    fallback: false,
  };
};

const ConceptPage: NextPage<Props> = ({ concept }: Props) => (
  <ConceptLayout concept={concept} />
);

export { getStaticPaths, getStaticProps };

export default ConceptPage;
