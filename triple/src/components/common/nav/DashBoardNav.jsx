import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavBar from "./nav";

class DashBoardNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <NavBar
          color="grey lighten-5 loginNav__textColor"
          textColor="loginNav--ul"
        />
        <div className="sidenav z-depth-1">
          <h1>sideNav</h1>
        </div>
        <div className="main">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default DashBoardNav;
