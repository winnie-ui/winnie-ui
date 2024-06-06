import type { NavigationItem } from "./types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

import "./navigation-list.css";

type NavigationListProps = {
  items: NavigationItem[];
  level?: number;
  slug: string;
};

const itemClassName =
  "text-2 flex items-center font-medium block text-grey-11 data-[state=open]:text-grey-12 data-[current=true]:text-grey-12 hover:bg-grey-a3 focus-visible:outline-2 focus-visible:outline-accent-9 px-3 h-[calc(34px*var(--wui-scale))] rounded-3 w-full";

export function NavigationList({
  level = 0,
  items,
  slug,
}: NavigationListProps) {
  return (
    <ul
      className={clsx({
        "pr-4 pl-5": level === 0,
        "pl-5": level === 1,
      })}
    >
      {items.map((item) => {
        if (item.items && item.items.length > 0) {
          const hasCurrentItem =
            item.items.find((i) => i.link?.endsWith(slug)) !== undefined;
          return (
            <Collapsible
              asChild
              key={`${item.label}`}
              defaultOpen={hasCurrentItem}
            >
              <li>
                <CollapsibleTrigger
                  className={clsx(itemClassName, "group")}
                  data-current={hasCurrentItem}
                  aria-current={hasCurrentItem}
                >
                  <span className="flex-1">{item.label}</span>
                  <ChevronRight className="w-5 transition-transform duration-[150ms] group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="navigation-list-collapsible-content">
                  <NavigationList items={item.items} level={1} slug={slug} />
                </CollapsibleContent>
              </li>
            </Collapsible>
          );
        }

        const isCurrent = item.link?.endsWith(slug);

        return (
          <li>
            <a
              href={item.link}
              key={item.label}
              className={itemClassName}
              data-current={isCurrent}
              aria-current={isCurrent}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
