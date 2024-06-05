import type { NavigationItem } from "./types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

type NavigationGroupProps = {
  items: NavigationItem[];
};

export function NavigationGroup(props: NavigationGroupProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger>trigger</CollapsibleTrigger>
      <CollapsibleContent>Content</CollapsibleContent>
    </Collapsible>
  );
}
