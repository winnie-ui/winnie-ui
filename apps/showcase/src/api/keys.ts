const KEY_CONSTANTS = {
  SCOREBOARDS: "scoreboard",
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
