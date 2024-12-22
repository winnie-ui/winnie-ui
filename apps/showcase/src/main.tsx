import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ZeroProvider } from "@rocicorp/zero/react";

import { routeTree } from "./routeTree.gen";
import { zero } from "./singletons/zero";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./main.css";

// Create a new router instance
const router = createRouter({
  routeTree,
  Wrap: ({ children }) => {
    return <ZeroProvider zero={zero}>{children}</ZeroProvider>;
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
