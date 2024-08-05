import { useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import deadpool from "~/images/deadpool.jpg";
import { type Theme, getTheme } from "~/utils/theme";

import "./scaling-example.css";

const SCALE = ["90%", "95%", "100%", "105%", "110%"];

export function ScalingExample() {
  /**
   * tracks the selected scale
   */
  const [scale, setScale] = useState(() => {
    return getTheme().scale;
  });

  /**
   * Sets the attribute on the demo element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    setScale(value as Theme["scale"]);
  }

  return (
    <div className="se">
      <RadioGroup
        value={scale}
        aria-label="Select Scale"
        className="se-radio-group"
        onChange={onValueChange}
      >
        {SCALE.map((scale) => {
          return (
            <Radio
              key={scale}
              value={scale}
              aria-label={scale}
              className="se-radio-item"
            >
              {scale}
            </Radio>
          );
        })}
      </RadioGroup>
      <div className="se-content">
        <div className="movie winnie-ui" data-scale={scale}>
          <img
            className="movie-poster"
            src={deadpool.src}
            alt="Deadpool movie poster"
          />
          <div className="movie-content">
            <span className="movie-title">Deadpool</span>
            <p className="movie-summary">
              A wisecracking mercenary gets experimented on and becomes immortal
              yet hideously scarred, and sets out to track down the man who
              ruined his looks.
            </p>
            <div className="movie-info">
              <span className="movie-rating">R</span>
              <span className="movie-year">2016</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
