const Service = require("../services/TimeseriesService");

const { getDecryptedObject } = require("../libs/decryption");
const { checkHash } = require("../libs/validation");

const addTimeseriesData = async (message) => {
  try {
    console.log("Add timeseries Data");
    const message_arr = message.split("|");
    let count = 0;
    const bulkWriteArray = [];
    for (message of message_arr) {
      count++;
      const object = getDecryptedObject(message);
      // const validObject = checkHash(object);
      bulkWriteArray.push(checkHash(object));
      // if (!!validObject) {
      // Add to db
      // console.log(validObject.updateOne.filter);
      // console.log(validObject.updateOne.update);
      // }
    }
    console.log(count);

    return await Service.addTimeseriesData(bulkWriteArray);
  } catch (err) {
    console.log(err);
  }
};

const getSuccessFailure = async () => {
  try {
    return await Service.getSuccessFailure();
  } catch (err) {
    console.log(err);
    return {
      data: null,
      err: err,
    };
  }
};

const getPast10Timestamp = async () => {
  try {
    return await Service.getPast10Timestamp();
  } catch (err) {
    console.log(err);
    return {
      data: null,
      err: err,
    };
  }
};

const getUserSuccessFailure = async () => {
  try {
    return await Service.getUserSuccessFailure();
  } catch (err) {
    console.log(err);
    return {
      data: null,
      err: err,
    };
  }
};

module.exports = {
  addTimeseriesData,
  getSuccessFailure,
  getPast10Timestamp,
  getUserSuccessFailure,
};
