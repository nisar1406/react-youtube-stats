import React from "react";
import { intToString } from "../../utils/helper";
import Dropdown from "../common/dropdown/dropdown";
import StatsTitle from "../common/stats-title/stats-title";

const Summary = ({ data, date, handleChange }) => {
  return (
    <div className="summary section__padding">
      <div className="summary__top-section">
        <StatsTitle title="Summary" date={date} />
        <div className="summary__date-selection">
          <Dropdown handleChange={handleChange}/>
        </div>
      </div>
      <div className="section__margin summary__summary-stats">
        {data &&
          Object.entries(data).map(([key, value]) => {
            const revenueValue =
              key === "revenue" ? `₹${value} lac` : intToString(value);
            return (
              <div className="summary__stats-details">
                <p>{key}</p>
                <h1>{revenueValue}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Summary;
