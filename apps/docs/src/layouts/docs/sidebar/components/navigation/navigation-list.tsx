import { useEffect } from "react";

import type { NavigationItem } from "./types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";

import "./navigation-list.css";

type NavigationListProps = {
  items: NavigationItem[];
  level?: number;
  slug: string;
};

export function NavigationList({
  level = 0,
  items,
  slug,
}: NavigationListProps) {
  useEffect(() => {
    console.log(slug, items, "mounted");

    return () => console.log(slug, items, "unmounted");
  }, []);

  return (
    <ul className="navigation-list" data-level={level}>
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
                  className="navigation-list-item"
                  data-collapsible-trigger={true}
                  data-current={hasCurrentItem}
                  aria-current={hasCurrentItem}
                >
                  <span className="label">{item.label}</span>
                  <ChevronRight className="chevron" />
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
          <li key={item.link}>
            <a
              href={item.link}
              className="navigation-list-item"
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
