import React, { Component } from "react";
import NavBar from "../components/common/nav/nav";
import "../css/style.css";
import "../css/tourDetailPage.css";

class TourDetailPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="marginBottom">
          <NavBar
            color="grey lighten-5 loginNav__textColor"
            textColor="loginNav--ul"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TourDetailPage;
