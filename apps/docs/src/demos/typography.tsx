import { Heading } from "@winnie-ui/react/heading";
import { Link } from "@winnie-ui/react/link";
import { Text } from "@winnie-ui/react/text";

export function TypographyDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--wui-space-2)",
      }}
    >
      <Heading>Margherita Pizza</Heading>
      <Text contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Link size="2" contrast="normal">
        View Pizza
      </Link>
    </div>
  );
}
