import { Heading } from "@winnie-ui/react/heading";

/* -------------------------------------------------------------------------------------------------
 * HeadingDemo
 * -----------------------------------------------------------------------------------------------*/
export function HeadingDemo() {
  return <Heading>Margherita Pizza</Heading>;
}

/* -------------------------------------------------------------------------------------------------
 * HeadingSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function HeadingSizeDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-4)",
      }}
    >
      <Heading size="1">Margherita Pizza</Heading>
      <Heading size="2">Margherita Pizza</Heading>
      <Heading size="3">Margherita Pizza</Heading>
      <Heading size="4">Margherita Pizza</Heading>
      <Heading size="5">Margherita Pizza</Heading>
      <Heading size="6">Margherita Pizza</Heading>
      <Heading size="7">Margherita Pizza</Heading>
      <Heading size="8">Margherita Pizza</Heading>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * HeadingWeightDemo
 * -----------------------------------------------------------------------------------------------*/
export function HeadingWeightDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-4)",
      }}
    >
      <Heading weight="normal">Margherita Pizza</Heading>
      <Heading weight="medium">Margherita Pizza</Heading>
      <Heading weight="semibold">Margherita Pizza</Heading>
      <Heading weight="bold">Margherita Pizza</Heading>
      <Heading weight="extra-bold">Margherita Pizza</Heading>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * HeadingColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function HeadingColorDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-3)",
      }}
    >
      <Heading color="red" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="orange" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="yellow" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="green" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="blue" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="purple" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="pink" contrast="normal">
        Margherita Pizza
      </Heading>
      <Heading color="grey" contrast="normal">
        Margherita Pizza
      </Heading>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * HeadingContrastDemo
 * -----------------------------------------------------------------------------------------------*/
export function HeadingContrastDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-3)",
      }}
    >
      <Heading>Margherita Pizza</Heading>
      <Heading contrast="normal">Margherita Pizza</Heading>
      <Heading contrast="low">Margherita Pizza</Heading>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * HeadingAlignDemo
 * -----------------------------------------------------------------------------------------------*/
export function HeadingAlignDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "var(--wui-space-3)",
      }}
    >
      <Heading align="left">Margherita Pizza</Heading>
      <Heading align="center">Margherita Pizza</Heading>
      <Heading align="right">Margherita Pizza</Heading>
    </div>
  );
}
