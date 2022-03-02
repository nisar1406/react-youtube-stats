import React from "react";
import Select from "react-select";
import { options } from "../../../utils/constants";

const styles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    position: "relative",
    left: "79px",
    bottom: "35px",
  }),
  valueContainer: () => ({
    paddingTop: "2px",
    paddingRight: "0px",
    paddingBottom: "2px",
    paddingLeft: "8px",
  }),
  singleValue: () => ({
    right: "15px",
    top: "3px",
    position: "relative",
    fontWeight: 500,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 110,
    background: "white",
    height: 32,
    position: "relative",
    border: "0.908257px solid #DCDCDC",
    boxSizing: "border-box",
    borderRadius: "18.1651px",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "150%",
  }),
  input: () => ({
    cursor: "transparent",
  }),
};

const Dropdown = ({ defaultValue, handleChange }) => (
  <Select
    styles={styles}
    defaultValue={defaultValue}
    options={options}
    onChange={(value) => handleChange(value)}
  />
);

export default Dropdown;
