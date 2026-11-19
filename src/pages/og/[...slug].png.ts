import { getOgPages, type OgPage, renderOgImage } from "../../lib/og";
import type { APIRoute, GetStaticPaths } from "astro";

export const prerender = true;

type Props = { page: OgPage };

export const getStaticPaths = (async () => {
  return (await getOgPages()).map((page) => ({
    params: { slug: page.path || "index" },
    props: { page },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props }) => {
  const png = await renderOgImage(props.page);

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
