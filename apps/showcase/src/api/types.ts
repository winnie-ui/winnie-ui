type Uuid = ReturnType<typeof crypto.randomUUID>;

type Scoreboard = {
  scoreboardId: Uuid;
  name: string;
};

export type { Scoreboard };
