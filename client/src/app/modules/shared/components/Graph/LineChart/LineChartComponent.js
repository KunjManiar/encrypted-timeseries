import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

const LineChartComponent = ({ width, height, data, dataKey, lineDetails }) => {
  //   return <h1>Hello World</h1>;
  return (
    <div style={{ width: width, height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          //   reverseStackOrder={true}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={dataKey}
            tickFormatter={(value) => moment(value).format("DD-MM-YY hh:mm:ss")}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(value) =>
              moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a")
            }
          />
          <Legend />

          {lineDetails.map((detail) => (
            <Line
              type={detail.type}
              dataKey={detail.dataKey}
              //   stackId={detail.stackId}
              stroke={detail.stroke}
              fill={detail.fill}
              name={detail.name}
            />
          ))}
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
