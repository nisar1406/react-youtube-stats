import React from "react";
import Chart from "../common/chart/chart";
import StatsHeader from "../common/stats-header/stats-header";
import StatsTitle from "../common/stats-title/stats-title";

const Audience = ({ data, date }) => (
  <div className="audience">
    <StatsTitle title="Audience" date={date} />
    <div className="section__margin revenue__chart-details">
      <StatsHeader
        title="Subscriber views vs total views "
        data={`${data?.value}%`}
        growth={`${data?.change?.percentage}%`}
      />
      <Chart data={data?.data} value2 symbol="%" />
    </div>
  </div>
);

export default Audience;
