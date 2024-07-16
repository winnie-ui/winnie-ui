import { useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import albumCover from "~/images/album-cover.jpg";
import { type Theme, getTheme } from "~/utils/theme";

import "./radius-example.css";

const RADIUS = ["none", "sm", "md", "lg", "round"];

export function RadiusExample() {
  /**
   * tracks the selected accent color
   */
  const [radius, setRadius] = useState(() => {
    return getTheme().radius;
  });

  /**
   * Sets the attribute on the demo element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    setRadius(value as Theme["radius"]);
  }

  return (
    <div className="re winnie-ui">
      <RadioGroup
        value={radius}
        aria-label="Select Radius"
        className="re-radio-group"
        onChange={onValueChange}
      >
        {RADIUS.map((radius) => {
          return (
            <Radio
              key={radius}
              value={radius}
              aria-label={radius}
              className="re-radio-item winnie-ui"
              data-radius={radius}
            />
          );
        })}
      </RadioGroup>
      <div
        className="now-playing transition-radius winnie-ui"
        data-radius={radius}
      >
        <div className="now-playing-album">
          <img
            className="now-playing-cover transition-radius"
            src={albumCover.src}
            alt="only u by brock"
          />
        </div>
      </div>
    </div>
  );
}
