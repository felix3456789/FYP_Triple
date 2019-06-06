import React, { Component } from "react";
import UserDash from "./../components/common/nav/userDash";

class UserDashBoard extends Component {
  state = {};
  render() {
    return (
      <UserDash>
        <div className="container">
          <span>this is test</span>
        </div>
      </UserDash>
    );
  }
}

export default UserDashBoard;
