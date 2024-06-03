import { Label, Radio, RadioGroup } from "react-aria-components";

import "./scale-picker.css";

const SCALE_SELECTOR = "data-scale";

function ScalePicker() {
  /**
   * Sets the scale attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onScaleChange(value: string) {
    const html = document.querySelector("html");
    html!.setAttribute(SCALE_SELECTOR, value);
  }

  /**
   * Gets the radius attribute value from the body element
   */
  function getScale() {
    const html = document.querySelector("html");
    return html!.getAttribute(SCALE_SELECTOR) ?? "md";
  }

  return (
    <RadioGroup
      className="wui-theme-picker-radio-group"
      defaultValue={getScale()}
      onChange={onScaleChange}
    >
      <Label className="wui-theme-picker-label">Scale</Label>
      <div className="wui-theme-picker-scale-grid">
        {["90%", "95%", "100%", "105%", "110%"].map((scale) => {
          return (
            <Radio key={scale} value={scale} className="wui-theme-picker-scale">
              {scale}
            </Radio>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export { ScalePicker };
