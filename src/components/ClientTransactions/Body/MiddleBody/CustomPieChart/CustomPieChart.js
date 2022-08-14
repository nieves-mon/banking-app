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
            <label>{`${payload[0].name} : ₱${payload[0].value}`}</label>
         </div>
        );
      }
   }

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      if((percent * 100).toFixed(0) > 6)
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
    };

    return (
      <PieChart width={window.innerWidth/3.8} height={window.innerHeight/2.4}>
        <Pie
          data={data}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={window.innerHeight/7}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
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
