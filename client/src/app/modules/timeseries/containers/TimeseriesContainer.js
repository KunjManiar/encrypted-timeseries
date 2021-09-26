import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PieChartComponent from "../../shared/components/Graph/PieChartComponent/PieChartComponent";
import Header from "../../shared/components/Header/Header";
import socket from "../../../utils/socket";
import Loader from "../../shared/components/loader/loader";

import * as successFailureActions from "../store/actions/SuccessFailureAction";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

const TimeseriesContainer = (props) => {
  //   return <h1>Hello World</h1>;
  const dispatch = useDispatch();
  const { successFailure } = useSelector((state) => state.successFailure);
  console.log(successFailure);
  //   console.log("here");
  useEffect(() => {
    socket.emit("timeseries/success-failure:get", "");
    socket.on("timeseries/success-failure", (data) => {
      console.log(data);
      dispatch(successFailureActions.updateSuccessFailure(data));
    });
  }, [socket]);

  return (
    <div>
      <Header />
      {!!successFailure && successFailure.data.length ? (
        <PieChartComponent
          width="100%"
          height={300}
          data={successFailure.data}
        />
      ) : (
        <Loader fullPage={false} />
      )}
    </div>
  );
};

export default TimeseriesContainer;
