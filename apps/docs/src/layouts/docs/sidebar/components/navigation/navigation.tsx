import { NavigationList } from "./navigation-list";
import type { NavigationItem } from "./types";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@radix-ui/react-scroll-area";

import "./navigation.css";

type NavigationProps = {
  items: NavigationItem[];
};

export function Navigation(props: NavigationProps) {
  return (
    <ScrollArea
      className="relative -mr-4 min-h-0 grow overflow-hidden"
      type="scroll"
    >
      <ScrollAreaViewport className="wui-scroll-area-mask h-full w-full overscroll-contain scroll-auto">
        <div className="py-[var(--wui-scroll-padding)]">
          <NavigationList items={props.items} />
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        orientation="vertical"
        className="flex touch-none bg-transparent p-1 transition-all duration-[150ms] select-none data-[orientation=vertical]:w-[10px] hover:data-[orientation=vertical]:w-[12px]"
      >
        <ScrollAreaThumb className="bg-grey-6 hover:bg-grey-7 rounded-round relative flex-1 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] hover:w-[14px]" />
      </ScrollAreaScrollbar>
    </ScrollArea>
  );
}
