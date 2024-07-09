import { useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import { BaseballPlayerChart } from "./area-chart";

import "./accent-color-example.css";

const DEFAULT_VALUE = "red";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brand",
];

export function AccentColorExample() {
  /**
   * tracks the selected accent color
   */
  const [accentColor, setAccentColor] = useState(DEFAULT_VALUE);

  /**
   * tracks the previously selected accent color
   */
  const [previousAccentColor, setPreviousAccentColor] = useState<string | null>(
    null,
  );

  /**
   * Sets the attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    let prevColor = accentColor;
    setAccentColor((prev) => {
      prevColor = prev;
      return value;
    });
    setPreviousAccentColor(prevColor);
  }

  return (
    <div className="ace">
      <RadioGroup
        defaultValue={DEFAULT_VALUE}
        aria-label="Select color"
        className="ace-radio-group"
        onChange={onValueChange}
      >
        {COLORS.map((color) => {
          return (
            <Radio
              key={color}
              value={color}
              aria-label={color}
              className="ace-radio-item"
              data-accent-color={color}
            />
          );
        })}
      </RadioGroup>
      <div className="ace-content">
        {COLORS.map((color) => {
          let state = "";

          switch (true) {
            case previousAccentColor === color: {
              state = "exiting";
              break;
            }
            case accentColor === color: {
              state = "visible";
              break;
            }
            case accentColor !== color: {
              state = "hidden";
              break;
            }
          }

          return (
            <div
              key={color}
              className="ace-content-curtain"
              data-accent-color={color}
              data-state={state}
              onAnimationEnd={() => setPreviousAccentColor(null)}
            >
              {state === "hidden" ? null : (
                <div className="ace-content-example">
                  <div className="ace-example">
                    <header className="ace-example-header">
                      <div className="ace-example-title">Dalton Varsho</div>
                      <div className="ace-example-description">
                        OPS and batting average by month.
                      </div>
                    </header>
                    <div className="ace-example-chart">
                      <BaseballPlayerChart />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
