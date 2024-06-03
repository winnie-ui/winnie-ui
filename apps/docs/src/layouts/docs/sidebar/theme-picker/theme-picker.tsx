import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Popover,
} from "react-aria-components";

import { AccentColorPicker } from "./accent-color-picker";
import { RadiusPicker } from "./radius-picker";
import { Settings2 } from "lucide-react";

import "./theme-picker.css";

function Foo() {
  return (
    <div className="wui-theme-picker">
      <div className="wui-theme-picker-header">
        <Heading className="wui-theme-picker-header-title" slot="title">
          Customize Theme
        </Heading>
        <p className="wui-theme-picker-header-description">
          Change the vibes of your docs
        </p>
      </div>
      <div className="wui-theme-picker-content">
        <AccentColorPicker />
        <RadiusPicker />
      </div>
    </div>
  );
}

function ThemePicker() {
  return (
    <DialogTrigger>
      <Button className="wui-theme-picker-trigger" aria-label="Customize Theme">
        <Settings2 />
      </Button>
      <Popover
        className="wui-popper-animate wui-theme-picker-popover-content"
        placement="bottom end"
        crossOffset={-8}
      >
        <Dialog className="winnie-ui" data-radius="md">
          <Foo />
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}

export { ThemePicker };
