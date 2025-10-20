import { conceptPagePath, startPagePath } from "../lib/utils";
import { site } from "../site";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";

const { url: root, title, description: tagline, llms } = site;

const templateFile = fs.readFileSync(
  path.join(process.cwd(), "src/templates/llms.txt.hbs"),
  "utf-8",
);

const template = Handlebars.compile(templateFile);

export const GET: APIRoute = async () => {
  const startPages = await getCollection("start");
  const conceptPages = await getCollection("concepts");

  const content = template({
    root,
    title,
    tagline,
    description: llms.description,
    startPages: startPages.map(({ data: { title }, slug }) => ({
      title,
      href: `${root}/${startPagePath(slug)}`,
    })),
    conceptPages: conceptPages.map(({ data: { title }, slug }) => ({
      title,
      href: `${root}/${conceptPagePath(slug)}`,
    })),
    otherFormats: [
      {
        root,
        file: "llms-small.txt",
        description: "compact structure-only version",
      },
      {
        root,
        file: "llms-full.txt",
        description: "complete content in one file",
      },
    ],
  });

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

export const prerender = true;
