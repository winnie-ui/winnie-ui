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
  slug: string;
};

export function Navigation(props: NavigationProps) {
  return (
    <ScrollArea className="wui-scroll-area" type="scroll">
      <ScrollAreaViewport className="wui-scroll-area-mask">
        <div className="wui-navigation-list-container">
          <NavigationList items={props.items} slug={props.slug} />
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        orientation="vertical"
        className="wui-scroll-area-scrollbar"
      >
        <ScrollAreaThumb className="wui-scroll-area-thumb" />
      </ScrollAreaScrollbar>
    </ScrollArea>
  );
}
