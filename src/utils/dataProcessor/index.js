const preProcessData = (data) => {
    let processedData = [];
    data.forEach((set) => {
      let trade_date = new Date(set[0]);
      let close = set[2];
      let open = set[1];
      let high = set[3];
      let low = set[4];
      let vol = set[5];
      
      let eachEntry = {
        ts_code: "000001.SH",
        trade_date,
        close,
        open,
        high,
        low,
        vol,
      };
      processedData.push(eachEntry);
    });
    return processedData;
  };

  export default preProcessData;