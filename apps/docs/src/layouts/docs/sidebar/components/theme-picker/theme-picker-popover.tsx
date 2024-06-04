import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";

import { ThemePicker } from "./theme-picker";
import { Settings2 } from "lucide-react";

function ThemePickerPopover() {
  return (
    <DialogTrigger>
      <Button
        className="text-accent-11 rounded-3 [&:where([data-state='open'],[data-pressed],[data-hovered])]:bg-accent-4 data-[focus-visible]:bg-accent-3 flex h-[calc(28px*var(--wui-scale))] w-[calc(28px*var(--wui-scale))] items-center justify-center bg-transparent"
        aria-label="Customize Theme"
      >
        <Settings2 className="h-[calc(16px*var(--wui-scale))] w-[calc(16px*var(--wui-scale))]" />
      </Button>
      <Popover
        className="wui-popper-animate wui-scrollbar bg-white-a9 dark:bg-grey-2 shadow-4 border-grey-4 w-[calc(var(--wui-docs-layout-sidebar-width)-var(--wui-space-5)*2)] overflow-auto rounded-[min(var(--wui-border-radius-3),20px)] border backdrop-blur [&>section]:outline-none"
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
