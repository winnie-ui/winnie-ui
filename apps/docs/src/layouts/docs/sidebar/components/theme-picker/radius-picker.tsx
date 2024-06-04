import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

function RadiusPicker() {
  return (
    <ThemePickerRadioGroup
      defaultValue="md"
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
            <div className="flex flex-col items-center justify-center py-4">
              <span className="rounded-3 border-accent-8 bg-accent-4 mb-3 h-6 w-6 border" />
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
