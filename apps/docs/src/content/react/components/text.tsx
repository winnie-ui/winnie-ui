import { Text } from "@winnie-ui/react/text";

/* -------------------------------------------------------------------------------------------------
 * TextDemo
 * -----------------------------------------------------------------------------------------------*/
export function TextDemo() {
  return <Text size="3">Thin crust pizza topped with melting mozzarella.</Text>;
}

/* -------------------------------------------------------------------------------------------------
 * TextSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function TextSizeDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-4)",
      }}
    >
      <Text size="1">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="2">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="3">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="4">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="5">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="6">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="7">Thin crust pizza topped with melting mozzarella.</Text>
      <Text size="8">Thin crust pizza topped with melting mozzarella.</Text>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * TextWeightDemo
 * -----------------------------------------------------------------------------------------------*/
export function TextWeightDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-4)",
      }}
    >
      <Text weight="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text weight="medium">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text weight="semi-bold">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text weight="bold">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text weight="extra-bold">
        Thin crust pizza topped with melting mozzarella.
      </Text>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * TextColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function TextColorDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-3)",
      }}
    >
      <Text color="red" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="orange" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="yellow" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="green" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="blue" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="purple" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="pink" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text color="grey" contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * TextContrastDemo
 * -----------------------------------------------------------------------------------------------*/
export function TextContrastDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-3)",
      }}
    >
      <Text>Thin crust pizza topped with melting mozzarella.</Text>
      <Text contrast="normal">
        Thin crust pizza topped with melting mozzarella.
      </Text>
      <Text contrast="low">
        Thin crust pizza topped with melting mozzarella.
      </Text>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * TextAlignDemo
 * -----------------------------------------------------------------------------------------------*/
export function TextAlignDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "var(--wui-space-3)",
      }}
    >
      <Text align="left">Left Aligned</Text>
      <Text align="center">Center Aligned</Text>
      <Text align="right">Right Aligned</Text>
    </div>
  );
}
