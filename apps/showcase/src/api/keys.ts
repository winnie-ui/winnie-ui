const KEY_CONSTANTS = {
  SCOREBOARDS: "scoreboards",
};

/**
 * Represents all of the available query keys in the application
 */
export const keys = {
  scoreboards: {
    index: () => [KEY_CONSTANTS.SCOREBOARDS],
    id: {
      index: (params: { scoreboardId: string }) => [
        KEY_CONSTANTS.SCOREBOARDS,
        params.scoreboardId,
      ],
    },
  },
};
