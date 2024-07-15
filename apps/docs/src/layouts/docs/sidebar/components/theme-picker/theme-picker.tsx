import { AccentColorPicker } from "./accent-color-picker";
// import { ModePicker } from "./mode-picker";
import { RadiusPicker } from "./radius-picker";
import { ScalePicker } from "./scale-picker";

function ThemePicker() {
  return (
    <div className="theme-picker">
      {/* <ModePicker /> */}
      <AccentColorPicker />
      <RadiusPicker />
      <ScalePicker />
    </div>
  );
}

export { ThemePicker };
