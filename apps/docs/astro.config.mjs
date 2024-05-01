import starlight from "@astrojs/starlight";
import { ExpressiveCodeTheme } from "@astrojs/starlight/expressive-code";
import { defineConfig } from "astro/config";
import fs from "node:fs";

const jsoncString = fs.readFileSync(
  new URL(`./vesper.jsonc`, import.meta.url),
  "utf-8",
);
const vesper = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Alku",
      customCss: [
        "./src/global.css",
        "@fontsource/manrope/400.css",
        "@fontsource/manrope/500.css",
        "@fontsource/manrope/700.css",
        "@fontsource/manrope/800.css",
        "@fontsource/geist-mono/500.css",
      ],
      expressiveCode: {
        themes: [vesper],
      },
      components: {
        Header: "./src/components/header.astro",
        PageTitle: "./src/components/page-title.astro",
      },
      pagination: false,
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Overview",
          autogenerate: { directory: "overview" },
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
      ],
    }),
  ],
});
