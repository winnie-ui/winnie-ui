import { BoxSelect, DollarSign, Palette } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import "./spatial-toggle.css";

type Mode = "spatial" | "color";

const MODE_ICON_MAP = {
  spatial: <BoxSelect />,
  color: <Palette />,
} satisfies Record<Mode, ReactNode>;

export function SpatialToggle() {
  /**
   * tracks the selected mode
   */
  const [mode, setMode] = useState<Mode>("color");

  /**
   * Sets the data-mode attribute on the demo element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    setMode(value as Mode);
  }

  return (
    <>
      <RadioGroup
        defaultValue={mode}
        aria-label="Select Spatial Mode"
        className="sp-radio-group"
        onChange={onValueChange}
      >
        {["spatial", "color"].map((m) => {
          return (
            <Radio
              key={m}
              value={m}
              aria-label={`${m} mode`}
              className="sp-radio-item"
            >
              {MODE_ICON_MAP[m as Mode]}
            </Radio>
          );
        })}
      </RadioGroup>
      <div className="sp-hero-container">
        <span className="sp-hero-title">Create Dish</span>
        <div className="sp-hero-field" data-component="field">
          <label
            className="sp-hero-label"
            data-slot="label"
            htmlFor="firstName"
          >
            Name
          </label>
          <input
            data-component="input"
            data-slot="control"
            id="firstName"
            className="sp-hero-input"
            data-mode={mode}
          />
        </div>
        <div className="sp-hero-field" data-component="field">
          <label className="sp-hero-label" data-slot="label" htmlFor="price">
            Price
          </label>
          <span
            className="sp-hero-description"
            data-slot="description"
            data-mode={mode}
          >
            All prices are in CAD
          </span>
          <div className="sp-hero-group" data-component="group">
            <DollarSign data-slot="icon" />
            <input
              data-component="input"
              id="price"
              className="sp-hero-input"
              data-slot="control"
              data-mode={mode}
            />
          </div>
        </div>
        <div className="sp-hero-footer">
          <button
            className="sp-hero-cancel-button"
            data-mode={mode}
            data-component="button"
            type="button"
          >
            <span data-slot="label">Cancel</span>
          </button>
          <button
            className="sp-hero-action-button"
            data-mode={mode}
            data-component="button"
            type="button"
          >
            <span data-slot="label">Create dish</span>
          </button>
        </div>
      </div>
    </>
  );
}
