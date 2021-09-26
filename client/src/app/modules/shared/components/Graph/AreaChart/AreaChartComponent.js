import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = ({ width, height, data, areaDetails, dataKey }) => {
  //   return <h1>Hello World</h1>;
  return (
    <div style={{ width: width, height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          {areaDetails.map((detail) => (
            <Area
              type={detail.type}
              dataKey={detail.dataKey}
              stackId={detail.stackId}
              stroke={detail.stroke}
              fill={detail.fill}
            />
          ))}

          {/* <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
