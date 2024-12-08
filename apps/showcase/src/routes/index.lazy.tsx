import { createLazyFileRoute } from "@tanstack/react-router";

import { api } from "~/api";
import { PageContent, PageTitle } from "../ds/page/page";

import { Button, ButtonLabel, ButtonPending } from "@winnie-ui/react/button";

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
          className="bg-accent-9 p-4 text-accent-contrast rounded-3"
          onClick={() => createScoreBoard.mutate({ name: "Foo Bar" })}
        >
          Hello world
        </button>
        <Button>
          <ButtonLabel>
            adfasdfasdfqweqweqweqweqweqwerqwerqwerqwerqwerqwerqwer
          </ButtonLabel>
          <ButtonPending>pending</ButtonPending>
        </Button>
      </PageContent>
    </>
  );
}
