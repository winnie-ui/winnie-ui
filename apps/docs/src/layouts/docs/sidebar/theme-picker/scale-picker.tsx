import { Label, Radio, RadioGroup } from "react-aria-components";

import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

function ScalePicker() {
  return (
    <ThemePickerRadioGroup
      defaultValue="100%"
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
