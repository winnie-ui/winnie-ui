import type { NavigationItem } from "./types";

type NavigationListProps = {
  items: NavigationItem[];
};

export function NavigationList(props: NavigationListProps) {
  return (
    <ul className="bg-red-9 px-4">
      {props.items.map((item) => {
        if (item.items && item.items.length > 0) {
          return (
            <li>
              <button>{item.label}</button>
              <div>
                <ul>
                  <NavigationList items={item.items} />
                </ul>
              </div>
            </li>
          );
        }

        return <li>{item.label}</li>;
      })}
    </ul>
  );
}
