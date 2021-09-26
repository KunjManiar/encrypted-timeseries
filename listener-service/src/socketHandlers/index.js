// const Controller = require("./app/controllers/TimeseriesController");
const timeseriesHandler = require("./timeseries");
const socketFunction = (io) => {
  io.on("connection", (socket) => {
    // console.log("a user is connected");
    timeseriesHandler(io, socket);
    // socket.on("timeseries", async (message) => {
    //   await Controller.addTimeseriesData(message);
    // });

    // socket.on("GET/success-failure", async () => {

    //   await Controller.getSuccessFailure()
    // })
  });
};

module.exports = socketFunction;
