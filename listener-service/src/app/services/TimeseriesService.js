const TimeSeries = require("../models/TimeSeriesModel");

const addTimeseriesData = async (bulkWriteMessageArray) => {
  try {
    const timeseries = await TimeSeries.bulkWrite(bulkWriteMessageArray);
    console.log(timeseries);
    return timeseries;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  addTimeseriesData,
};
