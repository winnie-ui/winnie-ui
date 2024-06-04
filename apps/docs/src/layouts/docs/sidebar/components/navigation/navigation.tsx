import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@radix-ui/react-scroll-area";

export function Navigation() {
  return (
    <div className="relative -mr-4 flex h-full flex-col overflow-hidden">
      <ScrollArea className="min-h-0 grow overflow-hidden">
        <ScrollAreaViewport className="h-full w-full">
          <div className="h-[1000px] bg-transparent">Hello world</div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          orientation="vertical"
          className="hover:bg-black-a5 flex touch-none bg-transparent p-1 select-none data-[orientation=vertical]:w-[10px]"
        >
          <ScrollAreaThumb className="bg-grey-6 rounded-round relative flex-1 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </div>
  );
}
