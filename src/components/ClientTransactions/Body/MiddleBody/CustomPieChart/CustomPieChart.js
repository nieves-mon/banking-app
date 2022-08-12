import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CustomPieChart = ({data}) => {
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF", "#003F5C"];

    const CustomTooltip = ({ active, payload }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}`}</label>
         </div>
        );
      }
   }

    return (
      <PieChart width={350} height={300}>
        <Pie
          data={data}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={98}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
      );
}

export default CustomPieChart;
