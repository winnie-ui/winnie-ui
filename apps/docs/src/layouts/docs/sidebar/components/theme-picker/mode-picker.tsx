import { ThemePickerRadioGroup } from "./theme-picker-radio-group";
import type { Theme } from "~/utils/theme";

function ModePicker() {
  const modes = ["light", "dark"] satisfies Theme["mode"][];
  return (
    <ThemePickerRadioGroup
      items={modes.map((mode) => {
        return {
          value: mode,
          render: mode,
        };
      })}
      themeKey="mode"
      label="Mode"
      selector="data-theme"
    />
  );
}

export { ModePicker };
