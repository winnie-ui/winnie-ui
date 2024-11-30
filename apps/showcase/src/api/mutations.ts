import { useMutation } from "@tanstack/react-query";

/**
 * Creates a new scoreboard
 *
 * @returns result of the newly created scoreboard
 */
function createScoreboard() {
  return useMutation({
    mutationFn: async () => {
      return null;
    },
  });
}

export const mutations = {
  createScoreboard,
};
