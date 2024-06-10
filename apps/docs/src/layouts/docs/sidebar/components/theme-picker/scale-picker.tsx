import { useState } from "react";

import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

function ScalePicker() {
  const [defaultValue] = useState(() => {
    const html = document.querySelector("html");

    return html?.getAttribute("data-scale") ?? "100%";
  });
  return (
    <ThemePickerRadioGroup
      defaultValue={defaultValue}
      items={["90%", "95%", "100%", "105%", "110%"].map((scale) => {
        return {
          value: scale,
          render: scale,
        };
      })}
      label="Scale"
      selector="data-scale"
    />
  );
}

export { ScalePicker };
