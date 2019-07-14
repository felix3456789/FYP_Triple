import React, { Component } from "react";
import UserDash from "./../components/common/nav/userDash";
import UserCard from "../components/userDashboardCard/userDashboardCard";
class UserDashBoard extends Component {
  state = {};
  render() {
    return (
      <UserDash>
        <div className="container">
          <h2>我的旅行團</h2>
          <UserCard />
        </div>
      </UserDash>
    );
  }
}

export default UserDashBoard;
