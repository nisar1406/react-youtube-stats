import React, { useState } from "react";
import ReactDatePicker, { CalendarContainer } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ id, message, date = new Date(), handleChange }) => {

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "10px", background: "#c1c1c1", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0", textAlign: "center" }}>
            {message}
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  return (
    <ReactDatePicker
      selected={new Date(date)}
      onChange={(date) => handleChange({value: id}, date)}
      calendarContainer={MyContainer}
    />
  );
};

export default DatePicker;
