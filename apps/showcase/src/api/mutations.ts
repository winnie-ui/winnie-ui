import { useMutation } from "@tanstack/react-query";
import { queryClient } from "~/singletons/query-client";
import { keys } from "./keys";
import { InsertScoreboard, Scoreboards } from "./types";

/**
 * Creates a new scoreboard
 *
 * @returns result of the newly created scoreboard
 */
function useCreateScoreboard() {
  return useMutation({
    mutationFn: async (scoreboard: InsertScoreboard) => {
      const newScoreboard = {
        ...scoreboard,
        scoreboardId: crypto.randomUUID(),
      };
      await queryClient.setQueryData<Scoreboards>(
        keys.scoreboards.index(),
        (scoreboards) => {
          return {
            ...scoreboards,
            [newScoreboard.scoreboardId]: newScoreboard,
          };
        },
      );
      return newScoreboard;
    },
  });
}

export const mutations = {
  useCreateScoreboard,
};
