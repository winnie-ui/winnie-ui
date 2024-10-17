import { Check } from "lucide-react";
import { useState } from "react";

export function ListboxModeContent() {
  /**
   * tracks the currently selected items
   */
  const [items, setItems] = useState<Set<string>>(new Set(["Cherry"]));

  return (
    <ul
      data-component="listbox"
      className="demo-listbox not-content demo-mode"
      data-mode="selection"
    >
      {["Apple", "Banana", "Cherry", "Date", "Elderberry"].map((label) => {
        return (
          <li
            key={label}
            data-component="listbox-item"
            onKeyDown={() => ({})}
            onClick={() => {
              const newItems = new Set(items);
              if (items.has(label)) {
                newItems.delete(label);
              } else {
                newItems.add(label);
              }
              setItems(newItems);
            }}
          >
            {items.has(label) && <Check data-slot="indicator" />}
            <span data-slot="label">{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
