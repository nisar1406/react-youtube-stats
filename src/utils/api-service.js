import axios from "axios";

export const fetchApi = async (selectedDates) => {
  let apiResponse = {};
  const url = `https://qorner-mock-server.herokuapp.com/stats?startDate=${selectedDates?.startDate}&endDate=${selectedDates?.endDate}`;
  try {
    const { data } = await axios({
      method: "GET",
      url: url,
    });
    apiResponse = data;
  } catch {
    apiResponse= {}
  }
  return apiResponse;
};
