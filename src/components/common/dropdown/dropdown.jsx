import React from "react";
import Select from "react-select";

const options = [
  { value: "last 7 days", label: "Last 7 days" },
  { value: "last 14 days", label: "Last 14 days" },
  { value: "last 30 days", label: "Last 30 days" },
  { value: "custom", label: "Custom" },
];

const styles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const Dropdown = ({ handleChange }) => (
  <Select
    styles={styles}
    defaultValue={options[0]}
    options={options}
    onChange={(value) => handleChange(value)}
  />
);

export default Dropdown;
