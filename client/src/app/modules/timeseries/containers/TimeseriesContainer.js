import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PieChartComponent from "../../shared/components/Graph/PieChart/PieChartComponent";
import Header from "../../shared/components/Header/Header";
import socket from "../../../utils/socket";
import Loader from "../../shared/components/loader/loader";

import * as successFailureActions from "../store/actions/SuccessFailureAction";
import AreaChartComponent from "../../shared/components/Graph/AreaChart/AreaChartComponent";
import LineChartComponent from "../../shared/components/Graph/LineChart/LineChartComponent";
import BarChartComponent from "../../shared/components/Graph/BarChart/BarChartComponent";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

const TimeseriesContainer = (props) => {
  const dispatch = useDispatch();
  const {
    successFailure,
    timestampSuccessFailures,
    userSuccessFailures,
    err,
    error,
  } = useSelector((state) => state.successFailure);
  console.log("In container");
  console.log(userSuccessFailures);
  //   console.log("here");
  useEffect(() => {
    socket.emit("timeseries/success-failure:get", "");
    socket.on("timeseries/success-failure", (data) => {
      //   console.log(data);
      dispatch(successFailureActions.updateSuccessFailure(data));
    });
    socket.on("timeseries/past-10-timestamp", (data) => {
      //   console.log(data);
      dispatch(successFailureActions.updateTimestampSuccessFailure(data));
    });
    socket.on("timeseries/user-success-failure", (data) => {
      //   console.log(data);
      dispatch(successFailureActions.updateUserSuccessFailure(data));
    });
  }, [socket]);

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%" }}>
          {!!successFailure && successFailure.data.length ? (
            <PieChartComponent
              width="70%"
              height={300}
              data={successFailure.data}
            />
          ) : (
            <Loader fullPage={false} />
          )}

          <h2>Success vs Failure</h2>
        </div>
        <div style={{ width: "70%" }}>
          {!!timestampSuccessFailures && timestampSuccessFailures.length ? (
            <LineChartComponent
              width="70%"
              height={400}
              data={timestampSuccessFailures}
              dataKey={"timestamp"}
              lineDetails={[
                {
                  type: "monotone",
                  dataKey: "successFailure.success",
                  stackId: 1,
                  stroke: "#00C07F",
                  fill: "#00C07F",
                  name: "success",
                },
                {
                  type: "monotone",
                  dataKey: "successFailure.failure",
                  stackId: 1,
                  stroke: "#FF6562",
                  fill: "#FF6562",
                  name: "failure",
                },
              ]}
            />
          ) : (
            <Loader fullPage={false} />
          )}

          <h2>Past timestamps </h2>
        </div>
      </div>
      <div>
        {!!userSuccessFailures && userSuccessFailures.length ? (
          <BarChartComponent
            width={1100}
            height={2500}
            data={userSuccessFailures}
            dataKey="name"
            dataKeyOnX={false}
            layout="vertical"
            xAxisType="number"
            yAxisType="category"
            barDetails={[
              {
                dataKey: "successFailure.success",
                stackId: "a",
                stroke: "#00C07F",
                fill: "#00C07F",
                name: "success",
              },
              {
                dataKey: "successFailure.failure",
                stackId: "a",
                stroke: "#FF6562",
                fill: "#FF6562",
                name: "failure",
              },
            ]}
          />
        ) : (
          <Loader fullPage={false} />
        )}
      </div>
    </div>
  );
};

export default TimeseriesContainer;
