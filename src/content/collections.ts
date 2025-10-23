import { getCollection } from "astro:content";

export const getStartPagesByOrderParam = async () => {
  return (await getCollection("start")).sort(
    ({ data: { order: orderA } }, { data: { order: orderB } }) =>
      orderA - orderB,
  );
};

export const getConceptPagesAlphabetical = () => {
  return getCollection("concepts");
};
