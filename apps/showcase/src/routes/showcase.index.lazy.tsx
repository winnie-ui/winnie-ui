import { createLazyFileRoute } from "@tanstack/react-router";

import { PageContent, PageTitle } from "../components/ds/page/page";

export const Route = createLazyFileRoute("/showcase/")({
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
