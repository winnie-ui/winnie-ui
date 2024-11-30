import { createLazyFileRoute } from "@tanstack/react-router";

import { useSuspenseQuery } from "@tanstack/react-query";
import { api } from "~/api";
import { PageContent, PageTitle } from "../ds/page/page";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  /**
   * Init create scoreboard mutation
   */
  const createScoreBoard = api.mutations.useCreateScoreboard();

  /**
   * Fetch all scoreboards
   */
  const scoreboards = api.queries.getScoreboardsOptions();

  console.log(scoreboards);

  return (
    <>
      <PageContent>
        <PageTitle>Tournaments</PageTitle>
        <ul>
          {Object.values(scoreboards ?? {}).map((scoreboard) => {
            return <li key={scoreboard.scoreboardId}>{scoreboard.name}</li>;
          })}
        </ul>
        <button
          className="bg-accent-9 p-4"
          onClick={() => createScoreBoard.mutate({ name: "Foo Bar" })}
        >
          Hello world
        </button>
      </PageContent>
    </>
  );
}
