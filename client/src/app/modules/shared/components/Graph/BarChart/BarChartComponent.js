import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
const BarChartComponent = ({
  width,
  height,
  data,
  dataKey,
  dataKeyOnX = true,
  layout,
  xAxisType,
  yAxisType,
  barDetails,
}) => {
  //   return <h1>Hello World</h1>;
  return (
    <div style={{ width: width, height: height }}>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout={layout}
      >
        <CartesianGrid strokeDasharray="2 2" />
        {dataKeyOnX ? (
          <>
            <XAxis type={xAxisType} dataKey={dataKey} />
            <YAxis type={yAxisType} />
          </>
        ) : (
          <>
            <XAxis type={xAxisType} />
            <YAxis
              type={yAxisType}
              dataKey={dataKey}
              axisLine={false}
              tickLine={false}
              minTickGap={0}
              width={180}
              tick={{ fontSize: 14, markerWidth: 3, width: 180 }}
            />
          </>
        )}
        <Tooltip />
        <Legend />
        {barDetails.map((detail) => (
          <Bar
            // style={{ width: "9%" }}
            // barSize={500}
            dataKey={detail.dataKey}
            stackId={detail.stackId}
            stroke={detail.stroke}
            fill={detail.fill}
            name={detail.name}
            // label
          >
            {/* <LabelList dataKey={detail.dataKey} position="insideTop" /> */}
          </Bar>
        ))}
        {/* <Bar dataKey="successfailure.pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
