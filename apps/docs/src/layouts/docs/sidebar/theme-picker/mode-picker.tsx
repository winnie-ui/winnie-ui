import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

function ModePicker() {
  return (
    <ThemePickerRadioGroup
      defaultValue="100%"
      items={["light", "dark"].map((mode) => {
        return {
          value: mode,
          render: mode,
        };
      })}
      label="Mode"
      selector="data-theme"
    />
  );
}

export { ModePicker };
