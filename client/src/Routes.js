import React from "react";
import { Route, Switch } from "react-router-dom";

// import App from './App';
import TimeseriesContainer from "./app/modules/timeseries/containers/TimeseriesContainer";
// import LocationContainer from './app/modules/weather/containers/Location';
import NotFound from "./app/modules/timeseries/containers/NotFound";

const Routes = () => {
  return (
    // <Layout>
    <Switch>
      {/* <Route path="/" exact component={Login}/> */}
      {/* <Route path="/contact" exact component={ContactScreen}/> */}
      {/* <Route path="/loading" exact component={Loader}/> */}
      {/* <Route path="/" exact component={App} /> */}
      <Route path="/" exact component={TimeseriesContainer} />
      {/* <Route path="/:woeid" exact component={LocationContainer} /> */}
      <Route component={NotFound} />
    </Switch>
    // </Layout>
  );
};

export default Routes;
