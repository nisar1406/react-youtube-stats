import React from "react";
import { intToString } from "../../utils/helper";
import Chart from "../common/chart/chart";
import StatsHeader from "../common/stats-header/stats-header";
import StatsTitle from "../common/stats-title/stats-title";

const Research = ({ data, date }) => (
  <div className="research section__padding">
    <StatsTitle title="Reach & engagement" date={date} />
    <div className="section__margin research__chart-details">
      <StatsHeader
        title="Views"
        data={intToString(data?.value)}
        growth={`${data?.change?.percentage}%`}
      />
      <Chart type="basisOpen" data={data?.data} />
    </div>
  </div>
);

export default Research;
