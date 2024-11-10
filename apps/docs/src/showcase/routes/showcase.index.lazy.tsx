import { createLazyFileRoute } from "@tanstack/react-router";

import { Heading } from "../components/ds/typography/heading";
import { Text } from "../components/ds/typography/text";

export const Route = createLazyFileRoute("/showcase/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <div
        style={{
          padding: "20px",
        }}
      >
        <Heading>Hello World</Heading>
        <Text contrast="normal">
          The evening sky blazed in shades of crimson and gold as the sun dipped
          below the horizon, casting long shadows across the quiet town. A soft
          breeze whispered through the trees, carrying the faint scent of
          blooming jasmine and freshly cut grass. In the distance, the sound of
          children’s laughter echoed, mingling with the rhythmic chirping of
          crickets. On the porch of an old wooden house, a cat stretched lazily,
          its amber eyes half-closed in contentment. Life moved slowly here,
          each moment unfolding like the pages of an old, cherished book.
        </Text>
      </div>
    </div>
  );
}
