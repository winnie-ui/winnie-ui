import { useState } from "react";
import {
  Radio,
  RadioGroup,
  Slider,
  SliderThumb,
  SliderTrack,
  ToggleButton,
} from "react-aria-components";

import {
  FastForward,
  Heart,
  Pause,
  Play,
  Rewind,
  Volume,
  Volume2,
} from "lucide-react";
import albumCover from "~/images/album-cover.jpg";
import { type Theme, getTheme } from "~/utils/theme";

import "./radius-example.css";

const RADIUS = ["none", "sm", "md", "lg", "round"];

export function RadiusExample() {
  /**
   * tracks the selected radius
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
            alt="Jungle by Fred Again.."
          />
        </div>
        <div className="now-playing-song">
          <div className="now-playing-song-details">
            <span className="now-playing-song-title">Jungle</span>
            <span className="now-playing-song-description">Fred again..</span>
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
        <div className="now-playing-volume">
          <Volume className="now-playing-volume-icon" />
          <Slider
            defaultValue={30}
            aria-label="Adjust volume"
            className="volume-slider"
          >
            <SliderTrack className="volume-slider-track">
              {({ state }) => {
                const percent = state.getThumbPercent(0) * 100 + "%";
                return (
                  <>
                    <div className="volume-slider-track-inner" />
                    <div
                      className="volume-slider-track-fill"
                      style={{ width: percent }}
                      data-percent={percent}
                    />
                    <SliderThumb className="volume-slider-thumb" />
                  </>
                );
              }}
            </SliderTrack>
          </Slider>
          <Volume2 className="now-playing-volume-icon" />
        </div>
      </div>
    </div>
  );
}
