import moment from "moment";

export const intToString = (value) => {
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + value).length / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

const dateComparison = (a, b) => {
  const date1 = new Date(a);
  const date2 = new Date(b);

  return date1 - date2;
};

export const createChartData = (data) => {
  const dataArray = [];
  if (data) {
    const sortedData = data.sort(dateComparison);
    sortedData.forEach((v) => {
      dataArray.push({
        date: moment(v?.date).format("MMM D"),
        value1: v?.value1,
        value2: v?.value2
      });
    });
  }
  return dataArray;
};
