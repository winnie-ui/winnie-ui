import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
// import fs from "node:fs";
//
// const jsoncString = fs.readFileSync(
//   new URL(`./src/code/light.jsonc`, import.meta.url),
//   "utf-8",
// );
// const light = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    expressiveCode({
      frames: {
        showCopyToClipboardButton: false,
      },
      themes: ["github-light"],
      themeCssSelector: (theme) => `[data-code-theme="${theme.name}"]`,
      useDarkModeMediaQuery: false
    }),
    mdx(),
    react(),
  ],
});
