import { Stock } from "@ant-design/plots";
import React, { useEffect, useState } from "react";
import preProcessData from "../utils/dataProcessor";

const CandleChart = () => {
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = "https://api-pub.bitfinex.com/v2/";
    const pathParams = "candles/trade:5m:tBTCUSD/hist";
    const currentTimeInMilliseconds = new Date().getTime();
    const queryParams = `end=${currentTimeInMilliseconds}&limit=330`;

    fetch(`${baseUrl}/${pathParams}?${queryParams}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res, "From 15");
        setApiData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (apiData) {
      const processedData = preProcessData(apiData);
      setData([...processedData]);
    }
  }, [apiData]);
  const config = {
    data,
    xField: "trade_date",
    yField: ["open", "close", "high", "low"],
  };

  return <>
  <Stock {...config} />
  {/* <h1>3y</h1>  <h1>1y</h1>  <h1>6m</h1> */}
  </>;
};

export default CandleChart;
