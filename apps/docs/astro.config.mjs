import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import { addClassName } from "astro-expressive-code/hast";
import aws from "astro-sst";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "server",
  adapter: aws(),
  redirects: {
    "/": "/css/docs/start/quick-start"
  },
  integrations: [
    expressiveCode({
      frames: {
        showCopyToClipboardButton: false,
      },
      plugins: [
        {
          // Adds not-content className to rendered expressiveCode block
          name: "Not Content",
          hooks: {
            postprocessRenderedBlock: ({ renderData }) => {
              addClassName(renderData.blockAst, "not-content");
            },
          },
        },
      ],
      themes: ["github-light"],
      themeCssSelector: (theme) => `[data-code-theme="${theme.name}"]`,
      useDarkModeMediaQuery: false,
    }),
    mdx(),
    react(),
  ],
});
