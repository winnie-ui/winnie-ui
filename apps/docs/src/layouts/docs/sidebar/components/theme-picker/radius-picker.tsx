import { useState } from "react";

import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

import "./radius-picker.css";

function RadiusPicker() {
  const [defaultValue] = useState(() => {
    const html = document.querySelector("html");

    return html?.getAttribute("data-radius") ?? "md";
  });

  return (
    <ThemePickerRadioGroup
      defaultValue={defaultValue}
      items={[
        { value: "none", label: "None" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "round", label: "Round" },
      ].map((radius) => {
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
      label="Radius"
      selector="data-radius"
    />
  );
}

export { RadiusPicker };
