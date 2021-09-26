require("dotenv").config();

const path = require("path");

const { readFile } = require("./libs/read-file");
const { getData } = require("./generate-data");

const io = require("socket.io-client");

const socket = io(process.env.EMITTER_URL);

// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // console.log(socket.connected);
  if (socket.connected) {
    const data_path = path.resolve(path.dirname(__filename), "data/data.json");
    const data = readFile(data_path);

    socket.emit("timeseries", getData(data));
  } else {
    // ...
  }
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});
