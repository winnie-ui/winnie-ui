import { Link } from "@winnie-ui/react/link";

/* -------------------------------------------------------------------------------------------------
 * LinkDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkDemo() {
  return (
    <Link href="#" color="grey">
      View Dish
    </Link>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkSizeDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-4)",
      }}
    >
      <Link size="1" color="grey">
        View Dish
      </Link>
      <Link size="2" color="grey">
        View Dish
      </Link>
      <Link size="3" color="grey">
        View Dish
      </Link>
      <Link size="4" color="grey">
        View Dish
      </Link>
      <Link size="5" color="grey">
        View Dish
      </Link>
      <Link size="6" color="grey">
        View Dish
      </Link>
      <Link size="7" color="grey">
        View Dish
      </Link>
      <Link size="8" color="grey">
        View Dish
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkWeightDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkWeightDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-4)",
      }}
    >
      <Link weight="normal" color="grey">
        View Dish
      </Link>
      <Link weight="medium" color="grey">
        View Dish
      </Link>
      <Link weight="semibold" color="grey">
        View Dish
      </Link>
      <Link weight="bold" color="grey">
        View Dish
      </Link>
      <Link weight="extra-bold" color="grey">
        View Dish
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkColorDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-3)",
      }}
    >
      <Link color="red" contrast="normal">
        View Dish
      </Link>
      <Link color="orange" contrast="normal">
        View Dish
      </Link>
      <Link color="yellow" contrast="normal">
        View Dish
      </Link>
      <Link color="green" contrast="normal">
        View Dish
      </Link>
      <Link color="blue" contrast="normal">
        View Dish
      </Link>
      <Link color="purple" contrast="normal">
        View Dish
      </Link>
      <Link color="pink" contrast="normal">
        View Dish
      </Link>
      <Link color="grey" contrast="normal">
        View Dish
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkContrastDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkContrastDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        gap: "var(--wui-space-3)",
      }}
    >
      <Link color="grey">View Dish</Link>
      <Link contrast="normal" color="grey">
        View Dish
      </Link>
      <Link contrast="low" color="grey">
        View Dish
      </Link>
    </div>
  );
}
