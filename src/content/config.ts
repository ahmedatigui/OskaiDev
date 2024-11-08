import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.enum(["Ahmed Atigui", "Oskai"]),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    theme: z
      .object({
        background: z.string(),
        shadow: z.string(),
      })
      .optional(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
