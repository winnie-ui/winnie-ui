import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

import "./__root.css";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="showcase-app-layout" data-component="layout">
        <nav className="showcase-app-layout__sidebar" data-slot="sidebar">
          <Link to="/showcase">Home</Link>
          <Link to="/showcase/about">About</Link>
        </nav>
        <main className="showcase-app-layout__content" data-slot="content">
          <div className="showcase-app-layout__page" data-component="page">
            <Outlet />
          </div>
        </main>
      </div>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
