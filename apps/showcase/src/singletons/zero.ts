import { type Row, Zero, createSchema } from "@rocicorp/zero";

import { createTableSchema } from "@rocicorp/zero";

const userSchema = createTableSchema({
  tableName: "user",
  columns: {
    id: "string",
    name: "string",
  },
  primaryKey: "id",
});

const schema = createSchema({
  version: 1,
  tables: {
    user: userSchema,
  },
});

export type Schema = typeof schema;
export type User = Row<typeof schema.tables.user>;

export const zero = new Zero({
  userID: "winnie",
  schema,
  // This is often easier to develop with if you're frequently changing
  // the schema. Switch to 'idb' for local-persistence.
  kvStore: "mem",
});
