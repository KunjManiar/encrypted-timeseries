const Controller = require("../app/controllers/TimeseriesController");

module.exports = (io, socket) => {
  const addTimeseriesData = async function (payload) {
    socket.join("listener-client");
    await Controller.addTimeseriesData(payload);
  };

  const getSuccessFailure = async function (payload) {
    socket.join("frontend-client");
    const successFailureData = await Controller.getSuccessFailure();
    io.to("frontend-client").emit(
      "timeseries/success-failure",
      successFailureData
    );
    const past10TimestampData = await Controller.getPast10Timestamp();
    io.to("frontend-client").emit(
      "timeseries/past-10-timestamp",
      past10TimestampData
    );
    const userSuccessFailureData = await Controller.getUserSuccessFailure();
    io.to("frontend-client").emit(
      "timeseries/user-success-failure",
      userSuccessFailureData
    );
  };

  socket.on("encrypted-timeseries:add", addTimeseriesData);
  socket.on("timeseries/success-failure:get", getSuccessFailure);
};
