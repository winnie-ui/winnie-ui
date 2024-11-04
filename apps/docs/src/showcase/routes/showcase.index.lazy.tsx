import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/showcase/")({
  component: Index,
});

function Index() {
  return <div className="p-2">Home</div>;
}
