import {
  Checkbox as RadixCheckbox,
  CheckboxIndicator as RadixCheckboxIndicator,
} from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import "./checkbox.css";

export function Checkbox(props: any) {
  return (
    <RadixCheckbox {...props} defaultChecked data-component="checkbox">
      <RadixCheckboxIndicator asChild>
        <Check data-slot="indicator" strokeWidth={3} />
      </RadixCheckboxIndicator>
    </RadixCheckbox>
  );
}

export function CheckboxWithLabel(props: any) {
  return (
    <div data-component="field">
      <RadixCheckbox
        {...props}
        defaultChecked
        data-component="checkbox"
        id="wl"
      >
        <RadixCheckboxIndicator asChild>
          <Check data-slot="indicator" strokeWidth={3} />
        </RadixCheckboxIndicator>
      </RadixCheckbox>
      <label data-slot="label" htmlFor="wl">
        Accept terms and conditions.
      </label>
    </div>
  );
}

export function CheckboxWithLabelAndDescription(props: any) {
  return (
    <div data-component="field">
      <RadixCheckbox
        {...props}
        defaultChecked
        data-component="checkbox"
        id="wld"
      >
        <RadixCheckboxIndicator asChild>
          <Check data-slot="indicator" strokeWidth={3} />
        </RadixCheckboxIndicator>
      </RadixCheckbox>
      <label data-slot="label" htmlFor="wld" className="label">
        Display full names
      </label>
      <span data-slot="description" className="description">
        Show full names of users instead of shorter usernames.
      </span>
    </div>
  );
}
