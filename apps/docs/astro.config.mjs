import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import expressiveCode from "astro-expressive-code";
import aws from "astro-sst";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://winnie-ui.com",
  output: "server",
  adapter: aws(),
  redirects: {
    "": "/css",
    "/": "/css",
    "/css/docs": "/css/docs/start/quick-start",
  },
  integrations: [expressiveCode(), mdx(), react()],
  vite: {
    plugins: [
      TanStackRouterVite({
        routesDirectory: "./src/showcase/routes",
        generatedRouteTree: "./src/showcase/routeTree.gen.ts",
        quoteStyle: "double",
      }),
    ],
  },
});
