import { Heading } from "react-aria-components";

import { AccentColorPicker } from "./accent-color-picker";
import { RadiusPicker } from "./radius-picker";
import { ScalePicker } from "./scale-picker";

import "./theme-picker.css";

function ThemePicker() {
  return (
    <div className="p-5">
      <div className="mb-6">
        <Heading className="text-grey-12 text-2 font-medium" slot="title">
          Customize Theme
        </Heading>
        <p className="text-grey-11 leading-1 text-1">
          Change the vibes of your docs
        </p>
      </div>
      <AccentColorPicker />
      <RadiusPicker />
      <ScalePicker />
    </div>
  );
}

export { ThemePicker };
