import React, { Component } from "react";
import moment from "moment";
import UserDash from "./../components/common/nav/userDash";
import UserCard from "../components/userDashboardCard/userDashboardCard";
import UserServices from "../services/userServices";

class UserDashBoard extends Component {
  state = {
    purchase: []
  };
  getPurchase = async () => {
    const response = await UserServices.getPurchase();
    let { purchase } = this.state;
    for (var i = 0; i < response.length; i++) {
      let temp = {
        title: "",
        depDate: "",
        totalNum: "",
        totalPrice: "",
        img: "",
        tourID: ""
      };
      temp.title = response[i].tourName;
      temp.depDate = moment(response[i].departureDate).format("YYYY-MM-DD");
      temp.totalNum = 0 + response[i].numOfAdult + response[i].numOfChild;
      temp.totalPrice = response[i].totalPrice;
      temp.img = response[i].image;
      temp.tourID = response[i].tourId;
      console.log(temp);
      purchase.push(temp);
    }
    this.setState({ purchase });
    console.log(response);
  };
  componentDidMount() {
    this.getPurchase();
  }
  render() {
    const { purchase } = this.state;
    return (
      <UserDash>
        <div className="container">
          <h2>我的旅行團</h2>
          {purchase.map(item => (
            <UserCard info={item} />
          ))}
        </div>
      </UserDash>
    );
  }
}

export default UserDashBoard;
