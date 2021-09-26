const { getDecryptedObject } = require("../libs/decryption");
const { checkHash } = require("../libs/validation");

const addTimeseriesData = (message) => {
  console.log("Add timeseries Data");
  const object = getDecryptedObject(message);
  const validObject = checkHash(object);
  if (!!validObject) {
    // Add to db
    console.log(validObject);
  }
};

module.exports = { addTimeseriesData };
