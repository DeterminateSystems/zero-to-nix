import { defineCollection, z } from "astro:content";

const briefs = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
  })
});

const concepts = defineCollection({
  type: "content",
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
          href: z.string().url(),
          source: z
            .object({
              title: z.string(),
              href: z.string().url(),
            })
            .optional(),
        }),
      )
      .optional(),
  }),
});

// Top-level pages like /about
const plain = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const start = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.array(z.string()).optional(),
  }),
});

export const collections = { briefs, concepts, plain, start };
