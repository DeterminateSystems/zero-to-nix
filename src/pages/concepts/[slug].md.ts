import type { APIRoute, GetStaticPaths } from "astro";
import { type CollectionEntry, getCollection } from "astro:content";

export const prerender = true;

type Props = { entry: CollectionEntry<"concepts"> };

const stripExt = (id: string) => id.replace(/\.(md|mdx)$/i, "");

export const getStaticPaths = (async () => {
  const entries = await getCollection("concepts");
  return entries.map((entry) => ({
    params: { slug: stripExt(entry.id) },
    props: { entry },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props, params }) => {
  let entry: CollectionEntry<"concepts"> | undefined = props?.entry;
  if (!entry && typeof params.slug === "string") {
    const all = await getCollection("concepts");
    entry = all.find((e) => stripExt(e.id) === params.slug);
  }
  if (!entry) {
    return new Response("Not Found", { status: 404 });
  }

  const { title } = entry.data;
  const header = [title && `# ${title}`].filter(Boolean).join("\n");

  const body = header ? `${header}\n\n${entry.body}` : entry.body;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
