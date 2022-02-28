import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import "./App.css";
import { Audience, Header, Research, Revenue, Summary } from "./components";

const initialDates = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().subtract(7, "d").format("YYYY-MM-DD"),
};

const App = () => {
  const [channelStats, setChannelStats] = useState({});
  const [dates, setDates] = useState(initialDates);

  useEffect(() => {

    const getChannelStats = async () => {
      const response = fetchApi();
      setChannelStats(response);
    };
    getChannelStats();
  }, []);



  const fetchApi = async (selectedDates) => {
    let apiResponse = {};
    const url = `https://qorner-mock-server.herokuapp.com/stats?startDate=${selectedDates?.endDate}&endDate=${selectedDates?.startDate}`;
    try {
      const { data } = await axios({
        method: "GET",
        url: url,
      });
      console.log(data);
      apiResponse = data;
    } catch {
      console.log("error");
    }

    return apiResponse;
  }

  const handleChange = (selectedValue) => {
    let data = {};
    const { value } = selectedValue;
    switch (value) {
      case "last 7 days":
        console.log(value);
        data = {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().subtract(7, "d").format("YYYY-MM-DD"),
        };
        break;
      case "last 14 days":
        data = {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().subtract(14, "d").format("YYYY-MM-DD"),
        };
        break;

      case "last 30 days":
        data = {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().subtract(30, "d").format("YYYY-MM-DD"),
        };
        break;
      default:
        break;
    }

    setDates(data);
    fetchApi(data);
  };

  console.log(dates);

  return (
    <>
      <Header data={channelStats?.metadata} />
      <Summary
        data={channelStats?.summary}
        date="Jan 3 - 9,2022"
        handleChange={handleChange}
      />
      <Revenue
        data={channelStats?.revenueDetails?.estimatedRevenueTrend}
        date="Jan 3 - 9,2022"
      />
      <Research
        data={channelStats?.reachAndEngagementDetails?.viewsTrend}
        date="Jan 3 - 9,2022"
      />
      <Audience
        data={
          channelStats?.audienceDetails?.viewsSubscriberVsNonSubscribersTrend
        }
        date="Jan 3 - 9,2022"
      />
    </>
  );
};

export default App;
