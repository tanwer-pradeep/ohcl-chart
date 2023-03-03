const preProcessData = (data) => {
  const processedData = [];
  data.forEach((set) => {
    const trade_date = new Date(set[0]);
    const close = set[2];
    const open = set[1];
    const high = set[3];
    const low = set[4];
    const vol = set[5];

    const eachEntry = {
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
