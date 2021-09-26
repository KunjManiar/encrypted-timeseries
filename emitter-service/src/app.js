require("dotenv").config();

const io = require("socket.io-client");

const socket = io(process.env.EMITTER_URL);

// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  console.log(socket.connected);
  if (socket.connected) {
    console.log("IN emit");
    socket.emit("hello", "world");
  } else {
    // ...
  }
});

console.log(socket.connected);

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

// module.exports = { socket };
