import type { Theme } from "~/utils/theme";
import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

import "./radius-picker.css";

function RadiusPicker() {
  const radii = [
    { value: "none", label: "None" },
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "round", label: "Round" },
  ] satisfies { value: Theme["radius"]; label: string }[];

  return (
    <ThemePickerRadioGroup
      items={radii.map((radius) => {
        return {
          value: radius.value,
          render: (
            <div className="winnie-ui radius-picker" data-radius={radius.value}>
              <span className="preview" />
              {radius.label}
            </div>
          ),
        };
      })}
      themeKey="radius"
      label="Radius"
      selector="data-radius"
    />
  );
}

export { RadiusPicker };
