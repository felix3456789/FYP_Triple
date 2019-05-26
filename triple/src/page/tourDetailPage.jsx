import React, { Component } from "react";
import NavBar from "../components/common/nav/nav";
import "../css/style.css";

class TourDetailPage extends Component {
  state = {};
  render() {
    return (
      <NavBar
        color="grey lighten-5 loginNav__textColor"
        textColor="loginNav--ul"
      />
    );
  }
}

export default TourDetailPage;
