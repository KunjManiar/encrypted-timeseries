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

const getSuccessFailure = async () => {
  try {
    const details = await TimeSeries.aggregate([
      {
        $group: {
          _id: null,
          success: {
            $sum: "$success",
          },
          failure: {
            $sum: "$failed",
          },
        },
      },
    ]);
    if (!details.length) {
      throw new Error("No data");
    }
    return {
      data: {
        success: details[0].success,
        failure: details[0].failure,
      },
      err: null,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getPast10Timestamp = async () => {
  try {
    const details = await TimeSeries.aggregate([
      {
        $group: {
          _id: "$timestamp",
          success: {
            $sum: "$success",
          },
          failure: {
            $sum: "$failed",
          },
        },
      },
      {
        $sort: {
          timestamp: -1,
        },
      },
      { $limit: 10 },
    ]);
    if (!details.length) {
      throw new Error("No data");
    }
    return {
      data: details,
      err: null,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserSuccessFailure = async () => {
  try {
    const details = await TimeSeries.aggregate([
      {
        $group: {
          _id: "$name",
          success: {
            $sum: "$success",
          },
          failure: {
            $sum: "$failed",
          },
        },
      },
    ]);
    if (!details.length) {
      throw new Error("No data");
    }
    return {
      data: details,
      err: null,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  addTimeseriesData,
  getSuccessFailure,
  getPast10Timestamp,
  getUserSuccessFailure,
};
