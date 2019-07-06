import React, { Component } from "react";
import Nav from "../components/common/nav/nav";
import "../css/searchPage.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav color="white-text" />

        <div className="div--background">
          <span className="bg--text">
            <h1>Triple</h1>
            <h1>Trip is Simple</h1>
            <h3>為你尋找最適合嘅旅行團</h3>
          </span>
        </div>

        <h1>HI</h1>
      </React.Fragment>
    );
  }
}

export default Search;
