import { Label, Radio, RadioGroup } from "react-aria-components";

import "./radius-picker.css";

const RADIUS_SELECTOR = "data-radius";

function RadiusPicker() {
  /**
   * Sets the radius attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onRadiusChange(value: string) {
    const html = document.querySelector("html");
    html!.setAttribute(RADIUS_SELECTOR, value);
  }

  /**
   * Gets the radius attribute value from the body element
   */
  function getRadius() {
    const html = document.querySelector("html");
    return html!.getAttribute(RADIUS_SELECTOR) ?? "md";
  }

  return (
    <RadioGroup
      className="wui-theme-picker-radio-group"
      defaultValue={getRadius()}
      onChange={onRadiusChange}
    >
      <Label className="wui-theme-picker-label">Radius</Label>
      <div className="wui-theme-picker-radius-grid">
        {[
          { value: "none", label: "None" },
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
          { value: "round", label: "Round" },
        ].map((radius) => {
          return (
            <Radio
              key={radius.value}
              value={radius.value}
              className="wui-theme-picker-radius"
            >
              <span
                className="winnie-ui wui-theme-picker-radius-bubble"
                data-radius={radius.value}
              />
              {radius.label}
            </Radio>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export { RadiusPicker };
