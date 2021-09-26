import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const PieChartComponent = ({ width, height, data }) => {
  //   return <h1>Hello World</h1>;
  return (
    <div style={{ width: width, height: height }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
