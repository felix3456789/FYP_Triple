import React, { Component } from "react";
import AuthServices from "../services/authServices";
class Logout extends Component {
  state = {};
  componentDidMount() {
    AuthServices.logout();
    window.location = "/";
  }

  render() {
    return <span />;
  }
}

export default Logout;
