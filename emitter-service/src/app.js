require("dotenv").config();

const path = require("path");

const { readFile } = require("./libs/read-file");
const { getRandomData } = require("./libs/random-data");
const {
  getObjectWithSecretKeyHash,
  getEncryptedString,
  getDecryptedObject,
} = require("./libs/encryption");

const io = require("socket.io-client");

const socket = io(process.env.EMITTER_URL);

// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // console.log(socket.connected);
  if (socket.connected) {
    const data_path = path.resolve(path.dirname(__filename), "data/data.json");
    const data = readFile(data_path);
    const object = getRandomData(data.names, data.cities);

    const hashObject = getObjectWithSecretKeyHash(object);
    const encryptedString = getEncryptedString(hashObject);

    socket.emit("timeseries", encryptedString);
  } else {
    // ...
  }
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});
