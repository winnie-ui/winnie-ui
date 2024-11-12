import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { queryClient } from "./api/query-client";
import { routeTree } from "./routeTree.gen";

import "./main.css";
import "./components/ds/index.css";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
