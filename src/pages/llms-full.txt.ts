import { conceptPagePath, startPagePath } from "../lib/utils";
import { site } from "../site";
import { FORMATS } from "./llms.txt";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";

const { url: root, title, description: tagline, llms } = site;

const templateFile = fs.readFileSync(
  path.join(process.cwd(), "src/templates/llms-full.txt.hbs"),
  "utf-8",
);

const template = Handlebars.compile(templateFile);

export const GET: APIRoute = async () => {
  const startPages = await getCollection("start");
  const conceptPages = await getCollection("concepts");

  const content = template({
    root,
    title,
    system:
      "This is the complete documentation for Zero to Nix, including the learning journey (start) and concept pages.",
    instructions:
      "Learning journey (start) and concept page items begin and end with a --- and all page titles are in bold.",
    tagline,
    description: llms.description,
    startPages: startPages.map(({ data: { title }, slug, body }) => ({
      title,
      href: `${root}/${startPagePath(slug)}`,
      content: body,
    })),
    conceptPages: conceptPages.map(({ data: { title }, slug, body }) => ({
      title,
      href: `${root}/${conceptPagePath(slug)}`,
      content: body,
    })),
    otherFormats: [FORMATS.small, FORMATS.standard],
    projects: llms.otherProjects,
  });

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

export const prerender = true;
