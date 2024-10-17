import { Checkbox } from "../checkbox/checkbox";

export function ListboxWithCheckbox() {
  return (
    <div className="demo-listbox-container">
      <ul
        data-component="listbox"
        className="demo-listbox not-content demo-indicator"
      >
        <li data-component="listbox-item">
          <Checkbox data-slot="indicator" />
          <span data-slot="label">Apple</span>
        </li>
        <li data-component="listbox-item">
          <Checkbox data-slot="indicator" />
          <span data-slot="label">Banana</span>
        </li>
        <li data-component="listbox-item">
          <Checkbox data-slot="indicator" />
          <span data-slot="label">Cherry</span>
        </li>
        <li data-component="listbox-item">
          <Checkbox data-slot="indicator" />
          <span data-slot="label">Date</span>
        </li>
        <li data-component="listbox-item">
          <Checkbox data-slot="indicator" />
          <span data-slot="label">Elderberry</span>
        </li>
      </ul>
    </div>
  );
}
