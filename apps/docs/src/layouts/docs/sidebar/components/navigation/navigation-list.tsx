import { NavigationListCollapsible } from "./navigation-list-collapsible";
import type { NavigationItem } from "./types";

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
  return (
    <ul className="navigation-list" data-level={level}>
      {items.map((item) => {
        if (item.items && item.items.length > 0) {
          const hasCurrentItem =
            item.items.find((i) => i.link?.endsWith(slug)) !== undefined;

          return (
            <NavigationListCollapsible
              key={`item-${item.label}`}
              hasCurrentItem={hasCurrentItem}
              item={item}
            >
              <NavigationList items={item.items} level={1} slug={slug} />
            </NavigationListCollapsible>
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
