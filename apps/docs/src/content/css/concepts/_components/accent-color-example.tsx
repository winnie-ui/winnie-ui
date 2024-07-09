import { useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import "./accent-color-example.css";

const chartData = [
  { month: "January", ops: 186, bpct: 80 },
  { month: "February", ops: 305, bpct: 200 },
  { month: "March", ops: 237, bpct: 120 },
  { month: "April", ops: 73, bpct: 190 },
  { month: "May", ops: 209, bpct: 130 },
  { month: "June", ops: 214, bpct: 140 },
];

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
                      <div className="ace-example-accessory">
                        Toronto Blue Jays
                      </div>
                      <div className="ace-example-title">Dalton Varsho</div>
                      <div className="ace-example-description">
                        OPS and batting average by per month.
                      </div>
                    </header>
                    <div className="ace-example-chart">
                      <ResponsiveContainer>
                        <AreaChart
                          accessibilityLayer
                          data={chartData}
                          margin={{
                            left: 12,
                            right: 12,
                          }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <Tooltip />
                          <Area
                            dataKey="ops"
                            type="natural"
                            fill="var(--wui-color-accent-4)"
                            fillOpacity={0.4}
                            stroke="var(--wui-color-accent-4)"
                            stackId="a"
                            isAnimationActive={false}
                          />
                          <Area
                            dataKey="bpct"
                            type="natural"
                            fill="var(--wui-color-accent-7)"
                            fillOpacity={0.4}
                            stroke="var(--wui-color-accent-6)"
                            stackId="a"
                            isAnimationActive={false}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
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
