import moment from "moment";

export const initialDates = {
  startDate: moment("2021-01-01").format("YYYY-MM-DD"),
  endDate: moment("2021-01-31").format("YYYY-MM-DD"),
};

export const options = [
  { value: "last 7 days", label: "Last 7 days" },
  { value: "last 14 days", label: "Last 14 days" },
  { value: "last 30 days", label: "Last 30 days" },
  { value: "custom", label: "Custom" },
];
