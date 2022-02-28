import React from "react";
import StatsHeader from "../common/stats-header/stats-header";
import StatsTitle from "../common/stats-title/stats-title";

import Chart from "../common/chart/chart";

const Revenue = ({ data, date }) => (
  <div className="revenue">
    <StatsTitle title="Revenue" date={date} />
    <div className="section__margin revenue__chart-details">
      <StatsHeader
        title="Estimated Revenue"
        data={`₹${data?.value} lac`}
        growth={`${data?.change?.percentage}%`}
      />
      <Chart data={data?.data} symbol="₹" />
    </div>
  </div>
);

export default Revenue;
