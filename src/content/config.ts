import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    imgPath: z.string(),
    tech: z.array(z.string()),
    description: z.string(),
    demoLink: z.string().url(),
    nota: z.string(),
  }),
});

export const collections = { proyectos };
