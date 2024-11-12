import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

import "./components/ds/index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query-client";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  Wrap: ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const Showcase = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
