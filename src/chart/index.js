import { Stock } from "@ant-design/plots";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import preProcessData from "../utils/dataProcessor";
import getStartTime from "../utils/TimeFrame";

const selectOptions = [
  { value: "3y", label: "3 Years" },
  { value: "1y", label: "1 Year" },
  { value: "3m", label: "3 months" },
  { value: "1m", label: "1 month" },
  { value: "7d", label: "7 day" },
  { value: "3d", label: "3 day" },
  { value: "1d", label: "1 day" },
  { value: "6h", label: "6 hr" },
  { value: "1h", label: "1 hr" },
];

const CandleChart = () => {
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState([]);
  const [startTime, setStartTime] = useState(
    new Date().setHours(new Date().getHours() - 1)
  );

  const fetchApi = () => {
    const pathParams = "candles/trade:5m:tBTCUSD/hist";
    const currentTimeInMilliseconds = new Date().getTime();
    let queryParams = startTime
      ? `start=${startTime}&end=${currentTimeInMilliseconds}&limit=330`
      : `end=${currentTimeInMilliseconds}&limit=330`;

    fetch(`${pathParams}?${queryParams}`, { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setApiData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (apiData) {
      const processedData = preProcessData(apiData);
      setData([...processedData]);
    }
  }, [apiData]);

  useEffect(() => {
    if (startTime) {
      fetchApi();
    }
  }, [startTime]);

  const handleSelectChange = (event) => {
    setStartTime(getStartTime(event));
  };

  const config = {
    data,
    xField: "trade_date",
    yField: ["open", "close", "high", "low"],
  };

  return (
    <>
      <Stock {...config} />
      <Select
        defaultValue="1h"
        style={{ width: 120 }}
        options={selectOptions}
        onChange={(event) => handleSelectChange(event)}
      />
    </>
  );
};

export default CandleChart;
