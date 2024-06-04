import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@radix-ui/react-scroll-area";

import "./navigation.css";

export function Navigation() {
  return (
    <ScrollArea
      className="relative -mr-4 min-h-0 grow overflow-hidden"
      type="always"
    >
      <ScrollAreaViewport className="wui-scroll-area-mask h-full w-full overscroll-contain scroll-auto">
        <div className="bg-red-9 h-[1000px] py-[var(--wui-scroll-padding)]">
          qweqweqwe
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        orientation="vertical"
        className="flex touch-none bg-transparent p-1 select-none data-[orientation=vertical]:w-[10px]"
      >
        <ScrollAreaThumb className="bg-grey-6 rounded-round relative flex-1 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollAreaScrollbar>
    </ScrollArea>
  );
}
