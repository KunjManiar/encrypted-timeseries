const CryptoJS = require("crypto-js");

const getSha256 = (str) => {
  return CryptoJS.SHA256(str);
};

const getStringifyObject = (object) => {
  return JSON.stringify(object);
};

const checkHash = (object) => {
  const key = object.secret_key;
  delete object.secret_key;
  const objString = getStringifyObject(object);
  const hashOfObject = getSha256(objString).toString();
  if (key == hashOfObject) {
    object["timestamp"] = new Date();
    // object["secret_key"] = key;
    return object;
  }
};

module.exports = {
  checkHash,
};
