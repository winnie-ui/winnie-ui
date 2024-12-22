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
      </PageContent>
    </>
  );
}
