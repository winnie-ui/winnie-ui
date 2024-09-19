import type { Theme } from "~/utils/theme";
import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

function ScalePicker() {
  const scales = [
    "90%",
    "95%",
    "100%",
    "105%",
    "110%",
  ] satisfies Theme["scale"][];

  return (
    <ThemePickerRadioGroup
      items={scales.map((scale) => {
        return {
          value: scale,
          render: scale,
        };
      })}
      label="Scale"
      themeKey="scale"
      selector="data-scale"
    />
  );
}

export { ScalePicker };
