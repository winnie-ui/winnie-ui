import { queryOptions } from "@tanstack/react-query";
import { keys } from "./keys";

import type { Scoreboard } from "./types";

import { queryClient } from "./query-client";

/**
 * Gets all scoreboards created by the current user
 *
 * @returns
 */
function getScoreboardsOptions() {
  return queryOptions({
    queryKey: keys.scoreboards.index(),
    queryFn: () => {
      return queryClient.getQueryData<Scoreboard[]>(keys.scoreboards.index());
    },
  });
}

/**
 * Gets a single scoreboard by scoreboardId created by the current user
 *
 * @returns a single scoreboard
 */
function getScoreboardOptions(params: { scoreboardId: string }) {
  return queryOptions({
    queryKey: keys.scoreboards.id.index(params),
    queryFn: () => {
      return queryClient.getQueryData<Scoreboard>(
        keys.scoreboards.id.index(params),
      );
    },
  });
}

export const queries = {
  getScoreboardOptions,
  getScoreboardsOptions,
};
