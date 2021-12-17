import React, { FC } from "react";
import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import css from "../../../../../shared/DynamicsPrice/Chart.module.scss";

interface Props {
  chartData: {
    name: string;
    value: number;
  }[];
  width: number;
  height: number;
  tooltipText: string;
  overflowX?: "auto";
}

export const BarChartElem: FC<Props> = ({
  chartData,
  width,
  height,
  tooltipText,
  overflowX,
}) => {
  const customTickX = ({
    x,
    y,
    payload,
  }: {
    x: number;
    y: number;
    payload: any;
  }) => {
    const payloadText = [
      payload.value.split(" ", 1).toString(),
      payload.value.split(" ").slice(1).join(" "),
    ];

    return (
      <svg
        x={width > 500 ? x - 30 : x - 10}
        y={width > 500 ? y : y - 10}
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {width > 500 ? (
          <text
            style={{
              textAlign: "center",
            }}
            x={0}
            y={15}
            fill="#1A4862"
          >
            {payload.value}
          </text>
        ) : (
          <text
            style={{
              textAlign: "center",
            }}
            x={15}
            y={15}
            fill="#1A4862"
          >
            <tspan x="0" dy=".6em">
              {payloadText[0]}
            </tspan>
            <tspan x="0" dy="1.2em">
              {payloadText[1]}
            </tspan>
          </text>
        )}
      </svg>
    );
  };

  return (
    <BarChart
      className={css.chart}
      data={chartData}
      width={width}
      height={height}
      style={{
        paddingTop: 20,
        overflowX: overflowX ? overflowX : "initial",
        overflowY: "hidden",
      }}
    >
      <XAxis
        interval={0}
        dataKey="name"
        padding={{ left: 30, right: 30 }}
        tick={customTickX}
      />
      <YAxis interval={0} dataKey="value" />
      <CartesianGrid stroke="#f2f2f2" strokeDasharray="1 0" />
      <Tooltip />
      <Bar dataKey="value" name={tooltipText} fill="#1A4862" />
    </BarChart>
  );
};
