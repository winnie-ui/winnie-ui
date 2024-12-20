import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const css = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx"],
    base: "./src/content/css",
  }),
});

const react = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx"],
    base: "./src/content/react",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    documentation: z.string().optional(),
  }),
});

export const collections = { css, react };
