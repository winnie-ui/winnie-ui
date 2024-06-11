import { NavigationList } from "./navigation-list";
import type { NavigationItem } from "./types";
import { ScrollArea } from "~/components/scroll-area";

import "./navigation.css";

type NavigationProps = {
  items: NavigationItem[];
  slug: string;
};

export function Navigation(props: NavigationProps) {
  return (
    <ScrollArea className="wui-navigation">
      <NavigationList items={props.items} slug={props.slug} />
    </ScrollArea>
  );
}
