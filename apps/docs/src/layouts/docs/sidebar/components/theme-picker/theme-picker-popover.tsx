import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";

import { ThemePicker } from "./theme-picker";
import { Settings2 } from "lucide-react";

import "./theme-picker-popover.css";

function ThemePickerPopover() {
  return (
    <DialogTrigger>
      <Button
        className="theme-picker-popover-trigger"
        aria-label="Customize Theme"
      >
        <Settings2 />
      </Button>
      <Popover
        className="wui-popper-animate wui-scrollbar theme-picker-popover-content"
        placement="bottom end"
        crossOffset={-8}
      >
        <Dialog className="winnie-ui" data-radius="md" data-scale="100%">
          <ThemePicker />
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}

export { ThemePickerPopover };
