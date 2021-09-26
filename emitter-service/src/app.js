require("dotenv").config();

const path = require("path");
const io = require("socket.io-client");

const { readFile } = require("./libs/read-file");
const { getData } = require("./generate-data");

const { MESSAGE } = require("./constants/app_constants");

const socket = io(process.env.EMITTER_URL);

// client-side
socket.on("connect", async () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  // console.log(socket.connected);
  if (socket.connected) {
    const data_path = path.resolve(path.dirname(__filename), "data/data.json");
    const data = readFile(data_path);
    let count = 0;
    while (true) {
      socket.emit("timeseries", getData(data));
      await new Promise((resolve) =>
        setTimeout(resolve, MESSAGE.COOLOFF_IN_SECONDS * 1000)
      );
      console.log(new Date());
      count++;
      if (count == 2) {
        break;
      }
    }
    console.log("BROKEN OUT");
  } else {
    // ...
  }
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});
