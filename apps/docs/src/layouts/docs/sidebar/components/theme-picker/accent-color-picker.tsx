import { useState } from "react";

import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

import "./accent-picker.css";

function AccentColorPicker() {
  const [defaultValue] = useState(() => {
    const html = document.querySelector("html");

    return html?.getAttribute("data-accent-color") ?? "brand";
  });

  return (
    <ThemePickerRadioGroup
      defaultValue={defaultValue}
      items={[
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "brand",
      ].map((color) => {
        return {
          value: color,
          render: (
            <div data-accent-color={color} className="accent-picker">
              <span className="indicator" />
              {color}
            </div>
          ),
        };
      })}
      label="Color"
      selector="data-accent-color"
    />
  );
}

export { AccentColorPicker };
