const { MESSAGE } = require("./constants/app_constants");

const { getRandomInt, getRandomData } = require("./libs/random-data");
const {
  getObjectWithSecretKeyHash,
  getEncryptedString,
} = require("./libs/encryption");

const MIN_SIZE = MESSAGE.COUNT_OF_MESSAGE.MIN;
const MAX_SIZE = MESSAGE.COUNT_OF_MESSAGE.MAX;

const generateEncryptedString = (data) => {
  const object = getRandomData(data.names, data.cities);

  const hashObject = getObjectWithSecretKeyHash(object);
  return getEncryptedString(hashObject);
};

const getData = (data) => {
  let message = generateEncryptedString(data);
  for (let i = 0; i < getRandomInt(MAX_SIZE - MIN_SIZE) + MIN_SIZE - 1; i++) {
    message += `|${generateEncryptedString(data)}`;
  }
  return message;
};

module.exports = {
  getData,
};
