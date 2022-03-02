import React from "react";
import { intToString } from "../../utils/helper";
import ReactDatePicker from "../common/datepicker/datepicker";
import Dropdown from "../common/dropdown/dropdown";
import StatsTitle from "../common/stats-title/stats-title";

const Summary = ({ data, date, handleChange, showDatesDropdown, isError, defaultValue }) => {
  return (
    <div className="summary section__padding">
      <div className="summary__top-section">
        <StatsTitle title="Summary" date={date} showDatesDropdown={showDatesDropdown} />
        <div className="summary__date-selection">
          <Dropdown defaultValue={defaultValue} handleChange={handleChange} />
        </div>
      </div>
      {showDatesDropdown && (
        <div className="summary__datepicker">
          <ReactDatePicker id="startDate" message="Please select start date" date={date?.startDate} handleChange={handleChange} />
          <ReactDatePicker id="endDate" message="Please select end date" date={date?.endDate} handleChange={handleChange} />
        </div>
      )}
      {!isError && (<div className="section__margin summary__summary-stats">
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
      </div>)}
    </div>
  );
};

export default Summary;
