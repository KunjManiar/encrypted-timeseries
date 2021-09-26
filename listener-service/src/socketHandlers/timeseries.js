const Controller = require("../app/controllers/TimeseriesController");

module.exports = (io, socket) => {
  const addTimeseriesData = async function (payload) {
    socket.join("listener-client");
    await Controller.addTimeseriesData(payload);
  };

  const getSuccessFailure = async function (payload) {
    socket.join("frontend-client");
    const data = await Controller.getSuccessFailure();
    io.to("frontend-client").emit("timeseries/success-failure", data);
  };

  socket.on("encrypted-timeseries:add", addTimeseriesData);
  socket.on("timeseries/success-failure:get", getSuccessFailure);
};
