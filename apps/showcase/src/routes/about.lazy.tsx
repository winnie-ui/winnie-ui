import { createLazyFileRoute } from "@tanstack/react-router";

import { useQuery, useZero } from "@rocicorp/zero/react";

import { type Schema } from "~/singletons/zero";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const z = useZero<Schema>();
  const [users] = useQuery(z.query.user);

  function addUser() {
    z.mutate.user.insert({ id: crypto.randomUUID(), name: "Adam Aho" });
  }

  return (
    <div className="p-2">
      <button onClick={addUser}>Add User</button>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}
