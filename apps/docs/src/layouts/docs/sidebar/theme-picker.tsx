import {
  Popover as AriaPopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverProvider,
  PopoverDisclosure as PopoverTrigger,
  usePopoverContext,
} from "@ariakit/react";
import { PaintbrushVertical } from "lucide-react";

import "./theme-picker.css";

function PopoverContent() {
  const context = usePopoverContext();

  if (!context) {
    throw new Error("Foo must be wrapped in PopoverProvider");
  }

  const placement = context.useState("placement");

  return (
    <AriaPopoverContent
      className="wui-popper wui-theme-picker-content"
      gutter={8}
      unmountOnHide
      data-placement={placement.split("-")[0]}
    >
      <PopoverHeading className="wui-theme-picker-content-title">
        Customize
      </PopoverHeading>
      <PopoverDescription className="wui-theme-picker-content-description">
        Change the vibes of your docs
      </PopoverDescription>
    </AriaPopoverContent>
  );
}

function ThemePicker() {
  return (
    <PopoverProvider placement="bottom-end">
      <PopoverTrigger
        className="wui-theme-picker-trigger"
        aria-label="Customize Theme"
      >
        <PaintbrushVertical />
      </PopoverTrigger>
      <PopoverContent />
    </PopoverProvider>
  );
}

export { ThemePicker };
