import { BoxSelect, ChevronDown, DollarSign, Palette } from "lucide-react";
import { type ReactNode, useState } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Radio,
  RadioGroup,
  Select,
  SelectValue,
} from "react-aria-components";

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
        <div className="sp-hero-field" data-component="field">
          <label
            className="sp-hero-label"
            data-component="label"
            htmlFor="firstName"
          >
            Dish name
          </label>
          <input
            data-component="input"
            id="firstName"
            className="sp-hero-input"
            data-mode={mode}
          />
        </div>
        <div className="sp-hero-field" data-component="field">
          <label
            className="sp-hero-label"
            data-component="label"
            htmlFor="price"
          >
            Price
          </label>
          <span
            className="sp-hero-description"
            data-component="description"
            data-mode={mode}
          >
            All prices are in CAD
          </span>
          <div className="sp-hero-group" data-component="group">
            <DollarSign data-component="icon" />
            <input
              data-component="input"
              id="price"
              className="sp-hero-input"
              data-mode={mode}
            />
          </div>
        </div>
        <Select data-component="field" className="sp-hero-field">
          <Label data-component="label" className="sp-hero-label">
            Foo
          </Label>
          <Button data-component="group" className="sp-hero-group">
            <div
              data-component="input"
              className="sp-hero-input"
              data-mode={mode}
            >
              <SelectValue />
            </div>
            <ChevronDown data-component="icon" />
          </Button>
          <Popover>
            <ListBox data-component="listbox">
              <ListBoxItem data-component="listbox-item">Aardvark</ListBoxItem>
              <ListBoxItem data-component="listbox-item">Cat</ListBoxItem>
              <ListBoxItem data-component="listbox-item">Dog</ListBoxItem>
              <ListBoxItem data-component="listbox-item">Kangaroo</ListBoxItem>
              <ListBoxItem data-component="listbox-item">Panda</ListBoxItem>
              <ListBoxItem data-component="listbox-item">Snake</ListBoxItem>
            </ListBox>
          </Popover>
        </Select>
        <div className="sp-hero-footer">
          <button
            className="sp-hero-cancel-button"
            data-mode={mode}
            data-component="button"
            type="button"
          >
            <span data-component="text">Cancel</span>
          </button>
          <button
            className="sp-hero-action-button"
            data-mode={mode}
            data-component="button"
            type="button"
          >
            <span data-component="text">Create dish</span>
          </button>
        </div>
      </div>
    </>
  );
}
