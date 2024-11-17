import { createLazyFileRoute } from "@tanstack/react-router";

import { PageContent, PageTitle } from "../ds/page/page";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <PageContent>
        <PageTitle>Tournaments</PageTitle>
        <button className="bg-accent-9 p-4">Hello world</button>
      </PageContent>
    </>
  );
}
