import type { ReactNode } from "react";
import { Label, Radio, RadioGroup } from "react-aria-components";

import "./theme-picker-radio-group.css";

type ThemePickerRadioGroupProps = {
  defaultValue: string;
  label: string;
  items: {
    value: string;
    render: ReactNode;
  }[];
  selector: string;
};

function ThemePickerRadioGroup(props: ThemePickerRadioGroupProps) {
  /**
   * Sets the attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    const html = document.querySelector("html");
    html!.setAttribute(props.selector, value);
  }

  /**
   * Gets the radius attribute value from the body element
   */
  function getDefaultValue() {
    const html = document.querySelector("html");
    return html!.getAttribute(props.selector) ?? props.defaultValue;
  }

  return (
    <RadioGroup
      className="theme-picker-radio-group"
      defaultValue={getDefaultValue()}
      onChange={onValueChange}
    >
      <Label className="radio-label">{props.label}</Label>
      <div className="radio-grid">
        {props.items.map((item) => {
          return (
            <Radio
              key={item.value}
              value={item.value}
              className="radio-grid-item"
            >
              {item.render}
            </Radio>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export { ThemePickerRadioGroup };
export type { ThemePickerRadioGroupProps };
