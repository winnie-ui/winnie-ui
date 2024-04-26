import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Alku",
      customCss: [
        "./src/global.css",
        "@fontsource/playfair-display/500.css",
        "@fontsource/playfair-display/700.css",
        "@fontsource/playfair-display/900.css",
        "@fontsource/inter/400.css",
        "@fontsource/inter/500.css",
        "@fontsource/inter/700.css",
        "@fontsource/inter/900.css",
        "@fontsource/ibm-plex-mono/500.css",
      ],
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
          label: "What is Alku",
          link: "/what-is-alku",
        },
        {
          label: "Overview",
          autogenerate: { directory: "overview" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
