import { useMutation } from "@tanstack/react-query";

import { queryClient } from "./query-client";

/**
 * Creates a new scoreboard
 *
 * @returns result of the newly created scoreboard
 */
function createScoreboard() {
  return useMutation({
    mutationFn: () => {},
  });
}

export const mutations = {};
