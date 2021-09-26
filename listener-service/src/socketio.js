const Controller = require("./app/controllers/timeseriesController");
const socketFunction = (io) => {
  io.on("connection", (socket) => {
    console.log("a user is connected");
    socket.on("timeseries", (arg) => {
      Controller.addTimeseriesData(arg);
    });
  });
};

module.exports = socketFunction;
