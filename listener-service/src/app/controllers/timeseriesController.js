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
      // console.log(validObject);
      // }
    }
    console.log(count);

    return await Service.addTimeseriesData(bulkWriteArray);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addTimeseriesData };
