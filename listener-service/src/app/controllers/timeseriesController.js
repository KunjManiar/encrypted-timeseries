const { getDecryptedObject } = require("../libs/decryption");
const { checkHash } = require("../libs/validation");

const addTimeseriesData = (message) => {
  console.log("Add timeseries Data");
  const message_arr = message.split("|");
  let count = 0;
  for (message of message_arr) {
    count++;
    const object = getDecryptedObject(message);
    const validObject = checkHash(object);
    if (!!validObject) {
      // Add to db
      console.log(validObject);
    }
  }
  console.log(count);
};

module.exports = { addTimeseriesData };
