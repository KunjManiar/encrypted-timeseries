const socketFunction = (io) => {
  io.on("connection", (socket) => {
    //for a new user joining the room
    console.log("a user is connected");
    socket.on("hello", (arg) => {
      console.log();
      console.log(arg); // world
    });
  });
};

module.exports = socketFunction;
