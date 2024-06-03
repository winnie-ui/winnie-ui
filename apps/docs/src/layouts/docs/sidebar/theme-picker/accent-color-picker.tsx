import { Label, Radio, RadioGroup } from "react-aria-components";

import "./accent-color-picker.css";

const ACCENT_COLOR_SELECTOR = "data-accent-color";

function AccentColorPicker() {
  /**
   * Sets the accent color attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onAccentColorChange(value: string) {
    const html = document.querySelector("html");
    html!.setAttribute(ACCENT_COLOR_SELECTOR, value);
  }

  /**
   * Gets the accent color attribute value from the body element
   */
  function getAccentColor() {
    const html = document.querySelector("html");
    return html!.getAttribute(ACCENT_COLOR_SELECTOR) ?? "brand";
  }

  return (
    <RadioGroup
      className="wui-theme-picker-radio-group"
      defaultValue={getAccentColor()}
      onChange={onAccentColorChange}
    >
      <Label className="wui-theme-picker-label">Accent Color</Label>
      <div className="wui-theme-picker-color-grid">
        {[
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "purple",
          "pink",
          "brand",
        ].map((color) => {
          return (
            <Radio
              key={color}
              value={color}
              data-accent-color={color}
              className="wui-theme-picker-accent-color"
            >
              <span className="wui-theme-picker-accent-color-bubble" />
              {color}
            </Radio>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export { AccentColorPicker };
