import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { createChartData } from "../../../utils/helper";

const Chart = ({ data, type = "linear", value2, symbol = "" }) => {
  const chartData = createChartData(data);
  return (
    <div className="chart">
      <LineChart width={300} height={200} data={chartData}>
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          ticks={[chartData[0]?.date, chartData[chartData?.length - 1]?.date]}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(tick) => {
            return value2 ? `${tick}${symbol}` : `${symbol}${tick}`;
          }}
        />
        <Line
          type={type}
          dataKey="value1"
          stroke="#31E498"
          dot={false}
          strokeWidth={2}
        />
        {value2 && (
          <Line dataKey="value2" stroke="#FF5C00" dot={false} strokeWidth={2} />
        )}
      </LineChart>
    </div>
  );
};

export default Chart;
