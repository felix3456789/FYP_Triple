import React, { Component } from "react";
import UserDash from "./../components/common/nav/userDash";
import UserCard from "../components/userDashboardCard/userDashboardCard";
import UserServices from "../services/userServices";

class UserDashBoard extends Component {
  state = {};
  getPurchase = async () => {
    const response = await UserServices.getPurchase();
    console.log(response);
  };
  componentDidMount() {
    this.getPurchase();
  }
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
