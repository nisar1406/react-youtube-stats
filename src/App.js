import axios from "axios";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./App.css";
import { Audience, Header, Research, Revenue, Summary } from "./components";
import ThreeDots from "./components/common/loader/loader";
import { fetchApi } from "./utils/api-service";
import { initialDates, options } from "./utils/constants";

const App = () => {
  const [channelStats, setChannelStats] = useState({});
  const [dates, setDates] = useState(initialDates);
  const [showDatesDropdown, setShowDatesDropdown] = useState(false);
  const [error, setError] = useState(false);
  const [defaultValue, setDefaultValue] = useState(options[3]);

  const getChannelStats = useCallback(async (selectedDates) => {
    const mySwal = withReactContent(Swal);
    const response = await fetchApi(selectedDates);
    if (Object.keys(response).length === 0 && response.constructor === Object) {
      setError(true);
      mySwal
        .fire({
          title: "No data found",
          html: "Suggested dates: <p>startDate=2021-01-01</p> & <p>endDate=2021-01-31</p>",
          icon: "error",
        })
        .then(() => {
          setShowDatesDropdown(true);
        });
      setChannelStats(response);
      setDefaultValue(options[3]);
      return;
    }
    // setShowDatesDropdown(false);
    setError(false);
    setChannelStats(response);
  }, []);

  useEffect(() => {
    getChannelStats(dates);
  }, []);

  const handleChange = (selectedValue, datepickerDate) => {
    let data = {};
    const { value } = selectedValue;
    switch (value) {
      case "last 7 days":
        data = {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().subtract(7, "d").format("YYYY-MM-DD"),
        };
        setDefaultValue(options[0]);
        setShowDatesDropdown(false);
        break;
      case "last 14 days":
        data = {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().subtract(14, "d").format("YYYY-MM-DD"),
        };
        setDefaultValue(options[1]);
        setShowDatesDropdown(false);
        break;

      case "last 30 days":
        data = {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().subtract(30, "d").format("YYYY-MM-DD"),
        };
        setDefaultValue(options[2]);
        setShowDatesDropdown(false);
        break;

      case "custom":
        data = {
          startDate: moment("2021-01-01").format("YYYY-MM-DD"),
          endDate: moment("2021-01-31").format("YYYY-MM-DD"),
        };
        setDefaultValue(options[3]);

        setShowDatesDropdown(true);
        break;

      case "startDate":
        data = {
          startDate: moment(datepickerDate).format("YYYY-MM-DD"),
          endDate: moment(datepickerDate).format("YYYY-MM-DD"),
        };
        break;

      case "endDate":
        data = {
          ...dates,
          endDate: moment(datepickerDate).format("YYYY-MM-DD"),
        };
        break;
      default:
        break;
    }

    setDates(data);
    if (data?.startDate && data?.endDate) getChannelStats(data);
  };

  console.log(dates);

  return (
    <>
      {/* <ThreeDots /> */}
      <Header data={channelStats?.metadata} />
      <Summary
        data={channelStats?.summary}
        date={dates}
        showDatesDropdown={showDatesDropdown}
        handleChange={handleChange}
        isError={error}
        defaultValue={defaultValue}
      />
      {!error && (
        <>
          <Revenue
            data={channelStats?.revenueDetails?.estimatedRevenueTrend}
            date={dates}
          />
          <Research
            data={channelStats?.reachAndEngagementDetails?.viewsTrend}
            date={dates}
          />
          <Audience
            data={
              channelStats?.audienceDetails
                ?.viewsSubscriberVsNonSubscribersTrend
            }
            date={dates}
          />
        </>
      )}
    </>
  );
};

export default App;
