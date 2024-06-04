import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

function AccentColorPicker() {
  return (
    <ThemePickerRadioGroup
      defaultValue="brand"
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
            <div
              data-accent-color={color}
              className="flex items-center gap-3 capitalize"
            >
              <span className="rounded-round bg-accent-9 flex h-5 w-5 items-center justify-center" />
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
