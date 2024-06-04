import { Heading } from "react-aria-components";

import { AccentColorPicker } from "./accent-color-picker";
// import { ModePicker } from "./mode-picker";
import { RadiusPicker } from "./radius-picker";
import { ScalePicker } from "./scale-picker";

function ThemePicker() {
  return (
    <div className="p-5 pt-0">
      <div className="pt-5 pb-5">
        <Heading className="text-grey-12 text-2 font-medium" slot="title">
          Customize Theme
        </Heading>
        <p className="text-grey-11 leading-1 text-1">
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
