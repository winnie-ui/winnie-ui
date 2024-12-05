import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const css = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx"],
    base: "./src/content/css",
  }),
});

export const collections = { css };
