const getStartTime = (timeframe) =>{
    let startTime = new Date();
    if(timeframe === '3y'){
      startTime.setFullYear(new Date().getFullYear() - 3);
    }else if(timeframe === '1y'){
      startTime.setFullYear(new Date().getFullYear() - 1);
    }else if(timeframe === '3m'){
      startTime.setMonth(startTime.getMonth() - 3);
    }else if(timeframe === '1m'){
      startTime.setMonth(startTime.getMonth() - 1);
    }else if(timeframe === '7d'){
      startTime.setDate(startTime.getDate() - 7);
    }else if(timeframe === '3d'){
      startTime.setDate(startTime.getDate() - 3);
    }else if(timeframe === '1d'){
      startTime.setDate(startTime.getDate() - 1);
    }else if(timeframe === '6h'){
      startTime.setHours(startTime.getHours() - 6);
    }else if(timeframe === '1h'){
      startTime.setHours(startTime.getHours() - 1);
    }
    let startTimeInMilliseconds = startTime.getTime();
return startTimeInMilliseconds;
  }

  export default getStartTime;