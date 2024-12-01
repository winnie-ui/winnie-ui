type Uuid = ReturnType<typeof crypto.randomUUID>;

type Scoreboard = {
  scoreboardId: Uuid;
  name: string;
};

type InsertScoreboard = {
  name: string;
};

type Scoreboards = Record<Uuid, Scoreboard>;

export type { InsertScoreboard, Scoreboard, Scoreboards, Uuid };
