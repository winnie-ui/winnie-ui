import { defineCollection } from "astro:content";
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
});

export const collections = { css, react };
