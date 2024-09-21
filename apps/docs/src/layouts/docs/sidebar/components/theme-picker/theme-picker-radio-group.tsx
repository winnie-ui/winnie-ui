import type { ReactNode } from "react";
import { Label, Radio, RadioGroup } from "react-aria-components";

import {
  type Theme,
  type ThemeSelectors,
  getTheme,
  updateTheme,
} from "~/utils/theme";

import "./theme-picker-radio-group.css";

type ThemePickerRadioGroupProps = {
  label: string;
  items: {
    value: string;
    render: ReactNode;
  }[];
  themeKey: keyof Theme;
  selector: ThemeSelectors;
};

function ThemePickerRadioGroup({
  label,
  items,
  themeKey,
}: ThemePickerRadioGroupProps) {
  /**
   * Sets the attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    updateTheme(themeKey, value);
  }

  /**
   * Gets the radius attribute value from the body element
   */
  function getDefaultValue() {
    const theme = getTheme();
    return theme[themeKey];
  }

  return (
    <RadioGroup
      className="theme-picker-radio-group"
      defaultValue={getDefaultValue()}
      onChange={onValueChange}
    >
      <Label className="radio-label">{label}</Label>
      <div className="radio-grid">
        {items.map((item) => {
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
