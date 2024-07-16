import { useState } from "react";
import { Radio, RadioGroup, ToggleButton } from "react-aria-components";

import { FastForward, Heart, Pause, Play, Rewind } from "lucide-react";
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
   * tracks the play state of the example
   */
  const [playing, setPlaying] = useState(true);

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
      <div className="now-playing winnie-ui" data-radius={radius}>
        <div className="now-playing-album" data-playing={playing}>
          <img
            className="now-playing-cover"
            src={albumCover.src}
            alt="only u by brock"
          />
        </div>
        <div className="now-playing-song">
          <div className="now-playing-song-details">
            <span className="now-playing-song-title">only u</span>
            <span className="now-playing-song-description">brock</span>
          </div>
          <ToggleButton className="now-playing-favourite">
            <Heart />
          </ToggleButton>
        </div>
        <div className="now-playing-controls">
          <span className="now-playing-control">
            <Rewind />
          </span>
          <ToggleButton
            isSelected={playing}
            className="now-playing-control now-playing-play-control"
            onChange={setPlaying}
          >
            {({ isSelected }) => {
              if (isSelected) {
                return <Pause />;
              }

              return <Play />;
            }}
          </ToggleButton>
          <span className="now-playing-control">
            <FastForward />
          </span>
        </div>
      </div>
    </div>
  );
}
