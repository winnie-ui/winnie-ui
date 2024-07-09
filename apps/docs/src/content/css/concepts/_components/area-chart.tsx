import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  forwardRef,
} from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import "./area-chart.css";

const CHART_DATA = [
  { month: "April", ops: 186, bpct: 80 },
  { month: "May", ops: 305, bpct: 200 },
  { month: "June", ops: 237, bpct: 120 },
  { month: "July", ops: 73, bpct: 190 },
  { month: "August", ops: 209, bpct: 130 },
  { month: "September", ops: 214, bpct: 140 },
];

const LABEL_MAP = {
  ops: "On-base Plus Slugging",
  bpct: "Batting Average",
};

/* -------------------------------------------------------------------------------------------------
 * TooltipContent
 * -----------------------------------------------------------------------------------------------*/
type TooltipContentRef = ForwardedRef<HTMLDivElement>;
type RechartTooltipProps = ComponentPropsWithoutRef<typeof RechartTooltip>;
type TooltipContentProps = RechartTooltipProps;

function TooltipContentComponent(
  { label, payload }: TooltipContentProps,
  ref: TooltipContentRef,
) {
  return (
    <div ref={ref} className="chart-tooltip-content">
      <div className="chart-tooltip-label">{label}</div>
      {payload && payload.length > 0 && (
        <div className="chart-tooltip-item-list">
          {payload.map((item) => {
            return (
              <div key={item.dataKey} className="chart-tooltip-item">
                <div
                  className="chart-tooltip-item-indicator"
                  // no need to update the types for the css var
                  // @ts-expect-error
                  style={{ "--item-background": item.color }}
                />
                {item.dataKey &&
                  LABEL_MAP[item.dataKey as keyof typeof LABEL_MAP]}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const TooltipContent = forwardRef(TooltipContentComponent);

/* -------------------------------------------------------------------------------------------------
 * BaseballPlayerChart
 * -----------------------------------------------------------------------------------------------*/
export function BaseballPlayerChart() {
  return (
    <ResponsiveContainer>
      <AreaChart
        accessibilityLayer
        data={CHART_DATA}
        margin={{
          left: 14,
          right: 12,
        }}
        className="chart"
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{
            fontSize: "var(--wui-font-size-2)",
            color: "var(--wui-color-grey-11)",
          }}
        />
        <RechartTooltip cursor={false} content={<TooltipContent />} />
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
  );
}
