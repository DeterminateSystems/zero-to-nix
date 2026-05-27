import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const briefs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/briefs" }),
  schema: z.object({
    id: z.string(),
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/concepts" }),
  schema: z.object({
    title: z.string(),
    snippet: z.string(),
    wip: z.boolean().default(false),
    // TODO: make this tighter
    related: z.array(z.string()),
    externalSources: z
      .array(
        z.object({
          title: z.string(),
          href: z.url(),
          source: z
            .object({
              title: z.string(),
              href: z.url(),
            })
            .optional(),
        }),
      )
      .optional(),
  }),
});

// Top-level pages like /about
const plain = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/plain" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const start = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/start" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.array(z.string()).optional(),
  }),
});

export const collections = { briefs, concepts, plain, start };
