import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

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
        themes: ["min-dark", "min-light"],
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
          items: [
            {
              label: "Getting Started",
              link: "/overview/getting-started",
            },
            {
              label: "Changelog",
              link: "/overview/changelog",
            },
          ],
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
      ],
    }),
  ],
});
