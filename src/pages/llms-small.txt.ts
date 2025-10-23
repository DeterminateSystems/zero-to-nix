import {
  getConceptPagesAlphabetical,
  getStartPagesByOrderParam,
} from "../content/collections";
import { site } from "../site";
import { FORMATS } from "./llms.txt";
import type { APIRoute } from "astro";
import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";

const { url: root, title, llms } = site;

const templateFile = fs.readFileSync(
  path.join(process.cwd(), "src/templates/llms-small.txt.hbs"),
  "utf-8",
);

const template = Handlebars.compile(templateFile);

export const GET: APIRoute = async () => {
  const startPages = await getStartPagesByOrderParam();
  const conceptPages = await getConceptPagesAlphabetical();

  const content = template({
    root,
    title,
    description: llms.description,
    startPages: startPages.map(({ data: { title } }) => ({
      title,
    })),
    conceptPages: conceptPages.map(({ data: { title } }) => ({
      title,
    })),
    otherFormats: [FORMATS.standard, FORMATS.full],
    projects: llms.otherProjects,
  });

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

export const prerender = true;
