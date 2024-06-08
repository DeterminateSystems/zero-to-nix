import { defineCollection, z } from "astro:content";

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

const start = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.array(z.string()).optional(),
  }),
});

export const collections = { concepts, start };
