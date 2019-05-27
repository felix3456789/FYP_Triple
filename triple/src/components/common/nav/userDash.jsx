import React, { Component } from "react";
import DashBoardNav from "./DashBoardNav";
class UserDash extends Component {
  state = {};
  render() {
    return <DashBoardNav> {this.props.children} </DashBoardNav>;
  }
}

export default UserDash;
