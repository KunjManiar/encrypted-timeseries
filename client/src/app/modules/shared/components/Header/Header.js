import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import * as searchActions from "../../../weather/store/actions/search";

import "./header.css";
const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <header className="header">
        <div
          className="header-left"
          onClick={() => {
            history.push("/");
            // dispatch(searchActions.clearSearchLocations({ searchInput: true }));
          }}
          style={{ color: "#000" }}
        >
          <span className="header-span">Encrypted Timeseries</span>
        </div>
        <div
          className="header-right"
          style={{
            display: !!props.title ? "flex" : "none",
            color: "#000",
          }}
        >
          <span className="header-span">
            Test
            {/* {props.title} ({props.location_type}) */}
          </span>
        </div>
      </header>
      <div style={{ marginBottom: 70 }}></div>
    </>
  );
};

export default Header;
