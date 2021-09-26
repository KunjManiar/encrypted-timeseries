import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";

// REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// REDUCERS
// import searcLocationReducer from './app/modules/weather/store/reducers/search';
import SuccessFailureReducer from "./app/modules/timeseries/store/reducers/SuccessFailureReducer";

const rootReducer = combineReducers({
  // searchLocation: searcLocationReducer,
  // locations: locationsReducer,
  // contacts: contactsReducer
  SuccessFailure: SuccessFailureReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
