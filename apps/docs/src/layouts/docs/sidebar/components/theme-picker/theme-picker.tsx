import { Heading } from "react-aria-components";

import { AccentColorPicker } from "./accent-color-picker";
// import { ModePicker } from "./mode-picker";
import { RadiusPicker } from "./radius-picker";
import { ScalePicker } from "./scale-picker";

import "./theme-picker.css";

function ThemePicker() {
  return (
    <div className="theme-picker">
      <div className="theme-picker-header">
        <Heading className="theme-picker-title" slot="title">
          Customize Theme
        </Heading>
        <p className="theme-picker-description">
          Change the vibes of your docs
        </p>
      </div>
      {/* <ModePicker /> */}
      <AccentColorPicker />
      <RadiusPicker />
      <ScalePicker />
    </div>
  );
}

export { ThemePicker };
