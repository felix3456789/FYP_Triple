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
            <span className="title--triple">Triple</span>
            <span className="title--slogan">Trip is simple!</span>
            <span className="title--chiSlogan">為你尋找最適合嘅旅行團</span>
          </span>
        </div>

        <div className="row">
          <div className="col s2"/>
          
        </div>

      </React.Fragment>
    );
  }
}

export default Search;
