import type { Color } from "./types";

import "./color-chip.css";

type ColorChipProps = {
  color: Color;
  level:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "contrast";
};

export function ColorChip({ color, level }: ColorChipProps) {
  return (
    <li className="color-chip">
      <button
        className="color-chip-button"
        aria-label={`${color}: level ${level}`}
        style={{
          // @ts-ignore
          "--wui-paint-chip-background": `var(--wui-color-accent-${level})`,
        }}
      >
        <div className="color-chip-demo">
          <div className="color-chip-color" />
        </div>
      </button>
    </li>
  );
}
