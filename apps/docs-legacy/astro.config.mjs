import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Winnie",
      customCss: [
        "./src/global.css",
        "@fontsource/geist-sans/400.css",
        "@fontsource/geist-sans/500.css",
        "@fontsource/geist-sans/700.css",
        "@fontsource/geist-sans/900.css",
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
        github: "https://github.com/adamaho/winnie-ui",
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
              label: "Tailwind",
              link: "/overview/tailwind",
            },
            {
              label: "Changelog",
              link: "/overview/changelog",
            },
          ],
        },
        {
          label: "Concepts",
          items: [
            {
              label: "Layers",
              link: "/concepts/layers",
            },
            {
              label: "Colors",
              link: "/concepts/colors",
            },
            {
              label: "Scaling",
              link: "/concepts/scaling",
            },
            {
              label: "Radius",
              link: "/concepts/radius",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Animation Duration",
              link: "/reference/animation-duration",
            },
            {
              label: "Animation Timing Function",
              link: "/reference/animation-timing-function",
            },
            {
              label: "Border Radius",
              link: "/reference/border-radius",
            },
            {
              label: "Border Width",
              link: "/reference/border-width",
            },
            {
              label: "Color",
              link: "/reference/color",
            },
            {
              label: "Font Family",
              link: "/reference/font-family",
            },
            {
              label: "Font Size",
              link: "/reference/font-size",
            },
            {
              label: "Font Weight",
              link: "/reference/font-weight",
            },
            {
              label: "Keyframes",
              link: "/reference/keyframes",
            },
            {
              label: "Letter Spacing",
              link: "/reference/letter-spacing",
            },
            {
              label: "Line Height",
              link: "/reference/line-height",
            },
            {
              label: "Shadow",
              link: "/reference/shadow",
            },
            {
              label: "Space",
              link: "/reference/space",
            },
          ],
        },
      ],
    }),
  ],
});
