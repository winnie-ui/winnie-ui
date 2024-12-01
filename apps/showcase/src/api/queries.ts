import { keys } from "./keys";

import type { Scoreboards, Uuid } from "./types";

import { queryClient } from "../singletons/query-client";

/**
 * Gets all scoreboards created by the current user
 *
 * @returns record of scorebards
 */
function getScoreboardsOptions() {
  return queryClient.getQueryData<Scoreboards>(keys.scoreboards.index());
}

/**
 * Gets a single scoreboard by scoreboardId created by the current user
 *
 * @returns single scoreboard that matches the provided scoreboard id or undefined
 */
function getScoreboardOptions(params: { scoreboardId: Uuid }) {
  return queryClient.getQueryData<Scoreboards>(keys.scoreboards.index())?.[
    params.scoreboardId
  ];
}

export const queries = {
  getScoreboardOptions,
  getScoreboardsOptions,
};
